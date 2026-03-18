import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About us | onehub',
  description: 'Learn about onehub and our mission to connect Ottawa businesses.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">About us</h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          onehub is the premier directory for Ottawa businesses. We connect local entrepreneurs,
          help customers discover new services, and support the growth of our business community.
        </p>
        <p className="mt-6 text-slate-600">
          This page is a placeholder. Add your full about content here.
        </p>
      </div>
    </div>
  );
}
