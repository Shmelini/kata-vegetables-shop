import { Text, Group, Image, Flex } from "@mantine/core";
import type { CartProductType } from "../../types/types";
import { CartProduct } from "../../ui/CartProduct";
import s from './CartPopup.module.scss'
import classNames from "classnames/bind";
import CartEmpty from '../../ui/icons/cart_empty.svg'
import { useEffect, useState } from "react";

const cx = classNames.bind(s)

type CartPopupProps= {
    active: boolean;
    cart: CartProductType[];
}

export function CartPopup({active, cart}:CartPopupProps) {
        const [sum, setSum] = useState(0)

        function handleSumChange() {
            let total = 0
            cart.forEach((elem) => {
                total += elem.price * elem.count;
            })
            setSum(total)
        }

        useEffect(() => {
            handleSumChange()
        }, [cart])

        return (
        <div data-testid='cart-popup' className={cx('popup-container', cart.length === 0 && 'popup-container--empty' ,active && 'popup-container--active')}>
            {cart.length > 0 ?
            <>
                <ul className={cx('cart-list')}>
                {cart.map((product) => (
                    <CartProduct key={product.id} product={product} />
                ))}
                </ul>
                <div className={cx('cart-list__total')}>
                    <Group justify="space-between">
                        <Text>Total</Text>
                        <Text>$ {sum}</Text>
                    </Group>
                </div>
            </>:
                <Flex justify="center" align='center' direction='column' gap={24}>
                    <Image src={CartEmpty} w={118} h={107}/>
                    <Text c='#868E96' fw="normal">You cart is empty!</Text>
                </Flex>}
        </div>
    )
}