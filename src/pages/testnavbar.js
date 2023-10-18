import React, { useState } from 'react';
import ProgressBar from '../../components/ProgresBar';
import Navigation from '../../components/Navigation';

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <ProgressBar progress={progress} />
      <Navigation progress={progress} setProgress={setProgress} />
    </div>
  );
}
