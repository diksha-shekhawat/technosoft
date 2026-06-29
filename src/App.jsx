import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Dashboard from './components/Dashboard';
import ServiceFlows from './components/ServiceFlows';
import Tracker from './components/Tracker';
import About from './components/About';
import Contact from './components/Contact';
import History from './components/History';
import logoImg from './assets/logo.png';

function App() {
  const [view, setView] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [prefillData, setPrefillData] = useState(null);
  const [appLoading, setAppLoading] = useState(true);
  const [completedTransactions, setCompletedTransactions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setAppLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleSetView = (newView) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (serviceId) => {
    setPrefillData(null);
    setSelectedService(serviceId);
    handleSetView('service');
  };

  const handleQuickPay = (tx) => {
    setPrefillData(tx);
    let targetServiceId = tx.service || '';
    setSelectedService(targetServiceId);
    handleSetView('service');
  };

  const addCompletedTransaction = (tx) => {
    setCompletedTransactions(prev => [tx, ...prev]);
  };

  return (
    <>
      {appLoading && (
        <div className="loading-overlay">
          <img src={logoImg} className="loading-logo" alt="RM Technosoft Logo" />
          <div className="loading-spinner"></div>
          <span className="loading-text">RM Technosoft Secure Gateway</span>
          <span style={{ fontSize: '11px', color: '#64748b', marginTop: '10px' }}>Initializing agent dashboard...</span>
        </div>
      )}

      {!appLoading && (
        <>
          <Navbar
            currentView={view}
            setView={handleSetView}
            setSelectedService={setSelectedService}
          />

          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {view === 'home' && (
              <>
                <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Dashboard
                  searchTerm={searchTerm}
                  onSelectService={handleSelectService}
                  completedTransactions={completedTransactions}
                  onViewHistory={() => handleSetView('history')}
                />
              </>
            )}

            {view === 'service' && selectedService && (
              <ServiceFlows
                serviceId={selectedService}
                prefillData={prefillData}
                onBack={() => handleSetView('home')}
                addCompletedTransaction={addCompletedTransaction}
              />
            )}

            {view === 'tracker' && (
              <Tracker trackingTransactions={completedTransactions} />
            )}

            {view === 'history' && (
              <History
                transactions={completedTransactions}
                onBack={() => handleSetView('home')}
                onRetry={handleQuickPay}
              />
            )}

            {view === 'about' && <About />}
            {view === 'contact' && <Contact />}
          </main>

          <Footer
            setView={handleSetView}
            setSelectedService={setSelectedService}
          />
        </>
      )}
    </>
  );
}

export default App;
