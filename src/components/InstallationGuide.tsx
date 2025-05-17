
import React from 'react';
import { Button } from "@/components/ui/button";

const InstallationGuide: React.FC = () => {
  return (
    <section id="installation" className="py-20 px-4 bg-gradient-to-b from-background to-crypto-purple/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Easy Installation</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Get started with Crypto Memories in just two simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Create Memories Folder</h3>
            <p className="text-foreground/70 mb-6">
              Open your Notes app on your MacBook and create a new folder named "Memories". 
              This is where all your encrypted memories will be stored.
            </p>
            <div className="bg-crypto-dark-bg rounded-lg p-4 mb-6">
              <pre className="text-white text-sm overflow-x-auto">
                <code>
                  1. Open Notes app<br/>
                  2. Right-click in the sidebar<br/>
                  3. Select "New Folder"<br/>
                  4. Name it "Memories"
                </code>
              </pre>
            </div>
            <div className="relative w-full aspect-video rounded-lg bg-crypto-dark-bg flex items-center justify-center mb-4 overflow-hidden">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <line x1="10" y1="9" x2="8" y2="9"/>
                </svg>
                <span className="text-white/70 text-sm mt-2">Notes App</span>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card p-6 md:p-8 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Download & Apply Script</h3>
            <p className="text-foreground/70 mb-6">
              Download our secure script and apply it to your MacBook. The script will 
              set up the encryption tools needed for Crypto Memories.
            </p>
            <div className="bg-crypto-dark-bg rounded-lg p-4 mb-6">
              <pre className="text-white text-sm overflow-x-auto">
                <code>
                  1. Download the script below<br/>
                  2. Open Terminal<br/>
                  3. Run: sh ./crypto-memories-setup.sh<br/>
                  4. Enter your password when prompted
                </code>
              </pre>
            </div>
            <div className="flex justify-center mb-4">
              <Button className="bg-crypto-blue hover:bg-crypto-blue/90">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Script
              </Button>
            </div>
            <p className="text-xs text-foreground/50 text-center">
              SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Need help with installation?</p>
          <Button variant="outline" className="border-crypto-purple/30 text-foreground hover:bg-crypto-purple/5">
            View Installation Video
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
