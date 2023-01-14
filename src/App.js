import './App.css';
import ExpBanner from './components/ExpBanner/ExpBanner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import OurBelief from './components/OurBelief/OurBelief';
import PricePlan from './components/PricePlan/PricePlan';
import Programs from './components/Programs/Programs';
import TestimonialSlider from './components/TestimonialSlider/TestimonialSlider';
import TrainerBanner from './components/TrainerBanner/TrainerBanner';

function App() {
  return (
    <div>
     <Header/>
     <Programs/>
     <OurBelief/>
     <ExpBanner/>
     <TrainerBanner/>
     <PricePlan/>
     <TestimonialSlider/>
     <Footer/>
     <center style={{
      backgroundColor:'black',
      color:'white',
      padding:'2rem',
      fontSize:'1rem'
     }}>Copyright ©2023 Ecstacy. All Rights Reserved.</center>
     </div>
  );
}

export default App;
