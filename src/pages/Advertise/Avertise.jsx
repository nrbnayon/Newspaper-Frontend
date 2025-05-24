import {  Plus } from 'lucide-react';
import React from 'react';
import { Card, CardContent } from "../../components/ui/card"
import { Link } from 'react-router-dom';

const AdvertiseCard = ({ serialNumber, category, title, description }) => {
  return (
    <div className="bg-white   rounded">

    <Card className="w-full  border rounded-md">
      <CardContent className="p-6">
        <div className="grid grid-cols-[1fr_2fr] gap-y-6">
          <div className="font-medium text-xl text-primary">Serial Number</div>
          <div className="text-xl text-secondary">{serialNumber}</div>

          <div className="font-medium text-xl text-primary">Category</div>
          <div className="text-xl font-medium text-primary">{category}</div>

          <div className="font-medium text-xl text-primary">Title</div>
          <div className="text-xl font-medium text-primary">{title}</div>

          <div className="font-medium text-xl text-primary">Description</div>
          <div className="text-xl text-tertiary">{description}</div>
        </div>
      </CardContent>
    </Card>
      
    </div>
  );
};

const Advertise = () => {
  const advertisements = [
    {
      serialNumber: '1as84qw1',
      category: 'Politics',
      title: 'Parliament Approves New Economic Reform Bill Amid Fierce Debate',
      description: 'After hours of intense discussion, the national parliament passed a sweeping economic reform bill late Monday night. The legislation, aimed at reducing inflation and attracting foreign investment, sparked sharp division bet...',
    },
    {
      serialNumber: '2xy97pq2',
      category: 'Technology',
      title: 'New AI Breakthrough Unveiled at Tech Summit',
      description: 'A groundbreaking AI model was revealed at this year’s Tech Summit, promising to revolutionize industries with its advanced capabilities. Experts predict significant impacts on automation and data analysis in the coming years...',
    },
  ];

  return (
    <div className="flex-1 p-8 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-secondary">Advertise</h2>
        <Link to="/dashboard/newadvertise"  className="flex text-3xl font-bold bg-transparent items-center text-secondary px-4 py-2 rounded">
          <Plus className="h-7 w-7 border-2  border-secondary rounded-md mr-2" />
          New Advertise
        </Link>
      </div>
      <div className="grid w-full grid-cols-2 gap-10">
        {advertisements.map((ad, index) => (
          <AdvertiseCard key={index} {...ad} />
        ))}
      </div>
    </div>
  );
};

export default Advertise;