
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <path d="M7 12h10"/>
          <path d="M12 7v10"/>
        </svg>
      ),
      title: "End-to-End Encryption",
      description: "Your memories are encrypted locally on your device before being stored, ensuring only you can access them."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"/>
          <path d="M10 8h.01"/>
          <path d="M14 8h.01"/>
          <path d="M10 12h.01"/>
          <path d="M14 12h.01"/>
          <path d="M8 16h.01"/>
          <path d="M16 16h.01"/>
        </svg>
      ),
      title: "Advanced Search",
      description: "Quickly find specific memories with our powerful search capabilities that work even with encrypted data."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
          <line x1="8" y1="16" x2="8" y2="16"/>
          <line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      ),
      title: "Seamless Notes Integration",
      description: "Works directly with your native Notes app, making it easy to incorporate into your existing workflow."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m4.9 4.9 14.2 14.2"/>
        </svg>
      ),
      title: "Private By Design",
      description: "No accounts, no cloud storage, no tracking. Your data remains completely private and stored only on your devices."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Military-Grade Security",
      description: "Using AES-256 encryption, the same standard trusted by governments for top-secret information."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Mac Native",
      description: "Built specifically for macOS, offering seamless integration and optimal performance on your MacBook."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Crypto Memories?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            The most secure way to store your personal memories on your MacBook
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
              <div className="w-12 h-12 rounded-full bg-crypto-purple/10 flex items-center justify-center text-crypto-purple mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
