'use client';

import { PitchDeck } from '@/components/memora/pitch-deck';
import { Loader } from '@/components/memora/loader';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // This should match the total duration of the loader animation
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <main className="bg-background text-foreground">
      <PitchDeck />
    </main>
  );
}
