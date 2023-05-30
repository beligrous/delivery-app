import { createContext, useContext, useState } from "react";

export const ShopContext = createContext({});

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [shop, setShop] = useState(null);

  const chooseShop = (data) => {
    setShop(data);
  };

  return (
    <ShopContext.Provider value={{ shop, chooseShop }}>
      {children}
    </ShopContext.Provider>
  );
};
