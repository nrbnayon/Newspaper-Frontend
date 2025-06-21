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
import { Badge } from "../../../components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../components/ui/pagination";
import { Edit, User, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";
import { adminManageAllAds, getFullImageUrl } from "@/lib/advertise-service";
import {
  formatFullDate,
  getProgressVariant,
  getProgressColor,
  formatProgress,
} from "@/lib/utils";

export default function AdvertiseList() {
  const [advertiseData, setAdvertiseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12); // Default 12 ads per page

  const navigate = useNavigate();

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await adminManageAllAds();

      if (result.success && result.data) {
        // Map API response to match component structure
        const mappedAds = result.data.map((ad) => {
          // Process images properly
          const processedImages = Array.isArray(ad.images)
            ? ad.images.map((img) => getFullImageUrl(img.image)).filter(Boolean)
            : [];

          return {
            id: ad.id?.toString() || "N/A",
            serialNumber: ad.serial_number || ad.id?.toString() || "N/A",
            category: ad.category || "Uncategorized",
            title: ad.title || "No Title",
            description: ad.description || "No Description",
            imageCount: processedImages.length,
            imageDisplay:
              processedImages.length > 0
                ? `${processedImages.length} Image(s)`
                : "No Image",
            images: processedImages,
            progress: formatProgress(ad.status || "pending"),
            rawStatus: ad.status || "pending",
            url: ad.url || "",
            user: ad.user || "Unknown",
            views: ad.views || 0,
            created_at: ad.created_at,
            updated_at: ad.updated_at,
          };
        });

        setAdvertiseData(mappedAds);
        // Reset to first page when data changes
        setCurrentPage(1);
      } else {
        const errorMsg = result.error || "Failed to fetch advertisements";
        setError(errorMsg);
        toast.error(errorMsg);
        setAdvertiseData([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      const errorMsg = "An unexpected error occurred";
      setError(errorMsg);
      toast.error(errorMsg);
      setAdvertiseData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (item) => {
    if (!item.id) {
      toast.error("Invalid advertisement ID");
      return;
    } else {
      navigate(`/dashboard/advertiseinfo/${item.id}`);
    }
  };

  const handleRefresh = () => {
    fetchAdvertisements();
  };

  // Pagination calculations
  const totalItems = advertiseData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = advertiseData.slice(startIndex, endIndex);

  // Pagination handlers
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    // Remove duplicates and filter out invalid entries
    return rangeWithDots.filter((item, index, arr) => {
      if (typeof item === "number") {
        return item <= totalPages && arr.indexOf(item) === index;
      }
      return true;
    });
  };

  if (loading) {
    return (
      <div className="w-full mx-auto p-4 pt-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-base md:text-2xl font-medium text-secondary">
            Advertisement Management
          </h1>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">Loading advertisements...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mx-auto p-4 pt-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-base md:text-2xl font-medium text-secondary">
            Advertisement Management
          </h1>
          <Button onClick={handleRefresh} variant="outline">
            Retry
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <div className="text-lg text-red-500">Error: {error}</div>
          <Button onClick={handleRefresh} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto p-4 pt-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-base md:text-2xl font-medium text-secondary">
          Advertisement Management
        </h1>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            Total: {advertiseData.length} advertisements
          </div>
          <Button onClick={handleRefresh} variant="outline" size="sm">
            Refresh
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">
            {advertiseData.filter((ad) => ad.progress === "Approved").length}
          </div>
          <div className="text-sm text-custom-green">Approved</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">
            {advertiseData.filter((ad) => ad.progress === "Pending").length}
          </div>
          <div className="text-sm text-custom-yellow">Pending</div>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <div className="text-2xl font-bold text-gray-900">
            {advertiseData.filter((ad) => ad.progress === "Rejected").length}
          </div>
          <div className="text-sm text-textColor">Rejected</div>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden border bg-white">
        <Table>
          <TableHeader className="bg-[#E7EFFE]">
            <TableRow>
              <TableHead className="font-medium text-secondary">ID</TableHead>
              <TableHead className="font-medium text-secondary">
                Serial
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Title
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Category
              </TableHead>
              <TableHead className="font-medium text-secondary">User</TableHead>
              <TableHead className="font-medium text-secondary">
                Images
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Status
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Created
              </TableHead>
              <TableHead className="font-medium text-secondary">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={9}
                  className="text-center py-8 text-gray-500"
                >
                  No advertisements found
                </TableCell>
              </TableRow>
            ) : (
              currentData.map((item, index) => (
                <TableRow
                  key={`${item.id}-${index}`}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <TableCell className="font-medium text-secondary">
                    #{item.id}
                  </TableCell>
                  <TableCell className="text-secondary font-mono text-sm">
                    {item.serialNumber}
                  </TableCell>
                  <TableCell className="text-secondary max-w-xs">
                    <div className="truncate" title={item.title}>
                      {item.title}
                    </div>
                    {item.description && (
                      <div
                        className="text-xs text-gray-500 truncate mt-1"
                        title={item.description}
                      >
                        {item.description.length > 50
                          ? item.description.substring(0, 50) + "..."
                          : item.description}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-secondary">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-secondary">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span
                        className="text-sm truncate max-w-24"
                        title={item.user}
                      >
                        {item.user}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-secondary">
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">{item.imageDisplay}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getProgressVariant(item.progress)}
                      className={`text-xs ${getProgressColor(item.progress)}`}
                    >
                      {item.progress}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-secondary">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span className="text-xs">
                        {formatFullDate(item.created_at)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(item)}
                        className="h-8 w-8 p-0"
                        title="Edit Advertisement"
                      >
                        <Edit className="h-4 w-4 text-blue-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {totalPages <= 7
                ? // Show all pages if total pages is 7 or less
                  Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )
                : // Show pagination with ellipsis for more than 7 pages
                  getVisiblePages().map((page, index) =>
                    page === "..." ? (
                      <PaginationItem key={`ellipsis-${index}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={page}>
                        <PaginationLink
                          onClick={() => handlePageChange(page)}
                          isActive={currentPage === page}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  )}

              <PaginationItem>
                <PaginationNext
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}

      {/* Pagination Info */}
      {advertiseData.length > 0 && (
        <div className="mt-4 text-center text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
          {totalItems} advertisement{totalItems !== 1 ? "s" : ""}
          {totalPages > 1 && ` (Page ${currentPage} of ${totalPages})`}
        </div>
      )}
    </div>
  );
}
