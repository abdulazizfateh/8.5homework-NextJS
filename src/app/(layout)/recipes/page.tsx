import React, { Suspense } from 'react'
import { IRecipe } from '@/types';
import RecipeCard, { LoadingRecipes } from '@/components/RecipeCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Recipes",
  description: "Meal, Preparation, Cuisine, Pizza, Burger, Fast Food",
};

const Recipes = async () => {
  const respone = await fetch("https://dummyjson.com/recipes?limit=20", { next: { revalidate: 60 } });
  const data = await respone.json();
  const recipesData: IRecipe[] = data.recipes;
  return (
    <section className='section_recipes'>
      <div className='container'>
        <h1 className='text-xl md:text-2xl font-semibold mb-3.5'>Recipes</h1>
        <Suspense fallback={<LoadingRecipes cardPerPage={20} />}>
          <RecipeCard recipesData={recipesData} />
        </Suspense>
      </div>
    </section>
  )
}

export default React.memo(Recipes);