import { createContext, useState, type PropsWithChildren } from "react";
import type { CartContextType, CartProductType } from "../types/types";

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartContextProvider({children}: PropsWithChildren) {
    const [cart, setCart] = useState<CartProductType[]>([])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}