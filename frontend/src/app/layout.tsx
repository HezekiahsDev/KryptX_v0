// src/app/layout.tsx

import React from "react";
import "./globals.css"; // Import Tailwind CSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>KryptX Gateway</title>
        <meta
          name="description"
          content="Easy Secure. Fast. Decentralized, Anytime."
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// Header Component
function Header() {
  return (
    <header className="bg-gradient-to-tr bg-zinc-950 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <h1 className="text-xl font-bold">KryptX Gateway</h1>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <li>
              <a href="#features" className="hover:text-gray-400">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-auto">
      <p>© 2024 KryptX Gateway. All Rights Reserved.</p>
    </footer>
  );
}
