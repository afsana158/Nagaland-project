import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) return;

    axios
      .get(`http://localhost:5000/api/wishlist/${user.email}`)
      .then((res) => setWishlist(res.data))
      .catch((err) => console.log(err));
  }, [user]);

  const addToWishlist = async (item) => {
    await axios.post("http://localhost:5000/api/wishlist/add", {
      email: user.email,
      productId: item.id,
    });

    setWishlist((prev) => [...prev, item]);
  };

  const removeFromWishlist = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/wishlist/remove/${id}/${user.email}`,
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
