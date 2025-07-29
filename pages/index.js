import Head from "next/head";
import MatchCard from "../components/MatchCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>FutVirtualScanner</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">FutVirtualScanner</h1>
        <MatchCard />
      </main>
    </div>
  );
}
