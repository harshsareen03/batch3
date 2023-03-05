import './App.css';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { MainPage } from './Components/MainPage';


function App() {
  return (
   <>
   <Header Home="Fitness" second="Care" Third="Mind" Four="Store" />
   <MainPage/>
   <Footer/>
 

   </>
  );
}

export default App;
