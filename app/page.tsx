import { Metadata } from 'next';
import { businessService } from '@/app/services/business.service';
import { BusinessList } from '@/app/components/BusinessList';
import { BUSINESS_CATEGORIES } from '@/app/types/business.types';

export const metadata: Metadata = {
  title: 'One Hub Ottawa | Connect. Discover. Grow.',
  description:
    'The premier directory for Ottawa businesses. Connect with local entrepreneurs, discover new services, and grow your business network.',
};

export default async function HomePage() {
  const response = await businessService.getBusinesses();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration - smaller, darker circles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-48 h-48 bg-slate-400/20 rounded-full blur-3xl" />
          <div className="absolute top-40 right-10 w-64 h-64 bg-slate-400/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-slate-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-600">
                {response.data.length}+ Ottawa businesses connected
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-slate-900">Connect.</span>{' '}
              <span className="text-gradient">Discover.</span>{' '}
              <span className="text-slate-900">Grow.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              The premier destination for Ottawa&apos;s business community.
              Find local services, connect with entrepreneurs, and grow your network.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#businesses"
                className="group inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25"
              >
                Explore Businesses
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="/add"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border border-slate-300 text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:scale-105"
              >
                Add Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-1">
                {response.data.length}+
              </div>
              <div className="text-slate-600 text-sm">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-1">
                {BUSINESS_CATEGORIES.length}
              </div>
              <div className="text-slate-600 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-1">100%</div>
              <div className="text-slate-600 text-sm">Local Ottawa</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-1">Free</div>
              <div className="text-slate-600 text-sm">to Join</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Listing Section */}
      <section id="businesses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Discover Local
                <span className="text-gradient"> Businesses</span>
              </h2>
              <p className="text-slate-600 max-w-xl">
                Browse our curated directory of Ottawa&apos;s finest businesses,
                from cozy cafes to innovative tech startups.
              </p>
            </div>
          </div>

          {response.success ? (
            <BusinessList businesses={response.data} />
          ) : (
            <div className="glass rounded-2xl p-8 text-center">
              <p className="text-red-600">
                {response.message || 'Failed to load businesses. Please try again later.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#540619]/20" />
        <div className="absolute inset-0 backdrop-blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join hundreds of Ottawa businesses already connected on One Hub.
            It&apos;s free, fast, and takes less than 2 minutes.
          </p>
          <a
            href="/add"
            className="inline-flex items-center justify-center gap-2 bg-[#540619] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-[#6d0822] hover:scale-105 shadow-lg shadow-[#540619]/50 hover:shadow-[#540619]/70"
          >
            Get Listed Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex items-baseline text-xl text-black">
              <span className="logo-wordmark-one">one</span>
              <span className="logo-wordmark-hub">hub</span>
            </span>
            </div>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} onehub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
