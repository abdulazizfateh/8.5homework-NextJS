// "use client"
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'
// import React from 'react'

// const CardImage = ({ image, path, id }: { image: string, path: string, id: number }) => {
//     const handleClick = () => {
//         router.push(`${path}/${id}`);
//         window.scrollTo(0, 0);
//     }

//     const router = useRouter();
//     return (
//         <div className='bg-gray-50 overflow-hidden'>
//             <Image onClick={handleClick} loading='lazy' className='w-full h-40 md:h-[265px] object-cover object-center cursor-pointer hover:scale-[1.01] duration-200 ease-out' src={image} alt="" width={400} height={246} />
//         </div>
//     )
// }

// export default React.memo(CardImage);