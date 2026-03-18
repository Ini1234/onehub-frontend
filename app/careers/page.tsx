import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | onehub',
  description: 'Join the onehub team. Explore career opportunities in Ottawa.',
};

export default function CareersPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">Careers</h1>
        <p className="text-lg text-slate-700 leading-relaxed">
          Interested in joining onehub? We’re always looking for passionate people to help grow
          Ottawa’s business community.
        </p>
        <p className="mt-6 text-slate-600">
          This page is a placeholder. Add your open roles and application details here.
        </p>
      </div>
    </div>
  );
}
