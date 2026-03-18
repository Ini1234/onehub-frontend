import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact / Connect | onehub',
  description: 'Get in touch with the onehub team or connect with Ottawa businesses.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Contact / Connect</h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Have questions or want to connect with the onehub community? We’d love to hear from you.
        </p>
        <p className="mt-6 text-slate-600">
          This page is a placeholder. Add your contact form, email, and social links here.
        </p>
      </div>
    </div>
  );
}
