import { createContext, useContext, useReducer } from "react";
import { reducerProduct } from "../reducer/reducer";

const ProductContext = createContext();

const ProductCart = ({ children }) => {
  const [{  products }, dispatch] = useReducer(reducerProduct, {
    products: [],
  });

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { useProductContext, ProductCart };