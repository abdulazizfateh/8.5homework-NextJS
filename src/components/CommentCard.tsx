import React from 'react'
import { IComment } from '@/types';
import { PiHeartLight } from 'react-icons/pi';

export const LoadingComments = ({ cardsPerPage }: { cardsPerPage: number }) => {
    const loadingArray = Array(cardsPerPage).fill("");
    return (
        <div className='comments_cards grid grid-cols-2 auto-rows-[110px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                loadingArray.map((_, index) => (
                    <div key={index} className='flex flex-col gap-2.5 border border-gray-100 bg-gray-50 rounded-lg p-2.5'>
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-start justify-between gap-1.5'>
                                <div className='flex flex-col w-full gap-1 z-20'>
                                    <div className='w-[96%] h-[14px] sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                        <div className="absolute inset-0 shimmer z-10"></div>
                                    </div>
                                    <div className='w-2/4 h-[14px] sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                        <div className="absolute inset-0 shimmer z-10"></div>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[2px]'>
                                    <PiHeartLight className='text-md shrink-0 cursor-pointer' />
                                    <div className='w-4 h-4 rounded-xs'></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex-1 flex items-end justify-between gap-1.5'>
                            <div className='flex w-full flex-col gap-1'>
                                <div className='w-3/5 xl:w-2/5 h-[14px] sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
                                    <div className="absolute inset-0 shimmer z-10"></div>
                                </div>
                                <div className='w-2/4 xl:w-2/6 lg:w-1/3 h-[14px] sm:h-4 bg-[#ecedee] rounded-lg relative overflow-hidden'>
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

const CommentCard = ({ commentsData }: { commentsData: IComment[] }) => {
    return (
        <div className='comments_cards grid grid-cols-2 auto-rows-[110px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5'>
            {
                commentsData?.map(item => (
                    <div key={item.id} className='flex flex-col gap-2.5 border border-gray-100 bg-gray-50 rounded-lg p-2.5'>
                        <div className='flex items-start justify-between gap-1.5'>
                            <p className='text-xs sm:text-sm line-clamp-2'>{item.body}</p>
                            <div className='flex items-center gap-[2px]'>
                                <PiHeartLight className='text-md shrink-0 cursor-pointer' />
                                <p className='text-xs w-4'>{item.likes}</p>
                            </div>
                        </div>
                        <div className='flex-1 flex items-end justify-between gap-1.5'>
                            <div className='flex flex-col'>
                                <p className='text-xs sm:text-sm text-gray-500'>{item.user.fullName}</p>
                                <p className='text-xs sm:text-sm text-[#05a6f4] lowercase cursor-pointer'>@{item.user.username}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(CommentCard);
