// src/pages/admin/Advertise/AdvertiseContext.jsx
import { createContext, useState, useEffect, useCallback } from "react";
import {
  getAllAdvertisements,
  getAdvertisementById,
  approveAdvertisement,
  createAdvertisement,
  updateAdvertisement,
} from "@/lib/advertise-service";
import toast from "react-hot-toast";

export const AdvertiseContext = createContext();

export const AdvertiseProvider = ({ children }) => {
  const [advertiseData, setAdvertiseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Format API data to match component structure
  const formatAdvertisementData = (apiData) => {
    return apiData.map((item) => ({
      id: item.id?.toString() || "N/A",
      serialNumber: item.id?.toString() || "N/A",
      category: item.category || "Uncategorized",
      title: item.title || "No Title",
      description: item.description || "No Description",
      details: item.details || "No Details",
      image: item.uploaded_images?.[0] || "Image",
      images: item.uploaded_images || [],
      progress: formatProgress(item.status || "draft"),
      url: item.url || "",
      created_at: item.created_at,
      updated_at: item.updated_at,
      rawStatus: item.status || "draft",
    }));
  };

  // Format progress status
  const formatProgress = (status) => {
    const progressMap = {
      approved: "Approved",
      rejected: "Cancel",
      pending: "Read",
      draft: "Unread",
    };
    return progressMap[status] || status;
  };

  // Fetch all advertisements
  const fetchAdvertisements = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await getAllAdvertisements();

      if (result.success) {
        const formattedData = formatAdvertisementData(result.data);
        setAdvertiseData(formattedData);
      } else {
        setError(result.error);
        toast.error(result.error || "Failed to fetch advertisements");
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      setError("An unexpected error occurred");
      toast.error("Failed to fetch advertisements");
    } finally {
      setLoading(false);
    }
  }, []);

  // Get single advertisement by ID
  const getAdvertisement = useCallback(async (id) => {
    try {
      const result = await getAdvertisementById(id);

      if (result.success) {
        const formattedAd = {
          id: result.data.id?.toString() || "N/A",
          serialNumber: result.data.id?.toString() || "N/A",
          category: result.data.category || "Uncategorized",
          title: result.data.title || "No Title",
          description: result.data.description || "No Description",
          details: result.data.details || "No Details",
          image: result.data.uploaded_images?.[0] || "Image",
          images: result.data.uploaded_images || [],
          progress: formatProgress(result.data.status || "draft"),
          url: result.data.url || "",
          created_at: result.data.created_at,
          updated_at: result.data.updated_at,
          rawStatus: result.data.status || "draft",
        };
        return { success: true, data: formattedAd };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error("Error fetching advertisement:", error);
      return { success: false, error: "Failed to fetch advertisement" };
    }
  }, []);

  // Update progress (approve/reject)
  const updateProgress = useCallback(async (id, newProgress) => {
    try {
      // Map progress back to API status
      const statusMap = {
        Approved: "approve",
        Cancel: "reject",
      };

      const action = statusMap[newProgress];
      if (!action) {
        toast.error("Invalid progress status");
        return { success: false, error: "Invalid progress status" };
      }

      const result = await approveAdvertisement(id, action);

      if (result.success) {
        // Update local state
        setAdvertiseData((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, progress: newProgress } : item
          )
        );

        toast.success(`Advertisement ${action}d successfully!`);
        return { success: true };
      } else {
        toast.error(result.error || `Failed to ${action} advertisement`);
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("An unexpected error occurred");
      return { success: false, error: "An unexpected error occurred" };
    }
  }, []);

  // Create new advertisement
  const createNewAdvertisement = useCallback(
    async (formData) => {
      try {
        const result = await createAdvertisement(formData);

        if (result.success) {
          // Refresh the advertisements list
          await fetchAdvertisements();
          toast.success("Advertisement created successfully!");
          return { success: true, data: result.data };
        } else {
          toast.error(result.error || "Failed to create advertisement");
          return { success: false, error: result.error };
        }
      } catch (error) {
        console.error("Error creating advertisement:", error);
        toast.error("An unexpected error occurred");
        return { success: false, error: "An unexpected error occurred" };
      }
    },
    [fetchAdvertisements]
  );

  // Update advertisement
  const updateAdvertisementData = useCallback(
    async (id, formData) => {
      try {
        const result = await updateAdvertisement(id, formData);

        if (result.success) {
          // Refresh the advertisements list
          await fetchAdvertisements();
          toast.success("Advertisement updated successfully!");
          return { success: true, data: result.data };
        } else {
          toast.error(result.error || "Failed to update advertisement");
          return { success: false, error: result.error };
        }
      } catch (error) {
        console.error("Error updating advertisement:", error);
        toast.error("An unexpected error occurred");
        return { success: false, error: "An unexpected error occurred" };
      }
    },
    [fetchAdvertisements]
  );

  // Filter advertisements by status
  const getAdvertisementsByStatus = useCallback(
    (status) => {
      return advertiseData.filter((ad) => ad.progress === status);
    },
    [advertiseData]
  );

  // Get advertisement counts by status
  const getAdvertisementCounts = useCallback(() => {
    return {
      total: advertiseData.length,
      unread: advertiseData.filter((ad) => ad.progress === "Unread").length,
      read: advertiseData.filter((ad) => ad.progress === "Read").length,
      approved: advertiseData.filter((ad) => ad.progress === "Approved").length,
      cancelled: advertiseData.filter((ad) => ad.progress === "Cancel").length,
    };
  }, [advertiseData]);

  // Refresh advertisements
  const refreshAdvertisements = useCallback(() => {
    return fetchAdvertisements();
  }, [fetchAdvertisements]);

  // Load advertisements on mount
  useEffect(() => {
    fetchAdvertisements();
  }, [fetchAdvertisements]);

  const contextValue = {
    // Data
    advertiseData,
    loading,
    error,

    // Actions
    updateProgress,
    fetchAdvertisements,
    getAdvertisement,
    createNewAdvertisement,
    updateAdvertisementData,
    refreshAdvertisements,

    // Utilities
    getAdvertisementsByStatus,
    getAdvertisementCounts,
  };

  return (
    <AdvertiseContext.Provider value={contextValue}>
      {children}
    </AdvertiseContext.Provider>
  );
};

// // src\pages\admin\Advertise\AdvertiseContext.jsx
// import { createContext, useState } from "react";
// // Sample data (in a real project, these would be imported from separate files)
// const advertiseData1 = [
//   {
//     id: "1s5gf1",
//     serialNumber: "1s5gf1",
//     category: "National",
//     title: "National News",
//     description: "Description for national news",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Unread",
//   },
//   {
//     id: "dsrg515",
//     serialNumber: "dsrg515",
//     category: "Office Rent",
//     title: "Office Space Available",
//     description: "Prime location office space",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Approved",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Read",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Read",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Approved",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Read",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Cancel",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Read",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Cancel",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Read",
//   },
//   {
//     id: "2",
//     serialNumber: "2",
//     category: "Politics",
//     title: "Parliament Approves New Economic Reform Bill",
//     description: "After hours of intense discussion...",
//     details: "Dhanmondi Branc...",
//     image: "Image",
//     images: [
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//       "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
//     ],
//     progress: "Read",
//   },
// ];
// export const AdvertiseContext = createContext();

// export const AdvertiseProvider = ({ children }) => {
//   const [advertiseData, setAdvertiseData] = useState([...advertiseData1]);

//   const updateProgress = (id, newProgress) => {
//     setAdvertiseData((prevData) =>
//       prevData.map((item) =>
//         item.id === id ? { ...item, progress: newProgress } : item
//       )
//     );
//   };

//   return (
//     <AdvertiseContext.Provider value={{ advertiseData, updateProgress }}>
//       {children}
//     </AdvertiseContext.Provider>
//   );
// };
