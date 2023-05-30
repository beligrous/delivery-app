// import { useContext } from "react";
import { MainContainer } from "./App.styled";
import page from "./pages";
import comp from "./components";
import { Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context";

function App() {
  return (
    <MainContainer>
      <ShopProvider>
        <comp.Header />
        <Routes>
          <Route path="/" element={<page.Home />}>
            <Route path=":id" element={<page.ShopPage />} />
          </Route>
          <Route path="/cart" element={<page.Cart />} />
          <Route path="*" element={<page.NotFound />} />
        </Routes>
      </ShopProvider>
    </MainContainer>
  );
}

export default App;
