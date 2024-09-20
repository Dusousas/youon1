import Ask from "@/components/Ask";
import Footer from "@/components/Footer";
import Main from "@/components/Main";
import NavBar from "@/components/NavBar";
import Plans from "@/components/Plans";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";
import Whatsapp from "@/components/Whatsapp";

export default function Home() {
  return (
    <>
    <NavBar />
    <Main />
    <Services />
    <Services2 />
    <Plans />
    <Portfolio />
    <Ask />
    <Whatsapp />
    <Footer />
    </>
  );
}
