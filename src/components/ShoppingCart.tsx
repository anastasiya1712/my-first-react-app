import { ReactElement } from "react";

type ProductProps = {
  name: string;
  price: number;
};

const Product = (props: ProductProps): ReactElement => (
  <div>
    <p>{props.name}</p> {/* Гидрокостюм для дайвинга */}
    <span>{props.price}</span> {/* 14299 */}
  </div>
);

export const ShoppingCart = (): ReactElement => (
  <>
    <h1>Корзина товаров</h1>
    // изменился способ передачи пропсов
    <Product name="Гидрокостюм для дайвинга" price={14299} />
  </>
);
