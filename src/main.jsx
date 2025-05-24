// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// DevTools removed - install @tanstack/react-query-devtools if needed
import { Toaster } from "react-hot-toast";
import AppRoutes from "./pages/Routers";
import "./index.css";

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <AppRoutes />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#fff",
                color: "#333",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: "500",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
              success: {
                style: {
                  border: "1px solid #00AE34",
                  background: "#f0fdf4",
                },
                iconTheme: {
                  primary: "#00AE34",
                  secondary: "#fff",
                },
              },
              error: {
                style: {
                  border: "1px solid #ff4b4b",
                  background: "#fef2f2",
                },
                iconTheme: {
                  primary: "#ff4b4b",
                  secondary: "#fff",
                },
              },
              loading: {
                style: {
                  border: "1px solid #3b82f6",
                  background: "#eff6ff",
                },
              },
            }}
          />
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);