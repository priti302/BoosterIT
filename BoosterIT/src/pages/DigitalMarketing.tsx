import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Search, TrendingUp, Target, MessageSquare, Mail, BarChart, Megaphone, Share2, Zap, Users, ArrowRight, Play, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings with comprehensive on-page, off-page, and technical SEO strategies that drive organic traffic.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MessageSquare,
      title: "Social Media Marketing",
      description: "Build your brand presence across Facebook, Instagram, LinkedIn, and Twitter with engaging content and targeted campaigns.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Analytics"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "Lead Generation",
      description: "Generate high-quality leads through multi-channel campaigns, landing page optimization, and conversion-focused strategies.",
      features: ["Campaign Management", "Landing Pages", "Lead Nurturing", "CRM Integration"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Google Ads & PPC",
      description: "Maximize ROI with expertly managed Google Ads, display advertising, and remarketing campaigns across all platforms.",
      features: ["Search Campaigns", "Display Ads", "Remarketing", "Performance Tracking"],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Megaphone,
      title: "Brand Strategy",
      description: "Develop a compelling brand identity and positioning strategy that resonates with your target audience and stands out.",
      features: ["Brand Identity", "Market Research", "Positioning", "Voice & Tone"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Create personalized email campaigns with automation, segmentation, and A/B testing to nurture leads and drive conversions.",
      features: ["Automation", "Segmentation", "A/B Testing", "Analytics"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights through comprehensive tracking, analysis, and reporting to optimize your marketing performance.",
      features: ["Dashboard Setup", "KPI Tracking", "Custom Reports", "ROI Analysis"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Share2,
      title: "Content Marketing",
      description: "Engaging blog posts, videos, infographics, and whitepapers that attract, engage, and convert your target audience.",
      features: ["Content Strategy", "Blog Writing", "Video Production", "Distribution"],
      color: "from-teal-500 to-green-600"
    },
  ];

  const caseStudies = [
    {
      company: "TechStart Inc",
      industry: "SaaS",
      results: "300% increase in qualified leads",
      duration: "6 months",
      services: ["SEO", "Content Marketing"]
    },
    {
      company: "FashionHub",
      industry: "E-commerce",
      results: "250% ROI on ad spend",
      duration: "4 months",
      services: ["PPC", "Social Media"]
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare",
      results: "400% more organic traffic",
      duration: "8 months",
      services: ["SEO", "Email Marketing"]
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
            poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          >
            <source src="https://player.vimeo.com/external/444260080.sd.mp4?s=7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a7a&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
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
                  <TrendingUp className="h-5 w-5 text-amber-400" />
                  <span className="text-white font-medium">Digital Marketing Experts</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Grow Your
                  <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    Digital Presence
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Data-driven marketing strategies that grow your online presence, increase brand awareness, 
                  and drive measurable results for your business.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link to="/consultation">
                    <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6 transition-all duration-300">
                      Get Free Audit
                    </Button>
                  </Link>
                  <Link to="/case-studies">
                    <Button size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all duration-300">
                      <Play className="mr-2 h-5 w-5" />
                      View Case Studies
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
                    <span className="text-sm">500+ Clients</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">300%</div>
                      <div className="text-white/80 text-sm">Avg. ROI Increase</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-white/80 text-sm">Campaigns</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">2M+</div>
                      <div className="text-white/80 text-sm">Leads Generated</div>
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
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Marketing Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions to help you reach and engage your target audience
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

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Success <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Stories</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real results from our digital marketing campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
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

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A strategic methodology focused on delivering measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Research & Analysis", 
                description: "Deep dive into your market, competitors, and audience",
                icon: Search
              },
              { 
                title: "Strategy Development", 
                description: "Custom marketing plan aligned with your goals",
                icon: Target
              },
              { 
                title: "Campaign Execution", 
                description: "Multi-channel campaigns with ongoing optimization",
                icon: Zap
              },
              { 
                title: "Monitor & Optimize", 
                description: "Continuous tracking and improvement for maximum ROI",
                icon: BarChart
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free marketing audit and discover how we can help you achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-6">
                  Get Free Marketing Audit
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

export default DigitalMarketing;