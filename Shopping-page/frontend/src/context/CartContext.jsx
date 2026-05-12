import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../config";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    axios
      .get(`${BASE_URL}/api/cart/${user.email}`)
      .then((res) => {
        setCartItems(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCart = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/cart/add`, {
        email: user.email,
        productId: item.id,
        quantity: 1,
      });

      setCartItems((prev) => {
        const existing = prev.find((i) => i.product_id === item.id);

        if (existing) {
          return prev.map((i) =>
            i.product_id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          );
        }

        return [
          ...prev,
          {
            ...item,
            product_id: item.id,
            quantity: 1,
          },
        ];
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromCart = async (productId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("Removing product", productId, "for user", user.email);

    await axios.delete(
      `${BASE_URL}/api/cart/remove/${productId}/${user.email}`,
    );

    setCartItems((prev) => prev.filter((i) => i.product_id !== productId));
  };

  const updateQty = (productId, amount) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.product_id === productId
            ? { ...i, quantity: i.quantity + amount }
            : i,
        )
        .filter((i) => i.quantity > 0),
    );
  };

  const getCartItem = (productId) => {
    return cartItems.find((i) => i.product_id === productId);
  };

  const clearCart = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    await axios.delete(`${BASE_URL}/api/cart/clear/${user.email}`);

    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        getCartItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
