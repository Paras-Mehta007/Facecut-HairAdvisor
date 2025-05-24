import React, { useRef } from 'react';
import FeatureCard from './FeatureCard';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';

type HomePageProps = {
  startAnalyzer: () => void;
  homeRef: React.RefObject<HTMLDivElement>;
};

const HomePage: React.FC<HomePageProps> = ({ startAnalyzer, homeRef }) => {
  return (
    <div className="home-screen" ref={homeRef}>
      <div className="home-content">
        <div className="logo-container">
          <span className="logo-icon">✂️</span>
        </div>
        <h1 className="app-title">Perfect Cut</h1>
        <p className="app-subtitle">Find your ideal hairstyle based on your face shape</p>

        <div className="features-grid">
          <FeatureCard 
            icon="📷" 
            title="Face Analysis" 
            description="Advanced AI technology to analyze your face shape" 
          />
          <FeatureCard 
            icon="💇" 
            title="Style Matching" 
            description="Get personalized hairstyle recommendations" 
          />
          <FeatureCard 
            icon="🔄" 
            title="Instant Results" 
            description="See your perfect hairstyle matches in seconds" 
          />
        </div>

        <button className="start-button" onClick={startAnalyzer}>
          <span className="button-text">Find My Perfect Hairstyle</span>
          <ArrowRight className="button-icon w-5 h-5" />
        </button>

        <div className="testimonials">
          <div className="testimonial">
            <p className="testimonial-text">"This app helped me find the perfect hairstyle for my face shape!"</p>
            <p className="testimonial-author">- Alex S.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;