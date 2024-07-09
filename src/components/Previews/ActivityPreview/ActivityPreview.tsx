import { Button } from 'flowbite-react';
import React from 'react'

interface ActivityPreviewProps {
    imageUrl: string;
    title: string;
    description: string;
}

function ActivityPreview({title, description, imageUrl} : ActivityPreviewProps) {
  return (
    <div className='h-full flex flex-col group hover:cursor-pointer'>
        <img src={imageUrl} alt="imageUrl" className='w-full object-contain rounded-t-lg'/>
        <div className='border-x-2 border-b-2 border-gray-100 border-solid rounded-b-lg p-4 flex-1
        group-hover:bg-gray-100 ease-in duration-100 transition-all'>
            <div className='flex flex-col h-full justify-between'>
                <div>
                    <h1 className='text-gray-700 font-semibold'>{title}</h1>
                    <h4 className='text-gray-600 max-h-24 text-wrap line-clamp-3'>{description}</h4>
                </div>
                <Button className='bg-primary mt-4 max-w-32'>გაიგე მეტი</Button>
            </div>
        </div>
    </div>
  )
}

export default ActivityPreview