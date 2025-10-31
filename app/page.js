import '@/styles/null.scss'
import '@/styles/global.scss'
import Hero from '@/app/home/Hero/Hero';
import About from '@/app/home/About/About';
import ServiceCard from '@/app/home/serviceCard/serviceCard';
import Prices from '@/app/home/Prices/Prices';
import Additional from '@/app/home/Additional/Additional';
import Application from '@/app/home/Application/Application';
import News from '@/app/home/News/News';
import Contacts from '@/app/home/Contacts/Contacts';
import VideoModalSection
    from '@/components/VideoModalSection/VideoModalSection';

export default function Home() {
  return (
      <>

        <main>
          <Hero/>
            <VideoModalSection/>
          <About/>

            {/*<Rest/>*/}
          <ServiceCard/>
          <Prices/>
          <Additional/>
          <Application/>
          <News/>
          <Contacts/>
        </main>


      </>
  );
}
