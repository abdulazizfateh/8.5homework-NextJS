export interface IQuote {
    id: number,
    author: string,
    quote: string
}

export interface IProduct {
    id: number,
    title: string,
    description: string,
    rating: number,
    stock: number,
    brand: string,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    thumbnail: string,
    images: string[],
    returnPolicy: string,
    minimumOrderQuantity: number
    price: number
}

export interface IComment {
    id: number,
    body: string,
    likes: number,
    user: {
        id: number,
        fullName: string,
        username: string
    }
}

export interface IPost {
    id: number,
    body: string,
    title: string
}

export interface IRecipe {
    id: number,
    caloriesPerServing: number,
    cookTimeMinutes: number,
    cuisine: string,
    difficulty: string,
    image: string,
    ingredients: string[],
    instructions: string[],
    mealType: string[],
    name: string,
    prepTimeMinutes: number,
    rating: number,
    reviewCount: number,
    servings: number,
    tags: string[],
}