import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Index() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginForm);
    // Navigate to onboarding after login
    navigate("/onboarding");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", signupForm);
    // Navigate to onboarding after signup
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex rounded-3xl shadow-2xl overflow-hidden bg-white">
        {/* Left side - Cute puppies image */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-200 to-blue-300 p-8 items-center justify-center">
          <div className="text-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2Ff79ecfb64c7a49bfb9bb5bc58a372675"
              alt="Two adorable puppies eating from pet food bowls"
              className="w-full max-w-md rounded-2xl shadow-lg mb-6"
            />
            <div className="text-blue-800">
              <h2 className="text-2xl font-bold mb-2">
                Welcome to PetFoodCustom
              </h2>
              <p className="text-lg opacity-90">
                Customized nutrition for your furry friends
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Auth forms */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center">
          <div className="w-full max-w-md">
            {/* Logo and brand */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 4c.83 0 1.5.67 1.5 1.5S11.33 9 10.5 9 9 8.33 9 7.5 9.67 6 10.5 6zm3 0c.83 0 1.5.67 1.5 1.5S14.33 9 13.5 9 12 8.33 12 7.5 12.67 6 13.5 6zM12 20c-1.5 0-2.91-.41-4.11-1.24C8.72 16.5 10.26 15 12 15s3.28 1.5 4.11 3.76C14.91 19.59 13.5 20 12 20zm-4.5-9C6.67 11 6 10.33 6 9.5S6.67 8 7.5 8 9 8.67 9 9.5 8.33 11 7.5 11zm9 0c-.83 0-1.5-.67-1.5-1.5S15.67 8 16.5 8 18 8.67 18 9.5 17.33 11 16.5 11z"
                      style={{
                        backgroundImage:
                          "url(https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F965ae4ea63cd4b91a80b50d51ad69863)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-800">
                  PetFoodCustom
                </span>
              </div>
            </div>

            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login" className="text-sm font-medium">
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" className="text-sm font-medium">
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <Card className="border-0 shadow-none">
                  <CardHeader className="text-center px-0 pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      Welcome Back!
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Sign in to your account and get back to our services!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="login-username"
                          className="text-sm font-medium text-gray-700"
                        >
                          Username
                        </Label>
                        <Input
                          id="login-username"
                          type="text"
                          placeholder="Enter your username"
                          value={loginForm.username}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              username: e.target.value,
                            })
                          }
                          className="h-12 px-4 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="login-password"
                          className="text-sm font-medium text-gray-700"
                        >
                          Password
                        </Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Enter your password"
                          value={loginForm.password}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              password: e.target.value,
                            })
                          }
                          className="h-12 px-4 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember-me"
                            checked={rememberMe}
                            onCheckedChange={(checked) =>
                              setRememberMe(checked as boolean)
                            }
                          />
                          <Label
                            htmlFor="remember-me"
                            className="text-sm text-gray-600"
                          >
                            Remember me
                          </Label>
                        </div>
                        <button
                          type="button"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Forgot password?
                        </button>
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium text-base rounded-lg mt-6"
                      >
                        Login
                      </Button>

                      <div className="text-center mt-6">
                        <span className="text-sm text-gray-600">
                          Don't have an account?{" "}
                        </span>
                        <button
                          type="button"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                          onClick={() => {
                            const signupTab = document.querySelector(
                              '[value="signup"]',
                            ) as HTMLElement;
                            signupTab?.click();
                          }}
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup">
                <Card className="border-0 shadow-none">
                  <CardHeader className="text-center px-0 pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-800">
                      Create Account
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      Join us and start customizing your pet's nutrition!
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0">
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="signup-username"
                          className="text-sm font-medium text-gray-700"
                        >
                          Username
                        </Label>
                        <Input
                          id="signup-username"
                          type="text"
                          placeholder="Choose a username"
                          value={signupForm.username}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              username: e.target.value,
                            })
                          }
                          className="h-12 px-4 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="signup-email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email
                        </Label>
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          value={signupForm.email}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              email: e.target.value,
                            })
                          }
                          className="h-12 px-4 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="signup-password"
                          className="text-sm font-medium text-gray-700"
                        >
                          Password
                        </Label>
                        <Input
                          id="signup-password"
                          type="password"
                          placeholder="Create a password"
                          value={signupForm.password}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              password: e.target.value,
                            })
                          }
                          className="h-12 px-4 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="signup-confirm-password"
                          className="text-sm font-medium text-gray-700"
                        >
                          Confirm Password
                        </Label>
                        <Input
                          id="signup-confirm-password"
                          type="password"
                          placeholder="Confirm your password"
                          value={signupForm.confirmPassword}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              confirmPassword: e.target.value,
                            })
                          }
                          className="h-12 px-4 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white font-medium text-base rounded-lg mt-6"
                      >
                        Sign Up
                      </Button>

                      <div className="text-center mt-6">
                        <span className="text-sm text-gray-600">
                          Already have an account?{" "}
                        </span>
                        <button
                          type="button"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                          onClick={() => {
                            const loginTab = document.querySelector(
                              '[value="login"]',
                            ) as HTMLElement;
                            loginTab?.click();
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
