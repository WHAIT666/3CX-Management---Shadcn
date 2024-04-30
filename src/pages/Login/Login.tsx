import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React from "react";
import { useTheme } from "@/components/ui/theme-provider";

// Import your image
import loginImage from "../../assets/techbase.png"

function Login() {
    const { theme } = useTheme(); // Assuming you have access to the theme context

    return (
        <div className={`flex items-center justify-center h-screen bg-gray-100 ${theme === 'dark' ? 'dark:bg-gray-900' : 'bg-gray-100'}`}>
            <Card className="w-full max-w-md p-6 bg-white shadow-lg dark:bg-gray-950">
                <CardHeader className="text-center relative">
                    {/* Include your image */}
                    <img 
                        src={loginImage} 
                        alt="Login" 
                        className="mx-auto mb-4" 
                        style={{ width: "150px", height: "150px" }} // Adjust width and height as needed
                    />
                    <CardTitle className="text-2xl font-bold">Login</CardTitle>
                    <CardDescription className={`text-gray-500 ${theme === 'dark' ? 'dark:text-gray-400' : 'text-gray-500'}`}>
                        Enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>
                <div className="flex items-center justify-center space-x-4 mb-4">
                    <Button className="flex items-center justify-center space-x-2" variant="outline">
                        <ComputerIcon className="h-5 w-5" />
                        <span>Sign in with Microsoft</span>
                    </Button>
                </div>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Email or Extension Number" required type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" placeholder="Password" required type="password" />
                    </div>
                    <div className="text-center text-sm">
                        <a href="/forgot-password" className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:underline`}>
                            Forgot Password?
                        </a>
                    </div>
                </CardContent>
                <CardFooter className="text-center">
                    <Button className="w-full" type="submit">
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

function ComputerIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="14" height="8" x="5" y="2" rx="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" />
            <path d="M6 18h2" />
            <path d="M12 18h6" />
        </svg>
    );
}

export default Login;