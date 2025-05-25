"use client"

import { useState } from "react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { cn } from "../../../lib/utils"

// Array to store advertisement data and images
const advertisementData = [
  {
    id: 1,
    serialNumber: "1as84qw1",
    category: "Politics",
    title: "Parliament Approves New Economic Reform Bill Amid Fierce Debate",
    description:
      "After hours of intense discussion, the national parliament passed a sweeping economic reform bill late Monday night. The legislation, aimed at reducing inflation and attracting foreign investment, sparked sharp division between ruling party members and the opposition, who claim it favors big corporations over working citizens.",
    images: [
      "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
      "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
      "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
      "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
      "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg",
      
    ],
  },
]

export default function AdvertiseInfo() {
  const [selectedAd] = useState(advertisementData[0])

  return (
    <div className="min-h-screen  px-2">
      <div className="w-full mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white   px-6">
          <h1 className="text-3xl font-semibold text-secondary">Advertise</h1>
        </div>


        <div className="bg-white   ">
          <h1 className="text-3xl font-semibold text-secondary">New Advertise Information</h1>
        </div>

        {/* Main Content */}
        <Card className={cn(
                " rounded-b-none rounded-t-none w-full",
                
              )}>
          
          <CardContent className="space-y-6 border-none">
            {/* Form Fields */}

            <div className="space-x-0 border-2 px-4 py-6">
                <div className="grid grid-cols-[1fr_3fr] gap-y-6">
                    <div className="font-medium text-xl text-primary">Serial Number</div>
                    <div className="text-xl text-secondary">{selectedAd.serialNumber}</div>

                    <div className="font-medium text-xl text-primary">Category</div>
                    <div className="text-xl font-medium text-primary">{selectedAd.category}</div>

                    <div className="font-medium text-xl text-primary">Title</div>
                    <div className="text-xl font-medium text-primary">{selectedAd.title}</div>

                    <div className="font-medium text-xl text-primary">Description</div>
                    <div className="text-xl text-tertiary">{selectedAd.description}</div>

                    
                </div>

                <div className="space-y-4 md:col-span-3">
                    <label className="text-xl font-medium text-primary">Upload Photo</label>
                    <div className="flex justify-between mt-3 p-2 border-2 flex-wrap gap-4">
                        {selectedAd.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-44 m-2 h-32 bg-gray-100  overflow-hidden border-2 border-gray-200 hover:border-gray-300 transition-colors"
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
            

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-6 ">
              <Button variant="destructive" className="px-8 py-6">
                Cancel
              </Button>
              <Button className="px-8 py-6 text-white bg-prtext-primary hover:bg-blue-800">Approve</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
