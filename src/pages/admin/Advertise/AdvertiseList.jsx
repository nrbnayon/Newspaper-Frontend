import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdvertiseContext } from './AdvertiseContext';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table";
import { Button } from "../../../components/ui/button";
import { Edit } from "lucide-react";

function getProgressVariant(progress) {
  switch (progress) {
    case "Approved":
      return "default";
    case "Cancel":
      return "destructive";
    case "Read":
      return "secondary";
    case "Unread":
      return "outline";
    default:
      return "outline";
  }
}

function getProgressColor(progress) {
  switch (progress) {
    case "Approved":
      return "text-green-600";
    case "Cancel":
      return "text-red-600";
    case "Read":
      return "text-gray-500";
    case "Unread":
      return "text-gray-900";
    default:
      return "text-gray-900";
  }
}

export default function AdvertiseList() {
  const { advertiseData, updateProgress } = useContext(AdvertiseContext);
  const navigate = useNavigate();

  const handleEdit = (item) => {
    if (item.progress === "Unread") {
      updateProgress(item.id, "Read");
    }
    navigate(`/dashboard/advertiseinfo/${item.id}`);
  };

  return (
    <div className="w-full mx-auto p-4 pt-4">
      <h1 className="text-2xl font-semibold text-secondary mb-6">Advertise List</h1>
      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-[#E7EFFE] text-base">
            <TableRow>
              <TableHead className="font-medium text-secondary">T-ID</TableHead>
              <TableHead className="font-medium text-secondary">Category</TableHead>
              <TableHead className="font-medium text-secondary">Details</TableHead>
              <TableHead className="font-medium text-secondary">Image</TableHead>
              <TableHead className="font-medium text-secondary">Progress</TableHead>
              <TableHead className="font-medium text-secondary">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {advertiseData.map((item, index) => (
              <TableRow key={`${item.id}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-input-bg"}>
                <TableCell className="font-medium py-3 text-secondary">{item.id}</TableCell>
                <TableCell className="text-secondary">{item.category}</TableCell>
                <TableCell className="text-secondary">{item.details}</TableCell>
                <TableCell className="text-secondary">{item.image}</TableCell>
                <TableCell>
                  <span className={`font-medium text-base ${getProgressColor(item.progress)}`}>
                    {item.progress}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                    <Edit className="h-4 w-4 cursor-pointer text-gray-400" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}