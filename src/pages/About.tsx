import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Target, Zap, Heart, Lightbulb, Clock, Globe, TrendingUp, Code, Smartphone, Cloud, Database } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're committed to helping businesses succeed through innovative technology solutions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Heart,
      title: "Client First",
      description: "Your success is our success. We prioritize your needs and goals above everything.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay ahead of the curve, constantly learning and adapting to new technologies.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver nothing but the highest quality work, every single time.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const team = [
    {
      name: "Divyanshu Sir",
      role: "CEO & Founder",
      initial: "DS",
      description: "Visionary leader with 10+ years in tech industry",
      expertise: ["Strategic Planning", "Business Development", "Tech Innovation"],
    },
    {
      name: "Rajesh Kumar",
      role: "CTO",
      initial: "RK",
      description: "Technology expert specializing in scalable solutions",
      expertise: ["Cloud Architecture", "System Design", "Team Leadership"],
    },
    {
      name: "Priya Sharma",
      role: "Head of Marketing",
      initial: "PS",
      description: "Digital marketing strategist with proven track record",
      expertise: ["SEO/SEM", "Brand Strategy", "Growth Marketing"],
    },
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to transform businesses through technology" },
    { year: "2021", event: "First 100 Clients", description: "Reached milestone of serving 100+ satisfied clients" },
    { year: "2022", event: "Team Expansion", description: "Grew to 25+ dedicated professionals" },
    { year: "2023", event: "Award Recognition", description: "Received 'Best IT Service Provider' award" },
    { year: "2024", event: "Global Reach", description: "Expanded services to international markets" },
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
            poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
                  <Zap className="h-5 w-5 text-amber-400" />
                  <span className="text-white font-medium">About BoosterIT</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Building The Future
                  <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                    Of Digital Innovation
                  </span>
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  We're a passionate team of innovators, developers, and strategists dedicated to transforming businesses through cutting-edge technology solutions and data-driven digital marketing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-4 transition-all duration-300 font-semibold">
                    Our Story
                  </button>
                  <button className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm transition-all duration-300 font-semibold">
                    Meet Our Team
                  </button>
                </div>
              </div>

              {/* Stats Card */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">10+</div>
                      <div className="text-white/80 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">500+</div>
                      <div className="text-white/80 text-sm">Projects Delivered</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">50+</div>
                      <div className="text-white/80 text-sm">Team Members</div>
                    </div>
                    <div className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="text-3xl font-bold text-white mb-2">98%</div>
                      <div className="text-white/80 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center justify-center gap-4 text-white/80">
                      <Globe className="h-5 w-5" />
                      <span>Serving clients worldwide</span>
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

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                  Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Journey</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded in 2020, <span className="font-semibold text-cyan-600">BoosterIT</span> started with a simple yet powerful mission: to help businesses leverage technology to achieve extraordinary results. What began as a small team of passionate developers has evolved into a full-service digital agency with expertise spanning web development, mobile apps, cloud solutions, and strategic digital marketing.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Over the years, we've had the privilege of partnering with businesses of all sizes - from ambitious startups to established enterprises. Each collaboration has enriched our experience and reinforced our commitment to delivering excellence in every project.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, we stand as a trusted digital partner for organizations looking to innovate, scale, and thrive in an increasingly competitive digital landscape.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
                  <Clock className="h-5 w-5 text-cyan-600" />
                  <span>Over a decade of digital excellence</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
                  
                  <div className="space-y-8">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="relative flex items-start gap-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 flex-shrink-0">
                          {milestone.year}
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-2">{milestone.event}</h3>
                          <p className="text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our decisions, shape our culture, and drive our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Meet Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Leadership</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A diverse team of talented professionals passionate about technology and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                        {member.initial}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-cyan-600 font-semibold mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 text-white text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-cyan-100">Team Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-cyan-100">Countries Served</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-cyan-100">Support</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">99%</div>
                  <div className="text-cyan-100">Project Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-2xl hover:shadow-cyan-500/25 text-lg px-8 py-4 transition-all duration-300 font-semibold">
                Start Your Project
              </button>
              <button className="rounded-full border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 backdrop-blur-sm transition-all duration-300 font-semibold">
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;