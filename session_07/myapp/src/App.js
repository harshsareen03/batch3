import './App.css';
import Header from './components/Header';
import Ui from './components/Ui';
import Uplow from './components/Uplow';
import Ust from './components/Ust';
import Gender from './components/Gender';

function App() {
  return (
    <>
    {/* props are used to store data that can be accessed by the children of a 
    react component */}
    
      {/* <Header navbars='wisdom' home="contact us" /> */}
      <Ust/>
      <Ui/>
      <Uplow/>
      <Gender/>



    </>
  );
}

export default App;
