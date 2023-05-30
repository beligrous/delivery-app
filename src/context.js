import { createContext, useContext, useState } from "react";

export const ShopContext = createContext({});

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState(() =>
    JSON.parse(localStorage.getItem("shop"))
  );

  const chooseShop = (data) => {
    setShop(data);
    localStorage.setItem("shop", JSON.stringify(data));
  };

  return (
    <ShopContext.Provider value={{ shop, chooseShop }}>
      {children}
    </ShopContext.Provider>
  );
};
