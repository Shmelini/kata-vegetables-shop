import type { Product } from '../../types/types';
import { Title, Loader } from '@mantine/core'
import s from './ProductList.module.scss'
import classNames from "classnames/bind";
import {ProductCard} from '../../components/ProductCard';

const cx = classNames.bind(s);

type ProductListProps = {
  products: Product[]
}

export function ProductList({products}: ProductListProps) {

    return (
        <main className={cx('main-content')}>
          {products.length === 0 ? <Loader data-testid="loader" color="#54B46A" size="xl" type="bars" pos="absolute" mx='auto' left={0} right={0}/> : 
          <>
          <Title order={2} mb={49} fz={32}>Catalog</Title>
            <div className={cx('main-content__product-list')}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
          </>
          }
        </main>
    )
}