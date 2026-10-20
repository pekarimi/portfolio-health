import React, { useState } from 'react';
import Portfolio from './Portfolio';
import HealthCaseStudy from './HealthCaseStudy';
import TextflowCaseStudy from './TextflowCaseStudy';
import CSPCaseStudy from './CSPCaseStudy';
import ISonoHealthCaseStudy from './iSonoHealthCaseStudy';
import CustomerPortalCaseStudy from './CustomerPortalCaseStudy';
import AtusaDesktopCaseStudy from './AtusaDesktopCaseStudy';
import './MindsetsCaseStudy.css'; // shared case-study styles
import './KanoCaseStudy.css'; // shared case-study styles
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('portfolio'); // 'portfolio', 'atusa', 'isono', 'customerportal', 'health', 'textflow', or 'csp'

  const handleProjectClick = (projectId) => {
    if (projectId === 9) {
      setCurrentView('atusa');
    } else if (projectId === 4) {
      setCurrentView('health');
    } else if (projectId === 5) {
      setCurrentView('textflow');
    } else if (projectId === 6) {
      setCurrentView('csp');
    } else if (projectId === 7) {
      setCurrentView('isono');
    } else if (projectId === 8) {
      setCurrentView('customerportal');
    }
  };

  const handleBackToPortfolio = () => {
    setCurrentView('portfolio');
  };

  return (
    <div className="App">
      {currentView === 'portfolio' && (
        <Portfolio onProjectClick={handleProjectClick} />
      )}
      {currentView === 'health' && (
        <HealthCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'textflow' && (
        <TextflowCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'csp' && (
        <CSPCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'isono' && (
        <ISonoHealthCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'atusa' && (
        <AtusaDesktopCaseStudy onBack={handleBackToPortfolio} />
      )}
      {currentView === 'customerportal' && (
        <CustomerPortalCaseStudy onBack={handleBackToPortfolio} />
      )}
    </div>
  );
}

export default App;
