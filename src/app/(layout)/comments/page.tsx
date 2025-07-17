import React, { Suspense } from 'react'
import { IComment } from '@/types';
import CommentCard, { LoadingComments } from '@/components/CommentCard';

const Comments = async () => {
    const response = await fetch("https://dummyjson.com/comments?limit=30", { next: { revalidate: 60 } });
    const data = await response.json();
    const commentsData: IComment[] = data.comments;
    return (
        <section className='section_comments'>
            <div className="container">
                <div className='comments_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Comments</h1>
                    <Suspense fallback={<LoadingComments cardsPerPage={30} />}>
                        <CommentCard commentsData={commentsData} />
                    </Suspense>
                </div>
            </div>
        </section>
    )
}

export default React.memo(Comments);