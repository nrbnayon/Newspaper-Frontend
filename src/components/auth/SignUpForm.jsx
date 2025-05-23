"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { Eye, EyeOff, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { registerUser, loginUser } from "@/lib/auth-service"
import SocialButton from "@/components/auth/SocialButton"

export default function SignUpForm({ isSignIn = false }) {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  })

  const mutation = useMutation({
    mutationFn: (data) => (isSignIn ? loginUser(data) : registerUser(data)),
    onSuccess: () => {
      toast.success(isSignIn ? "Successfully signed in!" : "Account created successfully!")
      navigate("/")
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred. Please try again.")
    },
  })

  const onSubmit = (data) => {
    mutation.mutate(data)
  }

  return (
    <Card className="bg-[#d9d9d9] max-w-md mx-auto">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold text-center mb-1">{isSignIn ? "Sign In Account" : "Sign Up Account"}</h2>
        <p className="text-center mb-6">
          {isSignIn ? "Don't have an Account? " : "Don't have an Account? "}
          <Link to={isSignIn ? "/signup" : "/signin"} className="text-[#00254a] font-medium">
            {isSignIn ? "Sign Up Free" : "Sign Up Free"}
          </Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {!isSignIn && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="space-y-1">
                <Label htmlFor="firstName" className="text-[#262626]">
                  First Name
                </Label>
                <div className="relative">
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="pr-10 border-[#c7c7c7]"
                    {...register("firstName", { required: "First name is required" })}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]">
                    <User size={18} />
                  </div>
                </div>
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName" className="text-[#262626]">
                  Last Name
                </Label>
                <div className="relative">
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="pr-10 border-[#c7c7c7]"
                    {...register("lastName", { required: "Last name is required" })}
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]">
                    <User size={18} />
                  </div>
                </div>
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
              </div>
            </div>
          )}

          <div className="space-y-1 mb-4">
            <Label htmlFor="email" className="text-[#262626]">
              E-mail or Phone
            </Label>
            <Input
              id="email"
              placeholder="Enter your mail or phone number"
              className="border-[#c7c7c7]"
              {...register("email", {
                required: "Email or phone is required",
                pattern: {
                  value: /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$|^[0-9]{10}$/,
                  message: "Please enter a valid email or phone number",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="space-y-1 mb-4">
            <Label htmlFor="password" className="text-[#262626]">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="pr-10 border-[#c7c7c7]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272]"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {!isSignIn && (
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <Checkbox
                  id="terms"
                  {...register("terms", { required: "You must agree to the terms and conditions" })}
                />
              </div>
              <Label htmlFor="terms" className="ml-2 text-sm text-[#262626]">
                I agree to the{" "}
                <Link to="/terms" className="text-[#00254a] underline">
                  Terms & Condition
                </Link>
              </Label>
            </div>
          )}
          {errors.terms && <p className="text-red-500 text-sm mb-4">{errors.terms.message}</p>}

          <Button
            type="submit"
            className="w-full bg-[#00254a] text-white py-6 rounded font-medium mb-6 hover:bg-[#001a38]"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Processing..." : isSignIn ? "Login" : "Sign Up"}
          </Button>
        </form>

        <div className="text-center mb-4">
          <p className="text-[#5a5a5a]">Or {isSignIn ? "Sign In" : "Sign Up"} with</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <SocialButton provider="google" />
          <SocialButton provider="facebook" />
        </div>

        <div className="text-center">
          <p className="text-[#5a5a5a]">
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <Link to={isSignIn ? "/signup" : "/signin"} className="text-[#00254a] font-medium">
              {isSignIn ? "Sign Up" : "Sign In"}
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
