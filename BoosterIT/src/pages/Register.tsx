import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, User, X, Eye, EyeOff, UserCog } from "lucide-react";
import { authService } from "@/services/authService";

const Register = () => {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("CLIENT");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password) {
            toast({
                title: "Missing Information",
                description: "Please fill in all fields.",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);
        try {
            await authService.register(name, email, password, role);
            toast({
                title: "Registration Successful!",
                description: "Please check your email for the OTP.",
            });
            navigate("/verify-otp", { state: { email } });
        } catch (error: any) {
            toast({
                title: "Registration Failed",
                description: error.message || "Something went wrong.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <Navbar />

            <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
                {/* Background Stars */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-300"></div>
                    <div className="absolute top-60 left-60 w-2 h-2 bg-yellow-200 rounded-full opacity-70 animate-pulse delay-700"></div>
                    <div className="absolute bottom-40 right-40 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-500"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-md mx-auto">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl animate-fade-in relative border border-white/20">
                            {/* Close Button */}
                            <Link
                                to="/"
                                className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group backdrop-blur-sm"
                            >
                                <X className="h-5 w-5 text-white group-hover:text-gray-200" />
                            </Link>

                            {/* Logo Section */}
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                                    <span className="drop-shadow-sm">🔮</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                                <p className="text-white/80 text-sm">Join BoosterEraIT today</p>
                            </div>

                            {/* Register Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Input */}
                                <div>
                                    <Label htmlFor="name" className="text-white text-sm font-medium mb-2 block">
                                        Full Name
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="pl-12 h-12 text-base bg-white/5 border-white/20 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div>
                                    <Label htmlFor="email" className="text-white text-sm font-medium mb-2 block">
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-12 h-12 text-base bg-white/5 border-white/20 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Role Selection */}
                                <div>
                                    <Label htmlFor="role" className="text-white text-sm font-medium mb-2 block">
                                        Account Type
                                    </Label>
                                    <div className="relative">
                                        <UserCog className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                                        <select
                                            id="role"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="pl-12 h-12 w-full text-base bg-white/5 border border-white/20 text-white rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="CLIENT" className="bg-gray-800 text-white">Client (User)</option>
                                            <option value="EXPERT" className="bg-gray-800 text-white">Expert (Can Go Live)</option>
                                            <option value="DIGITAL_PARTNER" className="bg-gray-800 text-white">Digital Partner</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg className="h-5 w-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div>
                                    <Label htmlFor="password" className="text-white text-sm font-medium mb-2 block">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/60" />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pl-12 pr-12 h-12 text-base bg-white/5 border-white/20 text-white placeholder-white/40 rounded-xl focus:ring-2 focus:ring-white/30 focus:border-transparent"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </button>
                                    </div>
                                </div>

                                {/* Register Button */}
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-base font-semibold py-6 shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? "Creating Account..." : "Create Account"}
                                </Button>
                            </form>

                            {/* Login Link */}
                            <div className="mt-8 text-center text-white/80 text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
                                    Sign in
                                </Link>
                            </div>
                        </div>

                        {/* Footer Link */}
                        <div className="text-center mt-6">
                            <Link to="/" className="text-white/60 hover:text-white transition-colors text-sm inline-flex items-center">
                                <X className="h-4 w-4 mr-1" />
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
