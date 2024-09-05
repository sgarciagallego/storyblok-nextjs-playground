import StoryblokProvider from '@/components/StoryblokProvider';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import '@/styles/globals.css';
import { mono, sans } from '@/fonts';
import Link from 'next/link';

function cachedFetch(input: any, init?: any): Promise<Response> {
  return fetch(input, {
    ...init,
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
  });
}

storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'eu',
    fetch: cachedFetch,
  },
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html 
        lang="en-GB"
        suppressHydrationWarning
        className={`${mono.variable} ${sans.variable}`}
      >
        <body>
          <header className='bg-slate-700 h-16 flex items-center justify-center'>
            <nav className='container mx-auto px-4 w-full flex gap-5'>
              <Link href={`/`} className='text-blue-100'>Home</Link>
              <Link href={`/tours`} className='text-blue-100'>Tours</Link>
            </nav>
          </header>
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}