import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-4 md:px-8 text-center animate-in fade-in duration-500">
      <div className="rounded-full border px-4 py-1 text-sm font-medium text-muted-foreground mb-8 bg-muted/20 backdrop-blur-sm animate-in slide-in-from-bottom-2 duration-500">
        ✦ Simple. Focused. Powerful.
      </div>
      
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6">
        Your tasks, <br />
        <span className="bg-gradient-to-r from-foreground to-foreground/40 bg-clip-text text-transparent">
          finally under control.
        </span>
      </h1>
      
      <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 font-medium leading-relaxed">
        Karmah is a clean, distraction-free task manager built for people who want to get things done without the complexity of Notion or Jira.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <Button size="lg" asChild className="rounded-full px-8 h-12 text-base w-full sm:w-auto hover:scale-105 transition-transform duration-200">
          <Link href="/login">Get started free</Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="rounded-full px-8 h-12 text-base w-full sm:w-auto hover:bg-muted/50 transition-colors">
          <Link href="#how-it-works">See how it works</Link>
        </Button>
      </div>
      
      <p className="text-sm font-medium text-muted-foreground mb-16">
        No credit card required · Free forever
      </p>

      {/* App Mockup */}
      <div className="w-full max-w-4xl mx-auto rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        {/* Browser Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400/90 shadow-sm"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400/90 shadow-sm"></div>
            <div className="h-3 w-3 rounded-full bg-green-400/90 shadow-sm"></div>
          </div>
          <div className="bg-background/80 border border-border/50 px-4 py-1 text-xs font-medium text-muted-foreground rounded-md w-64 text-center truncate pointer-events-none shadow-sm">
            app.karmah.com
          </div>
          <div className="w-12"></div> {/* Geometric Spacer */}
        </div>

        {/* Dashboard Mock Inner */}
        <div className="p-6 md:p-10 pointer-events-none text-left">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">My Tasks</h2>
            <Button size="sm" className="rounded-full px-4 shadow-none">+ New task</Button>
          </div>

          <div className="flex gap-2 mb-6">
            <Badge variant="secondary" className="bg-foreground text-background hover:bg-foreground rounded-full px-4 py-1 text-sm font-medium shadow-sm">All</Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1 text-sm font-medium text-muted-foreground border-transparent">Pending</Badge>
            <Badge variant="outline" className="rounded-full px-4 py-1 text-sm font-medium text-muted-foreground border-transparent">Completed</Badge>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { title: "Review quarterly product roadmap", status: "In Progress", dot: "bg-blue-500", date: "Today" },
              { title: "Send tax documents to accountant", status: "Pending", dot: "bg-yellow-500", date: "Tomorrow" },
              { title: "Update landing page copy", status: "Completed", dot: "bg-green-500", date: "Yesterday", done: true },
              { title: "Schedule team synchronization", status: "Pending", dot: "bg-yellow-500", date: "Apr 15" }
            ].map((task, i) => (
              <div key={i} className={`flex items-center justify-between px-5 py-4 rounded-xl border border-border/50 bg-card ${task.done ? 'opacity-50' : 'shadow-sm'}`}>
                <div className="flex items-center gap-4">
                  <div className={`h-2.5 w-2.5 rounded-full ${task.dot}`}></div>
                  <span className={`font-medium sm:text-base text-sm ${task.done ? 'line-through text-muted-foreground text-opacity-80' : 'text-foreground'}`}>
                    {task.title}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="hidden sm:inline-flex rounded-full text-xs font-semibold shadow-none border-transparent uppercase tracking-wider px-3 py-0.5">
                    {task.status}
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground min-w-[60px] text-right">{task.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
