// src/pages/admin/Advertise/AdvertiseList.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Edit } from "lucide-react";
import toast from "react-hot-toast";
import { getAllAdvertisements } from "@/lib/advertise-service";

function getProgressVariant(progress) {
  switch (progress) {
    case "Approved":
    case "approved":
      return "default";
    case "Cancel":
    case "rejected":
      return "destructive";
    case "Read":
    case "pending":
      return "secondary";
    case "Unread":
    case "draft":
      return "outline";
    default:
      return "outline";
  }
}

function getProgressColor(progress) {
  switch (progress) {
    case "Approved":
    case "approved":
      return "text-green-600";
    case "Cancel":
    case "rejected":
      return "text-red-600";
    case "Read":
    case "pending":
      return "text-gray-500";
    case "Unread":
    case "draft":
      return "text-gray-900";
    default:
      return "text-gray-900";
  }
}

function formatProgress(progress) {
  const progressMap = {
    approved: "Approved",
    rejected: "Cancel",
    pending: "Read",
    draft: "Unread",
  };
  return progressMap[progress] || progress;
}

export default function AdvertiseList() {
  const [advertiseData, setAdvertiseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    setLoading(true);
    try {
      const result = await getAllAdvertisements();

      if (result.success) {
        // Map API response to match component structure
        const mappedAds = result.data.map((ad) => ({
          id: ad.id?.toString() || "N/A",
          serialNumber: ad.id?.toString() || "N/A",
          category: ad.category || "Uncategorized",
          title: ad.title || "No Title",
          description: ad.description || "No Description",
          details: ad.title ? ad.title.substring(0, 15) + "..." : "N/A",
          image:
            ad.uploaded_images && ad.uploaded_images.length > 0
              ? "Image"
              : "No Image",
          images: ad.uploaded_images || [],
          progress: formatProgress(ad.status || "draft"),
        }));
        setAdvertiseData(mappedAds);
      } else {
        toast.error(result.error || "Failed to fetch advertisements");
        setAdvertiseData([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      toast.error("An unexpected error occurred");
      setAdvertiseData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    navigate(`/dashboard/advertiseinfo/${item.id}`);
  };

  if (loading) {
    return (
      <div className="w-full mx-auto p-4 pt-4">
        <h1 className="text-base md:text-2xl font-medium text-secondary mb-6">
          Advertise List
        </h1>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">Loading advertisements...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-4 pt-4">
      <h1 className="text-base md:text-2xl font-medium text-secondary mb-6">
        Advertise List
      </h1>
      <div className="rounded-lg overflow-x-auto">
        <Table>
          <TableHeader className="bg-[#E7EFFE] text-sm md:text-base">
            <TableRow>
              <TableHead className="font-medium text-secondary">T-ID</TableHead>
              <TableHead className="font-medium text-secondary">
                Category
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Details
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Image
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Progress
              </TableHead>
              <TableHead className="font-medium text-secondary">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-sm md:text-base">
            {advertiseData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-gray-500"
                >
                  No advertisements found
                </TableCell>
              </TableRow>
            ) : (
              advertiseData.map((item, index) => (
                <TableRow
                  key={`${item.id}-${index}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-input-bg"}
                >
                  <TableCell className="font-medium py-3 text-secondary">
                    {item.id}
                  </TableCell>
                  <TableCell className="text-secondary">
                    {item.category}
                  </TableCell>
                  <TableCell className="text-secondary">
                    {item.details}
                  </TableCell>
                  <TableCell className="text-secondary">{item.image}</TableCell>
                  <TableCell>
                    <span
                      className={`font-medium text-base ${getProgressColor(
                        item.progress
                      )}`}
                    >
                      {item.progress}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      className="cursor-pointer"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="h-4 w-4 text-tertiary" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
