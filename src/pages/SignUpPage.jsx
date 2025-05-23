import { Helmet } from "react-helmet-async"
import SignUpForm from "@/components/auth/SignUpForm"

export default function SignUpPage({ isSignIn = false }) {
  return (
    <>
      <Helmet>
        <title>{isSignIn ? "Sign In" : "Sign Up"} - News Portal</title>
        <meta
          name="description"
          content={
            isSignIn
              ? "Sign in to access exclusive news content"
              : "Create an account to unlock more news and personalized content"
          }
        />
      </Helmet>
      <div className="min-h-screen bg-[#e2e2e2] flex items-center justify-center p-4">
        <div className="max-w-4xl w-full mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#142335] mb-2">
              Sign Up or Sign In to Unlock More News
            </h1>
            <p className="text-[#5a5a5a] max-w-2xl mx-auto">
              Create a free account or log in to access the latest updates, in-depth stories, and exclusive news
              tailored just for you
            </p>
          </div>
          <SignUpForm isSignIn={isSignIn} />
        </div>
      </div>
    </>
  )
}
