import { CheckCircle2, Filter, CalendarDays, Moon, Zap, ShieldCheck } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-primary" />,
      title: "Task tracking",
      description: "Create, update, and complete tasks with a clean, effortless distraction-free interface."
    },
    {
      icon: <Filter className="h-5 w-5 text-primary" />,
      title: "Smart filtering",
      description: "Instantly filter by status: pending, in progress, or completed. Find anything in seconds."
    },
    {
      icon: <CalendarDays className="h-5 w-5 text-primary" />,
      title: "Due dates",
      description: "Assign deadlines definitively and always exactly know what needs execution today."
    },
    {
      icon: <Moon className="h-5 w-5 text-primary" />,
      title: "Dark mode",
      description: "Fully styled manually for both light and dark modes. Absolute contrast balance on any interface."
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Keyboard-first",
      description: "Built strictly for speed. Navigate and manipulate massive workloads fluidly without ever touching your mouse."
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      title: "Secure by default",
      description: "Your tasks are intrinsically protected. Token securely bound, entirely uncompromised."
    }
  ];

  return (
    <section className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8 bg-background">
      <div className="text-center mb-16">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Features</h3>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Everything you need. Nothing you don't.</h2>
        <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto mb-12">
          We stripped away the endless config menus and bloated plugins to give you exactly what you need to keep productivity effortlessly simple.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <div key={i} className="flex flex-col items-start p-8 rounded-2xl border bg-card hover:bg-muted/30 transition-colors shadow-sm cursor-default">
            <div className="p-3 rounded-xl bg-primary/10 mb-6">
              {feature.icon}
            </div>
            <h4 className="font-semibold text-lg mb-2 text-foreground tracking-tight">{feature.title}</h4>
            <p className="text-sm font-medium text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
