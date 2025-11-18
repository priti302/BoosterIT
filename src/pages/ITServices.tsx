import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Code, Smartphone, Cloud, Database, Shield, Cog, Server, Globe, Zap, Cpu, Terminal, GitBranch, ArrowRight, Play, Star, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ITServices = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites built with React, Next.js, and modern frameworks. Responsive, fast, and SEO-optimized solutions tailored to your needs.",
      features: ["React/Next.js", "Responsive Design", "SEO Optimization", "Performance"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter for maximum reach.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Azure, and Google Cloud infrastructure setup, migration, and management for scalable and reliable operations.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "Serverless", "Cost Optimization"],
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Design, optimization, and maintenance of SQL and NoSQL databases for efficient data handling and analytics.",
      features: ["SQL/NoSQL", "Performance Tuning", "Backup & Recovery", "Data Migration"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits, penetration testing, and implementation of robust security measures to protect your assets.",
      features: ["Security Audits", "Penetration Testing", "SSL/TLS", "Compliance"],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Cog,
      title: "CRM Solutions",
      description: "Custom CRM systems and integration with popular platforms like Salesforce, HubSpot, and Zoho to streamline your operations.",
      features: ["Custom CRM", "Salesforce", "HubSpot", "API Integration"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Server,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines, containerization with Docker, and Kubernetes orchestration for efficient development.",
      features: ["Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code", "Monitoring"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "API Development",
      description: "RESTful and GraphQL API design and development for seamless integration between different systems and platforms.",
      features: ["REST & GraphQL", "API Documentation", "Rate Limiting", "Security"],
      color: "from-teal-500 to-green-600"
    },
  ];

  const technologies = [
    { name: "React & Next.js", category: "Frontend" },
    { name: "Node.js & Python", category: "Backend" },
    { name: "AWS & Azure", category: "Cloud" },
    { name: "Docker & Kubernetes", category: "DevOps" },
    { name: "MongoDB & PostgreSQL", category: "Database" },
    { name: "React Native", category: "Mobile" },
    { name: "GraphQL", category: "API" },
    { name: "TypeScript", category: "Language" },
  ];

  const caseStudies = [
    {
      company: "FinTech Solutions",
      industry: "Finance",
      results: "60% faster application performance",
      duration: "4 months",
      services: ["Cloud Migration", "API Development"]
    },
    {
      company: "HealthTech Pro",
      industry: "Healthcare",
      results: "99.9% uptime achieved",
      duration: "6 months",
      services: ["DevOps", "Database Optimization"]
    },
    {
      company: "E-Commerce Giant",
      industry: "Retail",
      results: "3x faster mobile app",
      duration: "5 months",
      services: ["Mobile Development", "Performance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          >
            <source src="https://player.vimeo.com/external/469334274.sd.mp4?s=89d9e8b5e5a8d1f8f6e0e5e5e5e5e5e5e5e5e5e5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          {/* Enhanced overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60"></div>
        </div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
                  <Cpu className="h-5 w-5 text-amber-400" />
                  <span className="text-white font-medium">IT & Technology Experts</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Technology
                  <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    Solutions
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Comprehensive technology solutions to power your business growth. 
                  From development to deployment, we build scalable, secure, and high-performance systems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/consultation">
                    <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6 transition-all duration-300">
                      Start Your Project
                    </Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300">
                      <Play className="mr-2 h-5 w-5" />
                      View Our Work
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-white/80">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">500+ Projects</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-white/80 text-sm">Projects Delivered</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                      <div className="text-white/80 text-sm">Uptime Guarantee</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">50+</div>
                      <div className="text-white/80 text-sm">Technologies</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">98%</div>
                      <div className="text-white/80 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated code brackets */}
        <div className="absolute top-20 right-20 text-white/10 z-10 animate-pulse">
          <Code className="h-16 w-16" />
        </div>
        <div className="absolute bottom-20 left-20 text-white/10 z-10 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Server className="h-16 w-16" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">IT Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert solutions designed to solve your technical challenges and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Technologies We <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Use</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Modern tech stack for building scalable, high-performance applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-gray-500 text-sm">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results from our technology implementations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {study.company.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{study.company}</h3>
                      <p className="text-gray-500 text-sm">{study.industry}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900 mb-2">{study.results}</div>
                    <p className="text-gray-500 text-sm">in {study.duration}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery", 
                description: "We understand your needs and goals",
                icon: Terminal
              },
              { 
                step: "02", 
                title: "Planning", 
                description: "Strategic roadmap and architecture design",
                icon: GitBranch
              },
              { 
                step: "03", 
                title: "Development", 
                description: "Agile development with regular updates",
                icon: Code
              },
              { 
                step: "04", 
                title: "Deployment", 
                description: "Launch and ongoing support",
                icon: Server
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our IT services can transform your business and bring your ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6">
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Contact Our Team
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

export default ITServices;