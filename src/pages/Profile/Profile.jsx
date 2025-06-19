// src/components/Profile.jsx
import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { updateUserProfile } from "@/lib/auth-service";
import { toast } from "react-hot-toast";
import { Edit, Save, X, Camera, Mail, Phone, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
const Profile = () => {
  const { user, profile, updateUser, refreshProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePicture: null,
  });
  const [previewImage, setPreviewImage] = useState("");
  const fileInputRef = useRef(null);

  // Initialize form data when user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phoneNumber: user.phoneNumber || "",
        profilePicture: null,
      });
      if (user.profilePicture) {
        setPreviewImage(
          `${import.meta.env.VITE_ASSETS_API_URL}${user.profilePicture}`
        );
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

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      setImageLoading(true);
      setFormData((prev) => ({
        ...prev,
        profilePicture: file,
      }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setImageLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = async () => {
    try {
      setIsLoading(true);
      const updateData = new FormData();
      updateData.append("first_name", formData.firstName);
      updateData.append("last_name", formData.lastName);
      updateData.append("phone_number", formData.phoneNumber);
      if (formData.profilePicture) {
        updateData.append("profile_picture", formData.profilePicture);
      }

      // Ensure apiClient doesn't override Content-Type for FormData
      const response = await updateUserProfile(updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      updateUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        profilePicture:
          response.user_profile?.profile_picture || user.profilePicture,
      });
      await refreshProfile();
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      toast.error(error.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      phoneNumber: user.phoneNumber || "",
      profilePicture: null,
    });
    if (user.profilePicture) {
      setPreviewImage(
        `${import.meta.env.VITE_ASSETS_API_URL}${user.profilePicture}`
      );

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

  if (!user) {
    return <div className="flex justify-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle>My Profile</CardTitle>
          <CardDescription>Manage your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <Avatar className="w-32 h-32">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt={`${formData.firstName} ${formData.lastName}`}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <AvatarFallback>
                    {`${formData.firstName[0]}${formData.lastName[0]}` || "U"}
                  </AvatarFallback>
                )}
              </Avatar>
              {isEditing && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute bottom-0 right-0 bg-white"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={imageLoading}
                >
                  {imageLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Camera className="h-4 w-4" />
                  )}
                </Button>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                className="hidden"
              />
            </div>

            <div className="space-y-4 w-full">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  value={user.email}
                  disabled
                  icon={<Mail className="h-4 w-4" />}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  icon={<Phone className="h-4 w-4" />}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Member since: <strong>{formatDate(user.joinedDate)}</strong>
                  </p>
                  <p>
                    Account ID: <strong>#{user.id || "N/A"}</strong>
                  </p>
                  <p>
                    Status:{" "}
                    <strong
                      className={
                        profile?.isActive ? "text-green-500" : "text-red-500"
                      }
                    >
                      {profile?.isActive ? "Active" : "Inactive"}
                    </strong>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> Subscription Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>
                    Current Plan:{" "}
                    <strong>{profile?.plan || "Free Plan"}</strong>
                  </p>
                  <p>
                    Status:{" "}
                    <strong
                      className={
                        profile?.status === "premium"
                          ? "text-green-500"
                          : "text-gray-500"
                      }
                    >
                      {profile?.status || "Free"}
                    </strong>
                  </p>
                  {profile?.endDate && (
                    <p>
                      Expires: <strong>{formatDate(profile.endDate)}</strong>
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} variant="outline">
              <Edit className="h-4 w-4 mr-2" /> Edit Profile
            </Button>
          ) : (
            <>
              <Button onClick={handleSaveChanges} disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                Save
              </Button>
              <Button onClick={handleCancelEdit} variant="outline">
                <X className="h-4 w-4 mr-2" /> Cancel
              </Button>
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Profile;
