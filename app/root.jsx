import sharedStyles from "~/styles/shared.css";
import Error from "./components/utils/Error";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script>{`
          (function() {
            var info = console.info
            console.info = function (message) {
              if (!/Download the React DevTools/.test(message)) info.apply(console, arguments) 
            }
          })()
      `}</script>
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

// If the user tries to access a random page, this error hanles that:
export function CatchBoundary() {
  const caughtResponse = useCatch();
  return (
    <Document title={caughtResponse.statusText}>
      <main>
        <Error title={caughtResponse.statusText}>
          <p>
            {caughtResponse.data?.message ||
              "Something went wrong. Please try again later."}
          </p>
          <p>
            Back to <Link to="/">Safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
}

// If any other error occurs, this error handles that:
export function ErrorBoundary({ error }) {
  return (
    <Document title="An error occurred">
      <main>
        <Error title="An error occurred">
          <p>
            {error.message || "Something went wrong. Please try again later."}
          </p>
          <p>
            Back to <Link to="/">Safety</Link>.
          </p>
        </Error>
      </main>
    </Document>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
