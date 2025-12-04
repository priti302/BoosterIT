import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Zap } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 7558273334",
      description: "Mon-Sat, 10AM-6PM",
      color: "from-green-500 to-emerald-600",
      buttonText: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "boosterera@gmail.com",
      description: "We'll reply within 24 hours",
      color: "from-blue-500 to-cyan-600",
      buttonText: "Send Email"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Ramkund Orai, Jalaun",
      description: "Uttar Pradesh, India",
      color: "from-purple-500 to-indigo-600",
      buttonText: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Sat: 10AM-6PM",
      description: "Sunday: Closed",
      color: "from-orange-500 to-amber-600",
      buttonText: "View Hours"
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 mb-6">
              <MessageCircle className="h-5 w-5 text-amber-400" />
              <span className="text-white font-medium">Get In Touch</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start
              <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                A Conversation
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Ready to transform your business? Contact us today and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-900 font-semibold mb-1">{method.details}</p>
                  <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                  <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors duration-200">
                    {method.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-fade-in">
                <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Send className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                      <p className="text-gray-600 text-sm">We'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700 font-medium">
                          <User className="h-4 w-4 inline mr-2" />
                          Your Name
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

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700 font-medium">
                          <Mail className="h-4 w-4 inline mr-2" />
                          Email Address
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
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700 font-medium">
                        <Zap className="h-4 w-4 inline mr-2" />
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help you?"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="h-12 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700 font-medium">
                        <MessageCircle className="h-4 w-4 inline mr-2" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your project, requirements, or any questions you have..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className="min-h-[150px] border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                        required
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
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information & Map */}
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                {/* Office Information */}
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Office</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Headquarters</h4>
                        <p className="text-gray-300">
                          Ramkund Orai, Jalaun<br/>
                          Uttar Pradesh, India 285001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                        <p className="text-gray-300">
                          Monday - Saturday: 10:00 AM - 6:00 PM<br/>
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Emergency Support</h4>
                        <p className="text-gray-300">Available 24/7 for critical issues</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="font-semibold text-white mb-3">Response Time</h4>
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Zap className="h-4 w-4" />
                      <span className="text-sm">Typically responds within 2 hours</span>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5Y2E3ZmYiIGZpbGwtb3BhY2l0eT0iMC4zIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxIi8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
                    <MapPin className="h-12 w-12 text-cyan-600 mb-3" />
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-gray-500 text-sm mt-1">Orai, Uttar Pradesh</p>
                    <div className="absolute bottom-4">
                      <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors">
                        View on Google Maps
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Quick Help Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
              Quick <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">Help</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Common questions and answers to help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly do you respond?",
                answer: "We typically respond within 2 hours during business hours, and within 24 hours maximum."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes! We offer free 30-minute consultations to discuss your project requirements."
              },
              {
                question: "What services do you provide?",
                answer: "Web development, mobile apps, digital marketing, cloud solutions, and more."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! We serve clients worldwide and can accommodate different time zones."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;