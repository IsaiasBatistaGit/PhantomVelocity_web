"use client";
import { useState, useEffect } from "react";
import "./globals.css";

function Logo() {
  return (
    <svg viewBox="0 0 64 64" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7aa3ff" />
          <stop offset="1" stopColor="#9a7aff" />
        </linearGradient>
      </defs>
      <path d="M6 46 C14 30, 36 10, 58 14 C42 18, 30 30, 22 44 Z" stroke="url(#g)" strokeWidth="3" fill="none"/>
    </svg>
  );
}

function CarGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const carImages = [
    {
      src: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Phantom Spectre",
      subtitle: "Carbon Edition"
    },
    {
      src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Veloce Strada", 
      subtitle: "Launch Spec"
    },
    {
      src: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Obsidian GT",
      subtitle: "Track Pack"
    },
    {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Velocity X1",
      subtitle: "Hyper Edition"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Nexus Pro",
      subtitle: "Performance"
    },
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=600&fit=crop&crop=center&auto=format&q=80",
      title: "Apex Elite",
      subtitle: "Limited Series"
    }
  ];

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <div className="w-full h-screen relative">
      {/* Main Image Display */}
      <div className="relative w-full h-full">
        {carImages.map((car, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={car.src}
              alt={car.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Hero Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto max-w-[1200px] px-4 sm:px-6 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
                    Speed Beyond Imagination
                    <span className="ml-3 align-middle text-sm sm:text-base lg:text-lg rounded-full px-3 py-1 text-black" style={{background:'linear-gradient(90deg, var(--tw-color-accent,#7aa3ff), var(--tw-color-accent2,#9a7aff))'}}>
                      New
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                    Welcome to PhantomVelocity — your gateway to curated hypercars and limited-series exotics. Private showrooms, white-glove delivery, and track-ready performance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a className="btn btn-accent text-lg px-8 py-4" href="#inventory">
                      Explore Inventory
                    </a>
                    <a className="btn text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10" href="#experience">
                      Owner Experiences
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Car Info Overlay - Bottom Right */}
            <div className="absolute bottom-8 right-8 text-white text-right">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {car.title}
              </h3>
              <p className="text-lg sm:text-xl text-white/80">
                {car.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Selection Dots */}
      <div className="absolute bottom-8 left-8 flex gap-3">
        {carImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-accent scale-125 shadow-lg shadow-accent/50'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`View ${carImages[index].title}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + carImages.length) % carImages.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % carImages.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export default function Page() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewDropdownOpen, setIsNewDropdownOpen] = useState(false);
  const [isPreownedDropdownOpen, setIsPreownedDropdownOpen] = useState(false);
  const [isFinanceDropdownOpen, setIsFinanceDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is selected
    setIsNewDropdownOpen(false); // Close dropdown when tab is selected
    setIsPreownedDropdownOpen(false); // Close preowned dropdown when tab is selected
    setIsFinanceDropdownOpen(false); // Close finance dropdown when tab is selected
    setIsServiceDropdownOpen(false); // Close service dropdown when tab is selected
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleNewDropdown = () => {
    setIsNewDropdownOpen(!isNewDropdownOpen);
  };

  const togglePreownedDropdown = () => {
    setIsPreownedDropdownOpen(!isPreownedDropdownOpen);
  };

  const toggleFinanceDropdown = () => {
    setIsFinanceDropdownOpen(!isFinanceDropdownOpen);
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: React.MouseEvent) => {
    if (isNewDropdownOpen) {
      setIsNewDropdownOpen(false);
    }
    if (isPreownedDropdownOpen) {
      setIsPreownedDropdownOpen(false);
    }
    if (isFinanceDropdownOpen) {
      setIsFinanceDropdownOpen(false);
    }
    if (isServiceDropdownOpen) {
      setIsServiceDropdownOpen(false);
    }
  };

  return (
    <main className="min-h-screen" onClick={handleClickOutside}>
      {/* Header - Integrated with Hero */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="w-full flex items-center justify-between pl-4 pr-2 sm:px-8 lg:px-12 py-4 sm:py-6">
          {/* Logo */}
          <button 
            onClick={() => handleTabClick('home')}
            className="flex items-center gap-2 sm:gap-3 font-bold tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white hover:text-accent transition-colors duration-200"
          >
            <Logo /><span>Phantom Velocity</span>
          </button>
          
          {/* Navigation Tabs */}
          <div className="hidden lg:flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/20">
            <button 
              onClick={() => handleTabClick('models')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTab === 'models' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Models
            </button>
            <div className="relative">
              <button 
                onClick={toggleNewDropdown}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeTab === 'new' || activeTab === 'specials' || activeTab === 'newinventory'
                    ? 'bg-accent text-white' 
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                New
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isNewDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isNewDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-black/90 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => handleTabClick('specials')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'specials' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Specials
                    </button>
                    <button 
                      onClick={() => handleTabClick('newinventory')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'newinventory' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      New Inventory
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={togglePreownedDropdown}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeTab === 'preowned' || activeTab === 'preownedinventory' || activeTab === 'certifiedpreowned' || activeTab === 'preownedspecials' || activeTab === 'sellyourcar'
                    ? 'bg-accent text-white' 
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                Pre-Owned
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isPreownedDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isPreownedDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-black/90 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => handleTabClick('preownedinventory')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'preownedinventory' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Pre-Owned Inventory
                    </button>
                    <button 
                      onClick={() => handleTabClick('certifiedpreowned')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'certifiedpreowned' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Certified Pre-Owned
                    </button>
                    <button 
                      onClick={() => handleTabClick('preownedspecials')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'preownedspecials' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Pre-Owned Specials
                    </button>
                    <button 
                      onClick={() => handleTabClick('sellyourcar')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'sellyourcar' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Sell Us Your Car
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={toggleFinanceDropdown}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeTab === 'finance' || activeTab === 'financeapplication' || activeTab === 'partialpayment' || activeTab === 'crypto' || activeTab === 'financecalculator'
                    ? 'bg-accent text-white' 
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                Finance
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isFinanceDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isFinanceDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-52 bg-black/90 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => handleTabClick('financeapplication')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'financeapplication' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Finance Application
                    </button>
                    <button 
                      onClick={() => handleTabClick('partialpayment')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'partialpayment' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Partial Payment
                    </button>
                    <button 
                      onClick={() => handleTabClick('crypto')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'crypto' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Crypto
                    </button>
                    <button 
                      onClick={() => handleTabClick('financecalculator')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'financecalculator' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Finance Calculator
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={toggleServiceDropdown}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1 ${
                  activeTab === 'service' || activeTab === 'requestappointment' || activeTab === 'roadsideassistance' || activeTab === 'leasereturn'
                    ? 'bg-accent text-white' 
                    : 'text-white/90 hover:bg-white/20 hover:text-white'
                }`}
              >
                Service
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${
                    isServiceDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isServiceDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-black/90 backdrop-blur-md rounded-lg border border-white/20 shadow-lg z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="py-2">
                    <button 
                      onClick={() => handleTabClick('requestappointment')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'requestappointment' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Request an Appointment
                    </button>
                    <button 
                      onClick={() => handleTabClick('roadsideassistance')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'roadsideassistance' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Roadside Assistance
                    </button>
                    <button 
                      onClick={() => handleTabClick('leasereturn')}
                      className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                        activeTab === 'leasereturn' 
                          ? 'bg-accent text-white' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      Lease Return
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => handleTabClick('boutique')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTab === 'boutique' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Boutique
            </button>
            <button 
              onClick={() => handleTabClick('about')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTab === 'about' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleTabClick('contact')}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTab === 'contact' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/20 shadow-lg max-h-96 overflow-y-auto">
            <div className="px-4 py-4 space-y-2">
              <button 
                onClick={() => handleTabClick('models')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'models' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Models
              </button>
              <button 
                onClick={() => handleTabClick('new')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'new' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                New
              </button>
              <button 
                onClick={() => handleTabClick('preowned')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'preowned' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Pre-Owned
              </button>
              <button 
                onClick={() => handleTabClick('appraisal')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'appraisal' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Instant Appraisal
              </button>
              <button 
                onClick={() => handleTabClick('finance')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'finance' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Finance
              </button>
              <button 
                onClick={() => handleTabClick('boutique')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'boutique' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Boutique
              </button>
              <button 
                onClick={() => handleTabClick('service')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'service' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Service
              </button>
              <button 
                onClick={() => handleTabClick('about')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'about' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={() => handleTabClick('contact')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'contact' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Tab Content */}
      {activeTab === 'home' && (
        <section className="relative overflow-hidden w-full">
          <CarGallery />
        </section>
      )}

      {/* New Sections - Only Visible on Home Tab */}
      {activeTab === 'home' && (
        <section className="relative overflow-hidden w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            
          {/* Special Projects */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop&crop=center&auto=format&q=80')",
                animation: "subtleZoom 20s ease-in-out infinite"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-start justify-start p-8">
              <div className="text-white transform group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-500">
                <div className="text-sm font-medium mb-2 tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">SPECIAL</div>
                <div className="text-4xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500">PROJECTS</div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
          </div>

          {/* Browse our New Inventory */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop&crop=center&auto=format&q=80')",
                animation: "subtleZoom 25s ease-in-out infinite"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-transparent to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-start justify-start p-8">
              <div className="text-white transform group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-500">
                <div className="text-sm font-medium mb-2 tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">BROWSE OUR</div>
                <div className="text-4xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-500">NEW INVENTORY</div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
          </div>

          {/* Browse Our Pre-Owned Inventory */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center&auto=format&q=80')",
                animation: "subtleZoom 30s ease-in-out infinite"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-transparent to-red-500/0 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-start justify-start p-8">
              <div className="text-white transform group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-500">
                <div className="text-sm font-medium mb-2 tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">BROWSE OUR</div>
                <div className="text-4xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-500">PRE-OWNED INVENTORY</div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
          </div>

          {/* See our Service Department */}
          <div className="group relative h-80 overflow-hidden cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center&auto=format&q=80')",
                animation: "subtleZoom 35s ease-in-out infinite"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-transparent to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-500" />
            <div className="absolute inset-0 flex items-start justify-start p-8">
              <div className="text-white transform group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-500">
                <div className="text-sm font-medium mb-2 tracking-wide opacity-90 group-hover:opacity-100 transition-opacity duration-300">SEE OUR</div>
                <div className="text-4xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-500">SERVICE DEPARTMENT</div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500" />
          </div>

          </div>
        </section>
      )}

      {/* Map Section - Only Visible on Home Tab */}
      {activeTab === 'home' && (
        <section className="relative overflow-hidden w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Visit Our Showroom
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience luxury automotive excellence at our state-of-the-art facility
              </p>
            </div>
            
            {/* Map Container */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative w-full h-96 md:h-[500px] rounded-full overflow-hidden shadow-2xl">
                {/* Enhanced Smoky Cloud Effect */}
                <div className="absolute inset-0 z-10 pointer-events-none rounded-full smoky-cloud" />
                
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2153314893426!2d-74.00369368459384!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635951234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-full"
                />
                
                {/* Custom Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="relative">
                    <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg animate-pulse" />
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-accent" />
                  </div>
                </div>
              </div>
              
              {/* Location Info */}
              <div className="mt-8 text-center">
                <div className="bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-2">PhantomVelocity Showroom</h3>
                  <p className="text-gray-300 mb-4">
                    123 Luxury Drive<br />
                    Beverly Hills, CA 90210
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://maps.google.com/?q=123+Luxury+Drive+Beverly+Hills+CA+90210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent text-sm px-6 py-3"
                    >
                      Get Directions
                    </a>
                    <a 
                      href="tel:+1-555-PHANTOM"
                      className="btn text-sm px-6 py-3 border-white/30 text-white hover:bg-white/10"
                    >
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* New Tab Content Sections */}
      {activeTab === 'models' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Our Models</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our complete range of luxury and performance vehicles.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Models content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'specials' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Specials</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our exclusive special offers and limited-time deals on luxury vehicles.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Specials content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'newinventory' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">New Inventory</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our latest collection of brand new luxury vehicles and hypercars.
              </p>
            </div>
            <div className="text-center text-white">
              <p>New inventory content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'preownedinventory' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Pre-Owned Inventory</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our extensive collection of pre-owned luxury vehicles.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Pre-owned inventory content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'certifiedpreowned' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Certified Pre-Owned</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our certified pre-owned vehicles with comprehensive warranties and rigorous inspections.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Certified pre-owned content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'preownedspecials' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Pre-Owned Specials</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take advantage of our exclusive deals and special offers on pre-owned luxury vehicles.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Pre-owned specials content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'sellyourcar' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Sell Us Your Car</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get the best value for your luxury vehicle with our professional appraisal and purchase service.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Sell your car content coming soon...</p>
            </div>
          </div>
        </section>
      )}


      {activeTab === 'financeapplication' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Finance Application</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Apply for financing on your luxury vehicle with our streamlined application process.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Finance application content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'partialpayment' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Partial Payment</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Make partial payments on your luxury vehicle with flexible payment options.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Partial payment content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'crypto' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Crypto Payments</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Purchase your luxury vehicle using cryptocurrency with our secure payment system.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Crypto payment content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'financecalculator' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Finance Calculator</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate your monthly payments and explore different financing scenarios.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Finance calculator content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'boutique' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Boutique</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Exclusive automotive accessories and lifestyle products.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Boutique content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'requestappointment' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Request an Appointment</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Schedule a service appointment for your luxury vehicle with our expert technicians.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Service appointment booking content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'roadsideassistance' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Roadside Assistance</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                24/7 roadside assistance for your luxury vehicle with our premium support service.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Roadside assistance content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'leasereturn' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Lease Return</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Return your leased luxury vehicle with our convenient and professional lease return process.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Lease return content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'about' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn more about PhantomVelocity and our commitment to excellence.
              </p>
            </div>
            <div className="text-center text-white">
              <p>About us content coming soon...</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'contact' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get in touch with our team for personalized service.
              </p>
            </div>
            <div className="text-center text-white">
              <p>Contact information coming soon...</p>
            </div>
          </div>
        </section>
      )}

      <footer className="px-4 py-8 text-center text-muted">&copy; {new Date().getFullYear()} PhantomVelocity Dealership • "Speed Beyond Imagination"</footer>
    </main>
  );
}
