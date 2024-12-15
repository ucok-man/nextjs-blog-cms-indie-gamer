import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren & {
  condition: boolean;
  otherwise?: ReactNode;
};

export function If({ condition, otherwise, children }: Props) {
  return <>{condition ? children : otherwise}</>;
}

type Iterate<T> = {
  items: T[] | readonly T[];
  render: (item: T, index: number) => React.ReactNode;
};

export function Iterate<T>({ items, render }: Iterate<T>): JSX.Element {
  return <>{items.map((item, index) => render(item, index))}</>;
}
