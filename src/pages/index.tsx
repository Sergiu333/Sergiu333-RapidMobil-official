import Header from "../components/Header";
import Banner from "../components/Banner";
import Work from "../components/Work";
import CreateArt from "../components/CreateArt";
import Project from "../components/Project";
import Counter from "../components/Counter";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div>
         <div className="mx-auto">
             <div className="max-w-[1920px]">
                 <Header/>
                 <Banner/>
                 <Work/>
                 <CreateArt/>
                 <Project/>
             </div>
             <Counter/>
             <Footer/>
         </div>
    </div>
  )
}
