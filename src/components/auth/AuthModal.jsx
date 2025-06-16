// src\components\auth\AuthModal.jsx
import apiClient from "./../../lib/axios-service";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import toast from "react-hot-toast";
import { Eye, EyeOff, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Modal, ModalContent } from "@/components/ui/modal";
import SocialButton from "@/components/auth/SocialButton";
import { VerifyOTPModal } from "@/components/auth/VerifyOTPModal";
import { ResetPasswordModal } from "@/components/auth/ResetPasswordModal";
import { SuccessModal } from "@/components/auth/SuccessModal";
import { cn } from "@/lib/utils";

export default function AuthModal({ isOpen, onClose, initialMode = "signup" }) {
  const [isSignIn, setIsSignIn] = useState(initialMode === "signin");
  const [showPassword, setShowPassword] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [otpType, setOtpType] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Main form for signup, signin, and forgot password
  const form = useForm({
    mode: "onChange", // Add this to validate on change
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
      rememberMe: false,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  // Update mode when initialMode prop changes
  useEffect(() => {
    setIsSignIn(initialMode === "signin");
  }, [initialMode]);

  // Add debugging for form state
  useEffect(() => {
    console.log("Form errors:", errors);
    console.log("Form is valid:", isValid);
  }, [errors, isValid]);

  // Handle main form submission
  const onSubmit = async (data) => {
    if (isSignIn) {
      const resLogin = await apiClient.post("/auth/login/", data);

      if (resLogin.success) {
        console.log("Login data res::", resLogin.data);
        toast.success("Login Ok");
      }
    } else {
      // const res = await apiClient.post("/auth/register/", {
      //   email: "nrbnayon@gmail.com",
      //   password: "Test@123",
      //   role: "user",
      //   first_name: "Test",
      //   last_name: "User",
      // });

      const resOtp = await apiClient.post("/auth/otp/create/", {
        email: data.email,
      });
    }

    console.log("Login response data:::", res, resOtp);

    console.log("Form submitted with data:", data);
    console.log(
      "Current mode - isSignIn:",
      isSignIn,
      "isForgotPassword:",
      isForgotPassword
    );

    setIsLoading(true);

    try {
      if (isForgotPassword) {
        console.log("Initiating forgot password for:", data.email);
        setUserEmail(data.email);
        setOtpType("forgot-password");
        setShowOTPModal(true);
      } else if (!isSignIn) {
        // Signup
        console.log("Initiating signup with:", data);
        setUserEmail(data.email);
        setOtpType("signup");
        setShowOTPModal(true);
      } else {
        // Signin
        console.log("Logging in user:", data);
        toast.success("Successfully signed in!");
        onClose();
        form.reset();
      }
    } catch (error) {
      console.error("Error in form submission:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle form submission errors
  const onError = (errors) => {
    console.log("Form validation errors:", errors);
    toast.error("Please fix the form errors before submitting.");
  };

  // Handle OTP verification success
  const handleOTPVerified = () => {
    setShowOTPModal(false);

    if (otpType === "signup") {
      setShowSuccessModal(true);
    } else if (otpType === "forgot-password") {
      setShowResetPasswordModal(true);
    }
  };

  // Handle password change success
  const handlePasswordChanged = () => {
    setShowResetPasswordModal(false);
    setShowSuccessModal(true);
  };

  // Handle social login
  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    setShowSuccessModal(true);
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setIsForgotPassword(false);
    form.reset();
  };

  const showForgotPassword = () => {
    setIsForgotPassword(true);
    form.reset();
  };

  const backToSignIn = () => {
    setIsForgotPassword(false);
    form.reset();
  };

  const handleClose = () => {
    onClose();
    form.reset();
    setShowPassword(false);
    setIsForgotPassword(false);
    setShowOTPModal(false);
    setShowResetPasswordModal(false);
    setShowSuccessModal(false);
    setOtpType("");
    setUserEmail("");
    setIsLoading(false);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    handleClose();
  };

  const handleOTPModalClose = () => {
    setShowOTPModal(false);
  };

  const handleResetPasswordModalClose = () => {
    setShowResetPasswordModal(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalContent onClose={handleClose} className={cn("max-w-xl")}>
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">
                You have to Sign Up or Sign In
              </h2>
              <p className="mb-4 text-2xl font-bold">for view more News</p>
            </div>

            {/* Form Container */}
            <div className="bg-[#FCFCFF] rounded-lg p-6 text-black">
              <h3 className="text-xl font-bold text-center mb-1">
                {isForgotPassword
                  ? "Forgot Password"
                  : isSignIn
                  ? "Sign In Account"
                  : "Sign Up Account"}
              </h3>

              {/* Toggle text */}
              <p className="text-center mb-6 text-sm text-gray-600">
                {isForgotPassword ? (
                  <>
                    Remember your password?{" "}
                    <button
                      type="button"
                      onClick={backToSignIn}
                      className="text-[#00254a] cursor-pointer font-medium underline"
                    >
                      Back to Sign In
                    </button>
                  </>
                ) : (
                  <>
                    {isSignIn
                      ? "Don't have an Account? "
                      : "Already have an Account? "}
                    <button
                      type="button"
                      onClick={toggleMode}
                      className="text-[#00254a] cursor-pointer font-medium underline"
                    >
                      {isSignIn ? "Sign Up Free" : "Sign In"}
                    </button>
                  </>
                )}
              </p>

              {/* Main Form */}
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                {!isSignIn && !isForgotPassword && (
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-1">
                      <Label
                        htmlFor="firstName"
                        className="text-[#262626] text-sm"
                      >
                        First Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="firstName"
                          placeholder="First name"
                          className="pr-10 border-[#c7c7c7] bg-white"
                          {...form.register("firstName", {
                            required:
                              !isSignIn && !isForgotPassword
                                ? "First name is required"
                                : false,
                          })}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]">
                          <User size={16} />
                        </div>
                      </div>
                      {errors.firstName && (
                        <p className="text-red-500 text-xs">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <Label
                        htmlFor="lastName"
                        className="text-[#262626] text-sm"
                      >
                        Last Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          className="pr-10 border-[#c7c7c7] bg-white"
                          {...form.register("lastName", {
                            required:
                              !isSignIn && !isForgotPassword
                                ? "Last name is required"
                                : false,
                          })}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]">
                          <User size={16} />
                        </div>
                      </div>
                      {errors.lastName && (
                        <p className="text-red-500 text-xs">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div className="space-y-1 mb-4">
                  <Label htmlFor="email" className="text-[#262626] text-sm">
                    E-mail or Phone
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your mail or phone number"
                    className="border-[#c7c7c7] bg-white"
                    {...form.register("email", {
                      required: "Email or phone is required",
                      pattern: {
                        value:
                          /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$|^[0-9]{10}$/,
                        message: "Please enter a valid email or phone number",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {!isForgotPassword && (
                  <div className="space-y-1 mb-4">
                    <div className="flex justify-between items-center">
                      <Label
                        htmlFor="password"
                        className="text-[#262626] text-sm"
                      >
                        Password
                      </Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your Password"
                        className="pr-10 border-[#c7c7c7] bg-white"
                        {...form.register("password", {
                          required: "Password is required",
                          minLength: {
                            value: isSignIn ? 1 : 8,
                            message: isSignIn
                              ? "Password is required"
                              : "Password must be at least 8 characters",
                          },
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={16} />
                        ) : (
                          <Eye size={16} />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-xs">
                        {errors.password.message}
                      </p>
                    )}
                    {isSignIn && (
                      <div className="flex justify-between items-center mt-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Controller
                            control={control}
                            name="rememberMe"
                            render={({ field }) => (
                              <Checkbox
                                id="rememberMe"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="h-4 w-4 border-2 border-gray-400 data-[state=checked]:bg-[#00254a] data-[state=checked]:border-[#00254a]"
                              />
                            )}
                          />
                          <Label
                            htmlFor="rememberMe"
                            className="text-sm text-gray-600 cursor-pointer"
                          >
                            Remember for 30 Days
                          </Label>
                        </div>

                        <button
                          type="button"
                          onClick={showForgotPassword}
                          className="text-[#00254a] text-sm cursor-pointer font-medium underline hover:text-[#001a38]"
                        >
                          Forgot Password?
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {!isSignIn && !isForgotPassword && (
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <Controller
                        control={control}
                        name="terms"
                        rules={{
                          required:
                            "You must agree to the terms and conditions",
                        }}
                        render={({ field }) => (
                          <Checkbox
                            id="terms"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="h-4 w-4 border-2 border-gray-400 data-[state=checked]:bg-[#00254a] data-[state=checked]:border-[#00254a]"
                          />
                        )}
                      />
                      <Label
                        htmlFor="terms"
                        className="text-sm text-[#262626] cursor-pointer leading-relaxed"
                      >
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className="text-[#00254a] underline hover:text-[#001a38]"
                        >
                          Terms & Condition
                        </a>
                      </Label>
                    </div>
                    {errors.terms && (
                      <p className="text-red-500 text-xs mt-2">
                        {errors.terms.message}
                      </p>
                    )}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full cursor-pointer bg-[#00254a] text-white py-3 rounded font-medium mb-6 hover:bg-[#001a38] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Loading...
                    </span>
                  ) : (
                    <>
                      {isForgotPassword
                        ? "Send Reset Link"
                        : isSignIn
                        ? "Sign In"
                        : "Sign Up"}
                    </>
                  )}
                </Button>
              </form>

              {/* Social Buttons */}
              {!isForgotPassword && (
                <>
                  <div className="text-center mb-4">
                    <p className="text-[#5a5a5a] text-sm">
                      Or {isSignIn ? "Sign In" : "Sign Up"} with
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <SocialButton
                      provider="google"
                      onClick={() => handleSocialLogin("google")}
                    />
                    <SocialButton
                      provider="facebook"
                      onClick={() => handleSocialLogin("facebook")}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-[#5a5a5a] text-sm">
                      {isSignIn
                        ? "Don't have an account? "
                        : "Already have an account? "}
                      <button
                        type="button"
                        onClick={toggleMode}
                        className="text-[#00254a] cursor-pointer font-medium underline"
                      >
                        {isSignIn ? "Sign Up" : "Sign In"}
                      </button>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </ModalContent>
      </Modal>

      {/* OTP Modal */}
      <VerifyOTPModal
        isOpen={showOTPModal}
        onClose={handleOTPModalClose}
        email={userEmail}
        type={otpType}
        onVerified={handleOTPVerified}
      />

      {/* Reset Password Modal */}
      <ResetPasswordModal
        isOpen={showResetPasswordModal}
        onClose={handleResetPasswordModalClose}
        email={userEmail}
        onPasswordChanged={handlePasswordChanged}
      />

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal onClose={handleSuccessModalClose} type={otpType} />
      )}
    </>
  );
}
// src\components\auth\AuthModal.jsx
// import { useState, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { Eye, EyeOff, User } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Modal, ModalContent } from "@/components/ui/modal";
// import { registerUser, loginUser, sendForgotPasswordOTP, socialLogin } from "@/lib/auth-service";
// import SocialButton from "@/components/auth/SocialButton";
// import { SuccessModal } from "@/components/auth/SuccessModal";
// import { VerifyOTPModal } from "@/components/auth/VerifyOTPModal";
// import { ChangePasswordModal } from "@/components/auth/ChangePasswordModal";
// import { cn } from "@/lib/utils";

// export default function AuthModal({ isOpen, onClose, initialMode = "signup" }) {
//   const [isSignIn, setIsSignIn] = useState(initialMode === "signin");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isForgotPassword, setIsForgotPassword] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showOTPModal, setShowOTPModal] = useState(false);
//   const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
//   const [userEmail, setUserEmail] = useState("");
//   const [otpType, setOtpType] = useState(""); // 'signup', 'forgot-password'

//   const {
//     register,
//     control,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     // getValues,
//   } = useForm({
//     defaultValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       terms: false,
//     },
//   });

//   // Update mode when initialMode prop changes
//   useEffect(() => {
//     setIsSignIn(initialMode === "signin");
//   }, [initialMode]);

//   const mutation = useMutation({
//     mutationFn: (data) => (isSignIn ? loginUser(data) : registerUser(data)),
//     onSuccess: (response, variables) => {
//       if (isSignIn) {
//         console.log("Sign In Success:", {
//           action: "signin",
//           email: variables.email,
//           timestamp: new Date().toISOString(),
//           response: response
//         });
//         toast.success("Successfully signed in!");
//         onClose();
//         reset();
//       } else {
//         console.log("Sign Up Initiated:", {
//           action: "signup",
//           email: variables.email,
//           firstName: variables.firstName,
//           lastName: variables.lastName,
//           timestamp: new Date().toISOString(),
//         });
//         // Store email and show OTP modal for signup
//         setUserEmail(variables.email);
//         setOtpType("signup");
//         setShowOTPModal(true);
//         reset();
//       }
//     },
//     onError: (error, variables) => {
//       console.error("Authentication Error:", {
//         action: isSignIn ? "signin" : "signup",
//         email: variables.email,
//         error: error.message,
//         timestamp: new Date().toISOString(),
//       });
//       toast.error(error.message || "An error occurred. Please try again.");
//     },
//   });

//   const forgotPasswordMutation = useMutation({
//     mutationFn: (data) => sendForgotPasswordOTP(data),
//     onSuccess: (response, variables) => {
//       console.log("Forgot Password OTP Sent:", {
//         action: "forgot-password-otp-sent",
//         email: variables.email,
//         timestamp: new Date().toISOString(),
//       });
//       toast.success("Password reset OTP sent to your email!");
//       setUserEmail(variables.email);
//       setOtpType("forgot-password");
//       setShowOTPModal(true);
//       setIsForgotPassword(false);
//       reset();
//     },
//     onError: (error, variables) => {
//       console.error("Forgot Password Error:", {
//         action: "forgot-password",
//         email: variables.email,
//         error: error.message,
//         timestamp: new Date().toISOString(),
//       });
//       toast.error(
//         error.message || "Failed to send reset OTP. Please try again."
//       );
//     },
//   });

//   const socialLoginMutation = useMutation({
//     mutationFn: (provider) => socialLogin(provider),
//     onSuccess: (response, provider) => {
//       console.log("Social Login Success:", {
//         action: "social-login",
//         provider: provider,
//         timestamp: new Date().toISOString(),
//         response: response
//       });
//       toast.success(`Successfully signed in with ${provider}!`);
//       setShowSuccessModal(true);
//     },
//     onError: (error, provider) => {
//       console.error("Social Login Error:", {
//         action: "social-login",
//         provider: provider,
//         error: error.message,
//         timestamp: new Date().toISOString(),
//       });
//       toast.error(error.message || `Failed to sign in with ${provider}. Please try again.`);
//     },
//   });

//   const onSubmit = (data) => {
//     if (isForgotPassword) {
//       forgotPasswordMutation.mutate({ email: data.email });
//     } else {
//       mutation.mutate(data);
//     }
//   };

//   const handleSocialLogin = (provider) => {
//     console.log("Social Login Initiated:", {
//       action: "social-login-initiated",
//       provider: provider,
//       timestamp: new Date().toISOString(),
//     });
//     socialLoginMutation.mutate(provider);
//   };

//   const handleOTPVerified = () => {
//     console.log("OTP Verified:", {
//       action: "otp-verified",
//       email: userEmail,
//       type: otpType,
//       timestamp: new Date().toISOString(),
//     });

//     setShowOTPModal(false);

//     if (otpType === "signup") {
//       setShowSuccessModal(true);
//     } else if (otpType === "forgot-password") {
//       setShowChangePasswordModal(true);
//     }
//   };

//   const handlePasswordChanged = () => {
//     console.log("Password Changed Successfully:", {
//       action: "password-changed",
//       email: userEmail,
//       timestamp: new Date().toISOString(),
//     });

//     setShowChangePasswordModal(false);
//     toast.success("Password changed successfully!");
//     onClose();
//   };

//   const toggleMode = () => {
//     setIsSignIn(!isSignIn);
//     setIsForgotPassword(false);
//     reset();
//   };

//   const showForgotPassword = () => {
//     setIsForgotPassword(true);
//     reset();
//   };

//   const backToSignIn = () => {
//     setIsForgotPassword(false);
//     reset();
//   };

//   const handleClose = () => {
//     onClose();
//     reset();
//     setShowPassword(false);
//     setIsForgotPassword(false);
//     setShowOTPModal(false);
//     setShowChangePasswordModal(false);
//     setShowSuccessModal(false);
//   };

//   const handleSuccessModalClose = () => {
//     setShowSuccessModal(false);
//     onClose();
//   };

//   const handleOTPModalClose = () => {
//     setShowOTPModal(false);
//     setOtpType("");
//     setUserEmail("");
//   };

//   const handleChangePasswordModalClose = () => {
//     setShowChangePasswordModal(false);
//     setUserEmail("");
//   };

//   // Show modals in order of priority
//   if (showSuccessModal) {
//     return <SuccessModal onClose={handleSuccessModalClose} />;
//   }

//   if (showChangePasswordModal) {
//     return (
//       <ChangePasswordModal
//         isOpen={showChangePasswordModal}
//         onClose={handleChangePasswordModalClose}
//         email={userEmail}
//         onPasswordChanged={handlePasswordChanged}
//       />
//     );
//   }

//   if (showOTPModal) {
//     return (
//       <VerifyOTPModal
//         isOpen={showOTPModal}
//         onClose={handleOTPModalClose}
//         email={userEmail}
//         type={otpType}
//         onVerified={handleOTPVerified}
//       />
//     );
//   }

//   return (
//     <Modal isOpen={isOpen} onClose={handleClose}>
//       <ModalContent onClose={handleClose} className={cn("max-w-xl")}>
//         <div className="p-8">
//           {/* Header */}
//           <div className="text-center mb-6">
//             <h2 className="text-2xl font-bold">
//               You have to Sign Up or Sign In
//             </h2>
//             <p className="mb-4 text-2xl font-bold">for view more News</p>
//           </div>

//           {/* Form */}
//           <div className="bg-[#FCFCFF] rounded-lg p-6 text-black">
//             <h3 className="text-xl font-bold text-center mb-1">
//               {isForgotPassword
//                 ? "Forgot Password"
//                 : isSignIn
//                 ? "Sign In Account"
//                 : "Sign Up Account"}
//             </h3>
//             <p className="text-center mb-6 text-sm text-gray-600">
//               {isForgotPassword ? (
//                 <>
//                   Remember your password?{" "}
//                   <button
//                     type="button"
//                     onClick={backToSignIn}
//                     className="text-[#00254a] cursor-pointer font-medium underline"
//                   >
//                     Back to Sign In
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   {isSignIn
//                     ? "Don't have an Account? "
//                     : "Already have an Account? "}
//                   <button
//                     type="button"
//                     onClick={toggleMode}
//                     className="text-[#00254a] cursor-pointer font-medium underline"
//                   >
//                     {isSignIn ? "Sign Up Free" : "Sign In"}
//                   </button>
//                 </>
//               )}
//             </p>

//             {isForgotPassword ? (
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="space-y-1 mb-6">
//                   <Label htmlFor="email" className="text-[#262626] text-sm">
//                     E-mail
//                   </Label>
//                   <Input
//                     id="email"
//                     placeholder="Enter your email address"
//                     className="border-[#c7c7c7] bg-white"
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value:
//                           /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$/,
//                         message: "Please enter a valid email address",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full cursor-pointer bg-[#00254a] text-white py-3 rounded font-medium mb-6 hover:bg-[#001a38]"
//                   disabled={forgotPasswordMutation.isPending}
//                 >
//                   {forgotPasswordMutation.isPending ? "Sending..." : "Send OTP"}
//                 </Button>
//               </form>
//             ) : (
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {!isSignIn && (
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div className="space-y-1">
//                       <Label
//                         htmlFor="firstName"
//                         className="text-[#262626] text-sm"
//                       >
//                         First Name
//                       </Label>
//                       <div className="relative">
//                         <Input
//                           id="firstName"
//                           placeholder="First name"
//                           className="pr-10 border-[#c7c7c7] bg-white"
//                           {...register("firstName", {
//                             required: !isSignIn
//                               ? "First name is required"
//                               : false,
//                           })}
//                         />
//                         <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]">
//                           <User size={16} />
//                         </div>
//                       </div>
//                       {errors.firstName && (
//                         <p className="text-red-500 text-xs">
//                           {errors.firstName.message}
//                         </p>
//                       )}
//                     </div>
//                     <div className="space-y-1">
//                       <Label
//                         htmlFor="lastName"
//                         className="text-[#262626] text-sm"
//                       >
//                         Last Name
//                       </Label>
//                       <div className="relative">
//                         <Input
//                           id="lastName"
//                           placeholder="Last name"
//                           className="pr-10 border-[#c7c7c7] bg-white"
//                           {...register("lastName", {
//                             required: !isSignIn
//                               ? "Last name is required"
//                               : false,
//                           })}
//                         />
//                         <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]">
//                           <User size={16} />
//                         </div>
//                       </div>
//                       {errors.lastName && (
//                         <p className="text-red-500 text-xs">
//                           {errors.lastName.message}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 )}

//                 <div className="space-y-1 mb-4">
//                   <Label htmlFor="email" className="text-[#262626] text-sm">
//                     E-mail or Phone
//                   </Label>
//                   <Input
//                     id="email"
//                     placeholder="Enter your mail or phone number"
//                     className="border-[#c7c7c7] bg-white"
//                     {...register("email", {
//                       required: "Email or phone is required",
//                       pattern: {
//                         value:
//                           /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$|^[0-9]{10}$/,
//                         message: "Please enter a valid email or phone number",
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-xs">
//                       {errors.email.message}
//                     </p>
//                   )}
//                 </div>

//                 <div className="space-y-1 mb-4">
//                   <div className="flex justify-between items-center">
//                     <Label
//                       htmlFor="password"
//                       className="text-[#262626] text-sm"
//                     >
//                       Password
//                     </Label>
//                     {isSignIn && (
//                       <button
//                         type="button"
//                         onClick={showForgotPassword}
//                         className="text-[#00254a] text-xs cursor-pointer font-medium underline"
//                       >
//                         Forgot Password?
//                       </button>
//                     )}
//                   </div>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your Password"
//                       className="pr-10 border-[#c7c7c7] bg-white"
//                       {...register("password", {
//                         required: "Password is required",
//                         minLength: {
//                           value: isSignIn ? 1 : 8,
//                           message: isSignIn
//                             ? "Password is required"
//                             : "Password must be at least 8 characters",
//                         },
//                       })}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]"
//                       aria-label={
//                         showPassword ? "Hide password" : "Show password"
//                       }
//                     >
//                       {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                     </button>
//                   </div>
//                   {errors.password && (
//                     <p className="text-red-500 text-xs">
//                       {errors.password.message}
//                     </p>
//                   )}
//                 </div>

//                 {!isSignIn && (
//                   <div className="flex justify-start items-center mb-6">
//                     <div className="flex justify-center items-center h-5">
//                       <Controller
//                         control={control}
//                         name="terms"
//                         rules={{
//                           required:
//                             "You must agree to the terms and conditions",
//                         }}
//                         render={({ field }) => (
//                           <Checkbox
//                             id="terms"
//                             checked={field.value}
//                             onCheckedChange={field.onChange}
//                           />
//                         )}
//                       />
//                     </div>
//                     <Label
//                       htmlFor="terms"
//                       className="ml-2 text-xs text-[#262626]"
//                     >
//                       I agree to the{" "}
//                       <a href="/terms" className="text-[#00254a] underline">
//                         Terms & Condition
//                       </a>
//                     </Label>
//                   </div>
//                 )}
//                 {errors.terms && (
//                   <p className="text-red-500 text-xs mb-4">
//                     {errors.terms.message}
//                   </p>
//                 )}

//                 <Button
//                   type="submit"
//                   className="w-full cursor-pointer bg-[#00254a] text-white py-3 rounded font-medium mb-6 hover:bg-[#001a38]"
//                   disabled={mutation.isPending}
//                 >
//                   {mutation.isPending
//                     ? "Processing..."
//                     : isSignIn
//                     ? "Sign In"
//                     : "Sign Up"}
//                 </Button>
//               </form>
//             )}

//             {!isForgotPassword && (
//               <>
//                 <div className="text-center mb-4">
//                   <p className="text-[#5a5a5a] text-sm">
//                     Or {isSignIn ? "Sign In" : "Sign Up"} with
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4 mb-6">
//                   <SocialButton
//                     provider="google"
//                     onLogin={handleSocialLogin}
//                     isLoading={socialLoginMutation.isPending}
//                   />
//                   <SocialButton
//                     provider="facebook"
//                     onLogin={handleSocialLogin}
//                     isLoading={socialLoginMutation.isPending}
//                   />
//                 </div>

//                 <div className="text-center">
//                   <p className="text-[#5a5a5a] text-sm">
//                     {isSignIn
//                       ? "Don't have an account? "
//                       : "Already have an account? "}
//                     <button
//                       type="button"
//                       onClick={toggleMode}
//                       className="text-[#00254a] cursor-pointer font-medium underline"
//                     >
//                       {isSignIn ? "Sign Up" : "Sign In"}
//                     </button>
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </ModalContent>
//     </Modal>
//   );
// }
