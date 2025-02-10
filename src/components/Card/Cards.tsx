// import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import cardImage from '../../assets/PocemonImages/SV08_EN_4.png';

const ImageCardGrid = () => {
  const cards = [
    {
      title: '0/15',
      description: 'Beautiful landscape photography',
    },
    {
      title: '0/10',
      description: 'Modern building design',
    },
    {
      title: '0/2',
      description: 'Adventure awaits',
    },
    {
        title: '0/15',
        description: 'Beautiful landscape photography',
      },
      {
        title: '0/10',
        description: 'Modern building design',
      },
      {
        title: '0/2',
        description: 'Adventure awaits',
      },
      {
        title: '0/15',
        description: 'Beautiful landscape photography',
      },
      {
        title: '0/10',
        description: 'Modern building design',
      },
      {
        title: '0/2',
        description: 'Adventure awaits',
      },
        
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={cardImage} // Use the imported StaticImageData
                alt={card.title}
                layout="fill" // Automatically sizes the image to fill its container
                objectFit="cover" // Ensures the image is properly cropped
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;
