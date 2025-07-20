import React from 'react'
import { IProduct } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const LoadingProducts = ({ cardPerPage }: { cardPerPage: number }) => {
    const loadingArray: string[] = Array(cardPerPage).fill("");
    return (
        <div className='products_cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg relative overflow-hidden">
                        <div className="relative h-40 md:h-[246px] bg-gray-50 overflow-hidden">
                            <div className="absolute inset-0 shimmer z-10"></div>
                        </div>
                        <div className="h-[64px]">
                            <div className="p-2.5 flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <div className="w-1/3 md:w-1/4 h-[14px] sm:h-[18px] bg-[#ecedee] rounded-lg relative overflow-hidden">
                                        <div className="absolute inset-0 shimmer z-10"></div>
                                    </div>
                                </div>
                                <div className="w-3/4 md:w-2/4 h-[14px] sm:h-[18px] bg-[#ecedee] rounded-lg relative overflow-hidden">
                                    <div className="absolute inset-0 shimmer z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const ProductCard = ({ productsData }: { productsData: IProduct[] }) => {
    return (
        <div className='products_cards grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                productsData?.map(item => (
                    <div key={item.id} className='border border-gray-100 rounded-lg'>
                        <div className='bg-gray-50'>
                            <Link href={`products/${item.id}`}>
                                <Image loading='lazy' src={item.thumbnail} alt={item.title} width={400} height={246} className='w-full h-40 md:h-[246px] object-contain cursor-pointer hover:scale-[1.03] duration-200 ease-out' />
                            </Link>
                        </div>
                        <div className='p-2.5 flex flex-col gap-1'>
                            <div className='flex items-center justify-between'>
                                <p className='text-xs sm:text-sm font-medium'>${item.price}</p>
                            </div>
                            <p className='text-xs sm:text-sm'>{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(ProductCard);