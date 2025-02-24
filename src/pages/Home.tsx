import HeroOne from "../sections/HeroOne";
import HeroTwo from '../components/HeroTwo';
import HeroThree from '../components/HeroThree';


import HeroFour from '../components/HeroFour';
import HeroFive from '../components/HeroFive';
import HeroSix from '../components/HeroSix';
import HeroSeven from '../components/HeroSeven';
import ScrollButton from "../components/ScrollButton";
import FuneralServiceLocator from "../components/FuneralServiceLocator";
import Partnership from "../components/Partnership";






const Home = () => {
    return (
        <>
            <section >
                <HeroOne />
      
      
            </section>

            <section >
            <HeroTwo />
      
      
            </section>

            <section  >
            <FuneralServiceLocator/>
      
      
            </section>

            <section >
            <HeroThree />
      
      
            </section>
            

            <section >
            <HeroFour/>
      
      
            </section>

            <section >
            <HeroFive/>
      
      
            </section>

            <section >
            <HeroSix/>
      
      
            </section>
       
            <section >
            <HeroSeven/>
      
      
            </section>
        
        
           

            <section  >
            <Partnership/>
      
      
            </section>
       
            
           <div>
            <ScrollButton/>
           </div>
            
        </>
    );
};

export default Home;
