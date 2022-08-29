import { useCallback, useState, useEffect } from "react";

const useGrayScaleRange = (props: { color: Hsla }) => {
  const [range, setRange] = useState<Hsla[]>([]);

  const calculateGrayScale = useCallback(() => {
    const newRange: Hsla[] = [];
    let light = 0;
    // Monochrome is what happens when saturation is set
    // to zero. Although this means that gray scale is the 
    // same for all colors no matter the hue.
    const color: Hsla = { ...props.color, s: 0, l: 0 };
    for (let i = 0; i < 9; i++) {
      if (color.l < 100) {
        light += 10;
        newRange.push({ ...color, l: color.l + light });
      }
    }
    setRange(newRange);
  }, [props.color]);

  useEffect(() => {
    calculateGrayScale();
    // Set to props.color because we only want this useEffect
    // to run if the color changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.color]);

  return range;
};

export default useGrayScaleRange;