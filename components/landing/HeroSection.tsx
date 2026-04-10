import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, MoreHorizontal } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-32 pb-20 px-4 md:px-8 text-center animate-in fade-in duration-500">
      <div className="rounded-full border px-4 py-1 text-sm font-medium text-muted-foreground mb-8 bg-muted/20 backdrop-blur-sm animate-in slide-in-from-bottom-2 duration-500 overflow-hidden relative">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes shimmer-move {
            0% { transform: translateX(-150%) skewX(-20deg); }
            100% { transform: translateX(250%) skewX(-20deg); }
          }
        `}} />
        <div 
          className="absolute inset-y-0 w-full pointer-events-none" 
          style={{ 
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shimmer-move 2s infinite linear'
          }}
        />
        <span className="relative">✦ Simple. Focused. Powerful.</span>
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

      <div className="w-full max-w-4xl mx-auto rounded-xl border border-border/50 bg-card shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400/90 shadow-sm"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400/90 shadow-sm"></div>
            <div className="h-3 w-3 rounded-full bg-green-400/90 shadow-sm"></div>
          </div>
          <div className="bg-background/80 border border-border/50 px-4 py-1 text-xs font-medium text-muted-foreground rounded-md w-64 text-center truncate pointer-events-none shadow-sm">
            app.karmah.com
          </div>
          <div className="w-12"></div>
        </div>

        <div className="p-4 sm:p-6 md:p-10 pointer-events-none text-left">
          <div className="flex justify-between items-center mb-6 sm:mb-8 gap-2">
            <div className="flex items-end gap-2 sm:gap-3">
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight">My Tasks</h2>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground mb-1 whitespace-nowrap">3 tasks</span>
            </div>
            <Button size="sm" className="rounded-full px-3 sm:px-4 shadow-none gap-1.5 h-8 sm:h-9 text-xs sm:text-sm shrink-0">
              <Plus className="h-3.5 w-3.5" />
              New Task
            </Button>
          </div>

          <div className="flex items-center gap-2 p-1 bg-secondary/30 rounded-full w-full sm:w-fit border border-border/50 mb-8 sm:mb-10 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium bg-background text-foreground shadow-sm ring-1 ring-border/50 shrink-0">
              <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              All
            </div>
            <div className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              Pending
            </div>
            <div className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              In Progress
            </div>
            <div className="flex items-center gap-2 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground shrink-0">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Completed
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { 
                title: "Research on neural engines", 
                desc: "Research on some papers about neural engines", 
                status: "In Progress", 
                statusColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-400",
                dot: "bg-blue-500", 
                date: "Apr 10, 2026" 
              },
              { 
                title: "Update product roadmap", 
                desc: "Focus on Q3 features and milestones", 
                status: "Pending", 
                statusColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400",
                dot: "bg-yellow-500", 
                date: "Apr 12, 2026" 
              },
              { 
                title: "Client review meeting", 
                desc: "Finalize the contract and handover", 
                status: "Completed", 
                statusColor: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400",
                dot: "bg-green-500", 
                date: "Yesterday", 
                done: true 
              }
            ].map((task, i) => (
              <div key={i} className={`flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-border/50 bg-card ${task.done ? 'opacity-50' : 'shadow-sm'}`}>
                <div className="flex items-start gap-3 sm:gap-4 overflow-hidden">
                  <div className="shrink-0 mt-1 sm:mt-1.5">
                    <div className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full ${task.dot}`}></div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className={`font-bold text-sm sm:text-lg leading-tight sm:leading-normal truncate ${task.done ? 'line-through text-muted-foreground text-opacity-80' : 'text-foreground'}`}>
                      {task.title}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3 text-xs sm:text-sm text-muted-foreground mt-0.5">
                      <p className="truncate sm:max-w-none">{task.desc}</p>
                      <div className="flex items-center gap-1 shrink-0 opacity-80 sm:opacity-100">
                        <Calendar className="h-2.5 w-2.5 sm:h-3 w-3" />
                        <span className="text-[10px] sm:text-sm">{task.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-4 shrink-0 ml-2">
                  <Badge variant="secondary" className={`hidden sm:inline-flex rounded-full text-[11px] font-bold shadow-none border-none py-1 px-3 ${task.statusColor}`}>
                    {task.status}
                  </Badge>
                  <MoreHorizontal className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
