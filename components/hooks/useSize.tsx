import { useState, useEffect } from 'react';

type SizeCategory = 's' | 'm' | 'l';

export function sized(size: "l" | "m" | "s", sValue: any, mValue: any, lValue: any) {
  return size === "l"
    ? lValue
    : size === "m"
      ? mValue
      : sValue
}
export function useSize(): SizeCategory {
  const getSizeCategory = (width: number) => {
    if (width < 640) return 's';       // small (mobile)
    if (width < 1200) return 'm';      // medium (tablet)
    return 'l';                        // large (desktop)
  };

  const [size, setSize] = useState<SizeCategory>(() => "s");

  useEffect(() => {
    const handleResize = () => setSize(getSizeCategory(window.innerWidth));
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
