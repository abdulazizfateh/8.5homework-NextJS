import React from 'react'
import { IRecipe } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export const LoadingRecipes = ({ cardPerPage }: { cardPerPage: number }) => {
    const loadingArray: string[] = Array(cardPerPage).fill("");
    return (
        <div className='recipes_cards grid grid-cols-2 min-[440px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='border border-gray-100 rounded-lg'>
                        <div className='h-40 md:h-[265px] bg-gray-50 relative overflow-hidden'>
                            <div className='absolute z-10 shimmer inset-0'></div>
                        </div>
                        <div className='h-[64px]'>
                            <div className='p-2.5 flex flex-col gap-2'>
                                <div className='flex items-center justify-between'>
                                    <div className='w-1/3 md:w-1/4 h-[14px] sm:h-[18px] bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                        <div className='absolute z-10 shimmer inset-0'></div>
                                    </div>
                                </div>
                                <div className='w-3/4 md:w-2/4 h-[14px] sm:h-[18px] bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                    <div className='absolute z-10 shimmer inset-0'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const RecipeCard = ({ recipesData }: { recipesData: IRecipe[] }) => {
    return (
        <div className='recipes_cards grid grid-cols-2 min-[440px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                recipesData?.map(item => (
                    <div key={item.id} className='border border-gray-100 rounded-lg overflow-hidden'>
                        <div className='bg-gray-50 overflow-hidden'>
                            <Link href={`recipes/${item.id}`}>
                                <Image loading='lazy' className='w-full h-40 md:h-[265px] object-cover object-center cursor-pointer hover:scale-[1.01] duration-200 ease-out' src={item.image} alt={item.name} width={400} height={246} />
                            </Link>
                        </div>
                        <div className='p-2.5 flex flex-col gap-1'>
                            <p className='text-xs sm:text-sm'>{item.name}</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-xs sm:text-sm font-medium'><span className='text-gray-600 font-normal'>Servings: </span>{item.servings}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(RecipeCard);