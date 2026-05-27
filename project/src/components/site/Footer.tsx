import { Link } from "@tanstack/react-router";
import logo from "@/assets/image-removebg-preview.png";

export function Footer() {
  return (
    <footer className="border-t border-hairline mt-24">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="ACE" className="h-8 w-auto" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            The commerce club exploring markets, finance, and entrepreneurship — one idea at a time.
          </p>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Explore</div>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            <li><Link to="/events" className="hover:underline">Events</Link></li>
            <li><Link to="/aceit" className="hover:underline">ACEit Issue</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="eyebrow mb-3">Connect</div>
          <ul className="space-y-2">
            <li><Link to="/members" className="hover:underline">Members</Link></li>
            <li><Link to="/alumni" className="hover:underline">Alumni</Link></li>
            <li><Link to="/faculty" className="hover:underline">Faculty</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="container-page py-5 flex flex-col md:flex-row justify-between text-xs text-muted-foreground gap-2">
          <span>© {new Date().getFullYear()} ACE — Commerce Club. All rights reserved.</span>
          <span>Built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
