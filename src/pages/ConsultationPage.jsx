// ConsultationPage.jsx
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowLeft, 
  MessageCircle, 
  Phone, 
  Calendar, 
  Star, 
  CheckCircle2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Smartphone,
  Shield
} from "lucide-react";

const ConsultationPage = () => {
  const { type } = useParams();
  const [showLogin, setShowLogin] = useState(false);
  const [loginMethod, setLoginMethod] = useState("email"); // "email" or "phone"
  const [showOtp, setShowOtp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    otp: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const consultationTypes = {
    chat: {
      icon: MessageCircle,
      title: "Chat with Expert",
      description: "Instant messaging consultation with our technical experts",
      duration: "Available 24/7",
      color: "from-green-500 to-emerald-600",
      experts: [
        {
          id: 1,
          name: "Alex Johnson",
          role: "Senior Web Developer",
          experience: "8+ years",
          rating: 4.9,
          reviews: 127,
          specialties: ["React", "Node.js", "AWS"],
          available: true
        },
        {
          id: 2,
          name: "Sarah Chen",
          role: "Digital Marketing Specialist",
          experience: "6+ years",
          rating: 4.8,
          reviews: 89,
          specialties: ["SEO", "PPC", "Social Media"],
          available: true
        },
        {
          id: 3,
          name: "Mike Rodriguez",
          role: "Cloud Architect",
          experience: "10+ years",
          rating: 4.9,
          reviews: 156,
          specialties: ["AWS", "Azure", "DevOps"],
          available: false
        }
      ]
    },
    call: {
      icon: Phone,
      title: "Voice Call Consultation",
      description: "Schedule a phone consultation with our specialists",
      duration: "30-60 minutes",
      color: "from-blue-500 to-cyan-600"
    },
    meeting: {
      icon: Calendar,
      title: "Video Meeting",
      description: "Comprehensive video consultation with screen sharing",
      duration: "45-90 minutes",
      color: "from-purple-500 to-indigo-600"
    }
  };

  const currentType = consultationTypes[type] || consultationTypes.chat;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendOtp = () => {
    // Simulate OTP sending
    setShowOtp(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleExpertSelect = (expertId) => {
    setShowLogin(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Consultation Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <currentType.icon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentType.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{currentType.description}</p>
        </div>

        {!showLogin ? (
          <div className="max-w-6xl mx-auto">
            {/* Available Experts */}
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Experts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentType.experts?.map((expert) => (
                  <div
                    key={expert.id}
                    className="border-2 border-gray-200 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
                        <p className="text-gray-600">{expert.role}</p>
                      </div>
                      <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        <CheckCircle2 className="h-4 w-4 mr-1" />
                        {expert.available ? "Available" : "Busy"}
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(expert.rating) ? "fill-current" : ""
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm">
                        {expert.rating} ({expert.reviews} reviews)
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Experience: {expert.experience}</p>
                      <div className="flex flex-wrap gap-2">
                        {expert.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button
                      className={`w-full ${
                        expert.available
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                          : "bg-gray-400 cursor-not-allowed"
                      } text-white`}
                      disabled={!expert.available}
                      onClick={() => expert.available && handleExpertSelect(expert.id)}
                    >
                      {expert.available ? "Start Chat" : "Not Available"}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Secure & Private",
                  description: "Your conversations are encrypted and completely private"
                },
                {
                  icon: CheckCircle2,
                  title: "Expert Verified",
                  description: "All our experts are thoroughly vetted and certified"
                },
                {
                  icon: MessageCircle,
                  title: "Instant Help",
                  description: "Get immediate answers to your technical questions"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Login Form */
          <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login to Continue</h2>
            
            {/* Login Method Toggle */}
            <div className="flex bg-gray-100 rounded-2xl p-1 mb-6">
              <button
                className={`flex-1 py-3 rounded-xl text-center font-medium transition-all ${
                  loginMethod === "email"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600"
                }`}
                onClick={() => setLoginMethod("email")}
              >
                <Mail className="h-4 w-4 inline mr-2" />
                Email
              </button>
              <button
                className={`flex-1 py-3 rounded-xl text-center font-medium transition-all ${
                  loginMethod === "phone"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600"
                }`}
                onClick={() => setLoginMethod("phone")}
              >
                <Smartphone className="h-4 w-4 inline mr-2" />
                Phone
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {loginMethod === "email" ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {showOtp && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-4">
                {!showOtp ? (
                  <Button
                    type="button"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-2xl"
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-2xl"
                  >
                    Verify & Continue
                  </Button>
                )}

                <button
                  type="button"
                  className="w-full text-center text-gray-600 hover:text-gray-900 py-2"
                  onClick={() => {
                    setShowLogin(false);
                    setShowOtp(false);
                  }}
                >
                  Back to Experts
                </button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
              <p className="text-sm text-blue-700 text-center">
                <Shield className="h-4 w-4 inline mr-1" />
                Your information is secure and will not be shared with third parties.
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ConsultationPage;