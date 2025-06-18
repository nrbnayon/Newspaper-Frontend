// src\lib\payment-service.js
// ============================
// PAYMENT API FUNCTIONS
// ============================

import apiClient from "./auth-service";

// Create Stripe checkout session
export const createCheckoutSession = async (paymentData) => {
  try {
    const response = await apiClient.post(
      "/payment/create-checkout-session/",
      paymentData
    );
    console.log("createCheckoutSession response::", response.data);
    return response.data;
  } catch (error) {
    console.error("Create Checkout Session Error:", error);
    throw new Error(
      error.response?.data?.error || "Failed to create checkout session"
    );
  }
};

// Verify payment status
export const verifyPayment = async (sessionId) => {
  try {
    const response = await apiClient.get(
      `/payment/verify-payment/${sessionId}/`
    );
    console.log("verifyPayment response::", response.data);
    return response.data;
  } catch (error) {
    console.error("Verify Payment Error:", error);
    throw new Error(error.response?.data?.error || "Failed to verify payment");
  }
};

// Get user subscription status
export const getSubscriptionStatus = async () => {
  try {
    const response = await apiClient.get("/payment/subscription-status/");
    console.log("getSubscriptionStatus response::", response.data);
    return response.data;
  } catch (error) {
    console.error("Get Subscription Status Error:", error);
    throw new Error(
      error.response?.data?.error || "Failed to get subscription status"
    );
  }
};

// Cancel subscription
export const cancelSubscription = async (subscriptionId) => {
  try {
    const response = await apiClient.post("/payment/cancel-subscription/", {
      subscription_id: subscriptionId,
    });
    console.log("cancelSubscription response::", response.data);
    return response.data;
  } catch (error) {
    console.error("Cancel Subscription Error:", error);
    throw new Error(
      error.response?.data?.error || "Failed to cancel subscription"
    );
  }
};

// Get payment history
export const getPaymentHistory = async () => {
  try {
    const response = await apiClient.get("/payment/history/");
    console.log("getPaymentHistory response::", response.data);
    return response.data;
  } catch (error) {
    console.error("Get Payment History Error:", error);
    throw new Error(
      error.response?.data?.error || "Failed to get payment history"
    );
  }
};
