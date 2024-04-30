'use client';

import Link from 'next/link';

export default function Header({ bg = 'dark' }: { bg: 'light' | 'dark' }) {
  return (
    <>
      <header className={bg === 'dark' ? 'bg-primary' : 'bg-gray-100'}>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1
                className={
                  'text-2xl font-bold sm:text-3xl ' +
                  (bg === 'dark' ? 'text-white' : 'text-primary')
                }
              >
                WeGoDigi
              </h1>
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                className={
                  'inline-flex items-center justify-center gap-1.5 rounded-lg border px-5 py-3 transition focus:outline-none focus:ring ' +
                  (bg === 'dark'
                    ? 'text-gray-200 hover:text-white border-gray-200'
                    : 'text-primary border-gray-500')
                }
                type="button"
              >
                <span className="text-sm font-medium"> View Projects </span>
              </button>

              <Link
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                href={'/contact'}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
