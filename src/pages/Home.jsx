import { ItemListContainer, Loader } from "../components";
import { useItems } from "../hooks";

export const Home = () => {
  const { itemsData, loading } = useItems("products");
  console.log("itemsData:", itemsData);
  return loading ? <Loader /> : <ItemListContainer products={itemsData} />;
};
