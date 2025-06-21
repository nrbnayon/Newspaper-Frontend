import { useState, useRef, useEffect } from "react";
import {
  Edit,
  X,
  Camera,
  Save,
  Mail,
  Phone,
  Calendar,
  User,
  Crown,
  Shield,
  Loader2,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { updateUserProfile } from "@/lib/auth-service";
import { toast } from "react-hot-toast";

// Input field component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon: Icon,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-0 ${
            disabled
              ? "border-gray-200 bg-gray-50 cursor-not-allowed"
              : "border-gray-200 focus:border-blue-500 hover:border-gray-300"
          }`}
        />
      </div>
    </div>
  );
};

// Profile picture component
const ProfilePicture = ({ src, alt, onImageChange, isEditing, isLoading }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    if (isEditing) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="relative group">
      <div
        className={`relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg ${
          isEditing ? "cursor-pointer" : ""
        }`}
        onClick={handleImageClick}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            <span className="text-white text-2xl font-bold">
              {alt?.[0] || "U"}
            </span>
          </div>
        )}
        {isEditing && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {isLoading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            ) : (
              <Camera className="text-white" size={24} />
            )}
          </div>
        )}
      </div>

      {isEditing && (
        <button
          onClick={handleImageClick}
          className="absolute -bottom-2 -right-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg transition-all duration-200"
        >
          <Upload size={16} />
        </button>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="hidden"
      />
    </div>
  );
};
// Main Profile component
const Profile = () => {
  const { user, profile, refreshProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    profile_picture: null,
  });
  const [previewImage, setPreviewImage] = useState("");
  const [originalFormData, setOriginalFormData] = useState({});

  // Initialize form data when user data is available
  useEffect(() => {
    if (user) {
      const initialData = {
        first_name: user.firstName || "",
        last_name: user.lastName || "",
        phone_number: user.phoneNumber || "",
        profile_picture: null,
      };

      setFormData(initialData);
      setOriginalFormData(initialData);

      // Set preview image
      if (user.profilePicture) {
        const imageUrl = user.profilePicture.startsWith("http")
          ? user.profilePicture
          : `${import.meta.env.VITE_ASSETS_API_URL}${user.profilePicture}`;
        setPreviewImage(imageUrl);
      } else {
        setPreviewImage("");
      }
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        event.target.value = ""; // Clear the input
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        event.target.value = ""; // Clear the input
        return;
      }

      setImageLoading(true);

      // Set the actual file object
      setFormData((prev) => ({
        ...prev,
        profile_picture: file, // This should be the File object
      }));

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setImageLoading(false);
      };
      reader.onerror = () => {
        setImageLoading(false);
        toast.error("Failed to read image file");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    try {
      setIsLoading(true);

      // Create FormData properly
      const updateData = new FormData();

      // Only append non-empty values
      if (formData.first_name?.trim()) {
        updateData.append("first_name", formData.first_name.trim());
      }
      if (formData.last_name?.trim()) {
        updateData.append("last_name", formData.last_name.trim());
      }
      if (formData.phone_number?.trim()) {
        updateData.append("phone_number", formData.phone_number.trim());
      }

      // Handle profile picture - only append if a new file is selected
      if (
        formData.profile_picture &&
        formData.profile_picture instanceof File
      ) {
        updateData.append("profile_picture", formData.profile_picture);
      }
      const response = await updateUserProfile(updateData);
      await refreshProfile();
      // Reset form state
      setOriginalFormData({
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        profile_picture: null,
      });

      setIsEditing(false);
      toast.success("Profile updated successfully!", {
        icon: "✅",
        duration: 3000,
      });
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData(originalFormData);
    if (user?.profilePicture) {
      const imageUrl = user.profilePicture.startsWith("http")
        ? user.profilePicture
        : `${import.meta.env.VITE_ASSETS_API_URL}${user.profilePicture}`;
      setPreviewImage(imageUrl);
    } else {
      setPreviewImage("");
    }
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getSubscriptionBadge = () => {
    if (!profile)
      return { text: "Free", color: "bg-gray-200 text-gray-700", icon: User };

    if (profile.status === "premium") {
      return {
        text: "Premium",
        color: "bg-yellow-400 text-yellow-900",
        icon: Crown,
      };
    }

    return { text: "Free", color: "bg-gray-200 text-gray-700", icon: User };
  };

  const subscriptionBadge = getSubscriptionBadge();
  const BadgeIcon = subscriptionBadge.icon;

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">
            Manage your personal information and preferences
          </p>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <ProfilePicture
                src={previewImage}
                alt={`${formData.first_name} ${formData.last_name}`}
                onImageChange={handleImageSelect}
                isEditing={isEditing}
                isLoading={imageLoading}
              />

              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {formData.first_name} {formData.last_name}
                </h2>
                <p className="text-blue-100 mb-2">{user.email}</p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${subscriptionBadge.color}`}
                  >
                    {subscriptionBadge.text === "Premium"
                      ? "👑 Premium"
                      : "👤 Free"}
                  </span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">
                    {user.role || "User"}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2  text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                  >
                    <Edit size={18} />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSaveChanges}
                      disabled={isLoading}
                      className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Save size={18} />
                      )}
                      Save
                    </Button>
                    <Button
                      onClick={handleCancelEdit}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                    >
                      <X size={18} />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                icon={User}
                placeholder="Enter your first name"
                disabled={!isEditing}
              />

              <InputField
                label="Last Name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                icon={User}
                placeholder="Enter your last name"
                disabled={!isEditing}
              />

              <InputField
                label="Email Address"
                name="email"
                value={user.email}
                onChange={() => {}}
                type="email"
                icon={Mail}
                placeholder="Enter your email"
                disabled={true}
              />

              <InputField
                label="Phone Number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleInputChange}
                type="tel"
                icon={Phone}
                placeholder="Enter your phone number"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="text-blue-600" size={20} />
              Account Information
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Member since:</span>
                <span className="font-medium">
                  {formatDate(user.joinedDate)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account ID:</span>
                <span className="font-medium">#{user.id || "N/A"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`font-medium ${
                    profile?.isActive ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {profile?.isActive ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="text-green-600" size={20} />
              Subscription Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Plan:</span>
                <span className="font-medium">
                  {profile?.plan || "Free Plan"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`font-medium ${
                    profile?.status === "premium"
                      ? "text-green-500"
                      : "text-gray-500"
                  }`}
                >
                  {profile?.status || "Free"}
                </span>
              </div>
              {profile?.endDate && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Expires:</span>
                  <span className="font-medium">
                    {formatDate(profile.endDate)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
