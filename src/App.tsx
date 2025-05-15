import { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Testimonials from './components/Testimonials/Testimonials';
import Features from './components/Features/Features';
import Connect from './components/Connect/Connect';
import Cta from './components/Cta/Cta';
import CardList from './components/CardList/CardList';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <div className="loader-inner">
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
            <div className="loader-line-wrap">
              <div className="loader-line"></div>
            </div>
          </div>
        </div>
      )}
      <Layout>
        <Hero />
        <ImageSlider />
        <Testimonials />
        <CardList />
        <Features />
        <Connect />
        <Cta />
      </Layout>
    </>
  );
}

export default App;