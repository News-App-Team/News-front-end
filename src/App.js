import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import ReadLater from './components/readLater/ReadLater';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/readLater' element={<ReadLater />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;