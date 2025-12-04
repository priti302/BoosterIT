import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, X, Eye, EyeOff } from "lucide-react";
import { authService } from "@/services/authService";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const data = await authService.login(email, password);
      login(data.token, data.user);
      toast({
        title: "Login Successful!",
        description: "Welcome back to BoosterEraIT.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Login Failed",
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
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-white/80 text-sm">Sign in to your BoosterEraIT account</p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
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

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded border-white/30 bg-white/5 text-purple-500 focus:ring-purple-500"
                    />
                    <span className="text-white/80 text-sm">Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-yellow-300 hover:text-yellow-200 text-sm font-medium transition-colors">
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-base font-semibold py-6 shadow-lg hover:shadow-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-transparent text-white/60">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full rounded-xl py-4 text-sm bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white transition-all duration-200"
                  type="button"
                >
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-8 text-center text-white/80 text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-yellow-300 font-semibold hover:text-yellow-200 transition-colors">
                  Create new account
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

export default Login;