import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../components/ui/table"
import { Button } from "../../../components/ui/button"
import { Edit } from "lucide-react"

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
    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-700 mb-6">Advertise List</h1>

      <div className="rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-blue-50">
            <TableRow>
              <TableHead className="font-medium text-gray-600">T-ID</TableHead>
              <TableHead className="font-medium text-gray-600">Category</TableHead>
              <TableHead className="font-medium text-gray-600">Details</TableHead>
              <TableHead className="font-medium text-gray-600">Image</TableHead>
              <TableHead className="font-medium text-gray-600">Progress</TableHead>
              <TableHead className="font-medium text-gray-600">Edit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {advertiseData.map((item, index) => (
              <TableRow key={`${item.id}-${index}`} className={index % 2 === 0 ? "bg-white" : "bg-input-bg"}>
                <TableCell className="font-medium text-gray-700">{item.id}</TableCell>
                <TableCell className="text-gray-600">{item.category}</TableCell>
                <TableCell className="text-gray-600">{item.details}</TableCell>
                <TableCell className="text-gray-600">{item.image}</TableCell>
                <TableCell>
                  <span className={`font-medium ${getProgressColor(item.progress)}`}>{item.progress}</span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4 text-gray-400" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}