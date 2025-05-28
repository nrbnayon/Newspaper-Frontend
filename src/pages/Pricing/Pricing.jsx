import Navbar from '@/components/layout/Navbar'
import { Button } from '@/components/ui/button'
import { Badge } from 'lucide-react'
import React from 'react'

const Pricing = () => {
  return (
    <div >
        <Navbar/>
        {/* Pricing Section */}
        <div className=' mt-36 md:mt-10 lg:mt-0 flex justify-center  h-screen items-center  text-center '>
            <div className=''>
                <h3 className="text-xl md:text-2xl  font-semibold text-secondary mb-6">Pricing</h3>
                <div className="bg-[#f2f2f2] m-auto rounded-lg p-6 max-w-md">
                    <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-4 h-4 rounded-full border-2 border-tertiary flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        </div>
                        <span className="text-secondary  text-base md:text-lg font-medium">Monthly</span>
                    </div>
                    <div className="text-2xl md:text-4xl font-bold text-primary mb-2">
                        $4.99<span className="text-lg font-normal">/mn</span>
                    </div>
                    <div className="flex items-center text-sm justify-center space-x-2">
                        <span className="  text-red-500 line-through">$295</span>
                        <span className=" py-0.5 px-2 border rounded-2xl text-white bg-blue-500 hover:bg-blue-600">Save $140</span>
                    </div>
                    </div>

                    <div className="space-y-3 mb-6">
                    <div className="flex items-start text-left space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-sm text-secondary">Create your own automated bot effortlessly!</span>
                    </div>
                    <div className="flex items-start text-left space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-sm text-secondary">Join our community for seamless team collaboration!</span>
                    </div>
                    <div className="flex items-start text-left space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-sm text-secondary">Unlock the secrets of AI model training with us!</span>
                    </div>
                    <div className="flex items-start text-left space-x-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                        <span className="text-sm text-secondary">
                        Subscribe for insights on multilingual AI advancements!
                        </span>
                    </div>
                    </div>

                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Buy Now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing