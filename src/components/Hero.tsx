
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1 rounded-full bg-crypto-purple/10 border border-crypto-purple/20">
          <span className="text-sm font-medium text-crypto-purple">Secure your memories forever</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Encrypt Your Memories with 
          <span className="gradient-text block mt-2">Crypto Memories</span>
        </h1>
        
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
          A secure and private way to store your most precious memories. 
          Powered by advanced encryption for Mac users who value their privacy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-white px-8 py-6">
            Get Started
          </Button>
          <Button variant="outline" className="border-crypto-purple/30 text-foreground hover:bg-crypto-purple/5 px-8 py-6">
            Learn More
          </Button>
        </div>
        
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl glass-card p-1 overflow-hidden animate-float">
          <div className="w-full h-full bg-crypto-dark-bg rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-primary animate-pulse-glow"></div>
              <h3 className="text-white text-lg font-medium">Crypto Memories Interface</h3>
              <p className="text-white/70 text-sm">Your safe space for storing memories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
