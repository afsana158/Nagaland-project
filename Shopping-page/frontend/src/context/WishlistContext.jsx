import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../config"

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    axios
      .get(`${BASE_URL}/api/wishlist/${user.email}`)
      .then((res) => setWishlist(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  const addToWishlist = async (item) => {
    if (!user) {
    alert("Please login first");
    return;
    }

    await axios.post(`${BASE_URL}/api/wishlist/add`, {
      email: user.email,
      productId: item.id,
    });

    setWishlist((prev) => [...prev, item]);
  };

  const removeFromWishlist = async (id) => {
    if (!user) return;

    await axios.delete(
      `${BASE_URL}/api/wishlist/remove/${id}/${user.email}`,
    );

    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
