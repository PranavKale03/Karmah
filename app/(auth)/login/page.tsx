"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Eye, EyeOff, CheckSquare, AlertCircle, PlayCircle, CheckCircle2, Filter, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useLogin, useSignup } from "@/hooks/useAuth";
import { DEMO_CREDENTIALS } from "@/lib/auth";

// Validation Schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type LoginFormValues = z.infer<typeof loginSchema>;
type SignupFormValues = z.infer<typeof signupSchema>;

function LeftPanel() {
  return (
    <div className="hidden lg:flex w-[45%] flex-shrink-0 bg-zinc-950 relative overflow-hidden flex-col justify-between p-10 z-0">
      
      {/* Structural Illuminations */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-primary/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full bg-violet-600/20 blur-[100px] pointer-events-none" />

      {/* TOP */}
      <Link href="/">
        <div className="flex items-center rounded-lg bg-primary/20 p-2 w-fit relative z-10">
          <CheckSquare className="h-5 w-5 text-primary" />
          <span className="text-white font-semibold text-lg ml-2 tracking-tight">Karmah</span>
        </div>
      </Link>

      {/* MIDDLE CONTAINER */}
      <div className="flex-1 flex flex-col justify-center relative z-10 opacity-0" style={{ animation: 'fadeSlideIn 600ms ease-out forwards' }}>
        <h1 className="text-4xl font-bold text-white leading-tight tracking-tight">
          Your tasks,<br />
          <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">finally clear.</span>
        </h1>
        <p className="text-zinc-400 text-sm mt-4 max-w-xs leading-relaxed">
          Stop juggling sticky notes and spreadsheets. Karmah keeps everything in one place, beautifully simple.
        </p>

        {/* Feature Triggers */}
        <div className="mt-8 flex flex-col gap-3">
          {[
            { icon: <CheckCircle2 className="h-3 w-3 text-primary" />, text: "Create and track tasks in seconds", delay: '300ms' },
            { icon: <Filter className="h-3 w-3 text-primary" />, text: "Filter by status, never lose track", delay: '450ms' },
            { icon: <TrendingUp className="h-3 w-3 text-primary" />, text: "Stay consistent, build momentum", delay: '600ms' }
          ].map((item, i) => (
            <div key={i} className="flex flex-row items-start gap-3 opacity-0" style={{ animation: `fadeSlideIn 600ms ease-out forwards ${item.delay}` }}>
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-sm text-zinc-300 tracking-wide mt-0.5">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-xs text-zinc-600 font-medium relative z-10">
        &copy; {new Date().getFullYear()} Karmah
      </div>
    </div>
  );
}

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorObj, setErrorObj] = useState<string | null>(null);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const { mutateAsync: loginMutation, isPending: isLoginPending } = useLogin();
  const { mutateAsync: signupMutation, isPending: isSignupPending } = useSignup();

  const loginForm = useForm<LoginFormValues>({
    // @ts-ignore
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const signupForm = useForm<SignupFormValues>({
    // @ts-ignore
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  const switchTab = (tab: 'login' | 'signup') => {
    setErrorObj(null);
    loginForm.reset();
    signupForm.reset();
    setShowPassword(false);
    setShowConfirmPassword(false);
    setActiveTab(tab);
  };

  const onLoginSubmit = async (values: LoginFormValues) => {
    setErrorObj(null);
    try {
      await loginMutation(values);
    } catch (err: any) {
      setErrorObj(err.message || "Invalid email or password.");
    }
  };

  const onSignupSubmit = async (values: SignupFormValues) => {
    setErrorObj(null);
    try {
      await signupMutation({
        name: values.name,
        email: values.email,
        password: values.password
      });
    } catch (err: any) {
      setErrorObj(err.message || "Failed to create account. Please try again.");
    }
  };

  const handleDemoLogin = async () => {
    setErrorObj(null);
    setIsDemoLoading(true);
    try {
      await loginMutation(DEMO_CREDENTIALS);
    } catch (err: any) {
      setErrorObj("Demo logic currently rejected contextual API overrides.");
      setIsDemoLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex w-full relative">
      <LeftPanel />

      {/* RIGHT PANEL COMPONENT */}
      <div className="flex-1 bg-background flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        
        {/* Soft Background Texture Effect */}
        <div className="absolute top-[10%] right-[-100px] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        <div className="w-full max-w-sm mx-auto relative z-10 opacity-0" style={{ animation: 'fadeSlideUp 500ms ease-out 150ms forwards' }}>
          
          <div className="text-center mb-8">
            <div className="flex flex-col items-center justify-center lg:hidden mb-4">
              <CheckSquare className="h-8 w-8 text-primary mb-2" />
              <span className="font-semibold text-xl tracking-tight text-foreground">Karmah</span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Get started</h2>
            <p className="text-sm text-muted-foreground mt-1">Manage your tasks with clarity and focus.</p>
          </div>

          <Tabs 
            value={activeTab} 
            onValueChange={(v) => switchTab(v as "login" | "signup")} 
            className="w-full mt-6"
          >
            <TabsList className="grid w-full grid-cols-2 rounded-full !h-11 bg-muted">
              <TabsTrigger 
                value="login" 
                className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground transition-all"
              >
                Sign in
              </TabsTrigger>
              <TabsTrigger 
                value="signup"
                className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground transition-all"
              >
                Create account
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            type="button"
            variant="outline"
            className="w-full border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors h-12 flex items-center justify-between mt-5 outline-none"
            onClick={handleDemoLogin}
            disabled={isDemoLoading || isLoginPending || isSignupPending}
          >
            <div className="flex items-center gap-2.5">
              {isDemoLoading ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              ) : (
                <PlayCircle className="h-4 w-4 text-primary" />
              )}
              <span className="text-sm font-medium">Try with demo account</span>
            </div>
            <span className="text-[10px] bg-primary/10 text-primary rounded-full px-2.5 py-0.5 font-medium tracking-wide">
              No signup needed
            </span>
          </Button>

          <div className="flex items-center gap-3 mt-5 mb-1 opacity-70">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* DYNAMIC FORM MODAL CONTROLLER BIND */}
          <div key={activeTab} className="opacity-0 mt-4" style={{ animation: 'fadeSlideUp 200ms ease-out forwards' }}>
            {errorObj && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errorObj}</AlertDescription>
              </Alert>
            )}

            {activeTab === 'login' ? (
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="flex flex-col gap-4">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input className="bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors h-11" type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <div className="flex justify-between items-center w-full">
                          <FormLabel>Password</FormLabel>
                          <Link href="#" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              className="bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors h-11 pr-10"
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors h-8 w-8"
                              tabIndex={-1}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full mt-2 h-11 text-sm font-medium transition-all" disabled={isLoginPending || isDemoLoading}>
                    {isLoginPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </form>
              </Form>
            ) : (
              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="flex flex-col gap-4">
                  <FormField
                    control={signupForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input className="bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors h-11" placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input className="bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors h-11" type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              className="bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors h-11 pr-10"
                              type={showPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors h-8 w-8"
                              tabIndex={-1}
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={signupForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              className="bg-muted/50 border-muted-foreground/20 focus:bg-background transition-colors h-11 pr-10"
                              type={showConfirmPassword ? "text" : "password"} 
                              placeholder="••••••••" 
                              {...field} 
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground hover:bg-transparent transition-colors h-8 w-8"
                              tabIndex={-1}
                            >
                              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full mt-2 h-11 text-sm font-medium transition-all" disabled={isSignupPending}>
                    {isSignupPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </>
                    ) : (
                      "Create account"
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          {/* BOTTOM AGREE TEXT */}
          <div className="text-xs text-muted-foreground text-center mt-6 tracking-wide leading-relaxed">
            By continuing, you agree to our <Link href="#" className="underline hover:text-foreground transition-colors underline-offset-2">Terms of Service</Link> and <Link href="#" className="underline hover:text-foreground transition-colors underline-offset-2">Privacy Policy</Link>.
          </div>

        </div>
      </div>

    </div>
  );
}
