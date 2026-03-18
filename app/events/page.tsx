import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events | onehub',
  description: 'Upcoming events for Ottawa businesses and the onehub community.',
};

export default function EventsPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Events</h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Discover upcoming networking events, workshops, and community gatherings for Ottawa
          businesses.
        </p>
        <p className="mt-6 text-slate-600">
          This page is a placeholder. Add your events listing or calendar here.
        </p>
      </div>
    </div>
  );
}
