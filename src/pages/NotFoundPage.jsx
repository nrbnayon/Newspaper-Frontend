"use client"

import { Helmet } from "react-helmet-async"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-6">The page you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    </>
  )
}
