import { Image } from "@mantine/core";
import Logo from "../../ui/icons/logo.svg"
import s from './Header.module.scss'
import classNames from "classnames/bind";
import { MainButton } from "../../ui/MainButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context";
import { CartPopup } from "../../components/CartPopup/CartPopup";

const cx = classNames.bind(s);

export function Header() {
    const [popupState, setPopupState] = useState(false)

    const context= useContext(CartContext)
         if (!context) {
            throw new Error();
        }
        const {cart} = context


    return (
        <header className={cx('header')}>
            <a href="#">
                <Image src={Logo} alt="Vegetable Shop" w={209} h={33}/>
            </a>
            <MainButton btnType="cart" cartCount={cart.length} onClick={() => {setPopupState(!popupState)}} />
            <CartPopup active={popupState} cart={cart} />   
        </header>
    )
}