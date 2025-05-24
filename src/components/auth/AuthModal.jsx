import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Eye, EyeOff, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Modal, ModalContent } from "@/components/ui/modal";
import { registerUser, loginUser } from "@/lib/auth-service";
import SocialButton from "@/components/auth/SocialButton";
import { cn } from "@/lib/utils";

export default function AuthModal({ isOpen, onClose, initialMode = "signup" }) {
  const [isSignIn, setIsSignIn] = useState(initialMode === "signin");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  });

  // Update mode when initialMode prop changes
  useEffect(() => {
    setIsSignIn(initialMode === "signin");
  }, [initialMode]);

  const mutation = useMutation({
    mutationFn: (data) => (isSignIn ? loginUser(data) : registerUser(data)),
    onSuccess: () => {
      toast.success(
        isSignIn ? "Successfully signed in!" : "Account created successfully!"
      );
      onClose();
      reset();
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred. Please try again.");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    reset();
  };

  const handleClose = () => {
    onClose();
    reset();
    setShowPassword(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent onClose={handleClose} className={cn("max-w-xl")}>
        <div className='p-8'>
          {/* Header */}
          <div className='text-center mb-6'>
            <h2 className='text-2xl font-bold'>
              You have to Sign Up or Sign In
            </h2>
            <p className='mb-4 text-2xl font-bold'>for view more News</p>
          </div>

          {/* Form */}
          <div className='bg-[#FCFCFF] rounded-lg p-6 text-black'>
            <h3 className='text-xl font-bold text-center mb-1'>
              {isSignIn ? "Sign In Account" : "Sign Up Account"}
            </h3>
            <p className='text-center mb-6 text-sm text-gray-600'>
              {isSignIn
                ? "Don't have an Account? "
                : "Already have an Account? "}
              <button
                type='button'
                onClick={toggleMode}
                className='text-[#00254a] cursor-pointer font-medium underline'
              >
                {isSignIn ? "Sign Up Free" : "Sign In"}
              </button>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {!isSignIn && (
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div className='space-y-1'>
                    <Label
                      htmlFor='firstName'
                      className='text-[#262626] text-sm'
                    >
                      First Name
                    </Label>
                    <div className='relative'>
                      <Input
                        id='firstName'
                        placeholder='First name'
                        className='pr-10 border-[#c7c7c7] bg-white'
                        {...register("firstName", {
                          required: !isSignIn
                            ? "First name is required"
                            : false,
                        })}
                      />
                      <div className='absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]'>
                        <User size={16} />
                      </div>
                    </div>
                    {errors.firstName && (
                      <p className='text-red-500 text-xs'>
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div className='space-y-1'>
                    <Label
                      htmlFor='lastName'
                      className='text-[#262626] text-sm'
                    >
                      Last Name
                    </Label>
                    <div className='relative'>
                      <Input
                        id='lastName'
                        placeholder='Last name'
                        className='pr-10 border-[#c7c7c7] bg-white'
                        {...register("lastName", {
                          required: !isSignIn ? "Last name is required" : false,
                        })}
                      />
                      <div className='absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]'>
                        <User size={16} />
                      </div>
                    </div>
                    {errors.lastName && (
                      <p className='text-red-500 text-xs'>
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <div className='space-y-1 mb-4'>
                <Label htmlFor='email' className='text-[#262626] text-sm'>
                  E-mail or Phone
                </Label>
                <Input
                  id='email'
                  placeholder='Enter your mail or phone number'
                  className='border-[#c7c7c7] bg-white'
                  {...register("email", {
                    required: "Email or phone is required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$|^[0-9]{10}$/,
                      message: "Please enter a valid email or phone number",
                    },
                  })}
                />
                {errors.email && (
                  <p className='text-red-500 text-xs'>{errors.email.message}</p>
                )}
              </div>

              <div className='space-y-1 mb-4'>
                <Label htmlFor='password' className='text-[#262626] text-sm'>
                  Password
                </Label>
                <div className='relative'>
                  <Input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your Password'
                    className='pr-10 border-[#c7c7c7] bg-white'
                    {...register("password", {
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
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]'
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                {errors.password && (
                  <p className='text-red-500 text-xs'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {!isSignIn && (
                <div className='flex justify-start items-center mb-6'>
                  <div className='flex justify-center items-center h-5'>
                    <Checkbox
                      id='terms'
                      {...register("terms", {
                        required: !isSignIn
                          ? "You must agree to the terms and conditions"
                          : false,
                      })}
                    />
                  </div>
                  <Label
                    htmlFor='terms'
                    className='ml-2 text-xs text-[#262626]'
                  >
                    I agree to the{" "}
                    <a href='/terms' className='text-[#00254a] underline'>
                      Terms & Condition
                    </a>
                  </Label>
                </div>
              )}
              {errors.terms && (
                <p className='text-red-500 text-xs mb-4'>
                  {errors.terms.message}
                </p>
              )}

              <Button
                type='submit'
                className='w-full cursor-pointer bg-[#00254a] text-white py-3 rounded font-medium mb-6 hover:bg-[#001a38]'
                disabled={mutation.isPending}
              >
                {mutation.isPending
                  ? "Processing..."
                  : isSignIn
                  ? "Sign In"
                  : "Sign Up"}
              </Button>
            </form>

            <div className='text-center mb-4'>
              <p className='text-[#5a5a5a] text-sm'>
                Or {isSignIn ? "Sign In" : "Sign Up"} with
              </p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-6'>
              <SocialButton  provider='google' />
              <SocialButton provider='facebook' />
            </div>

            <div className='text-center'>
              <p className='text-[#5a5a5a] text-sm'>
                {isSignIn
                  ? "Don't have an account? "
                  : "Already have an account? "}
                <button
                  type='button'
                  onClick={toggleMode}
                  className='text-[#00254a] cursor-pointer font-medium underline'
                >
                  {isSignIn ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
