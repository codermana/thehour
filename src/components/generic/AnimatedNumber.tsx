import { useEffect, useState } from 'react';

export default function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (value !== display) {
      setAnimate(true);
      setDisplay(value);

      const id = setTimeout(() => setAnimate(false), 200);
      return () => clearTimeout(id);
    }
  }, [value, display]);

  return (
    <div
      className={`text-3xl font-black text-codermana-orange transition
        ${animate ? 'scale-110 opacity-70' : 'scale-100 opacity-100'}`}
    >
      {String(display).padStart(2, '0')}
    </div>
  );
}
