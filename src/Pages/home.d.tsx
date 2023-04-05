import {AppbarView,
   CarouselView,
   Catagories, 
   Footer, 
   ShopView} from "../Components/index.d"



export default function Home() {
  return (
    <div> 
        <CarouselView/>
        <Catagories/>
        <ShopView/>
        <Footer/>
    </div>
  )
}