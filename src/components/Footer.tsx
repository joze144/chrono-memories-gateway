
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-gradient-primary"></div>
              <span className="text-xl font-bold gradient-text">Crypto Memories</span>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              Secure your memories with military-grade encryption. Built for privacy-conscious MacBook users.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-crypto-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-crypto-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-crypto-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-crypto-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Security</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Installation Guide</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-foreground/70 hover:text-crypto-purple transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 text-sm text-foreground/50 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Crypto Memories. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed and built with privacy in mind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
