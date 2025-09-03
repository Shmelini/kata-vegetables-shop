import type { Dispatch, SetStateAction } from "react";

export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export type CartProductType = Product & {count: number}

export type CartContextType = {
    cart: CartProductType[];
    setCart: Dispatch<SetStateAction<CartProductType[]>>
}