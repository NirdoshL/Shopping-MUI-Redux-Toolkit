import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider} from "react-router-dom"
import "./App.css"
import Home from "./Pages/home.d";
import ErrorScreen from "./Pages/noPath.d";
import About from "./Pages/about.d";
import Contact from "./Pages/contact.d";
import {AppbarView, CartView} from "./Components/index.d";
import Privacy from "./Pages/privacy.d";
import TermsConditions from "./Pages/termsConditions.d";
import Helper from "./Pages/helper.d";
import FooterSale from "./Pages/footerSale.d";
import FooterCode from "./Pages/footerCode.d";
import SpecificCatagory from "./Components/Catagories/page/specificCatagory.d";

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppbarView/>}>

    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="help-buy" element={<Helper/>}/>
    <Route path="privacypolicy" element={<Privacy/>}/>
    <Route path="terms" element={<TermsConditions/>}/>
    <Route path="cart" element={<CartView/>}/>
    <Route path="sale" element={<FooterSale/>}/>
    <Route path="code" element={<FooterCode/>}/>
    <Route path="*" element={<ErrorScreen/>}/>

    <Route path=":id"  element={<SpecificCatagory/>}/>
    
    </Route>
    
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
