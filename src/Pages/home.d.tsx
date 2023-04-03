import {AppbarView,
   CarouselView,
   Catagories, 
   Footer, 
   ShopView} from "../Components/index.d"



export default function Home() {
  return (
    <div>
        <AppbarView/>
        <CarouselView/>
        <Catagories/>
        <ShopView/>
        <Footer/>
    </div>
  )
}