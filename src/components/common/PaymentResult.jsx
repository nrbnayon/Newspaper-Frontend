// src\components\common\PaymentResult.jsx
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const PaymentResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Get URL parameters
  const success = searchParams.get("success");
  const canceled = searchParams.get("canceled");

  const [status, setStatus] = useState("loading");
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check URL path to determine if it's success or cancel
    const currentPath = location.pathname;
    if (currentPath.includes("/payment/cancel") || canceled === "true") {
      setStatus("canceled");
      return;
    }
    if (currentPath.includes("/payment/success") || success === "true") {
      setStatus("success");
    }
  }, [success, canceled, location.pathname]);

  const handleReturnHome = () => {
    navigate("/dashboard");
  };

  const handleRetryPayment = () => {
    navigate("/pricing");
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Verifying Payment...
            </h2>
            <p className="text-gray-600">
              Please wait while we confirm your payment
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Successful! 🎉
            </h1>

            <p className="text-gray-600 mb-6">
              Thank you for your subscription! Your account has been upgraded
              successfully.
            </p>

            {paymentData && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Order Details:
                </h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p>
                    <strong>Plan:</strong> {paymentData.plan_name}
                  </p>
                  <p>
                    <strong>Amount:</strong> ${paymentData.amount}
                  </p>
                  <p>
                    <strong>Transaction ID:</strong>{" "}
                    {paymentData.transaction_id}
                  </p>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                onClick={handleReturnHome}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Go to Dashboard
              </Button>
              <p className="text-xs text-gray-500">
                A confirmation email has been sent to your registered email
                address.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "canceled") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Canceled
            </h1>

            <p className="text-gray-600 mb-6">
              Your payment was canceled. No charges have been made to your
              account.
            </p>

            <div className="space-y-3">
              <Button
                onClick={handleRetryPayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Try Again
              </Button>
              <Button
                onClick={handleReturnHome}
                variant="outline"
                className="w-full"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-md mx-auto text-center bg-white rounded-lg shadow-lg p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Verification Failed
            </h1>

            <p className="text-gray-600 mb-2">
              We couldn't verify your payment. Please try again or contact
              support if this issue persists.
            </p>

            {error && (
              <p className="text-red-600 text-sm mb-6">Error: {error}</p>
            )}

            <div className="space-y-3">
              <Button
                onClick={handleRetryPayment}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                Try Payment Again
              </Button>
              <Button
                onClick={handleReturnHome}
                variant="outline"
                className="w-full"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PaymentResult;
