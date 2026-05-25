import React from 'react';

export const NewsletterCTA = () => {
  return (
    <section className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Get Weekly Business Insights</h2>
      <p className="text-slate-400 mb-8 max-w-lg mx-auto">
        Receive curated franchise opportunities, growth strategies, and market trends directly to your inbox.
      </p>
      <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="px-4 py-3 rounded-lg text-slate-900 w-full"
          required
        />
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
          Subscribe
        </button>
      </form>
    </section>
  );
};
