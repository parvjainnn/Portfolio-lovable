import { url as resumeUrl } from "@/assets/resume.pdf.asset.json";
import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Sparkles,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  Palette,
  Film,
  Camera,
} from "lucide-react";

type Item = {
  label: string;
  hint?: string;
  icon: React.ComponentType<{ size?: number }>;
  action: () => void;
  keywords?: string;
};

export function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, []);

  const go = (hash: string) => () => {
    setOpen(false);
    requestAnimationFrame(() => {
      if (hash.startsWith("http") || hash.startsWith("mailto") || hash.endsWith(".pdf")) {
        window.open(hash, "_blank", "noopener,noreferrer");
      } else {
        window.location.hash = hash;
      }
    });
  };

  const nav: Item[] = [
    { label: "Home", icon: Home, action: go("#home") },
    { label: "About", icon: User, action: go("#about") },
    { label: "Skills", icon: Code2, action: go("#skills") },
    { label: "Developer", icon: Code2, action: go("#developer") },
    { label: "Projects", icon: Briefcase, action: go("#projects") },
    { label: "Services", icon: Sparkles, action: go("#services") },
    { label: "Contact", icon: Mail, action: go("#contact") },
  ];
  const studios: Item[] = [
    { label: "Graphics Design", icon: Palette, action: go("/graphics"), keywords: "design poster" },
    { label: "Video Editing", icon: Film, action: go("/video"), keywords: "reel cinematic" },
    { label: "Photo Editing", icon: Camera, action: go("/photo"), keywords: "retouch" },
  ];
  const social: Item[] = [
    { label: "GitHub", icon: Github, action: go("https://github.com/parvjainnn") },
    { label: "LinkedIn", icon: Linkedin, action: go("https://www.linkedin.com/in/parvjainnn") },
    { label: "X / Twitter", icon: Twitter, action: go("https://x.com/parvjainnn") },
    { label: "Instagram", icon: Instagram, action: go("https://instagram.com/parvjainnn") },
    { label: "Email me", icon: Mail, action: go("mailto:jainparv.cse@gmail.com") },
    { label: "Download Resume", icon: Download, action: go(resumeUrl) },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {nav.map((i) => (
            <CommandItem key={i.label} onSelect={i.action} keywords={[i.keywords ?? ""]}>
              <i.icon size={16} />
              <span>{i.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Creative Studio">
          {studios.map((i) => (
            <CommandItem key={i.label} onSelect={i.action} keywords={[i.keywords ?? ""]}>
              <i.icon size={16} />
              <span>{i.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Connect">
          {social.map((i) => (
            <CommandItem key={i.label} onSelect={i.action}>
              <i.icon size={16} />
              <span>{i.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
