import React, { Suspense } from 'react'
import { IQuote } from '@/types';
import QuotesCard, { LoadingQuotesCard } from '@/components/QuoteCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home",
    description: "Quotes, Author, History"
}

const Quotes = async () => {
    const response = await fetch('https://dummyjson.com/quotes?limit=24', { next: { revalidate: 60 } });
    const data = await response.json();
    const quotesData: IQuote[] = data?.quotes;

    return (
        <section className='section_quotes'>
            <div className="container">
                <div className='quotes_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Quotes</h1>
                    <Suspense fallback={<LoadingQuotesCard cardsPerPage={24} />}>
                        <QuotesCard quotesData={quotesData} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Quotes);