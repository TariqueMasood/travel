import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getWebInstrumentations, initializeFaro } from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel & Tour App",
  description: "Travel & Tour App",
};

initializeFaro({
  // Mandatory, the URL of the Grafana collector
  url: "https://akramaltaf786.grafana.net/a/grafana-kowalski-app/apps",

  // Mandatory, the identification label of your application
  app: {
    name: "Traveller",
  },

  instrumentations: [
    // Load the default Web instrumentations
    ...getWebInstrumentations(),

    // Tracing Instrumentation is needed if you want to use the React Profiler
    new TracingInstrumentation(),

    // ...
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
