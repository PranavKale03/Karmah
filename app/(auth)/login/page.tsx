"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Loader2,
  Eye,
  EyeOff,
  CheckSquare,
  AlertCircle,
  PlayCircle,
  CheckCircle2,
  Filter,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useLogin, useSignup, useDemoLogin } from "@/hooks/useAuth"

// Validation Schemas
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(6, "Password must be at least 6 characters."),
})

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type LoginFormValues = z.infer<typeof loginSchema>
type SignupFormValues = z.infer<typeof signupSchema>

function LeftPanel() {
  return (
    <div className="relative z-0 hidden w-[45%] flex-shrink-0 flex-col justify-between overflow-hidden bg-zinc-950 p-10 lg:flex">
      {/* Structural Illuminations */}
      <div className="pointer-events-none absolute top-[-80px] left-[-80px] h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-60px] bottom-[-60px] h-[320px] w-[320px] rounded-full bg-violet-600/20 blur-[100px]" />

      {/* TOP */}
      <Link href="/">
        <div className="relative z-10 flex w-fit items-center rounded-lg bg-primary/20 p-2">
          <CheckSquare className="h-5 w-5 text-primary" />
          <span className="ml-2 text-lg font-semibold tracking-tight text-white">
            Karmah
          </span>
        </div>
      </Link>

      {/* MIDDLE CONTAINER */}
      <div
        className="relative z-10 flex flex-1 flex-col justify-center opacity-0"
        style={{ animation: "fadeSlideIn 600ms ease-out forwards" }}
      >
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-white">
          Your tasks,
          <br />
          <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
            finally clear.
          </span>
        </h1>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
          Stop juggling sticky notes and spreadsheets. Karmah keeps everything
          in one place, beautifully simple.
        </p>

        {/* Feature Triggers */}
        <div className="mt-8 flex flex-col gap-3">
          {[
            {
              icon: <CheckCircle2 className="h-3 w-3 text-primary" />,
              text: "Create and track tasks in seconds",
              delay: "300ms",
            },
            {
              icon: <Filter className="h-3 w-3 text-primary" />,
              text: "Filter by status, never lose track",
              delay: "450ms",
            },
            {
              icon: <TrendingUp className="h-3 w-3 text-primary" />,
              text: "Stay consistent, build momentum",
              delay: "600ms",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-start gap-3 opacity-0"
              style={{
                animation: `fadeSlideIn 600ms ease-out forwards ${item.delay}`,
              }}
            >
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                {item.icon}
              </div>
              <span className="mt-0.5 text-sm tracking-wide text-zinc-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="relative z-10 text-xs font-medium text-zinc-600">
        &copy; {new Date().getFullYear()} Karmah Inc. All rights reserved.
      </div>
    </div>
  )
}

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errorObj, setErrorObj] = useState<string | null>(null)

  const { mutateAsync: loginMutation, isPending: isLoginPending } = useLogin()
  const { mutateAsync: signupMutation, isPending: isSignupPending } =
    useSignup()
  const { mutateAsync: demoLoginMutation, isPending: isDemoPending } =
    useDemoLogin()

  const loginForm = useForm<LoginFormValues>({
    // @ts-ignore
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  })

  const signupForm = useForm<SignupFormValues>({
    // @ts-ignore
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  })

  const switchTab = (tab: "login" | "signup") => {
    setErrorObj(null)
    loginForm.reset()
    signupForm.reset()
    setShowPassword(false)
    setShowConfirmPassword(false)
    setActiveTab(tab)
  }

  const onLoginSubmit = async (values: LoginFormValues) => {
    setErrorObj(null)
    try {
      await loginMutation(values)
    } catch (err: any) {
      setErrorObj(err.message || "Invalid email or password.")
    }
  }

  const onSignupSubmit = async (values: SignupFormValues) => {
    setErrorObj(null)
    try {
      await signupMutation({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    } catch (err: any) {
      setErrorObj(err.message || "Failed to create account. Please try again.")
    }
  }

  const handleDemoLogin = async () => {
    setErrorObj(null)
    try {
      await demoLoginMutation()
    } catch (err: any) {
      setErrorObj(err.message || "Demo login failed. Please try again later.")
    }
  }

  return (
    <div className="relative flex min-h-screen w-full">
      <LeftPanel />

      {/* RIGHT PANEL COMPONENT */}
      <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden bg-background px-6 py-12">
        {/* Soft Background Texture Effect */}
        <div className="pointer-events-none absolute top-[10%] right-[-100px] h-[400px] w-[400px] rounded-full bg-primary/5 blur-[80px]" />

        <div
          className="relative z-10 mx-auto w-full max-w-sm opacity-0"
          style={{ animation: "fadeSlideUp 500ms ease-out 150ms forwards" }}
        >
          <div className="mb-8 text-center">
            <div className="mb-4 flex flex-col items-center justify-center lg:hidden">
              <CheckSquare className="mb-2 h-8 w-8 text-primary" />
              <span className="text-xl font-semibold tracking-tight text-foreground">
                Karmah
              </span>
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Get started
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage your tasks with clarity and focus.
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={(v) => switchTab(v as "login" | "signup")}
            className="mt-6 w-full"
          >
            <TabsList className="grid !h-11 w-full grid-cols-2 rounded-full bg-muted">
              <TabsTrigger
                value="login"
                className="rounded-full transition-all data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Sign in
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="rounded-full transition-all data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Create account
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            type="button"
            variant="outline"
            className="mt-5 flex h-12 w-full items-center justify-between border-primary/30 bg-primary/5 transition-colors outline-none hover:bg-primary/10"
            onClick={handleDemoLogin}
            disabled={isDemoPending || isLoginPending || isSignupPending}
          >
            <div className="flex items-center gap-2.5">
              {isDemoPending ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              ) : (
                <PlayCircle className="h-4 w-4 text-primary" />
              )}
              <span className="text-sm font-medium">Try with demo account</span>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-primary">
              No signup needed
            </span>
          </Button>

          <div className="mt-5 mb-1 flex items-center gap-3 opacity-70">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              or
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* DYNAMIC FORM MODAL CONTROLLER BIND */}
          <div
            key={activeTab}
            className="mt-4 opacity-0"
            style={{ animation: "fadeSlideUp 200ms ease-out forwards" }}
          >
            {errorObj && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{errorObj}</AlertDescription>
              </Alert>
            )}

            {activeTab === "login" ? (
              <Form {...loginForm}>
                <form
                  onSubmit={loginForm.handleSubmit(onLoginSubmit)}
                  className="flex flex-col gap-4"
                >
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11 border-muted-foreground/20 bg-muted/50 transition-colors focus:bg-background"
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                          />
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
                        <div className="flex w-full items-center justify-between">
                          <FormLabel>Password</FormLabel>
                          <Link
                            href="#"
                            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <div className="relative">
                            <Input
                              className="h-11 border-muted-foreground/20 bg-muted/50 pr-10 transition-colors focus:bg-background"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
                              tabIndex={-1}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="mt-2 h-11 w-full text-sm font-medium transition-all"
                    disabled={isLoginPending || isDemoPending}
                  >
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
                <form
                  onSubmit={signupForm.handleSubmit(onSignupSubmit)}
                  className="flex flex-col gap-4"
                >
                  <FormField
                    control={signupForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input
                            className="h-11 border-muted-foreground/20 bg-muted/50 transition-colors focus:bg-background"
                            placeholder="John Doe"
                            {...field}
                          />
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
                          <Input
                            className="h-11 border-muted-foreground/20 bg-muted/50 transition-colors focus:bg-background"
                            type="email"
                            placeholder="you@example.com"
                            {...field}
                          />
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
                              className="h-11 border-muted-foreground/20 bg-muted/50 pr-10 transition-colors focus:bg-background"
                              type={showPassword ? "text" : "password"}
                              placeholder="••••••••"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
                              tabIndex={-1}
                            >
                              {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
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
                              className="h-11 border-muted-foreground/20 bg-muted/50 pr-10 transition-colors focus:bg-background"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              {...field}
                            />
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                              }
                              className="absolute top-1/2 right-1 h-8 w-8 -translate-y-1/2 text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground"
                              tabIndex={-1}
                            >
                              {showConfirmPassword ? (
                                <EyeOff className="h-4 w-4" />
                              ) : (
                                <Eye className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="mt-2 h-11 w-full text-sm font-medium transition-all"
                    disabled={isSignupPending}
                  >
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
          <div className="mt-6 text-center text-xs leading-relaxed tracking-wide text-muted-foreground">
            By continuing, you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  )
}
