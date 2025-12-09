import { Link, useNavigate } from "react-router-dom";
import LiveStreamPlayer from "@/components/LiveStreamPlayer";
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
  EyeOff,
  X,
  Send,
  Video,
  User,
  Clock,
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneCall,
  Headphones,
  ScreenShare,
  ScreenShareOff,
  MoreVertical,
  Volume2,
  VolumeX,
  Bell,
  CreditCard,
  CalendarDays,
  Users as UsersIcon,
  FileText,
  Download,
  Share2,
  Maximize2,
  Settings,
  LogOut,
  Star as StarIcon,
  ThumbsUp,
  MessageSquare,
  HelpCircle,
  Monitor,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

interface Session {
  id: number;
  type: string;
  expert: string;
  date: string;
  duration?: string;
  topic: string;
  recording?: boolean;
  time?: string;
  status?: string;
  role?: string;
  photo?: string;
  rating?: number;
  orders?: number;
  experience?: number;
}

interface ChatMessage {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface Participant {
  id: number;
  name: string;
  role: string;
  avatar: string;
  isSpeaking: boolean;
}

interface Expert {
  id: number;
  name: string;
  role: string;
  available: boolean;
  isLive?: boolean;
  image: string;
  videoUrl?: string;
}

const Home = () => {
  const navigate = useNavigate();

  // State definitions
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const [isLogoPaused, setIsLogoPaused] = useState(false);

  // Live Chat State
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! Welcome to BoosterEraIT. I'm your virtual assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Live Session States
  const [isLiveSessionOpen, setIsLiveSessionOpen] = useState(false);
  const [sessionType, setSessionType] = useState<"video" | "audio" | "screen">("video");
  const [sessionStatus, setSessionStatus] = useState<"connecting" | "connected" | "ended">("connecting");
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [participants] = useState<Participant[]>([
    { id: 1, name: "You", role: "Client", avatar: "", isSpeaking: true },
    { id: 2, name: "John Doe", role: "IT Expert", avatar: "", isSpeaking: false },
    { id: 3, name: "Sarah Smith", role: "Marketing Expert", avatar: "", isSpeaking: false },
  ]);
  const [sessionTimer, setSessionTimer] = useState(0);
  const [recording, setRecording] = useState(false);

  // Schedule Modal States
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [sessionTopic, setSessionTopic] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");

  // Session History
  const [sessionHistory, setSessionHistory] = useState<Session[]>([
    {
      id: 1,
      type: "video",
      expert: "Alex Johnson",
      date: "2024-01-15",
      duration: "45 mins",
      topic: "Web Development Strategy",
      recording: true,
      role: "Web Development Expert",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.9,
      orders: 234,
      experience: 8,
    },
    {
      id: 2,
      type: "audio",
      expert: "Maria Garcia",
      date: "2024-01-10",
      duration: "30 mins",
      topic: "Digital Marketing Audit",
      recording: true,
      role: "Digital Marketing Expert",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.8,
      orders: 189,
      experience: 6,
    },
    {
      id: 3,
      type: "video",
      expert: "David Chen",
      date: "2024-01-05",
      duration: "60 mins",
      topic: "Cloud Migration Planning",
      recording: true,
      role: "Cloud Solutions Architect",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 4.95,
      orders: 312,
      experience: 10,
    },
  ]);

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

  const clientLogos = [
    { name: "Microsoft", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg", category: "Technology" },
    { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg", category: "Technology" },
    { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-2.svg", category: "E-commerce" },
    { name: "Netflix", logo: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg", category: "Entertainment" },
    { name: "Spotify", logo: "https://cdn.worldvectorlogo.com/logos/spotify-1.svg", category: "Music" },
    { name: "Adobe", logo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg", category: "Creative" },
    { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg", category: "CRM" },
    { name: "Uber", logo: "https://cdn.worldvectorlogo.com/logos/uber-3.svg", category: "Transportation" },
    { name: "Airbnb", logo: "https://cdn.worldvectorlogo.com/logos/airbnb-1.svg", category: "Travel" },
    { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-1.svg", category: "Communication" },
    { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-1.svg", category: "Communication" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify-1.svg", category: "E-commerce" },
  ];

  const heroBanners = [
    {
      id: 1,
      title: "Digital Transformation",
      subtitle: "Made Simple",
      description: "We combine cutting-edge technology with data-driven marketing to accelerate your business growth",
      media: {
        type: "video" as const,
        src: "https://player.vimeo.com/external/469334274.sd.mp4?s=89d9e8b5e5a8d1f8f6e0e5e5e5e5e5e5e5e5e5&profile_id=164&oauth2_token_id=57447761",
        fallback: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
      },
      gradient: "from-blue-600 to-purple-600",
      icon: Rocket,
      stats: { projects: "500+", success: "98%", experts: "50+", support: "24/7" },
      textAnimation: "fadeInUp",
      titleAnimation: "slideInFromTop",
      subtitleAnimation: "bounceIn",
      descriptionAnimation: "fadeInUpDelay",
    },
    {
      id: 2,
      title: "Web & Mobile",
      subtitle: "Development",
      description: "Build powerful digital experiences with our expert development team using latest technologies",
      media: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gradient: "from-green-600 to-cyan-600",
      icon: Code,
      stats: { projects: "300+", success: "95%", apps: "150+", support: "24/7" },
      textAnimation: "slideInRight",
      titleAnimation: "zoomIn",
      subtitleAnimation: "slideInFromRight",
      descriptionAnimation: "fadeInLeft",
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "That Converts",
      description: "Data-driven strategies to grow your online presence, boost conversions and increase ROI",
      media: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      },
      gradient: "from-orange-600 to-red-600",
      icon: TrendingUp,
      stats: { clients: "200+", growth: "300%", roi: "5x", campaigns: "500+" },
      textAnimation: "zoomIn",
      titleAnimation: "fadeInDown",
      subtitleAnimation: "pulse",
      descriptionAnimation: "slideInUp",
    },
    {
      id: 4,
      title: "Cloud Solutions",
      subtitle: "For Scale",
      description: "Scalable cloud infrastructure and migration services for modern growing businesses",
      media: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gradient: "from-purple-600 to-pink-600",
      icon: Cloud,
      stats: { deployments: "100+", uptime: "99.9%", scale: "10x", support: "24/7" },
      textAnimation: "fadeInLeft",
      titleAnimation: "slideInFromLeft",
      subtitleAnimation: "rotateIn",
      descriptionAnimation: "fadeInRight",
    },
    {
      id: 5,
      title: "Cyber Security",
      subtitle: "Protection",
      description: "Enterprise-grade security solutions to protect your business from modern threats",
      media: {
        type: "image" as const,
        src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      },
      gradient: "from-indigo-600 to-blue-600",
      icon: ShieldCheck,
      stats: { protected: "1000+", uptime: "99.9%", incidents: "0", support: "24/7" },
      textAnimation: "bounceIn",
      titleAnimation: "bounceInDown",
      subtitleAnimation: "flipInX",
      descriptionAnimation: "fadeInUp",
    },
  ];

  const consultationOptions = [
    {
      icon: MessageCircle,
      title: "Chat with Expert",
      description: "Instant messaging with our technical experts",
      duration: "Available 24/7",
      action: "Start Chat",
      color: "from-green-500 to-emerald-600",
      onClick: () => navigate("/experts"),
    },
    {
      icon: VideoIcon,
      title: "Live Video Call",
      description: "Real-time video consultation with screen sharing",
      duration: "30-60 mins",
      action: "Start Video Call",
      color: "from-blue-500 to-cyan-600",
      onClick: () => startLiveSession("video"),
    },
    {
      icon: Phone,
      title: "Voice Call",
      description: "Audio consultation with our specialists",
      duration: "20-45 mins",
      action: "Start Voice Call",
      color: "from-purple-500 to-indigo-600",
      onClick: () => startLiveSession("audio"),
    },
    {
      icon: CalendarDays,
      title: "Schedule Session",
      description: "Book a personalized consultation",
      duration: "Flexible",
      action: "Book Now",
      color: "from-orange-500 to-red-600",
      onClick: () => setIsScheduleModalOpen(true),
    },
  ];

  const experts: Expert[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Web Development Expert",
      available: true,
      isLive: true,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-308-large.mp4",
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Digital Marketing Expert",
      available: true,
      isLive: false,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-people-working-in-a-call-center-4446-large.mp4",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Cloud Solutions Architect",
      available: false,
      isLive: false,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-working-on-a-computer-keyboard-at-night-41489-large.mp4",
    },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

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
    setTextKey((prev) => prev + 1);
  }, [currentBanner]);

  // Logo carousel animation
  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;
    let animationId: number;
    const scroll = () => {
      if (!isLogoPaused) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isLogoPaused]);

  // Session timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (sessionStatus === "connected") {
      interval = setInterval(() => {
        setSessionTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionStatus]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startLiveSession = (type: "video" | "audio") => {
    setSessionType(type);
    setSessionStatus("connecting");
    setIsLiveSessionOpen(true);
    setTimeout(() => {
      setSessionStatus("connected");
    }, 2000);
  };

  const endSession = () => {
    setSessionStatus("ended");
    const newSession: Session = {
      id: sessionHistory.length + 1,
      type: sessionType,
      expert: "John Doe",
      date: new Date().toISOString().split("T")[0],
      duration: formatTime(sessionTimer),
      topic: sessionTopic || "General Consultation",
      recording: recording,
    };
    setSessionHistory((prev) => [newSession, ...prev]);
    setTimeout(() => {
      setIsLiveSessionOpen(false);
      setSessionTimer(0);
      setRecording(false);
    }, 3000);
  };

  const scheduleSession = () => {
    if (!selectedDate || !selectedTime || !sessionTopic) {
      alert("Please fill all required fields");
      return;
    }
    alert(`Session scheduled for ${selectedDate} at ${selectedTime}`);
    const newSession: Session = {
      id: sessionHistory.length + 1,
      type: "scheduled",
      expert: "Available Expert",
      date: selectedDate,
      time: selectedTime,
      topic: sessionTopic,
      status: "scheduled",
    };
    setSessionHistory((prev) => [newSession, ...prev]);
    setIsScheduleModalOpen(false);
    setSelectedDate("");
    setSelectedTime("");
    setSessionTopic("");
    setSessionNotes("");
  };

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

  const goToBanner = (index: number) => {
    if (!isAnimating && index !== currentBanner) {
      setIsAnimating(true);
      setCurrentBanner(index);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    const userMessage: ChatMessage = {
      id: chatMessages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);
    setTimeout(() => {
      const botResponses = [
        "I understand your query. Let me connect you with a relevant expert.",
        "That's a great question! Our team specializes in this area.",
        "I'll help you get the right solution for your needs.",
        "Our experts have extensive experience with similar requirements.",
        "Let me provide you with more detailed information about this.",
      ];
      const botMessage: ChatMessage = {
        id: chatMessages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  const getTextAnimationClass = (animationType: string): string => {
    switch (animationType) {
      case "fadeInUp":
        return "animate-fade-in-up";
      case "slideInRight":
        return "animate-slide-in-right";
      case "zoomIn":
        return "animate-zoom-in";
      case "fadeInLeft":
        return "animate-fade-in-left";
      case "bounceIn":
        return "animate-bounce-in";
      case "fadeInDown":
        return "animate-fade-in-down";
      case "slideInFromTop":
        return "animate-slide-in-from-top";
      case "slideInFromLeft":
        return "animate-slide-in-from-left";
      case "slideInFromRight":
        return "animate-slide-in-from-right";
      case "rotateIn":
        return "animate-rotate-in";
      case "flipInX":
        return "animate-flip-in-x";
      case "bounceInDown":
        return "animate-bounce-in-down";
      case "pulse":
        return "animate-pulse-once";
      case "fadeInUpDelay":
        return "animate-fade-in-up-delay";
      case "slideInUp":
        return "animate-slide-in-up";
      case "fadeInRight":
        return "animate-fade-in-right";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Enhanced Hero Section with Animated Text Layers */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Hero Carousel */}
        <div className="absolute inset-0 z-0">
          {heroBanners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                index === currentBanner ? "opacity-100 scale-100" : "opacity-0 scale-105"
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
                <img src={banner.media.src} alt={banner.title} className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>
            </div>
          ))}
        </div>

        {/* Animated tech pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20 z-10"></div>

        {/* Vertical Carousel Controls */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-center space-y-4">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
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

        {/* Dots Indicator */}
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
            <div className={`mb-8 ${getTextAnimationClass(heroBanners[currentBanner].textAnimation)}`}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-400/30 mb-6 animate-pulse">
                <Sparkles className="h-5 w-5 text-yellow-400 animate-spin" />
                <span className="text-white font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                  Leading IT & Digital Marketing Agency
                </span>
              </div>
            </div>
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight ${getTextAnimationClass(
                heroBanners[currentBanner].titleAnimation
              )}`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-300 to-purple-300 animate-gradient-x block">
                {heroBanners[currentBanner].title}
              </span>
              <span
                className={`block mt-4 text-white ${getTextAnimationClass(
                  heroBanners[currentBanner].subtitleAnimation
                )}`}
              >
                {heroBanners[currentBanner].subtitle}
              </span>
            </h1>
            <p
              className={`text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed ${getTextAnimationClass(
                heroBanners[currentBanner].descriptionAnimation
              )}`}
            >
              {heroBanners[currentBanner].description}
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 ${getTextAnimationClass(
                heroBanners[currentBanner].textAnimation
              )}`}
            >
              <Link to="/consultation">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 group"
                >
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 group"
                >
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Our Services
                </Button>
              </Link>
            </div>
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto ${getTextAnimationClass(
                heroBanners[currentBanner].textAnimation
              )}`}
            >
              {Object.entries(heroBanners[currentBanner].stats).map(([key, value], index) => (
                <div
                  key={key}
                  className="text-center transform hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 animate-stats-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className="text-2xl md:text-3xl font-bold text-white animate-pulse"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {value}
                  </div>
                  <div className="text-white/70 text-sm capitalize mt-2">{key.replace(/([A-Z])/g, " $1")}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-cyan-400/30 rounded-full blur-xl animate-float-slow"></div>
        <div
          className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-400/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-blue-400/30 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-400/30 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-20 left-20 text-white/10 z-10 animate-pulse-slow">
          <Code className="h-20 w-20" />
        </div>
        <div className="absolute bottom-20 right-20 text-white/10 z-10 animate-pulse" style={{ animationDelay: "2s" }}>
          <Globe className="h-24 w-24" />
        </div>
      </section>

      {/* Live Stream & Expert Grid Section */}
      <section className="py-16 bg-slate-950 border-y border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Live <span className="text-cyan-400">Expert</span> Sessions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Join our experts live for interactive sessions. If you missed it, watch the recordings below.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {experts.map((expert) => (
              <div
                key={expert.id}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl group"
              >
                <div className="relative aspect-video bg-black">
                  {expert.isLive ? (
                    <div className="absolute inset-0">
                      <LiveStreamPlayer />
                      <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full"></span> LIVE
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                      <video
                        src={expert.videoUrl}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        muted
                        loop
                        onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
                        onMouseOut={(e) => (e.currentTarget as HTMLVideoElement).pause()}
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cyan-500/80 transition-colors">
                          <Play className="w-5 h-5 text-white fill-current" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4 bg-slate-800/80 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded">
                        Recorded
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-700"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {expert.name}
                      </h3>
                      <p className="text-sm text-slate-400">{expert.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Users className="w-4 h-4" />
                      <span>{expert.isLive ? "1.2k watching" : "500+ views"}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30"
                    >
                      View Profile <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/experts">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-cyan-500 transition-all px-8"
              >
                View All Experts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] bg-[length:30px_30px] animate-moving-background-slow"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-12 h-12 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-20 right-20 w-16 h-16 bg-purple-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-14 h-14 bg-pink-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-10 right-10 w-10 h-10 bg-blue-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <Sparkles className="h-5 w-5 text-yellow-400 animate-spin" />
              <span className="text-white font-medium">Instant Connect with Experts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Connect with Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Experts
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get personalized advice through live sessions, chats, or scheduled meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {consultationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden animate-consultation-card"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div
                  className={`w-20 h-20 bg-gradient-to-r ${option.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl group-hover:rotate-12`}
                >
                  <option.icon className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{option.description}</p>

                <div className="flex items-center text-cyan-300 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="text-sm font-medium">{option.duration}</span>
                </div>

                <Button
                  onClick={option.onClick}
                  className={`w-full bg-gradient-to-r ${option.color} text-white hover:opacity-90 rounded-2xl py-6 text-lg font-semibold transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/25 group-hover:scale-105`}
                >
                  {option.action}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>
            ))}
          </div>

          {/* Session History Preview */}
          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Recent Sessions</h3>
                <p className="text-gray-300">Your previous consultations and meetings</p>
              </div>
              <Button
                variant="outline"
                className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                onClick={() => setIsScheduleModalOpen(true)}
              >
                <CalendarDays className="h-4 w-4 mr-2" />
                View All Sessions
              </Button>
            </div>

            {/* Orange gradient session cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessionHistory.slice(0, 3).map((session) => (
                <div
                  key={session.id}
                  className="flex items-center gap-4 bg-gradient-to-br from-orange-100 to-orange-200 
                  border border-orange-300 rounded-3xl p-5 shadow-md hover:shadow-orange-400/40 
                  hover:scale-[1.03] transition-all duration-300"
                >
                  {/* Profile Image */}
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500 flex-shrink-0">
                    <img
                      src={session.photo || "/default-user.png"}
                      alt={session.expert}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    {/* Name */}
                    <h4 className="text-gray-900 text-lg font-semibold truncate">{session.expert}</h4>

                    {/* Skills / Role */}
                    <p className="text-sm text-gray-700 truncate">{session.role}</p>

                    {/* Rating + Orders */}
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-yellow-600 text-sm">⭐ {session.rating || "4.5"}</span>
                      <span className="text-gray-700 text-xs">{session.orders || "100+"} orders</span>
                    </div>

                    {/* Experience */}
                    <p className="text-sm text-gray-800 mt-1">Exp: {session.experience || "5"} Years</p>

                    {/* Topic */}
                    <p className="text-sm text-gray-600 mt-1 truncate">{session.topic}</p>

                    {/* Date + Duration + Chat Button */}
                    <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Calendar className="h-4 w-4 mr-1" /> {session.date}
                      </div>

                      <div className="flex items-center text-blue-700 text-sm">
                        <Clock className="h-4 w-4 mr-1" /> {session.duration}
                      </div>

                      {/* Chat Button */}
                      <button className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm shadow-sm hover:bg-orange-600 transition-colors">
                        Chat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Session Modal */}
      {isLiveSessionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full h-full max-w-7xl mx-auto flex flex-col">
            {/* Session Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-900/90 to-black/90 border-b border-white/10">
              <div className="flex items-center space-x-4">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    sessionType === "video" ? "bg-blue-500/20" : "bg-purple-500/20"
                  }`}
                >
                  {sessionType === "video" ? (
                    <VideoIcon className="h-6 w-6 text-blue-400" />
                  ) : (
                    <Phone className="h-6 w-6 text-purple-400" />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {sessionType === "video" ? "Live Video Call" : "Voice Call"}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm">
                    <div
                      className={`flex items-center ${
                        sessionStatus === "connected" ? "text-green-400" : "text-yellow-400"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mr-2 ${
                          sessionStatus === "connected" ? "bg-green-400 animate-pulse" : "bg-yellow-400 animate-pulse"
                        }`}
                      ></div>
                      {sessionStatus === "connecting"
                        ? "Connecting..."
                        : sessionStatus === "connected"
                        ? "Connected"
                        : "Session Ended"}
                    </div>
                    <div className="text-gray-400">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {formatTime(sessionTimer)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {sessionStatus === "connected" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className={`border ${recording ? "border-red-500 text-red-400" : "border-gray-600 text-gray-400"}`}
                    onClick={() => setRecording(!recording)}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${recording ? "bg-red-400 animate-pulse" : "bg-gray-400"}`}
                    ></div>
                    {recording ? "Recording" : "Record"}
                  </Button>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                  onClick={() => setIsLiveSessionOpen(false)}
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>

                <Button
                  variant="destructive"
                  onClick={endSession}
                  className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
                >
                  {sessionStatus === "ended" ? "Close" : "End Session"}
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Video/Audio Area */}
              <div className="flex-1 flex flex-col p-6">
                {sessionStatus === "connecting" ? (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
                      {sessionType === "video" ? (
                        <VideoIcon className="h-16 w-16 text-blue-400" />
                      ) : (
                        <Phone className="h-16 w-16 text-purple-400" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Connecting to Expert...</h3>
                    <p className="text-gray-400">Please wait while we connect you with our specialist</p>
                    <div className="mt-8 flex space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ) : sessionStatus === "connected" ? (
                  <>
                    {/* Video Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      {/* Your Video */}
                      <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-800">
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                          {isVideoOff && sessionType === "video" ? (
                            <div className="text-center">
                              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="h-10 w-10 text-gray-400" />
                              </div>
                              <p className="text-gray-400 font-semibold">You</p>
                              <p className="text-sm text-gray-500">Camera is off</p>
                            </div>
                          ) : sessionType === "audio" ? (
                            <div className="text-center">
                              <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Headphones className="h-10 w-10 text-purple-400" />
                              </div>
                              <p className="text-gray-400 font-semibold">You</p>
                              <p className="text-sm text-gray-500">Voice Call</p>
                            </div>
                          ) : (
                            <div className="text-center">
                              <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <VideoIcon className="h-10 w-10 text-blue-400" />
                              </div>
                              <p className="text-gray-400 font-semibold">You</p>
                              <p className="text-sm text-gray-500">Camera is on</p>
                            </div>
                          )}
                        </div>

                        {/* Your Name Badge */}
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                          <p className="text-white text-sm font-medium">You {isMuted && "(Muted)"}</p>
                        </div>
                      </div>

                      {/* Expert Video */}
                      <div className="relative bg-gray-900 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                              <User className="h-12 w-12 text-cyan-300" />
                            </div>
                            <p className="text-white font-semibold text-lg">Expert</p>
                            <p className="text-sm text-cyan-300">IT Consultant</p>
                            <div className="mt-4 flex items-center justify-center space-x-2">
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                              <span className="text-sm text-green-400">Speaking</span>
                            </div>
                          </div>
                        </div>

                        {/* Expert Name Badge */}
                        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-sm px-4 py-2 rounded-full">
                          <p className="text-white text-sm font-medium">John Doe - IT Expert</p>
                        </div>
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center space-x-6">
                      <Button
                        variant="outline"
                        size="lg"
                        className={`rounded-full w-16 h-16 ${
                          isMuted
                            ? "bg-red-500/20 border-red-500/50 text-red-400"
                            : "bg-white/10 border-white/20 text-white"
                        }`}
                        onClick={() => setIsMuted(!isMuted)}
                      >
                        {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                      </Button>

                      {sessionType === "video" && (
                        <Button
                          variant="outline"
                          size="lg"
                          className={`rounded-full w-16 h-16 ${
                            isVideoOff
                              ? "bg-red-500/20 border-red-500/50 text-red-400"
                              : "bg-white/10 border-white/20 text-white"
                          }`}
                          onClick={() => setIsVideoOff(!isVideoOff)}
                        >
                          {isVideoOff ? <VideoOff className="h-6 w-6" /> : <VideoIcon className="h-6 w-6" />}
                        </Button>
                      )}

                      <Button
                        variant="outline"
                        size="lg"
                        className={`rounded-full w-16 h-16 ${
                          isScreenSharing
                            ? "bg-green-500/20 border-green-500/50 text-green-400"
                            : "bg-white/10 border-white/20 text-white"
                        }`}
                        onClick={() => setIsScreenSharing(!isScreenSharing)}
                      >
                        {isScreenSharing ? <ScreenShareOff className="h-6 w-6" /> : <ScreenShare className="h-6 w-6" />}
                      </Button>

                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full w-16 h-16 bg-white/10 border-white/20 text-white"
                      >
                        <Settings className="h-6 w-6" />
                      </Button>

                      <Button
                        variant="destructive"
                        size="lg"
                        className="rounded-full w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600"
                        onClick={endSession}
                      >
                        <PhoneCall className="h-6 w-6 rotate-135" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 className="h-16 w-16 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Session Completed</h3>
                    <p className="text-gray-400 mb-6">Thank you for your consultation!</p>
                    <div className="bg-gray-900/50 rounded-2xl p-6 max-w-md w-full">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">Duration</p>
                          <p className="text-white font-bold text-xl">{formatTime(sessionTimer)}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-400 text-sm">Type</p>
                          <p className="text-white font-bold text-xl capitalize">{sessionType}</p>
                        </div>
                      </div>
                      {recording && (
                        <div className="flex items-center justify-center space-x-2 text-green-400 mb-4">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Session was recorded</span>
                        </div>
                      )}
                      <Button
                        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600"
                        onClick={() => setIsLiveSessionOpen(false)}
                      >
                        Close Window
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Participants & Chat Sidebar */}
              {sessionStatus === "connected" && (
                <div className="w-80 border-l border-white/10 bg-gray-900/50 flex flex-col">
                  {/* Participants */}
                  <div className="p-6 border-b border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">Participants ({participants.length})</h3>
                    <div className="space-y-4">
                      {participants.map((participant) => (
                        <div
                          key={participant.id}
                          className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                participant.id === 1 ? "bg-blue-500/20" : "bg-green-500/20"
                              }`}
                            >
                              <User
                                className={`h-5 w-5 ${participant.id === 1 ? "text-blue-400" : "text-green-400"}`}
                              />
                            </div>
                            <div>
                              <p className="text-white font-medium">{participant.name}</p>
                              <p className="text-xs text-gray-400">{participant.role}</p>
                            </div>
                          </div>
                          {participant.isSpeaking && (
                            <div className="flex space-x-1">
                              {[1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className="w-1 h-4 bg-green-400 rounded-full animate-pulse"
                                  style={{ animationDelay: `${i * 0.1}s` }}
                                ></div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h3 className="text-lg font-semibold text-white mb-4">Session Chat</h3>
                    <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                      <div className="bg-blue-500/20 rounded-2xl rounded-bl-none p-4 max-w-xs">
                        <p className="text-white text-sm">Welcome to the session! How can I help you today?</p>
                        <p className="text-xs text-blue-300 mt-2">Expert • Just now</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                      <Button className="bg-gradient-to-r from-blue-600 to-cyan-600">
                        <Send className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Schedule Session Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl w-full max-w-4xl mx-4 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10">
              <div>
                <h2 className="text-2xl font-bold text-white">Schedule a Session</h2>
                <p className="text-gray-400">Book a consultation with our experts</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={() => setIsScheduleModalOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Form */}
                <div>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">Session Topic</label>
                      <input
                        type="text"
                        value={sessionTopic}
                        onChange={(e) => setSessionTopic(e.target.value)}
                        placeholder="What would you like to discuss?"
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Date</label>
                        <input
                          type="date"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Time</label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Session Type</label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { type: "video" as const, label: "Video Call", icon: VideoIcon, color: "blue" },
                          { type: "audio" as const, label: "Voice Call", icon: Phone, color: "purple" },
                          { type: "screen" as const, label: "Screen Share", icon: Monitor, color: "green" },
                        ].map((item) => (
                          <button
                            key={item.type}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              sessionType === item.type
                                ? `border-${item.color}-500 bg-${item.color}-500/10`
                                : "border-white/10 bg-white/5 hover:border-white/20"
                            }`}
                            onClick={() => setSessionType(item.type)}
                          >
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                                sessionType === item.type ? `bg-${item.color}-500/20` : "bg-white/10"
                              }`}
                            >
                              <item.icon
                                className={`h-6 w-6 ${
                                  sessionType === item.type ? `text-${item.color}-400` : "text-gray-400"
                                }`}
                              />
                            </div>
                            <p className={`font-medium ${sessionType === item.type ? "text-white" : "text-gray-400"}`}>
                              {item.label}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Additional Notes</label>
                      <textarea
                        value={sessionNotes}
                        onChange={(e) => setSessionNotes(e.target.value)}
                        placeholder="Any specific requirements or questions?"
                        rows={4}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Experts & Summary */}
                <div>
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Available Experts</h3>
                    <div className="space-y-4">
                      {experts.map((expert) => (
                        <div
                          key={expert.id}
                          className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center overflow-hidden">
                              <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-white font-medium">{expert.name}</p>
                              <p className="text-sm text-gray-400">{expert.role}</p>
                            </div>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs ${
                              expert.available ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                            }`}
                          >
                            {expert.available ? "Available" : "Busy"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Session Summary */}
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Session Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Session Type</span>
                        <span className="text-white font-medium capitalize">{sessionType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Duration</span>
                        <span className="text-white font-medium">45 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Date & Time</span>
                        <span className="text-white font-medium">
                          {selectedDate && selectedTime ? `${selectedDate} at ${selectedTime}` : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Recording</span>
                        <span className="text-green-400 font-medium">Available</span>
                      </div>
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-gray-400 text-sm">Total Cost</p>
                            <p className="text-2xl font-bold text-white">Free</p>
                          </div>
                          <div className="text-sm text-gray-400">
                            <p>Special introductory offer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-white/10">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => setIsScheduleModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8"
                  onClick={scheduleSession}
                  disabled={!selectedDate || !selectedTime || !sessionTopic}
                >
                  <CalendarDays className="h-5 w-5 mr-2" />
                  Schedule Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      {isLiveChatOpen && (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Live Chat Support</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs opacity-90">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsLiveChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
              <div className="space-y-3">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-br-none"
                          : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1 text-right">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-2xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-2xl px-4 hover:from-blue-600 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">Our experts typically reply within 2 minutes</p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-3">
        {!isLiveChatOpen && (
          <Button
            onClick={() => setIsLiveChatOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 animate-bounce"
            size="lg"
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            Live Chat
          </Button>
        )}

        <Button
          onClick={() => startLiveSession("video")}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
          size="lg"
        >
          <VideoIcon className="h-6 w-6 mr-2" />
          Live Session
        </Button>
      </div>

      {/* Client Logos Section */}
      <section className="py-12 bg-white border-t border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by Industry Leaders</p>
        </div>
        <div
          className="relative w-full overflow-hidden"
          ref={logoContainerRef}
          onMouseEnter={() => setIsLogoPaused(true)}
          onMouseLeave={() => setIsLogoPaused(false)}
        >
          <div className="flex space-x-12 animate-scroll whitespace-nowrap py-4">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[150px] group cursor-pointer"
              >
                <div className="h-12 w-auto opacity-40 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 transform group-hover:scale-110">
                  <img src={client.logo} alt={client.name} className="h-full w-auto object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">
                Services
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end digital solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard icon={feature.icon} title={feature.title} description={feature.description} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine"></div>
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 opacity-90">Get a comprehensive digital strategy tailored to your goals</p>
              <Button
                size="lg"
                className="rounded-full bg-white text-cyan-600 hover:bg-gray-100 shadow-lg hover:scale-105 transition-transform"
                onClick={() => setIsScheduleModalOpen(true)}
              >
                <VideoIcon className="h-5 w-5 mr-2" />
                Book Live Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose BoosterEraIT?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We deliver excellence through innovation and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See what our clients say about their experience working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUpDelay {
          0% { opacity: 0; transform: translateY(30px); }
          50% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceInDown {
          0% { opacity: 0; transform: translateY(-2000px); }
          60% { opacity: 1; transform: translateY(30px); }
          80% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromTop {
          from { opacity: 0; transform: translateY(-100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-180deg) scale(0.3); }
          to { opacity: 1; transform: rotate(0) scale(1); }
        }
        @keyframes flipInX {
          from { opacity: 0; transform: perspective(400px) rotateX(90deg); }
          to { opacity: 1; transform: perspective(400px) rotateX(0); }
        }
        @keyframes pulse-once {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes stats-in {
          from { opacity: 0; transform: translateY(20px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes consultation-card {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        @keyframes moving-background-slow {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(-20px) translateY(-20px); }
        }
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
        .animate-fade-in-up-delay { animation: fadeInUpDelay 1.2s ease-out; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out; }
        .animate-zoom-in { animation: zoomIn 0.8s ease-out; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out; }
        .animate-bounce-in { animation: bounceIn 0.8s ease-out; }
        .animate-bounce-in-down { animation: bounceInDown 1s ease-out; }
        .animate-fade-in-down { animation: fadeInDown 0.8s ease-out; }
        .animate-slide-in-from-top { animation: slideInFromTop 0.8s ease-out; }
        .animate-slide-in-from-left { animation: slideInFromLeft 0.8s ease-out; }
        .animate-slide-in-from-right { animation: slideInFromRight 0.8s ease-out; }
        .animate-slide-in-up { animation: slideInUp 0.8s ease-out; }
        .animate-rotate-in { animation: rotateIn 0.8s ease-out; }
        .animate-flip-in-x { animation: flipInX 1s ease-out; }
        .animate-pulse-once { animation: pulse-once 0.5s ease-in-out; }
        .animate-stats-in { animation: stats-in 0.6s ease-out; }
        .animate-consultation-card { animation: consultation-card 0.6s ease-out; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-moving-background-slow { animation: moving-background-slow 30s linear infinite; }
        .animate-shine { animation: shine 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
        .animate-scroll { animation: scroll 30s linear infinite; }
        .animate-fade-in { animation: fadeInUp 0.3s ease-out; }
      `}</style>

      <Footer />
    </div>
  );
};

export default Home;