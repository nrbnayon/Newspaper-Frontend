import { Edit } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="flex-1 md:px-30  px-1">
            <h2 className="text-4xl font-bold text-secondary mb-8">My Profile</h2>

            <div className="flex mb-12">
              <div className="relative mr-6">
                <div className="h-24 w-24 bg-gray-400 rounded-full overflow-hidden relative">
                  <image
                    src="https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="object-cover bg-gray-300"
                  />
                </div>
                <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-[#e2e2e2]">
                  <Edit className="h-4 w-4 text-[#505050]" />
                </button>
              </div>

              <div className='mt-4'>
                <span className="inline-block bg-[#d1e9ff] text-[#00254a] px-3 py-1 rounded-full text-sm mb-2">
                  User
                </span>
                <h3 className="text-3xl font-bold text-secondary">Mahdee Rashid</h3>
              </div>

              <div className="ml-auto mr-12 space-y-2">
                <div>
                  <p className="text-primary text-lg">E-mail <span className='text-tertiary ml-8'>polash@gmail.com</span></p>
                 
                </div>
                <div>
                    <p className="text-primary text-lg">Phone <span className='text-tertiary ml-8'>+880 1636 828200</span></p>
                  
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="text-xl text-secondary mb-4">Name</h4>
                <div className="relative">
                  <input
                    type="text"
                    value="Mahdee Rashid"
                    className="w-full p-4 text-2xl text-primary bg-input-bg border border-placeholder-color rounded"
                  />
                  <button className="absolute right-2 bg-transparent top-1/2 transform -translate-y-1/2">
                    <Edit className="h-6 w-6 text-[#505050]" />
                  </button>
                </div>
              </div>

              <div>
                <h4 className="text-xl text-secondary mb-4">E-mail</h4>
                <div className="relative">
                  <input
                    type="email"
                    value="mahdeerashid@gmail.com"
                    className="w-full p-4 text-2xl text-primary bg-input-bg border border-placeholder-color rounded"
                  />
                  <button className="absolute bg-transparent right-2 top-1/2 transform -translate-y-1/2">
                    <Edit className="h-6 w-6 text-[#505050]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border bg-[#FAFDFF] border-red-500 rounded p-6">
              <h4 className="text-3xl font-bold text-red-500 mb-4">Delete Account</h4>
              <div className="flex justify-between items-center">
                <div>
                    <p className="text-secondary text-2xl">
                  Contact our  
                  <Link href="#" className="text-primary px-2 underline">
                    support team
                  </Link>
                    to process the deletion of your account.
                </p>
                </div>
                <div>
                    <button className="bg-red-500 text-white px-6 py-3 mb-11 justify-center rounded hover:bg-opacity-90">Apply Delete</button>
                </div>
              </div>
            </div>
        </div>
  )
}

export default Profile