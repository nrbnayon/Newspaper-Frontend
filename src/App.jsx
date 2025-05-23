// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
// import { Toaster } from "react-hot-toast"
// import { QueryClientProvider } from "@tanstack/react-query"
// import { queryClient } from "./lib/tanstack-query"
// import SignUpPage from "./pages/SignUpPage"
// import HomePage from "./pages/HomePage"
// import NotFoundPage from "./pages/NotFoundPage"

// // Define routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <NotFoundPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: "signup",
//         element: <SignUpPage />,
//       },
//       {
//         path: "signin",
//         element: <SignUpPage isSignIn={true} />,
//       },
//     ],
//   },
// ])

// // Root layout with providers
// function RootLayout() {
//   return <Outlet />
// }

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//         <RouterProvider router={router} />
//         <Toaster position="top-center" />
//     </QueryClientProvider>
//   )
// }
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/tanstack-query";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

// Root layout with providers
function RootLayout() {
  return <Outlet />;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='w-full mx-auto px-10'>
        <RouterProvider router={router} />
      </div>
      <Toaster position='top-center' />
    </QueryClientProvider>
  );
}
