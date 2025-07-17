import React, { Suspense } from 'react'
import { IProduct } from '@/types';
import ProductsCard, { LoadingProducts } from '@/components/ProductCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Products",
    description: "Products, Home, Phone, Mobile, Computer, Food, Kitchen, Sport, Accessories",
};

const Products = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=20&skip=40", { next: { revalidate: 60 } });
    const data = await response.json();
    const productsData: IProduct[] = data.products;

    return (
        <section className='section_products'>
            <div className="container">
                <div className='products_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Products</h1>
                    <Suspense fallback={<LoadingProducts cardPerPage={20} />}>
                        <ProductsCard productsData={productsData} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Products);