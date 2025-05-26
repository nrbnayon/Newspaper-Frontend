import { createContext, useState } from 'react';

// Sample data (in a real project, these would be imported from separate files)
const advertiseData1 = [
  {
    id: "1s5gf1",
    serialNumber: "1s5gf1",
    category: "National",
    title: "National News",
    description: "Description for national news",
    details: "Dhanmondi Branc...",
    image: "Image",
    images: ["https://example.com/image1.jpg"],
    progress: "Unread",
  },
  {
    id: "dsrg515",
    serialNumber: "dsrg515",
    category: "Office Rent",
    title: "Office Space Available",
    description: "Prime location office space",
    details: "Dhanmondi Branc...",
    image: "Image",
    images: ["https://example.com/image2.jpg"],
    progress: "Approved",
  },
];

const advertiseData2 = [
  {
    id: "2",
    serialNumber: "2",
    category: "Politics",
    title: "Parliament Approves New Economic Reform Bill",
    description: "After hours of intense discussion...",
    details: "Dhanmondi Branc...",
    image: "Image",
    images: ["https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg"],
    progress: "Read",
  },
];

export const AdvertiseContext = createContext();

export const AdvertiseProvider = ({ children }) => {
  const [advertiseData, setAdvertiseData] = useState([
    ...advertiseData1,
    ...advertiseData2,
  ]);

  const updateProgress = (id, newProgress) => {
    setAdvertiseData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, progress: newProgress } : item
      )
    );
  };

  return (
    <AdvertiseContext.Provider value={{ advertiseData, updateProgress }}>
      {children}
    </AdvertiseContext.Provider>
  );
};