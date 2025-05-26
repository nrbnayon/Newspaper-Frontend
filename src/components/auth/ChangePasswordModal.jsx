// src\components\auth\ChangePasswordModal.jsx
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

export function ChangePasswordModal({
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
  const confirmPassword = watch("confirmPassword");
  const changePasswordMutation = useMutation({
    mutationFn: (data) => changePassword({ email, ...data }),
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
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Change Password</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <ArrowLeft />
            </Button>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type={showNewPassword ? "text" : "password"}
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                className={cn("w-full", errors.newPassword && "border-red-500")}
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {errors.newPassword.message}
                </p>
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                className={cn(
                  "w-full",
                  errors.confirmPassword && "border-red-500"
                )}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={changePasswordMutation.isPending}
            isLoading={changePasswordMutation.isPending}
            loadingText="Changing Password..."
          >
            Change Password
          </Button>
        </form>
      </ModalContent>
    </Modal>
  );
}
