import Toast from '../../components/ui/toast'
import { Edit } from 'lucide-react'
import { useState, useRef } from 'react'

const Profile = () => {
  const [profileImage, setProfileImage] = useState("https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg")
  const [name, setName] = useState("Mahdee Rashid")
  const [email, setEmail] = useState("mahdeerashid@gmail.com")
  const [isEditingName, setIsEditingName] = useState(false)
  const [isEditingEmail, setIsEditingEmail] = useState(false)

  const [showToast, setShowToast] = useState(false)
  
  const fileInputRef = useRef(null)

  const handleImageEdit = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleNameEdit = () => {
    setIsEditingName(!isEditingName)
  }

  const handleEmailEdit = () => {
    setIsEditingEmail(!isEditingEmail)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleDelete = () => {
     setShowToast(true)
    // Auto hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <div className="flex-1 md:px-30 px-1 pt-4 relative">
      {/* Delete Success Message */}
      <Toast 
              message="Deleted successfully!" 
              isVisible={showToast} 
              onClose={() => setShowToast(false)} 
              isDelete= "true"
            />
      
      <h2 className="text-2xl font-bold text-secondary mb-8">My Profile</h2>
      
      {/* Profile Section - Responsive Layout */}
      <div className="flex flex-col lg:flex-row mb-12 gap-6">
        {/* Profile Image and Basic Info */}
        <div className="flex flex-row justify-baseline  items-start sm:items-center gap-4">
          <div className="relative">
            <div className="rounded-full overflow-hidden relative 
                              h-16 w-16       
                              md:h-20 md:w-20 
                              lg:h-24 lg:w-24
                            bg-gray-400">
              <img
                src={profileImage}
                alt="Profile"
                width={96}
                height={96}
                className="object-cover bg-gray-300 w-full h-full"
              />
            </div>
            <button 
              onClick={handleImageEdit}
              className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-[#e2e2e2]"
            >
              <Edit className="h-4 w-4 cursor-pointer text-[#505050]" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className='mt-0 sm:mt-4'>
            <span className="inline-block bg-[#d1e9ff] text-[#00254a] px-3 py-1 rounded-full text-sm mb-2">
              User
            </span>
            <h3 className="text-xl font-bold text-secondary">{name}</h3>
          </div>
        </div>

        {/* Contact Information - Responsive */}
        <div className="lg:ml-auto lg:mr-12 space-y-2 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-primary text-base min-w-0 sm:min-w-[80px]">E-mail</p>
            <span className='text-tertiary sm:ml-8 break-all'>{email}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-primary text-base min-w-0 sm:min-w-[80px]">Phone</p>
            <span className='text-tertiary sm:ml-8'>+880 1636 828200</span>
          </div>
        </div>
      </div>

      {/* Form Fields - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
        <div>
          <h4 className="text-xl text-secondary mb-4">Name</h4>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              readOnly={!isEditingName}
              className={`w-full p-2 pr-10 text-base text-primary bg-input-bg border border-placeholder-color rounded ${
                isEditingName ? 'bg-white' : 'bg-input-bg'
              }`}
            />
            <button 
              onClick={handleNameEdit}
              className="absolute right-2 bg-transparent top-1/2 transform -translate-y-1/2"
            >
              <Edit className="h-6 w-6 cursor-pointer text-secondary" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-xl text-secondary mb-4">E-mail</h4>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              readOnly={!isEditingEmail}
              className={`w-full p-2 pr-10 text-base text-primary bg-input-bg border border-placeholder-color rounded ${
                isEditingEmail ? 'bg-white' : 'bg-input-bg'
              }`}
            />
            <button 
              onClick={handleEmailEdit}
              className="absolute bg-transparent right-2 top-1/2 transform -translate-y-1/2"
            >
              <Edit className="h-6 w-6 cursor-pointer text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account Section - Responsive */}
      <div className="border bg-[#FAFDFF] border-red-500 rounded p-4 sm:p-6">
        <h4 className="text-xl font-bold text-red-500 mb-4">Delete Account</h4>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-secondary text-base">
              Contact our  
              <a href="#" className="text-primary px-2 underline">
                support team
              </a>
              to process the deletion of your account.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button 
              onClick={handleDelete}
              className="bg-red-500 cursor-pointer text-white px-4 py-2 justify-center rounded hover:bg-opacity-90 w-full sm:w-auto"
            >
              Apply Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile