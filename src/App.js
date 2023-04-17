import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import Aljazeera from './components/aljazeera/Aljazeera';
import BbcNews from './components/bbcNews/BbcNews';
import ReadLater from './components/readLater/ReadLater';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
  <>
  <Header/>
  <div id = 'main' >
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/aljazeera' element = {<Aljazeera/>}></Route>
      <Route path='/bbcnews' element = {<BbcNews/>}></Route>
      <Route path='/readLater' element = {<ReadLater/>}></Route>
    </Routes>
  </div>
  <Footer/>
  </>
  );
}
export default App;