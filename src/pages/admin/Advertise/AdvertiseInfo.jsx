// src/pages/admin/Advertise/AdvertiseInfo.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import toast from "react-hot-toast";
import {
  getAdvertisementById,
  approveAdvertisement,
} from "@/lib/advertise-service";

export default function AdvertiseInfo() {
  const { id } = useParams();
  const [selectedAd, setSelectedAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (id) {
      fetchAdvertisement();
    }
  }, [id]);

  const fetchAdvertisement = async () => {
    setLoading(true);
    try {
      const result = await getAdvertisementById(id);

      if (result.success) {
        // Map API response to match component structure
        const mappedAd = {
          id: result.data.id?.toString() || "N/A",
          serialNumber: result.data.id?.toString() || "N/A",
          category: result.data.category || "Uncategorized",
          title: result.data.title || "No Title",
          description: result.data.description || "No Description",
          images: result.data.uploaded_images || [],
          progress: formatProgress(result.data.status || "draft"),
          url: result.data.url || "",
        };
        setSelectedAd(mappedAd);
      } else {
        toast.error(result.error || "Failed to fetch advertisement");
      }
    } catch (error) {
      console.error("Error fetching advertisement:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formatProgress = (progress) => {
    const progressMap = {
      approved: "Approved",
      rejected: "Cancel",
      pending: "Read",
      draft: "Unread",
    };
    return progressMap[progress] || progress;
  };

  const handleApprove = async () => {
    if (!selectedAd) return;

    setProcessing(true);
    try {
      const result = await approveAdvertisement(selectedAd.id, "approve");

      if (result.success) {
        setSelectedAd((prev) => ({ ...prev, progress: "Approved" }));
        toast.success("Advertisement approved successfully!");
      } else {
        toast.error(result.error || "Failed to approve advertisement");
      }
    } catch (error) {
      console.error("Error approving advertisement:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setProcessing(false);
    }
  };

  const handleCancel = async () => {
    if (!selectedAd) return;

    setProcessing(true);
    try {
      const result = await approveAdvertisement(selectedAd.id, "reject");

      if (result.success) {
        setSelectedAd((prev) => ({ ...prev, progress: "Cancel" }));
        toast.success("Advertisement rejected successfully!");
      } else {
        toast.error(result.error || "Failed to reject advertisement");
      }
    } catch (error) {
      console.error("Error rejecting advertisement:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-4 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">Loading advertisement...</div>
        </div>
      </div>
    );
  }

  if (!selectedAd) {
    return (
      <div className="min-h-screen pt-4 px-4">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">Advertisement not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 px-4">
      <div className="w-full mx-auto space-y-3 md:space-y-6">
        <div className="bg-white">
          <h1 className="text-base md:text-2xl font-semibold text-secondary">
            Advertise
          </h1>
        </div>
        <div className="bg-white">
          <h1 className="text-sm md:text-xl font-semibold text-secondary">
            New Advertise Information
          </h1>
        </div>
        <Card className={cn("rounded-b-none rounded-t-none w-full")}>
          <CardContent className="space-y-6 border-none">
            <div className="space-x-0 border-2 px-4 py-6">
              <div className="grid grid-cols-[1fr_3fr] gap-y-6">
                <div className="font-medium text-sm md:text-base text-primary">
                  Serial Number
                </div>
                <div className="text-sm md:text-base text-secondary">
                  {selectedAd.serialNumber}
                </div>
                <div className="font-medium text-sm md:text-base text-primary">
                  Category
                </div>
                <div className="text-sm md:text-base font-medium text-primary">
                  {selectedAd.category}
                </div>
                <div className="font-medium text-sm md:text-base text-primary">
                  Title
                </div>
                <div className="text-sm md:text-base font-medium text-primary">
                  {selectedAd.title}
                </div>
                <div className="font-medium text-sm md:text-base text-primary">
                  Description
                </div>
                <div className="text-sm md:text-base text-tertiary">
                  {selectedAd.description}
                </div>
                {selectedAd.url && (
                  <>
                    <div className="font-medium text-sm md:text-base text-primary">
                      URL
                    </div>
                    <div className="text-sm md:text-base text-tertiary">
                      <a
                        href={selectedAd.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        {selectedAd.url}
                      </a>
                    </div>
                  </>
                )}
              </div>
              <div className="space-y-4 mt-5 md:col-span-3">
                <label className="text-sm md:text-base font-medium text-primary">
                  Upload Photo
                </label>
                <div className="flex justify-around mt-3 p-2 border-2 flex-wrap gap-4">
                  {selectedAd.images && selectedAd.images.length > 0 ? (
                    selectedAd.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative w-44 m-2 h-32 bg-gray-100 overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Advertisement image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">
                      No images uploaded
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-6">
              <Button
                onClick={handleCancel}
                variant="destructive"
                className="px-8 py-5 cursor-pointer"
                disabled={processing || selectedAd.progress === "Cancel"}
              >
                {processing ? "Processing..." : "Cancel"}
              </Button>
              <Button
                onClick={handleApprove}
                className="px-8 py-5 cursor-pointer text-white bg-primary hover:bg-blue-800"
                disabled={
                  processing ||
                  selectedAd.progress === "Approved" ||
                  selectedAd.progress === "Cancel"
                }
              >
                {processing
                  ? "Processing..."
                  : selectedAd.progress === "Approved"
                  ? "Approved"
                  : "Approve"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
