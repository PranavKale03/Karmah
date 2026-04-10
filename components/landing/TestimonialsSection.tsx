import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Karmah replaced my sticky notes, my Notion database, and my daily anxiety. It's just tasks — and that's exactly what I needed.",
      initials: "PM",
      name: "Priya M.",
      role: "Product Designer"
    },
    {
      quote: "I've tried every todo app. Karmah is the only one I've stuck with longer than a week. The filtering speed alone is worth it.",
      initials: "AT",
      name: "Arjun T.",
      role: "Software Engineer"
    },
    {
      quote: "Clean, fast, and it works. I use it every single morning to set my intentions for the day. Genuinely love it.",
      initials: "SR",
      name: "Sofia R.",
      role: "Freelance Consultant"
    }
  ];

  return (
    <section className="py-20 md:py-28 max-w-6xl mx-auto px-4 md:px-8 border-t bg-muted/20">
      <div className="text-center mb-16">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3">Testimonials</h3>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">People who actually use it.</h2>
        <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto mb-12">
          Read what leading professionals experience when finally managing their tasks efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="flex flex-col p-8 rounded-2xl border bg-card shadow-sm h-full">
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground font-medium leading-relaxed mb-8 flex-1 text-[15px]">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-[13px] font-semibold text-primary">
                {t.initials}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-[15px]">{t.name}</span>
                <span className="text-[13px] font-medium text-muted-foreground">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
