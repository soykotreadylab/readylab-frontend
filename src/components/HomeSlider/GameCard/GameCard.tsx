// import React from 'react';
// import { Users } from 'lucide-react';
// import { GameCardProps } from '../../../utils/Interfaces/GameSlider/types';

import { GameCardProps } from "@/utils/Interfaces/GameSlider/types";
import { Users } from "lucide-react";

export const GameCard: React.FC<GameCardProps> = ({ 
  title, 
  userCount, 
  rating, 
  imageUrl, 
  className = '' 
}) => (
  <div className={`w-48 flex flex-col items-center bg-white rounded-lg p-4 mx-2 ${className}`}>
    <div className="relative w-32 h-32 mb-4">
      <img 
        src={imageUrl} 
        alt={title}
        className="w-full h-full rounded-2xl object-cover"
      />
    </div>
    <div className="w-full">
      <div className="bg-teal-600 rounded-lg p-2 mb-2">
        <p className="text-white text-center font-medium">{title}</p>
      </div>
      <div className="bg-navy-800 rounded-lg p-2 mb-2">
        <div className="flex items-center justify-center text-white">
          <Users size={16} className="mr-2" />
          <span>{userCount.toLocaleString()}</span>
        </div>
      </div>
      <div className="bg-yellow-400 rounded-lg p-2">
        <p className="text-center font-medium">{rating}</p>
      </div>
    </div>
  </div>
);
