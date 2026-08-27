import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 surface-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg border border-ink-foreground/25 font-display">
              C
            </span>
            <span className="font-display text-lg">Charithra Learning Hub</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-ink-foreground/70">
            A personalised learning ecosystem: diagnose, understand, personalise, teach, assess, track, improve.
            Built to grow from a single learning hub into a full education network.
          </p>
          <p className="mt-6 text-xs text-ink-foreground/50">
            This site is a static product prototype. Portals shown under “Product demo” use illustrative data only.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-ink-foreground/60 uppercase">Learn</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li><Link to="/programmes" className="hover:text-ink-foreground">All programmes</Link></li>
            <li><Link to="/programmes/tamil-academy" className="hover:text-ink-foreground">Tamil Academy</Link></li>
            <li><Link to="/programmes/online-learning" className="hover:text-ink-foreground">Online learning</Link></li>
            <li><Link to="/programmes/home-tuition" className="hover:text-ink-foreground">Home tuition</Link></li>
            <li><Link to="/programmes/future-skills" className="hover:text-ink-foreground">Future skills</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.14em] text-ink-foreground/60 uppercase">Organisation</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
            <li><Link to="/about" className="hover:text-ink-foreground">About us</Link></li>
            <li><Link to="/how-it-works" className="hover:text-ink-foreground">How it works</Link></li>
            <li><Link to="/architecture" className="hover:text-ink-foreground">Platform architecture</Link></li>
            <li><Link to="/teachers/apply" className="hover:text-ink-foreground">Become a teacher</Link></li>
            <li><Link to="/contact" className="hover:text-ink-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-ink-foreground/50 sm:px-6">
          © {new Date().getFullYear()} Charithra Learning Hub. Prototype build.
        </div>
      </div>
    </footer>
  );
}
