import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, CheckCircle2, Users, Target, Zap, MessageCircle, User, Phone, Mail } from "lucide-react";

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Consultation Booked Successfully!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const serviceTypes = [
    { value: "web-development", label: "Web Development" },
    { value: "app-development", label: "Mobile App Development" },
    { value: "cloud-solutions", label: "Cloud Solutions" },
    { value: "digital-marketing", label: "Digital Marketing" },
    { value: "seo-services", label: "SEO Services" },
    { value: "social-media", label: "Social Media Marketing" },
    { value: "ecommerce", label: "E-commerce Solutions" },
    { value: "ui-ux", label: "UI/UX Design" },
    { value: "other", label: "Other Services" },
  ];

  const benefits = [
    {
      icon: CheckCircle2,
      title: "Free 30-minute Consultation",
      description: "No obligation, just valuable insights and expert advice",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Speak with certified industry professionals",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Target,
      title: "Custom Strategy",
      description: "Tailored solutions designed for your specific needs",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Quick Response",
      description: "We'll reach out within 24 hours to schedule",
      color: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          >
            <source src="https://player.vimeo.com/external/469334274.sd.mp4?s=89d9e8b5e5a8d1f8f6e0e5e5e5e5e5e5e5e5e5e5&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          {/* Enhanced overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60"></div>
        </div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <Calendar className="h-5 w-5 text-amber-400" />
              <span className="text-white font-medium">Free Consultation</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Discuss
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                Your Project
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Schedule a free 30-minute consultation with our experts. Let's explore how we can transform your ideas into successful digital solutions.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Consultation Form */}
              <div className="animate-fade-in">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Schedule Your Consultation</h2>
                      <p className="text-gray-600 text-sm">Fill in your details and we'll contact you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700 font-medium">
                        <User className="h-4 w-4 inline mr-2" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="h-12 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          className="h-12 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700 font-medium">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 7558273334"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          className="h-12 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceType" className="text-gray-700 font-medium">
                        <Target className="h-4 w-4 inline mr-2" />
                        Service Type *
                      </Label>
                      <Select onValueChange={(value) => handleChange("serviceType", value)} required>
                        <SelectTrigger className="h-12 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500">
                          <SelectValue placeholder="Select a service you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        <MessageCircle className="h-4 w-4 inline mr-2" />
                        Project Details (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your project, goals, timeline, or any specific requirements..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[120px] border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl transition-all duration-300 font-semibold text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Booking Consultation...
                        </>
                      ) : (
                        <>
                          <Calendar className="h-5 w-5 mr-2" />
                          Book Free Consultation
                        </>
                      )}
                    </Button>

                    <p className="text-center text-gray-500 text-sm">
                      By submitting, you agree to our Privacy Policy and consent to contact.
                    </p>
                  </form>
                </div>
              </div>

              {/* Benefits & Information */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                {/* Benefits Card */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">What You'll Get</h3>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center flex-shrink-0`}>
                          <benefit.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                          <p className="text-gray-300 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-cyan-400" />
                        <span className="text-cyan-400">30 minutes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-amber-400" />
                        <span className="text-amber-400">No commitment</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                    <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">24 Hours</div>
                    <div className="text-gray-600 text-sm">Average Response Time</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
                    <div className="text-gray-600 text-sm">Happy Clients</div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Why Choose BoosterIT?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    With over 10 years of experience and 500+ successful projects, we're your trusted partner for digital transformation. Our team of certified experts is committed to delivering results that exceed expectations.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mr-1">98%</span>
                      <span className="text-gray-600 text-sm">Client Satisfaction</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mr-1">10+</span>
                      <span className="text-gray-600 text-sm">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              How It <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Works</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Simple and straightforward process to get started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Book Consultation",
                description: "Fill out the form to schedule your free 30-minute session",
                icon: Calendar
              },
              {
                step: "02",
                title: "Strategy Session",
                description: "Discuss your goals and challenges with our experts",
                icon: MessageCircle
              },
              {
                step: "03",
                title: "Get Proposal",
                description: "Receive a customized plan and quote for your project",
                icon: CheckCircle2
              }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-y-1/2 -translate-x-4"></div>
                  )}
                </div>
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                Common <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Questions</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know about our consultation process
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "Is the consultation really free?",
                  answer: "Yes, absolutely! The 30-minute consultation is completely free with no obligations. It's our opportunity to understand your needs and show you how we can help."
                },
                {
                  question: "What should I prepare for the call?",
                  answer: "Just bring your project ideas, goals, and any questions you have. If you have existing materials (website, documents), those can be helpful but aren't required."
                },
                {
                  question: "How soon can we start after the consultation?",
                  answer: "Typically within 1-3 business days. We'll send a proposal within 24 hours, and once approved, we can usually start immediately."
                },
                {
                  question: "What if I need to reschedule?",
                  answer: "No problem! Just contact us at least 2 hours before your scheduled time, and we'll help you reschedule to a more convenient time."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;