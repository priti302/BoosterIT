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
  Star
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

  // IT and Marketing related video URLs
  const itMarketingVideos = [
    "https://player.vimeo.com/external/469334274.sd.mp4?s=89d9e8b5e5a8d1f8f6e0e5e5e5e5e5e5e5e5e5e5&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/428293920.sd.mp4?s=9d1a3b6e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/444260080.sd.mp4?s=7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a&profile_id=164&oauth2_token_id=57447761"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section with IT/Marketing Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* IT & Marketing Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
          >
            {/* Technology/Digital Marketing themed videos */}
            <source src="https://player.vimeo.com/external/469334274.sd.mp4?s=89d9e8b5e5a8d1f8f6e0e5e5e5e5e5e5e5e5e5e5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            <source src="https://player.vimeo.com/external/444260080.sd.mp4?s=7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            {/* Fallback */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600"></div>
          </video>
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        {/* Animated tech pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-white font-medium">Leading IT & Digital Marketing Agency</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                Digital Transformation
              </span>
              <span className="block mt-4 text-white">
                Made Simple
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              We combine <span className="text-cyan-400 font-semibold">cutting-edge technology</span> with 
              <span className="text-purple-400 font-semibold"> data-driven marketing</span> to accelerate your business growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6 transition-all duration-300">
                  <Code className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-white/70 text-sm">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                <div className="text-white/70 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                <div className="text-white/70 text-sm">Experts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Animated code brackets */}
        <div className="absolute top-20 right-20 text-white/10 z-10 animate-pulse">
          <Code className="h-16 w-16" />
        </div>
        <div className="absolute bottom-20 left-20 text-white/10 z-10 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <TrendingUp className="h-16 w-16" />
        </div>
      </section>

      {/* Services Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
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
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 opacity-90">Get a comprehensive digital strategy tailored to your goals</p>
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-white text-cyan-600 hover:bg-gray-100 shadow-lg">
                  Get Free Strategy Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">Choose Us</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We combine technical expertise with marketing innovation to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl p-8 sm:p-12 border border-cyan-500/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white mb-2">500+</div>
                <div className="text-cyan-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-2">50+</div>
                <div className="text-purple-200">Team Members</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-white mb-2">98%</div>
                <div className="text-cyan-200">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-white mb-2">10+</div>
                <div className="text-purple-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">Success Stories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how we've helped businesses achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="https://player.vimeo.com/external/428293920.sd.mp4?s=9d1a3b6e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Digital Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build something amazing together. Get your free consultation now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6">
                  <Code className="mr-2 h-5 w-5" />
                  Start Project
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  <Users className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;