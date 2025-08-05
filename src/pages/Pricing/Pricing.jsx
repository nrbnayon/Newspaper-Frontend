// src\pages\Pricing\Pricing.jsx
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/lib/payment-service";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/auth/AuthModal";

const Pricing = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const { isLoggedIn, user, profile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    // Check if user is logged in first
    if (!isLoggedIn) {
      setAuthMode("signin");
      setAuthModalOpen(true);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const paymentData = {
        plan_name: "Monthly",
        price_id: import.meta.env.VITE_SUBSCRIPTION_PRICE_ID,
        duration_type: "monthly",
        // Add success and cancel URLs
        success_url: `${window.location.origin}/payment/success`,
        cancel_url: `${window.location.origin}/payment/cancel`,
      };

      const response = await createCheckoutSession(paymentData);

      // Redirect to Stripe checkout
      if (response?.checkout_url) {
        window.location.href = response.checkout_url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError(err.message || "Failed to create checkout session");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle successful login - automatically trigger payment
  const handleAuthSuccess = () => {
    setAuthModalOpen(false);
    // Small delay to ensure auth state is updated
    setTimeout(() => {
      handlePayment();
    }, 100);
  };

  // Check if user is premium
  const isPremiumUser = profile?.status === "premium";

  return (
    <div>
      <Navbar />
      {/* Pricing Section */}
      <div className='mt-8 md:mt-12 lg:mt-16 flex justify-center h-screen items-center text-center'>
        <div className=''>
          <h3 className='text-xl md:text-2xl font-semibold text-secondary mb-6'>
            Pricing
          </h3>
          <div className='bg-[#f2f2f2] m-auto rounded-lg p-6 max-w-md'>
            <div className='text-center mb-6'>
              <div className='flex items-center justify-center space-x-2 mb-4'>
                <div className='w-4 h-4 rounded-full border-2 border-tertiary flex items-center justify-center'>
                  <div className='w-2 h-2 rounded-full bg-gray-400'></div>
                </div>
                <span className='text-secondary text-base md:text-lg font-medium'>
                  Monthly
                </span>
              </div>
              <div className='text-2xl md:text-4xl font-bold text-primary mb-2'>
                $4.99<span className='text-lg font-normal'>/monthly</span>
              </div>
            </div>

            <div className='space-y-3 mb-3'>
              <div className='flex items-start text-left space-x-3'>
                <div className='w-2 h-2 rounded-full bg-blue-500 mt-2'></div>
                <span className='text-sm text-secondary'>
                  Create your own automated bot effortlessly!
                </span>
              </div>
              <div className='flex items-start text-left space-x-3'>
                <div className='w-2 h-2 rounded-full bg-blue-500 mt-2'></div>
                <span className='text-sm text-secondary'>
                  Join our community for seamless team collaboration!
                </span>
              </div>
              <div className='flex items-start text-left space-x-3'>
                <div className='w-2 h-2 rounded-full bg-blue-500 mt-2'></div>
                <span className='text-sm text-secondary'>
                  Unlock the secrets of AI model training with us!
                </span>
              </div>
              <div className='flex items-start text-left space-x-3'>
                <div className='w-2 h-2 rounded-full bg-blue-500 mt-2'></div>
                <span className='text-sm text-secondary'>
                  Subscribe for insights on multilingual AI advancements!
                </span>
              </div>
            </div>

            {/* Premium User Message */}
            {isPremiumUser && (
              <div className='mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                <div className='flex items-center space-x-2'>
                  <span className='text-lg'>👑</span>
                  <span className='font-semibold'>
                    You are already a premium user!
                  </span>
                </div>
                <p className='text-sm mt-1'>
                  You have access to all premium features. Thank you for being a
                  valued member!
                </p>
              </div>
            )}

            {error && (
              <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
                {error}
              </div>
            )}

            <Button
              className='w-full bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50'
              onClick={handlePayment}
              disabled={isLoading || isPremiumUser}
            >
              {isLoading
                ? "Processing..."
                : isPremiumUser
                ? "Upgrade Plan"
                : "Buy Now"}
            </Button>

            {!isLoggedIn && !isPremiumUser && (
              <p className='text-xs text-gray-500 mt-2'>
                You'll need to sign in to complete your purchase
              </p>
            )}

            {isPremiumUser && (
              <p className='text-xs text-gray-500 mt-2'>
                Contact support for plan upgrades or changes
              </p>
            )}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess} // Add this prop if your AuthModal supports it
      />
    </div>
  );
};

export default Pricing;
