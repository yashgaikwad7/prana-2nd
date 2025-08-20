import Head from 'next/head'
import ChakraOrbit from '../components/ChakraOrbit'

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Head>
        <title>Prana AI</title>
      </Head>
      <main className="flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold">Prana AI</h1>
        <p className="mt-4 text-lg text-gray-300">Conscious creator avatars. Real-time engagement.</p>
        <ChakraOrbit />
        <div className="mt-6 space-x-4">
          <button className="px-6 py-2 bg-purple-600 rounded-lg">Hire Now</button>
          <button className="px-6 py-2 bg-pink-600 rounded-lg">Try a Demo</button>
          <button className="px-6 py-2 bg-blue-600 rounded-lg">Schedule Walkthrough</button>
        </div>
      </main>
    </div>
  )
}