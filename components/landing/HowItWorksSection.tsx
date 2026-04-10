import { UserPlus, ClipboardList, TrendingUp } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      icon: <UserPlus className="h-6 w-6 text-primary" />,
      title: "Create your account",
      description: "Sign up in seconds. No credit card, no onboarding survey. Just your name and email."
    },
    {
      number: "2",
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      title: "Add your tasks",
      description: "Type what needs to get done. Set a status, add a due date if needed — done."
    },
    {
      number: "3",
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Stay on track",
      description: "Filter by status, mark things done, and keep the momentum going every day."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8 border-t border-border/60">
      <div className="text-center mb-16 md:mb-24">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">How it works</h3>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Up and running in minutes.</h2>
        <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto">
          Start conquering your workload without stopping to read a setup manual.
        </p>
      </div>

      <div className="relative flex flex-col md:flex-row gap-12 md:gap-8">
        {/* Dashed Line Background */}
        <div className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-0 border-t-2 border-dashed border-border/70 z-0 pointer-events-none"></div>

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center flex-1">
            <span className="text-[120px] font-black text-muted-foreground/10 leading-none mb-[-40px] select-none tracking-tighter">
              {step.number}
            </span>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 bg-background border-4 border-background ring-1 ring-border shadow-sm">
              {step.icon}
            </div>
            <h4 className="text-xl font-semibold tracking-tight mb-3">{step.title}</h4>
            <p className="text-muted-foreground font-medium leading-relaxed px-4 max-w-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
