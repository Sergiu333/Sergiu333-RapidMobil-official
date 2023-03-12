import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";

const Project = () => {
    return (
        <div>
            <Header/>
            <div className="max-w-[1920px]">
                <Gallery/>
            </div>
            <Footer/>
        </div>
    )
}

export default Project;
