import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState([
    {
      id: 1,
      name: "Naga Tribal Necklace",
      category: "jewellery",
      price: 2499,
    },
    {
      id: 2,
      name: "Bamboo Handcrafted Basket",
      category: "naga crafts",
      price: 1799,
    },
    {
      id: 3,
      name: "Handwoven Shawl",
      category: "handlooms",
      price: 3999,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProductContext.Provider
      value={{ products, searchQuery, setSearchQuery, filteredProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
