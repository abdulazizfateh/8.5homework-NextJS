import React, { Suspense } from 'react'
import { IPost } from '@/types';
import PostCard, { LoadingPosts } from '@/components/PostCard';

const Posts = async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=20", { next: { revalidate: 60 } });
    const data = await response.json();
    const postsData: IPost[] = data.posts;
    return (
        <section className='section_posts'>
            <div className="container">
                <div className='posts_wrapper'>
                    <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Posts</h1>
                    <Suspense fallback={<LoadingPosts cardsPerPage={20} />}>
                        <PostCard postsData={postsData} />
                    </Suspense>
                </div>
            </div>
        </section >
    )
}

export default React.memo(Posts);