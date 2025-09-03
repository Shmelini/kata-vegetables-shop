import { Image, ActionIcon } from '@mantine/core';
import PlusIcon from '../icons/plus.svg'
import MinusIcon from '../icons/minus.svg'
import s from './Stepper.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(s)

type StepperProps = {
    count: number;
    handleClick: (increase: boolean) => void;
}

export function Stepper({count, handleClick}: StepperProps) {
    return (
        <div className={cx('stepper')} data-testid='stepper'>
            <ActionIcon data-testid='stepper-down' variant="filled" color="rgba(222, 226, 230, 1)" w={30} h={30} radius={8} onClick={() => handleClick(false)}>
                <Image src={MinusIcon} w={12} h={12}/>
            </ActionIcon>
            <div data-testid='stepper-count'>{count}</div>
            <ActionIcon data-testid='stepper-up' variant="filled" color="rgba(222, 226, 230, 1)" w={30} h={30} radius={8} onClick={() => handleClick(true)}>
                <Image src={PlusIcon} w={12} h={12}/>
            </ActionIcon>
        </div>
    )
}