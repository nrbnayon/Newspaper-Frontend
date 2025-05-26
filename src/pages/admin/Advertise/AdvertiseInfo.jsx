import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AdvertiseContext } from "./AdvertiseContext";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { cn } from "../../../lib/utils";
import Toast from "../../../components/ui/toast";

export default function AdvertiseInfo() {
  const { id } = useParams();
  const { advertiseData, updateProgress } = useContext(AdvertiseContext);
  const selectedAd = advertiseData.find((item) => item.id === id);
  const [showToast, setShowToast] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  if (!selectedAd) {
    return <div>Advertisement not found</div>;
  }

  const handleApprove = () => {
    updateProgress(selectedAd.id, "Approved");
    setShowToast(true);
    setIsDelete(false);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleCancel = () => {
    updateProgress(selectedAd.id, "Cancel");
    setShowToast(true);
    setIsDelete(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="min-h-screen pt-4 px-4">
      <div className="w-full mx-auto space-y-6">
        <Toast
          message={isDelete ? "Canceled successfully!" : "Approved successfully!"}
          isVisible={showToast}
          onClose={() => setShowToast(false)}
          isDelete={isDelete}
        />
        <div className="bg-white">
          <h1 className="text-2xl font-semibold text-secondary">Advertise</h1>
        </div>
        <div className="bg-white">
          <h1 className="text-xl font-semibold text-secondary">New Advertise Information</h1>
        </div>
        <Card className={cn("rounded-b-none rounded-t-none w-full")}>
          <CardContent className="space-y-6 border-none">
            <div className="space-x-0 border-2 px-4 py-6">
              <div className="grid grid-cols-[1fr_3fr] gap-y-6">
                <div className="font-medium text-base text-primary">Serial Number</div>
                <div className="text-base text-secondary">{selectedAd.serialNumber}</div>
                <div className="font-medium text-base text-primary">Category</div>
                <div className="text-base font-medium text-primary">{selectedAd.category}</div>
                <div className="font-medium text-base text-primary">Title</div>
                <div className="text-base font-medium text-primary">{selectedAd.title}</div>
                <div className="font-medium text-base text-primary">Description</div>
                <div className="text-base text-tertiary">{selectedAd.description}</div>
              </div>
              <div className="space-y-4 mt-5 md:col-span-3">
                <label className="text-base font-medium text-primary">Upload Photo</label>
                <div className="flex justify-around mt-3 p-2 border-2 flex-wrap gap-4">
                  {selectedAd.images.map((image, index) => (
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
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-6">
              <Button
                onClick={handleCancel}
                variant="destructive"
                className="px-8 py-5 cursor-pointer"
                disabled={ selectedAd.progress === "Cancel"}
              >
                Cancel
              </Button>
              <Button
                onClick={handleApprove}
                className="px-8 py-5 cursor-pointer text-white bg-primary hover:bg-blue-800"
                disabled={selectedAd.progress === "Approved" || selectedAd.progress === "Cancel"}
              >
                {selectedAd.progress === "Approved" ? "Approved" : "Approve"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}