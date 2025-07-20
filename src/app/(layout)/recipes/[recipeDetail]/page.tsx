import React from 'react'
import { IRecipe } from '@/types/index';
import RecipeDetailCard from '@/components/RecipeDetailCard';

const RecipesDetail = async ({ params }: { params: Promise<{ recipeDetail: string }> }) => {
    const { recipeDetail } = await params;
    const response = await fetch(`https://dummyjson.com/recipes/${recipeDetail}`);
    const recipeData: IRecipe = await response.json();

    return (
        <section className='section_recipe_detail py-1 md:py-3'>
            <div className='container mx-auto'>
                <RecipeDetailCard recipeData={recipeData} />
            </div>
        </section>
    )
}

export default React.memo(RecipesDetail);