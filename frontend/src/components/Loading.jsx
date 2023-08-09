import { Skeleton } from '@/components/ui/skeleton'
import React from "react";
export default function Loading() {
    return (
        <div className='p-10 items-center rounded-md grid grid-cols-3 gap-12'>
            {Array.from({length: 12}, (_, i) => i + 1).map(id => {
                return (
                    <div key={id} className='m-5 col-span-1 '>
                        <Skeleton className='h-6 w-1/2 bg-gray-200 mb-2'></Skeleton>
                        <Skeleton className='h-6 w-1/2 bg-gray-200'></Skeleton>
                        <Skeleton className='h-80 w-full bg-gray-200 rounded-2xl'></Skeleton>
                    </div>
                )
            })}
        </div>
    )
}