import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Parv Jain - Developer & Creative Technologist" },
      { name: "description", content: "Portfolio of Parv Jain - engineering student, developer, and creative technologist building thoughtful digital experiences." },
      { name: "author", content: "Parv Jain" },
      { property: "og:title", content: "Parv Jain - Developer & Creative Technologist" },
      { property: "og:description", content: "Portfolio of Parv Jain - engineering student, developer, and creative technologist building thoughtful digital experiences." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Parv Jain" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@parvjainnn" },
      { name: "twitter:title", content: "Parv Jain - Developer & Creative Technologist" },
      { name: "twitter:description", content: "Portfolio of Parv Jain - engineering student, developer, and creative technologist building thoughtful digital experiences." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/96a8b2de-1658-49fc-941d-2cacbd48e721" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/96a8b2de-1658-49fc-941d-2cacbd48e721" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Parv Jain",
          url: "https://parvjainnn.lovable.app",
          sameAs: [
            "https://github.com/parvjainnn",
            "https://linkedin.com/in/parvjainnn",
            "https://x.com/parvjainnn",
          ],
          jobTitle: "Developer & Creative Technologist",
          email: "hello@parvjain.dev",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
