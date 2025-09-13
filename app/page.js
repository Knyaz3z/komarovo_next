import '@/styles/null.scss'
import '@/styles/global.scss'
import Footer from "@/layouts/Footer/Footer";
import Header from "@/layouts/Header/Header";
import Hero from "@/app/home/Hero/Hero";
import About from "@/app/home/About/About";
import Rest from "@/app/home/Rest/Rest";
import ServiceCard from "@/app/home/serviceCard/serviceCard";
import Prices from "@/app/home/Prices/Prices";
import Additional from "@/app/home/Additional/Additional";
import Application from "@/app/home/Application/Application";
import News from "@/app/home/News/News";
import Contacts from "@/app/home/Contacts/Contacts";

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
