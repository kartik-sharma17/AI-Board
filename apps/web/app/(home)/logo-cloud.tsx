const teams = ["Northwind", "Fathom Labs", "Circuit & Co", "Loomline", "Greyworks", "Pallet"];
const loopedTeams = [...teams, ...teams];

const colors = [
  "var(--primary)",
  "var(--accent)",
  "var(--marker-sky)",
  "var(--marker-pink)",
  "var(--marker-yellow)",
];

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-secondary/40 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-xs text-muted-foreground">Teams thinking out loud at</p>
      </div>
      <div className="group overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
          {loopedTeams.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="text-lg font-semibold tracking-tight text-muted-foreground transition-colors duration-300 hover:[color:var(--hover-color)]"
              style={{ ["--hover-color" as string]: colors[i % colors.length] }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
