import '@/styles/null.scss'
import '@/styles/global.scss'
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import Hero from "@/home/Hero/Hero";
import About from "@/home/About/About";
import Rest from "@/home/Rest/Rest";
import ServiceCard from "@/home/serviceCard/serviceCard";
import Prices from "@/home/Prices/Prices";
import Additional from "@/home/Additional/Additional";
import Application from "@/home/Application/Application";
import News from "@/home/News/News";
import Contacts from "@/home/Contacts/Contacts";

export default function Home() {
  return (
      <>
        <Header/>
        <main>
          <Hero/>
          <About/>
          <Rest/>
          <ServiceCard/>
          <Prices/>
          <Additional/>
          <Application/>
          <News/>
          <Contacts/>
        </main>
        <Footer/>

      </>
  );
}
