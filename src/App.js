import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './index.css';
import 'animate.css';
import Header from './components/Header';
import Gitaris from './components/Gitaris';
import Band from './components/Band';
import Reason from './components/Reason'
import Login from './components/Login';
import NewPage from './components/NewPage';
import Footer from './components/Footer';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import JimiHendrix from './components/JimiHendrix';
import DavidGilmour from './components/DavidGilmour';
import Kurt from './components/Kurt';
import JimmyPage from './components/JimmyPage';
import EddieVanHalen from './components/EddieVanHalen';
import Slash from './components/Slash';
import Nirvana from './components/Nirvana';
import LedZeppelin from './components/LedZeppelin';
import LimpBizkit from './components/LimpBizkit';
import KoRn from './components/KoRn';
import AliceinChains from './components/AliceinChains';
import LinkinPark from './components/LinkinPark';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAuthenticated = () => !!localStorage.getItem('isLoggedIn');
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  useEffect(() => {
    if (!isAuthenticated() && !isAuthPage) {
      navigate('/login');
    } else if (isAuthenticated() && isAuthPage) {
      navigate('/newpage');
    }
  }, [location.pathname, navigate, isAuthPage]);

  return (
    <>
      {!isAuthPage && <Header />}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Gitaris />} />
          <Route path="/home" element={<Gitaris />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/band" element={<Band />} />
          <Route path="/reason" element={<Reason />} />
          <Route path="/newpage" element={<NewPage />} />
          <Route path="/jimihendrix" element={<JimiHendrix />} />
          <Route path="/davidgilmour" element={<DavidGilmour />} />
          <Route path='/kurt' element={<Kurt />} />
          <Route path='/jimmypage' element={<JimmyPage/>} />
          <Route path='/eddievanhalen' element={<EddieVanHalen />} />
          <Route path='/slash' element={<Slash />} />
          <Route path='/nirvana' element={<Nirvana />} />
          <Route path='/ledzeppelin' element={<LedZeppelin />} />
          <Route path='/limpbizkit' element={<LimpBizkit />} />
          <Route path='/korn' element={<KoRn />} />
          <Route path='/aliceinchains' element={<AliceinChains />} />
          <Route path='/linkinpark' element={<LinkinPark />} />
        </Routes>
      </div>
      {!isAuthPage && <Footer />}
      <ToastContainer />
    </>
  );
}

export default App;
