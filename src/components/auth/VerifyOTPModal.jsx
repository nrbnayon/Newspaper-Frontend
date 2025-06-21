// src\components\auth\VerifyOTPModal.jsx
import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal, ModalContent } from "@/components/ui/modal";
import { verifyOTP, resendOTP } from "@/lib/auth-service";
import { cn } from "@/lib/utils";

export function VerifyOTPModal({ isOpen, onClose, email, type, onVerified }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  // Reset OTP when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtp(["", "", "", "", "", ""]);
      setCountdown(60);
      setCanResend(false);
      // Focus first input when modal opens
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    }
  }, [isOpen]);

  const verifyMutation = useMutation({
    mutationFn: (otpCode) => verifyOTP({ email, otp: otpCode, type }),
    onSuccess: (response) => {
      toast.success("OTP verified successfully!");
      onVerified(); 
    },
    onError: (error) => {
      console.error("OTP Verification Error:", error);
      toast.error(error.message || "Invalid OTP. Please try again.");
      // Reset OTP inputs on error
      setOtp(["", "", "", "", "", ""]);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    },
  });

  const resendMutation = useMutation({
    mutationFn: () => resendOTP({ email, type }),
    onSuccess: () => {
      toast.success("OTP sent successfully!");
      setCountdown(60);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    },
    onError: (error) => {
      console.error("OTP Resend Error:", {
        action: "otp-resend-failed",
        email: email,
        type: type,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
      toast.error(error.message || "Failed to resend OTP. Please try again.");
    },
  });

  const handleInputChange = (index, value) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "") && value) {
      const otpCode = newOtp.join("");
      verifyMutation.mutate(otpCode);
    }
  };

  // Add this to VerifyOTPModal.jsx as well
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");

    if (!/^\d{6}$/.test(pastedData)) {
      toast.error("Please paste a valid 6-digit code");
      return;
    }

    const digits = pastedData.split("");
    setOtp(digits);

    setTimeout(() => {
      if (inputRefs.current[5]) {
        inputRefs.current[5].focus();
      }
    }, 0);

    // Auto-submit after paste
    const otpCode = pastedData;
    verifyMutation.mutate(otpCode);
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      verifyMutation.mutate(otpCode);
    } else {
      toast.error("Please enter complete OTP");
    }
  };

  const handleResendOTP = () => {
    resendMutation.mutate();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 120);
    const secs = seconds % 120;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getTitle = () => {
    switch (type) {
      case "signup":
        return "Verify Your Account";
      case "forgot-password":
        return "Verify Reset Code";
      default:
        return "Verify OTP";
    }
  };

  const getDescription = () => {
    switch (type) {
      case "signup":
        return "We've sent a verification code to your email address. Please enter the code below to complete your registration.";
      case "forgot-password":
        return "We've sent a reset code to your email address. Please enter the code below to proceed with password reset.";
      default:
        return "Please enter the verification code sent to your email.";
    }
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
            <h2 className="text-2xl font-bold mb-2">{getTitle()}</h2>
            <p className="text-gray-200 text-sm">{getDescription()}</p>
            <p className="text-sm text-gray-100 mt-2">
              Code sent to: <span className="font-medium">{email}</span>
            </p>
          </div>

          {/* OTP Form */}
          <div className="bg-[#FCFCFF] rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-3 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onPaste={handlePaste}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-semibold border-2 border-gray-300 rounded-lg focus:border-[#00254a] focus:outline-none bg-white"
                    disabled={verifyMutation.isPending}
                  />
                ))}
              </div>

              <Button
                type="submit"
                className="w-full bg-[#00254a] text-white py-3 rounded font-medium mb-4 hover:bg-[#001a38]"
                disabled={verifyMutation.isPending || otp.join("").length !== 6}
              >
                {verifyMutation.isPending ? "Verifying..." : "Verify OTP"}
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
                  {resendMutation.isPending ? "Resending..." : "Resend OTP"}
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
