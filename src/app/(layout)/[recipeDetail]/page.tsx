import React from 'react'
import { IRecipe } from '@/types/index';
import RecipeDetailCard from '@/components/RecipeDetailCard';

const RecipeDetail = async ({ params }: { params: { recipeDetail: string } }) => {
    const id = await params.recipeDetail;
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipeData: IRecipe = await response.json();

    return (
        <section className='section_recipe_detail py-1 md:py-3'>
            <div className='container mx-auto'>
                <RecipeDetailCard recipeData={recipeData} />
            </div>
        </section>
    )
}

export default React.memo(RecipeDetail);