import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  Target,
  Shield,
  CheckCircle2,
  Star,
  MessageCircle,
  Phone,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  Rocket,
  Globe,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

const Home = () => {
  const features = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom, responsive websites built with modern technologies for optimal performance.",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and boost conversions.",
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: "Result-Oriented",
      description: "We focus on delivering measurable results that drive your business growth.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of certified professionals brings years of industry experience.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee for all our solutions.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensures quick turnaround without compromising quality.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "BoosterEraIT transformed our online presence completely. Their digital marketing strategies increased our leads by 300%!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Founder, CloudBase",
      content: "The web development team delivered beyond expectations. Professional, timely, and extremely skilled.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCo",
      content: "Their SEO services helped us rank #1 for our target keywords. ROI has been phenomenal!",
      rating: 5,
    },
  ];

  // Enhanced client logos with better styling
  const clientLogos = [
    { 
      name: "Microsoft", 
      logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
      category: "Technology"
    },
    { 
      name: "Google", 
      logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg",
      category: "Technology"
    },
    { 
      name: "Amazon", 
      logo: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg",
      category: "E-commerce"
    },
    { 
      name: "Netflix", 
      logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
      category: "Entertainment"
    },
    { 
      name: "Spotify", 
      logo: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg",
      category: "Music"
    },
    { 
      name: "Adobe", 
      logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
      category: "Creative"
    },
    { 
      name: "Salesforce", 
      logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg",
      category: "CRM"
    },
    { 
      name: "Uber", 
      logo: "https://cdn.worldvectorlogo.com/logos/uber-3.svg",
      category: "Transportation"
    },
    { 
      name: "Airbnb", 
      logo: "https://cdn.worldvectorlogo.com/logos/airbnb-1.svg",
      category: "Travel"
    },
    { 
      name: "Slack", 
      logo: "https://cdn.worldvectorlogo.com/logos/slack-1.svg",
      category: "Communication"
    },
    { 
      name: "Zoom", 
      logo: "https://cdn.worldvectorlogo.com/logos/zoom-1.svg",
      category: "Communication"
    },
    { 
      name: "Shopify", 
      logo: "https://cdn.worldvectorlogo.com/logos/shopify-1.svg",
      category: "E-commerce"
    },
  ];

  // Enhanced hero carousel with animated text layers
  const heroBanners = [
    {
      id: 1,
      title: "Digital Transformation",
      subtitle: "Made Simple",
      description: "We combine cutting-edge technology with data-driven marketing to accelerate your business growth",
      media: {
        type: "video",
        src: "https://player.vimeo.com/external/469334274.sd.mp4?s=89d9e8b5e5a8d1f8f6e0e5e5e5e5e5e5e5e5e5e5&profile_id=164&oauth2_token_id=57447761",
        fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
      },
      gradient: "from-blue-600 to-purple-600",
      icon: Rocket,
      stats: { projects: "500+", success: "98%", experts: "50+", support: "24/7" },
      textAnimation: "fadeInUp",
      titleAnimation: "slideInFromTop",
      subtitleAnimation: "bounceIn",
      descriptionAnimation: "fadeInUpDelay"
    },
    {
      id: 2,
      title: "Web & Mobile",
      subtitle: "Development",
      description: "Build powerful digital experiences with our expert development team using latest technologies",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gradient: "from-green-600 to-cyan-600",
      icon: Code,
      stats: { projects: "300+", success: "95%", apps: "150+", support: "24/7" },
      textAnimation: "slideInRight",
      titleAnimation: "zoomIn",
      subtitleAnimation: "slideInFromRight",
      descriptionAnimation: "fadeInLeft"
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "That Converts",
      description: "Data-driven strategies to grow your online presence, boost conversions and increase ROI",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      },
      gradient: "from-orange-600 to-red-600",
      icon: TrendingUp,
      stats: { clients: "200+", growth: "300%", roi: "5x", campaigns: "500+" },
      textAnimation: "zoomIn",
      titleAnimation: "fadeInDown",
      subtitleAnimation: "pulse",
      descriptionAnimation: "slideInUp"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      subtitle: "For Scale",
      description: "Scalable cloud infrastructure and migration services for modern growing businesses",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gradient: "from-purple-600 to-pink-600",
      icon: Cloud,
      stats: { deployments: "100+", uptime: "99.9%", scale: "10x", support: "24/7" },
      textAnimation: "fadeInLeft",
      titleAnimation: "slideInFromLeft",
      subtitleAnimation: "rotateIn",
      descriptionAnimation: "fadeInRight"
    },
    {
      id: 5,
      title: "Cyber Security",
      subtitle: "Protection",
      description: "Enterprise-grade security solutions to protect your business from modern threats",
      media: {
        type: "image",
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gradient: "from-indigo-600 to-blue-600",
      icon: ShieldCheck,
      stats: { protected: "1000+", uptime: "99.9%", incidents: "0", support: "24/7" },
      textAnimation: "bounceIn",
      titleAnimation: "bounceInDown",
      subtitleAnimation: "flipInX",
      descriptionAnimation: "fadeInUp"
    }
  ];

  // Consultation options with proper routing
  const consultationOptions = [
    {
      icon: MessageCircle,
      title: "Chat with Expert",
      description: "Instant messaging with our technical experts",
      duration: "Available 24/7",
      action: "Start Chat",
      color: "from-green-500 to-emerald-600",
      link: "/consultation/chat"
    },
    {
      icon: Phone,
      title: "Voice Call",
      description: "Schedule a phone consultation with our specialists",
      duration: "30-60 mins",
      action: "Book Call",
      color: "from-blue-500 to-cyan-600",
      link: "/consultation/call"
    },
    {
      icon: Calendar,
      title: "Video Meeting",
      description: "Comprehensive video consultation with screen sharing",
      duration: "45-90 mins",
      action: "Schedule Meeting",
      color: "from-purple-500 to-indigo-600",
      link: "/consultation/meeting"
    }
  ];

  // State for hero carousel
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);

  // State for logo carousel - continuous scroll
  const logoContainerRef = useRef(null);
  const [isLogoPaused, setIsLogoPaused] = useState(false);

  // Enhanced auto-play hero carousel with animation lock
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, isAnimating, heroBanners.length]);

  // Update text key when banner changes for animation reset
  useEffect(() => {
    setTextKey(prev => prev + 1);
  }, [currentBanner]);

  // Enhanced continuous logo scroll effect with better performance
  useEffect(() => {
    if (isLogoPaused) return;

    const container = logoContainerRef.current;
    if (!container) return;

    let animationFrame;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;

    const scrollLogos = () => {
      if (container) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        container.scrollLeft = scrollPosition;
        animationFrame = requestAnimationFrame(scrollLogos);
      }
    };

    animationFrame = requestAnimationFrame(scrollLogos);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isLogoPaused]);

  // Handle hero carousel navigation with animation
  const nextBanner = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentBanner((prev) => (prev + 1) % heroBanners.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const prevBanner = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentBanner((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const goToBanner = (index) => {
    if (!isAnimating && index !== currentBanner) {
      setIsAnimating(true);
      setCurrentBanner(index);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  // Enhanced text animation classes with more variety
  const getTextAnimationClass = (animationType) => {
    switch (animationType) {
      case 'fadeInUp': return 'animate-fade-in-up';
      case 'slideInRight': return 'animate-slide-in-right';
      case 'zoomIn': return 'animate-zoom-in';
      case 'fadeInLeft': return 'animate-fade-in-left';
      case 'bounceIn': return 'animate-bounce-in';
      case 'fadeInDown': return 'animate-fade-in-down';
      case 'slideInFromTop': return 'animate-slide-in-from-top';
      case 'slideInFromLeft': return 'animate-slide-in-from-left';
      case 'slideInFromRight': return 'animate-slide-in-from-right';
      case 'rotateIn': return 'animate-rotate-in';
      case 'flipInX': return 'animate-flip-in-x';
      case 'bounceInDown': return 'animate-bounce-in-down';
      case 'pulse': return 'animate-pulse-once';
      case 'fadeInUpDelay': return 'animate-fade-in-up-delay';
      case 'slideInUp': return 'animate-slide-in-up';
      case 'fadeInRight': return 'animate-fade-in-right';
      default: return 'animate-fade-in';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section with Animated Text Layers */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Enhanced Hero Carousel */}
        <div className="absolute inset-0 z-0">
          {heroBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentBanner 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-105"
              }`}
            >
              {banner.media.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster={banner.media.fallback}
                >
                  <source src={banner.media.src} type="video/mp4" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${banner.gradient}`}></div>
                </video>
              ) : (
                <img
                  src={banner.media.src}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
              )}
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>
            </div>
          ))}
        </div>
        
        {/* Animated tech pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 z-10"></div>
        
        {/* Vertical Carousel Controls - Right Side */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center space-y-4">
          {/* Play/Pause */}
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          
          {/* Navigation Arrows */}
          <div className="flex flex-col space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              onClick={prevBanner}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
              onClick={nextBanner}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Enhanced Dots Indicator - Right Side Vertical */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center space-y-3 mr-16">
          {heroBanners.map((banner, index) => (
            <button
              key={banner.id}
              className={`flex items-center justify-center w-3 h-3 rounded-full transition-all duration-300 transform ${
                index === currentBanner 
                  ? "bg-white scale-125 ring-2 ring-white/50" 
                  : "bg-white/50 hover:bg-white/70 scale-100"
              }`}
              onClick={() => goToBanner(index)}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div key={textKey} className="max-w-4xl mx-auto text-center">
            {/* Animated Badge */}
            <div className={`mb-8 ${getTextAnimationClass(heroBanners[currentBanner].textAnimation)}`}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30 mb-6 animate-pulse">
                <Sparkles className="h-5 w-5 text-yellow-400 animate-spin" />
                <span className="text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Leading IT & Digital Marketing Agency
                </span>
              </div>
            </div>
            
            {/* Enhanced Animated Title with separate animations */}
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${getTextAnimationClass(heroBanners[currentBanner].titleAnimation)}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-purple-300 animate-gradient-x block">
                {heroBanners[currentBanner].title}
              </span>
              <span className={`block mt-4 text-white ${getTextAnimationClass(heroBanners[currentBanner].subtitleAnimation)}`}>
                {heroBanners[currentBanner].subtitle}
              </span>
            </h1>
            
            {/* Enhanced Animated Description */}
            <p className={`text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getTextAnimationClass(heroBanners[currentBanner].descriptionAnimation)}`}>
              {heroBanners[currentBanner].description}
            </p>
            
            {/* Enhanced Animated Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${getTextAnimationClass(heroBanners[currentBanner].textAnimation)}`}>
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 group">
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Enhanced Animated Stats */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto ${getTextAnimationClass(heroBanners[currentBanner].textAnimation)}`}>
              {Object.entries(heroBanners[currentBanner].stats).map(([key, value], index) => (
                <div 
                  key={key}
                  className="text-center transform hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-stats-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white animate-pulse" style={{ animationDelay: `${index * 100}ms` }}>
                    {value}
                  </div>
                  <div className="text-white/70 text-sm capitalize mt-2">{key.replace(/([A-Z])/g, ' $1')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Floating Tech Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-float-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-400/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Animated Code Elements */}
        <div className="absolute top-20 left-20 text-white/10 z-10 animate-pulse-slow">
          <Code className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 right-20 text-white/10 z-10 animate-pulse" style={{ animationDelay: '2s' }}>
          <Globe className="h-24 w-24" />
        </div>
      </section>

      {/* Enhanced Client Logos Section with Styled Container */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-xy"></div>
        
        {/* Moving background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:40px_40px] animate-moving-background"></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 mb-4">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-white text-sm font-medium">Trusted Partners</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              We partner with the world's most innovative companies across various industries
            </p>
          </div>

          {/* Enhanced Logo Container with Gradient Edges */}
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
            
            {/* Enhanced Continuous Scroll Logo Container */}
            <div 
              ref={logoContainerRef}
              className="flex overflow-x-hidden space-x-16 py-8 relative"
              onMouseEnter={() => setIsLogoPaused(true)}
              onMouseLeave={() => setIsLogoPaused(false)}
            >
              {/* Double the logos for seamless loop */}
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center group relative transform hover:scale-110 transition-all duration-500 animate-logo-slide"
                >
                  <div className="w-40 h-24 bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 flex items-center justify-center p-6 transform transition-all duration-500 group-hover:bg-white/20 group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/25">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-14 max-w-28 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:brightness-110 group-hover:contrast-125"
                    />
                  </div>
                  {/* Enhanced Hover Tooltip */}
                  <div className="absolute -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2">
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-medium px-4 py-2 rounded-full whitespace-nowrap shadow-2xl">
                      <div className="font-bold">{client.name}</div>
                      <div className="text-cyan-200 text-xs">{client.category}</div>
                    </div>
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-600 to-purple-600 rotate-45 absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex justify-center items-center mt-12 space-x-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
            <div className="text-cyan-300 font-medium text-sm">Scroll to explore our partners</div>
          </div>

          {/* Enhanced Stats below logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/20">
            {[
              { value: "12+", label: "Industries Served", color: "from-cyan-400 to-blue-400" },
              { value: "50+", label: "Global Clients", color: "from-purple-400 to-pink-400" },
              { value: "99%", label: "Client Retention", color: "from-green-400 to-emerald-400" },
              { value: "24/7", label: "Global Support", color: "from-orange-400 to-red-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-300 animate-stats-in" style={{animationDelay: `${index * 100}ms`}}>
                <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2 animate-pulse`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Consultation Section with Proper Routing */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[length:30px_30px] animate-moving-background-slow"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 bg-pink-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-spin" />
              <span className="text-white font-medium">Instant Connect with Experts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Talk to Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Experts</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get personalized advice from our experienced consultants. Choose your preferred way to connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {consultationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden animate-consultation-card"
                style={{animationDelay: `${index * 200}ms`}}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl group-hover:rotate-12`}>
                  <option.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{option.description}</p>
                
                <div className="flex items-center text-cyan-300 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{option.duration}</span>
                </div>
                
                <Link to={option.link}>
                  <Button className={`w-full bg-gradient-to-r ${option.color} text-white hover:opacity-90 rounded-2xl py-6 text-lg font-semibold transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/25 group-hover:scale-105`}>
                    {option.action}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Enhanced Additional Info */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-8 text-white/80 bg-white/10 backdrop-blur-sm rounded-3xl px-8 py-6 border border-white/20">
              {[
                { icon: CheckCircle2, color: "text-green-400", title: "Available 24/7", desc: "Round the clock support" },
                { icon: Users, color: "text-blue-400", title: "50+ Experts", desc: "Certified professionals" },
                { icon: Award, color: "text-yellow-400", title: "Certified", desc: "Industry certifications" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-sm text-gray-300">{item.desc}</div>
                  </div>
                  {index < 2 && <div className="w-px h-8 bg-white/30 hidden sm:block"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain enhanced... */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end digital solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...feature} gradient />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine"></div>
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 opacity-90">Get a comprehensive digital strategy tailored to your goals</p>
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-white text-cyan-600 hover:bg-gray-100 shadow-lg hover:scale-105 transition-transform">
                  Get Free Strategy Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add enhanced CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUpDelay {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          50% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounceInDown {
          0% {
            opacity: 0;
            transform: translateY(-2000px);
          }
          60% {
            opacity: 1;
            transform: translateY(30px);
          }
          80% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-180deg) scale(0.3);
          }
          to {
            opacity: 1;
            transform: rotate(0) scale(1);
          }
        }
        @keyframes flipInX {
          from {
            opacity: 0;
            transform: perspective(400px) rotateX(90deg);
          }
          to {
            opacity: 1;
            transform: perspective(400px) rotateX(0);
          }
        }
        @keyframes pulse-once {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes stats-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes logo-slide {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes consultation-card {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes gradient-xy {
          0%, 100% {
            background-size: 400% 400%;
            background-position: left center;
          }
          50% {
            background-size: 400% 400%;
            background-position: right center;
          }
        }
        @keyframes moving-background {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-40px) translateY(-40px);
          }
        }
        @keyframes moving-background-slow {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-20px) translateY(-20px);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fade-in-up-delay {
          animation: fadeInUpDelay 1.2s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out;
        }
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out;
        }
        .animate-bounce-in-down {
          animation: bounceInDown 1s ease-out;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        .animate-slide-in-from-top {
          animation: slideInFromTop 0.8s ease-out;
        }
        .animate-slide-in-from-left {
          animation: slideInFromLeft 0.8s ease-out;
        }
        .animate-slide-in-from-right {
          animation: slideInFromRight 0.8s ease-out;
        }
        .animate-slide-in-up {
          animation: slideInUp 0.8s ease-out;
        }
        .animate-rotate-in {
          animation: rotateIn 0.8s ease-out;
        }
        .animate-flip-in-x {
          animation: flipInX 1s ease-out;
        }
        .animate-pulse-once {
          animation: pulse-once 0.5s ease-in-out;
        }
        .animate-stats-in {
          animation: stats-in 0.6s ease-out;
        }
        .animate-logo-slide {
          animation: logo-slide 0.5s ease-out;
        }
        .animate-consultation-card {
          animation: consultation-card 0.6s ease-out;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-gradient-xy {
          animation: gradient-xy 5s ease infinite;
        }
        .animate-moving-background {
          animation: moving-background 20s linear infinite;
        }
        .animate-moving-background-slow {
          animation: moving-background-slow 30s linear infinite;
        }
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};

// Clock component
const Clock = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default Home;

console.log("Enhanced home page with animated hero carousel, styled logo section, and consultation routing");