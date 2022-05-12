import './App.css';
import Footer from './Footer';
import MainBody from './MainBody';
import NavHeader from './NavHeader';
import WelcomeScreen from './WelcomeScreen';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell']
      }
    });
   }, []);

  return (
    <div className="App">
      <NavHeader />
      <WelcomeScreen />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
