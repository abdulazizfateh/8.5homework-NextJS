import ProductDetailCard from '@/components/ProductDetailCard';
import { IProduct } from '@/types';
import React from 'react'

const ProductDetail = async ({ params }: { params: { productDetail: string } }) => {
    const id = Number(params.productDetail);
    const response = await fetch(`https://dummyjson.com/products/${id}`);
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