import { IProduct } from '@/types';
import React from 'react'

const ProductDetailCard = ({ data }: { data: IProduct }) => {
    console.log(data);

    return (
        <div className='product_detail_wrapper grid grid-cols-[2fr_1fr] grid-rows-[110px_110px_110px_110px_110px_110px] max-lg:grid-cols-1 max-md:grid-rows-[85px_85px_85px_85px_85px_85px] max-sm:grid-rows-[65px_65px_65px_65px_65px_65px] gap-5'>
            <div className='row-span-6 rounded-xl border border-gray-300 p-[15px] max-md:p-[10px] grid grid-cols-6 grid-rows-20 gap-[10px]'>
                <div className='col-span-6 row-span-1 px-[12px] flex items-center gap-[16px]'>
                    <p className='text-sm max-md:text-[11px]'><span className='underline'>{data?.rating} rating </span> - <span> {data?.stock} available for order</span>
                    </p>
                </div>
                <div className='col-span-6 row-span-15 max-md:row-span-14 max-sm:row-span-12 rounded-xl border border-gray-300 flex items-center justify-center'>
                    <img className='object-cover min-[340px]:object-contain w-full h-full' src={data?.images[0]} alt="" />
                </div>
                <div className='rounded-xl col-span-6 row-span-4 max-md:row-span-5 max-sm:row-span-7 border border-gray-300 p-3 max-md:p-2.5'>
                    <h1 className='text-2xl max-md:text-xl mb-[4px] line-clamp-1'>{data?.title}</h1>
                    <p className='text-sm max-md:text-xs capitalize line-clamp-6'>{data?.description}</p>
                </div>
            </div>
            <div className='row-span-4 rounded-xl border border-gray-300 overflow-hidden flex flex-col'>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                    <p className='text-highlight-blue text-[32px] max-md:text-[26px] max-sm:text-[24px]'>${data?.price}</p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                    <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Brand:</span> {data?.brand ? data.brand : "-"}<span></span></p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                    <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Availability status:</span> {data?.availabilityStatus}</p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                    <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Return Policy:</span> {data?.returnPolicy}<span></span></p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                    <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Shipping Information:</span> {data?.shippingInformation}<span></span></p>
                </div>
                <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                    <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Warranty Information:</span> {data?.warrantyInformation}<span></span></p>
                </div>
                <div className='py-3 max-md:py-2.5 flex-1 max-xl:flex-col max-lg:flex-row max-sm:flex-col flex items-end gap-0.5 md:gap-1 max-md:px-2.5 px-3.5 text-primary-text'>
                    <div className='max-xl:flex-1 max-xl:mb-1 xl:flex-1/7 max-lg:mb-0 max-sm:mb-1 flex items-end'>
                        <button className='w-9 md:w-10 lg:flex-1 h-9 md:h-10 lg:h-11 rounded-md md:rounded-lg bg-[#05a6f4] text-white flex items-center justify-center cursor-pointer'>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductDetailCard);