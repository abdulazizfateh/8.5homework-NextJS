import React from 'react'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Header />
            <main className='site_main min-h-[90vh] pt-3.5 pb-20'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default React.memo(Layout);