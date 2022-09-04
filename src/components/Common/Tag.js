import { Sale, Best, Soldout, Pending, MD } from './TagStyled';

export function SaleTag() {
  return <Sale>SALE</Sale>;
}

export function BestTag() {
  return <Best>BEST !</Best>;
}

export function SoldoutTag() {
  return <Soldout>SOLDOUT</Soldout>;
}

export function PendingTag() {
  return <Pending>판매대기</Pending>;
}

export function MDTag() {
  return <MD>MD's Pick</MD>;
}
