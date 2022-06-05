import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageComponent from "./components/homePageComponent/homePageComponent";
import ProductListComponent from "./components/productListComponent/productListComponent";
import NavigationBarComponent from "./components/navigationBarComponent/navigationBarComponent";
import ProductFormComponent from "./components/productFormComponent/productFormComponent";
import LoginPageComponent from "./components/loginPageComponent/loginPageComponent";
import ProductDetailPageComponent from "./components/productDetailPageComponent/productDetailPageComponent";
import PurchasePageComponent from "./components/purchasePageComponent/purchasePageComponent";
import PurchaseSuccessPageComponent from "./components/purchaseSuccessPageComponent/purchaseSuccessPageComponent";
import SignUpPageComponent from "./components/signUpPageComponent/signUpPageComponent";
import CategoryProductComponent from "./components/categoryProductsPage/categoryProductsPage";
import SaleHistoryPageComponent from "./components/saleHistoryPageComponent/saleHistoryPageComponent";

function App() {
  return <div>
    <BrowserRouter>
    <NavigationBarComponent></NavigationBarComponent>
    <Routes>
    <Route exact path="/" element={<HomePageComponent />} />
    <Route exact path="/list" element={<ProductListComponent />} />
    <Route exact path="/productForm" element={<ProductFormComponent />} />
    <Route exact path="/login" element={<LoginPageComponent />} />
    <Route exact path="/detail/:id" element={<ProductDetailPageComponent />} />
    <Route exact path="/purchase" element={<PurchasePageComponent />} />
    <Route exact path="/purchasesuccess" element={<PurchaseSuccessPageComponent />} />
    <Route exact path="/signup" element={<SignUpPageComponent />} />
    <Route exact path="/category/:category" element={<CategoryProductComponent />} />
    <Route exact path="/salehistory" element={<SaleHistoryPageComponent />} />
    </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
