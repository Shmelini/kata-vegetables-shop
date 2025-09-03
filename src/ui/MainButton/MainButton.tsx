import { Text, Button, Badge } from '@mantine/core';
import CartIcon from '../icons/cart.svg?react'

type MainButtonProps = {
    cartCount?: number;
    btnType: string;
    onClick: () => void
}

export function MainButton({cartCount, btnType, onClick}: MainButtonProps) {
    if(btnType === 'card') {
        return (
            <Button data-testid='card' justify='center' variant="filled" color="rgba(231, 250, 235, 1)" w={200} h={44} rightSection={<CartIcon fill="#3B944E"/>} onClick={onClick}>
                <Text c='rgba(59, 148, 78, 1)'>Add to cart</Text>
            </Button>
        )
    }
    else if(btnType === 'cart') {
        return (
            <Button data-testid='cart' justify='center' variant="filled" color="rgba(84, 180, 106, 1)" w={174} h={44} rightSection={<CartIcon fill="#FFFFFF"/>} onClick={onClick}>
                {cartCount != undefined && cartCount > 0 && <Badge variant="white" color="#212529" size='lg'  circle mr={10}>{cartCount}</Badge>}
                <Text c='#FFFFFF'>Cart</Text>
            </Button>
        )
    }
}