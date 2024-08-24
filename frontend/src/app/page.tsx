// src/app/page.tsx

import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <section id="intro" className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to KryptX Gateway
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Secure. Fast. Decentralized. Anytime.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Get Started
        </button>
      </section>

      <section id="features" className="mt-20">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Features</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Secure Transactions</li>
          <li>Fast Payment Processing</li>
          <li>Decentralized Platform</li>
        </ul>
      </section>

      <section id="about" className="mt-20">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h3>
        <p className="text-base md:text-lg">
          KryptX Gateway is a decentralized application that allows users to
          make seamless and secure payments using USDT. Our platform leverages
          blockchain technology to ensure that all transactions are fast,
          secure, and transparent.
        </p>
      </section>

      <section id="contact" className="mt-20">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h3>
        <p className="text-base md:text-lg">Email: support@kryptx.com</p>
      </section>
    </div>
  );
}
