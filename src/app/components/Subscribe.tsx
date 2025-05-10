'use client';

import React, { useState } from 'react';

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 px-6 border-t border-rose-100 shadow-md">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-rose-700 mb-4">Stay Connected 💌</h2>
        <p className="text-rose-600 mb-6">
          Subscribe to receive special offers, feature updates, and heartfelt inspiration.
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium text-lg">You're all set — thank you!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded border border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
            />
            <button
              type="submit"
              className="bg-rose-600 text-white px-6 py-3 rounded hover:bg-rose-700 transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
