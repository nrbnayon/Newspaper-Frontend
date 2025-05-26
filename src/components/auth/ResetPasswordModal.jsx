// src\components\auth\ResetPasswordModal.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Modal, ModalContent } from "@/components/ui/modal";
import { changePassword } from "@/lib/auth-service";
import { cn } from "@/lib/utils";

export function ResetPasswordModal({
  isOpen,
  onClose,
  email,
  onPasswordChanged,
}) {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const changePasswordMutation = useMutation({
    mutationFn: (data) => changePassword({ email, password: data.newPassword }),
    onSuccess: () => {
      toast.success("Password changed successfully!");
      reset();
      onPasswordChanged();
      onClose();
    },
    onError: (error) => {
      toast.error(
        error.message || "Failed to change password. Please try again."
      );
    },
  });

  const onSubmit = (data) => {
    changePasswordMutation.mutate(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent onClose={onClose} className={cn("max-w-md")}>
        <div className='p-8'>
          {/* Header */}
          <div className='text-center mb-6'>
            <button
              onClick={onClose}
              className='absolute left-4 top-4 p-2 hover:text-black hover:bg-gray-100 rounded-full'
            >
              <ArrowLeft size={20} />
            </button>
            <h2 className='text-2xl font-bold mb-2'>Change Password</h2>
            <p className='text-gray-200 text-sm'>
              Please enter your new password below to complete the password
              reset process.
            </p>
            <p className='text-sm text-gray-100 mt-2'>
              Account: <span className='font-medium'>{email}</span>
            </p>
          </div>

          {/* Form Container */}
          <div className='bg-[#FCFCFF] rounded-lg p-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div className='space-y-4'>
                <div className='space-y-1'>
                  <Label
                    htmlFor='newPassword'
                    className='text-[#262626] text-sm'
                  >
                    New Password
                  </Label>
                  <div className='relative'>
                    <Input
                      id='newPassword'
                      type={showNewPassword ? "text" : "password"}
                      placeholder='Enter new password'
                      className={cn(
                        "pr-10 border-[#c7c7c7] bg-white",
                        errors.newPassword && "border-red-500"
                      )}
                      {...register("newPassword", {
                        required: "New password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters",
                        },
                      })}
                    />
                    <button
                      type='button'
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]'
                      aria-label={
                        showNewPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showNewPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                  {errors.newPassword && (
                    <p className='text-red-500 text-xs'>
                      {errors.newPassword.message}
                    </p>
                  )}
                </div>

                <div className='space-y-1'>
                  <Label
                    htmlFor='confirmPassword'
                    className='text-[#262626] text-sm'
                  >
                    Confirm Password
                  </Label>
                  <div className='relative'>
                    <Input
                      id='confirmPassword'
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder='Confirm new password'
                      className={cn(
                        "pr-10 border-[#c7c7c7] bg-white",
                        errors.confirmPassword && "border-red-500"
                      )}
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: (value) =>
                          value === newPassword || "Passwords do not match",
                      })}
                    />
                    <button
                      type='button'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className='absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]'
                      aria-label={
                        showConfirmPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className='text-red-500 text-xs'>
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type='submit'
                disabled={changePasswordMutation.isPending}
                className='w-full bg-[#4338ca] hover:bg-[#3730a3] text-white py-2.5 rounded-lg font-medium transition-colors'
              >
                {changePasswordMutation.isPending
                  ? "Changing Password..."
                  : "Change Password"}
              </Button>
            </form>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
