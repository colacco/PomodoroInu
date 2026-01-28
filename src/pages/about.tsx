import HiInu from "../components/page-sections/about/HiInu";
import Description from "../components/page-sections/about/Description";
import Footer from "../components/page-sections/about/Footer";

export default function About() {
    return (
        <section className="h-screen flex flex-col bg-highlight">
            <div className="bg-white flex-grow">
                <HiInu />
                <Description />
            </div>
            <Footer />
        </section>
    );
}