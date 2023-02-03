import './App.css';
import Card from './components/card/card';
import Card2 from './components/card2/card2';
import Drive from './components/drive/drive';
import Feature from './components/feature/feature';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Slider from './components/slider/slider';

function App() {
  return (
    <>
      <Nav/>
      <Slider/>
      <Feature/>
      <Card/>
      <Drive/>
      <Card2/>
      <Footer/>
    </>
   );
}

export default App;
