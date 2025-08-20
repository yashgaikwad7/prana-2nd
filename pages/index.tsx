import React from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Prana AI Avatars</h1>
      <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover -z-10">
        <source src="/assets/bg.webm" type="video/webm" />
      </video>
      <p className="mt-4">Conscious creator avatars. Real-time engagement.</p>
      <div className="flex gap-4 mt-8">
        <a href="/models" className="px-6 py-3 bg-indigo-600 rounded-xl">Try a Demo</a>
        <a href="/contact" className="px-6 py-3 bg-green-600 rounded-xl">Hire Now</a>
      </div>
    </main>
  )
}