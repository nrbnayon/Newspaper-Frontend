import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Button } from "../../../components/ui/button"
import { Edit } from "lucide-react"
import { Link } from "react-router-dom"

const advertiseData = [
  {
    id: "1s5gf1",
    category: "National",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Unread",
  },
  {
    id: "1s5gf1",
    category: "Politics",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Read",
  },
  {
    id: "dsrg515",
    category: "Office Rent",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Approved",
  },
  {
    id: "452hd",
    category: "Technology",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Read",
  },
  {
    id: "4rs4g",
    category: "Office Rent",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Approved",
  },
  {
    id: "78er4qtf",
    category: "Entertainment",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Cancel",
  },
  {
    id: "r789tg7",
    category: "Health",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Approved",
  },
  {
    id: "1s5gf1",
    category: "Sports",
    details: "Dhanmondi Branc...",
    image: "Image",
    progress: "Cancel",
  },
]

function getProgressVariant(progress) {
  switch (progress) {
    case "Approved":
      return "default"
    case "Cancel":
      return "destructive"
    case "Read":
      return "secondary"
    case "Unread":
      return "outline"
    default:
      return "outline"
  }
}

function getProgressColor(progress) {
  switch (progress) {
    case "Approved":
      return "text-green-600"
    case "Cancel":
      return "text-red-600"
    case "Read":
      return "text-gray-500"
    case "Unread":
      return "text-gray-900"
    default:
      return "text-gray-900"
  }
}
export default function AdvertiseList() {
  return (
    <div className="w-full  mx-auto p-6">
      <h1 className="text-2xl font-semibold text-secondary mb-6">Advertise List</h1>

      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-[#E7EFFE] text-base">
            <TableRow>
              <TableHead className="font-medium text-secondary">T-ID</TableHead>
              <TableHead className="font-medium text-secondary">Category</TableHead>
              <TableHead className="font-medium  text-secondary">Details</TableHead>
              <TableHead className="font-medium text-secondary">Image</TableHead>
              <TableHead className="font-medium text-secondary">Progress</TableHead>
              <TableHead className="font-medium text-secondary">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-base">
            {advertiseData.map((item, index) => (
              <TableRow key={`${item.id}-${index}`} className={index % 2 === 0 ? "bg-white " : "bg-input-bg"}>
                <TableCell className="font-medium py-3 text-secondary">{item.id}</TableCell>
                <TableCell className="text-secondary">{item.category}</TableCell>
                <TableCell className="text-secondary">{item.details}</TableCell>
                <TableCell className="text-secondary">{item.image}</TableCell>
                <TableCell>
                  <span className={`font-medium ${getProgressColor(item.progress)}`}>{item.progress}</span>
                </TableCell>
                <TableCell>
                  <Link 
                      to="/dashboard/advertiseinfo"
                      variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4 text-gray-400" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}