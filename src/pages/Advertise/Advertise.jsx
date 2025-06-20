// src/pages/Advertise/Advertise.jsx
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { getAllAdvertisements } from "@/lib/advertise-service";

const AdvertiseCard = ({ serialNumber, category, title, description }) => {
  return (
    <div className="bg-white rounded">
      <Card className="w-full border rounded-md">
        <CardContent className="p-6">
          <div className="grid grid-cols-[1fr_2fr] gap-y-6">
            <div className="font-medium text-sm md:text-base text-primary">
              Serial Number
            </div>
            <div className="text-sm md:text-base text-secondary">
              {serialNumber}
            </div>

            <div className="font-medium text-sm md:text-base text-primary">
              Category
            </div>
            <div className="text-sm md:text-base font-medium text-primary">
              {category}
            </div>

            <div className="font-medium text-sm md:text-base text-primary">
              Title
            </div>
            <div className="text-sm md:text-base font-medium text-primary">
              {title}
            </div>

            <div className="font-medium text-sm md:text-base lg:text-base text-primary">
              Description
            </div>
            <div className="text-sm md:text-base lg:text-base text-tertiary">
              {description}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Advertise = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);

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
          serialNumber: ad.id?.toString() || "N/A",
          category: ad.category || "Uncategorized",
          title: ad.title || "No Title",
          description: ad.description || "No Description",
        }));
        setAdvertisements(mappedAds);
      } else {
        toast.error(result.error || "Failed to fetch advertisements");
        // Keep empty array on error
        setAdvertisements([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      toast.error("An unexpected error occurred");
      setAdvertisements([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex-1 p-3 w-full">
        <div className="flex-col md:flex-row lg:flex justify-between items-center mb-6">
          <div>
            <h2 className="text-base md:text-2xl font-medium text-secondary">
              Advertise
            </h2>
          </div>
          <div>
            <Link
              to="/dashboard/newadvertise"
              className="flex text-base md:text-2xl font-medium bg-transparent items-center text-secondary px-4 py-2 rounded"
            >
              <Plus className="h-5 w-5 md:h-6 md:w-6 border-2 border-secondary rounded-md mr-2" />
              New Advertise
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">Loading advertisements...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-3 w-full">
      <div className="flex-col md:flex-row lg:flex justify-between items-center mb-6">
        <div>
          <h2 className="text-base md:text-2xl font-medium text-secondary">
            Advertise
          </h2>
        </div>
        <div>
          <Link
            to="/dashboard/newadvertise"
            className="flex text-base md:text-2xl font-medium bg-transparent items-center text-secondary px-4 py-2 rounded"
          >
            <Plus className="h-5 w-5 md:h-6 md:w-6 border-2 border-secondary rounded-md mr-2" />
            New Advertise
          </Link>
        </div>
      </div>

      {advertisements.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-500">No advertisements found</div>
        </div>
      ) : (
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {advertisements.map((ad, index) => (
            <AdvertiseCard key={index} {...ad} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Advertise;
