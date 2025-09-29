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
    <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] relative">
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

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close mobile menu when tab is selected
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <main className="min-h-screen">
      {/* Header - Integrated with Hero */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="w-full flex items-center justify-between pl-4 pr-2 sm:px-8 lg:px-12 py-4 sm:py-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 font-bold tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
            <Logo /><span>Phantom Velocity</span>
          </a>
          
          {/* Navigation Tabs */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1 border border-white/20">
            <button 
              onClick={() => handleTabClick('home')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'home' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleTabClick('inventory')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'inventory' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Inventory
            </button>
            <button 
              onClick={() => handleTabClick('experience')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'experience' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Experience
            </button>
            <button 
              onClick={() => handleTabClick('book')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'book' 
                  ? 'bg-accent text-white' 
                  : 'text-white/90 hover:bg-white/20 hover:text-white'
              }`}
            >
              Book Viewing
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden w-10 h-10 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/20 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              <button 
                onClick={() => handleTabClick('home')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'home' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleTabClick('inventory')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'inventory' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Inventory
              </button>
              <button 
                onClick={() => handleTabClick('experience')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'experience' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Experience
              </button>
              <button 
                onClick={() => handleTabClick('book')}
                className={`w-full text-left px-4 py-3 rounded-lg text-white font-medium transition-colors duration-200 ${
                  activeTab === 'book' 
                    ? 'bg-accent text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                Book Viewing
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

      {activeTab === 'inventory' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Our Inventory</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our curated collection of the world's most exclusive hypercars and limited-edition vehicles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Bugatti Chiron Super Sport", price: "$3.2M", image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&h=400&fit=crop&crop=center&auto=format&q=80" },
                { name: "McLaren P1", price: "$1.35M", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&crop=center&auto=format&q=80" },
                { name: "Ferrari LaFerrari", price: "$1.4M", image: "https://images.unsplash.com/photo-1549317336-206569e8475c?w=600&h=400&fit=crop&crop=center&auto=format&q=80" },
                { name: "Porsche 918 Spyder", price: "$845K", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop&crop=center&auto=format&q=80" },
                { name: "Koenigsegg Agera RS", price: "$2.5M", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&crop=center&auto=format&q=80" },
                { name: "Pagani Huayra BC", price: "$2.8M", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop&crop=center&auto=format&q=80" }
              ].map((car, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{car.name}</h3>
                      <p className="text-accent font-bold text-xl">{car.price}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'experience' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Owner Experiences</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Exclusive experiences designed for the discerning automotive enthusiast.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Track Day Experience", 
                  description: "Private coaching, telemetry, and hot laps in curated exotics.",
                  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                },
                { 
                  title: "Concierge Acquisition", 
                  description: "We source limited-series vehicles and arrange discreet delivery.",
                  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                },
                { 
                  title: "Global Showrooms", 
                  description: "Miami • London • Dubai — by appointment only.",
                  image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                }
              ].map((experience, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img src={experience.image} alt={experience.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-semibold text-xl mb-3">{experience.title}</h3>
                    <p className="text-gray-300 mb-6">{experience.description}</p>
                    <button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'book' && (
        <section className="relative overflow-hidden w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Book a Private Viewing</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Schedule an exclusive appointment to experience our collection in person.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <form className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none" placeholder="john@example.com" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Preferred Date</label>
                  <input type="date" className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white focus:border-accent focus:outline-none" />
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-gray-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none" placeholder="Tell us about your interests and any specific vehicles you'd like to see..."></textarea>
                </div>
                
                <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                  Request Private Viewing
                </button>
              </form>
            </div>
          </div>
        </section>
      )}



      <footer className="px-4 py-8 text-center text-muted">&copy; {new Date().getFullYear()} PhantomVelocity Dealership • “Speed Beyond Imagination”</footer>
    </main>
  );
}
