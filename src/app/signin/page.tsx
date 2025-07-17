"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const SignIn = () => {
  const router = useRouter();
  return (
    <section className='section_signin'>
      <div className="container">
        <div className='signin_wrapper'>
          <div className='h-16 md:h-[70px] flex items-center'>
            <button onClick={() => router.back()}>
              <IoIosArrowBack className='text-xl md:text-2xl cursor-pointer' />
            </button>
          </div>
          <div className="signin_form_wrapper w-full h-[90vh] flex flex-col gap-2 items-center justify-center">
            <h1 className='text-xl sm:text-2xl lg:text-3xl'>Sign in</h1>
            <div className='create_modal relative w-[80%] sm:w-[400px] min-h-[160px] p-4 md:p-6'>
              <div className='form_create_edit'>
                <form>
                  <div className='flex flex-col gap-2 sm:gap-5'>
                    <div className='flex flex-col gap-1'>
                      <label className='text-primary'>Username *</label>
                      <input className='h-10 px-2 text-primary border border-gray-300 focus:border-primary outline-none rounded-lg' type="text" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className='text-primary'>Password *</label>
                      <input className='h-10 px-2 text-primary border border-gray-300 focus:border-primary outline-none rounded-lg' type="password" />
                    </div>
                    <button className='w-full bg-[#05a6f4] text-white h-10 rounded-2xl cursor-pointer'>
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(SignIn);