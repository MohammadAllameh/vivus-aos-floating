// app/page.tsx
'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* هدر و ناوبری */}
      <div className=" flex items-center justify-center p-4 flex-col space-y-16 transition-all">
        <div className='font-normal text-xl text-red-900 underline hover:underline-offset-8 '>
          <Link href='/aos'>
            Scroll AOS
          </Link>
        </div>
        <div className='font-normal text-xl text-red-900 underline hover:underline-offset-8 '>
          <Link href='/svganimated'>
            SVG Draw Animatied
          </Link>
        </div>
        <div className='font-normal text-xl text-red-900 underline hover:underline-offset-8 '>
          <Link href='/floating'>
            Scroll Floating
          </Link>
        </div>
        <h2>by: <Link href='https://mohammadallameh.ir/' className='underline text-red-400'>Mohammad Allameh</Link></h2>
      </div>
    </div >
  );
}