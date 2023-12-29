import React from 'react';
import './App.css'; 
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css'
import Footer from './Footer';
import Header from './Header';
import Text from './Text';

function App() {
  return (
    <div className="App">
      <Header/>
      <Text/>
      <Footer/>
    </div>
  );
}

export default App;
