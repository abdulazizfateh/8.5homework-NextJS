import ProductDetailCard from '@/components/ProductDetailCard';
import { IProduct } from '@/types';
import React from 'react'

const ProductDetail = async ({ params }: { params: Promise<{ productDetail: string }> }) => {
    const { productDetail } = await params;
    const response = await fetch(`https://dummyjson.com/products/${productDetail}`);
    const data: IProduct = await response.json();

    return (
        <section className='section_product_detail py-1 md:py-3'>
            <div className='container mx-auto'>
                <div className='product_detail_wrapper'>
                    <ProductDetailCard data={data} />
                </div>
            </div>
        </section>
    )
}

export default React.memo(ProductDetail);