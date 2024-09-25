import { useParams } from "react-router";
import { ItemDetailContainer } from "../components";
import { useItemById } from "../hooks";

export const ItemDetail = () => {
  const { id } = useParams();
  const { product } = useItemById(id);
  return <ItemDetailContainer item={product} />;
};
