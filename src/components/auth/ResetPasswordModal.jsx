// src/components/auth/ResetPasswordModal.jsx
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Modal, ModalContent } from "@/components/ui/modal";
import { resetPassword, sendForgotPasswordOTP } from "@/lib/auth-service";
import { cn } from "@/lib/utils";

export function ResetPasswordModal({
  isOpen,
  onClose,
  email,
  onPasswordChanged,
}) {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(120);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword = watch("newPassword");

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtp(["", "", "", "", "", ""]);
      setCountdown(120);
      setCanResend(false);
      reset();
      // Focus first OTP input when modal opens
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [isOpen, reset]);

  const resetPasswordMutation = useMutation({
    mutationFn: (data) =>
      resetPassword({
        email,
        otp: data.otp,
        new_password: data.confirmPassword,
      }),
    onSuccess: () => {
      toast.success("Password reset successfully!");
      reset();
      setOtp(["", "", "", "", "", ""]);
      onPasswordChanged();
    },
    onError: (error) => {
      console.error("Reset Password Error:", error);
      toast.error(
        error.message || "Failed to reset password. Please try again."
      );
      // Reset OTP inputs on error
      setOtp(["", "", "", "", "", ""]);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    },
  });

  const resendMutation = useMutation({
    mutationFn: () => sendForgotPasswordOTP({ email }),
    onSuccess: () => {
      toast.success("Reset code sent successfully!");
      setCountdown(120);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    },
    onError: (error) => {
      console.error("OTP Resend Error:", {
        action: "password-reset-otp-resend-failed",
        email: email,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
      toast.error(
        error.message || "Failed to resend reset code. Please try again."
      );
    },
  });

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");

    // Check if pasted data is exactly 6 digits
    if (!/^\d{6}$/.test(pastedData)) {
      toast.error("Please paste a valid 6-digit code");
      return;
    }

    // Split the pasted data into individual digits
    const digits = pastedData.split("");
    setOtp(digits);

    // Focus the last input
    setTimeout(() => {
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }, 0);
  };

  const onSubmit = (data) => {
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast.error("Please enter complete verification code");
      return;
    }
    resetPasswordMutation.mutate({ ...data, otp: otpCode });
  };

  const handleResendOTP = () => {
    resendMutation.mutate();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent onClose={onClose} className={cn("max-w-md")}>
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <button
              onClick={onClose}
              className="absolute left-4 top-4 p-2 hover:bg-gray-100 hover:text-black rounded-full"
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className="text-2xl font-bold mb-2">Reset Your Password</h2>
            <p className="text-gray-200 text-sm">
              We've sent a reset code to your email address. Please enter the
              code below along with your new password.
            </p>
            <p className="text-sm text-gray-100 mt-2">
              Code sent to: <span className="font-medium">{email}</span>
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-[#FCFCFF] rounded-lg p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* OTP Input Section */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">
                  Verification Code
                </Label>
                <div className="flex justify-center gap-3 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white"
                      disabled={resetPasswordMutation.isPending}
                    />
                  ))}
                </div>
              </div>

              {/* Password Fields */}
              <div className="space-y-4">
                {/* New Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="newPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      className={cn(
                        "pr-12 h-12 border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white",
                        errors.newPassword &&
                          "border-red-400 focus:border-red-500"
                      )}
                      {...register("newPassword", {
                        required: "New password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                          message:
                            "Password must contain uppercase, lowercase, and number",
                        },
                      })}
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label={
                        showNewPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showNewPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                  {errors.newPassword && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    Confirm New Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your new password"
                      className={cn(
                        "pr-12 h-12 border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white",
                        errors.confirmPassword &&
                          "border-red-400 focus:border-red-500"
                      )}
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === newPassword || "Passwords do not match",
                      })}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#00254a] text-white py-3 rounded font-medium mb-4 hover:bg-[#001a38]"
                disabled={
                  resetPasswordMutation.isPending ||
                  otp.join("").length !== 6 ||
                  Object.keys(errors).length > 0
                }
              >
                {resetPasswordMutation.isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Resetting Password...
                  </div>
                ) : (
                  "Reset Password"
                )}
              </Button>
            </form>

            {/* Resend Section */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Didn't receive the code?
              </p>
              {canResend ? (
                <button
                  onClick={handleResendOTP}
                  disabled={resendMutation.isPending}
                  className="text-[#00254a] font-medium underline hover:no-underline disabled:opacity-50"
                >
                  {resendMutation.isPending ? "Resending..." : "Resend Code"}
                </button>
              ) : (
                <p className="text-sm text-gray-500">
                  Resend available in {formatTime(countdown)}
                </p>
              )}
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
