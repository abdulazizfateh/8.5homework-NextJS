import React from 'react'
import { IRecipe } from '@/types'
import Image from 'next/image'

const RecipeDetailCard = ({ recipeData }: { recipeData: IRecipe }) => {

    return (
        <div className='recipe_detail_wrapper flex flex-col gap-2 sm:gap-3'>
            <div>
                <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl'>{recipeData.name}</h1>
            </div>
            <div className='recipe_detail_cards grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3'>
                <div className='recipe_detail_image self-start w-full h-[240px] min-[400px]:w-[80%] min-[480px]:w-full min-[480px]:min-h-[260px] md:min-h-[350px] lg:min-h-[400px]'>
                    <Image loading='eager' className='w-full h-full object-cover rounded-xl bg-gray-50 overflow-hidden' src={recipeData?.image} alt={recipeData.name} width={500} height={500} />
                </div>
                <div className='recipe_detail_ess_info self-start min-h-[240px] min-[480px]:min-h-[260px] md:min-h-[350px] lg:min-h-[400px] bg-gray-50 rounded-xl border border-gray-300 overflow-hidden flex flex-col'>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-highlight-blue text-lg md:text-xl italic'>Essential Information</p>
                    </div>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Cuisine: </span>{recipeData.cuisine}<span></span></p>
                    </div>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Cooking Time: </span>{recipeData.cookTimeMinutes}min<span></span></p>
                    </div>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Serving for: </span>{recipeData.servings} people</p>
                    </div>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>Difficulty: </span>{recipeData.difficulty}<span></span></p>
                    </div>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-sm max-md:text-[11px]'>
                            <span className='text-gray-600'>Best for: </span>
                            {recipeData.mealType.map((item, index) => (
                                <span key={index}>{item}{index + 1 === recipeData.mealType.length ? "" : ","} </span>
                            ))}
                        </p>
                    </div>
                    <div className='flex-1 flex items-end py-3 max-md:py-2 max-md:px-2.5 px-3.5'>
                        <p className='text-sm max-md:text-[11px]'>
                            <span className='text-gray-600'>Meal attributes: </span>
                            {recipeData.tags.map((item, index) => (
                                <span key={index}>{item}{recipeData.tags.length === index + 1 ? "" : ","} </span>
                            ))}
                        </p>
                    </div>
                </div>
                <div className='recipe_detail_instructions self-start min-h-[240px] min-[480px]:min-h-[260px] md:min-h-[350px] lg:min-h-[400px] min-[480px]:col-span-2 md:col-span-1 bg-gray-50 border border-gray-300 rounded-xl overflow-hidden flex flex-col'>
                    <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                        <p className='text-highlight-blue text-lg md:text-xl italic'>Instructions</p>
                    </div>
                    {
                        recipeData.instructions.map((item, index) => (
                            <div key={index} className={`py-3 max-md:py-2 max-md:px-2.5 px-3.5 ${index + 1 === recipeData.instructions.length ? "" : "border-b border-gray-300"}`}>
                                <p className='text-sm max-md:text-[11px]'>{index + 1}. {item}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='recipe_detail_ingredients self-start min-h-[240px] min-[480px]:min-h-[260px] md:min-h-[350px] lg:min-h-[400px] min-[480px]:col-span-2 md:col-span-1'>
                    <div className='bg-gray-50 border border-gray-300 rounded-2xl flex flex-col'>
                        <div className='py-3 max-md:py-2 max-md:px-2.5 px-3.5 border-b border-gray-300'>
                            <p className='text-highlight-blue text-lg md:text-xl italic'>Ingredients</p>
                        </div>
                        {
                            recipeData.ingredients.map((item, index) => (
                                <div key={index} className={`py-3 max-md:py-2 max-md:px-2.5 px-3.5 ${index + 1 === recipeData.ingredients.length ? "" : "border-b border-gray-300"}`}>
                                    <p className='text-sm max-md:text-[11px]'><span className='text-gray-600'>{index + 1}. </span>{item}<span></span></p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(RecipeDetailCard);