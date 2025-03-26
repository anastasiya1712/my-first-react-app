import { ReactElement } from "react";

type CardProps = {
  title?: string;
  body?: string;
};

export function Card(props: CardProps): ReactElement {
  return (
    <div className="card">
      <CardTitle title={props.title} />
      <CardBody body={props.body} />
      <button type="button">В корзину</button>
    </div>
  );
}

function CardTitle(props: CardProps): ReactElement {
  return <h5 className="card-title">{props.title}</h5>;
}

function CardBody(props: CardProps): ReactElement {
  return (
    <>
      <div className="card-body">
        <p>{props.body}</p>
        <div className="price">Цена: oоооочень много</div>
      </div>
    </>
  );
}
