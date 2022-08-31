import { useCallback, useState, useEffect } from "react";

const useCalculateColorRange = (props: {
  color: Hsla;
  h: number | null;
  s: number | null;
  l: number | null;
}) => {
  const [range, setRange] = useState<Hsla[]>([]);

  useEffect(() => {
    const newRange: Hsla[] = [];
    let light = 0;
    const color: Hsla = {
      ...props.color,
      h: props.h ? props.h : props.color.h,
      // 0 === undefined huhhh??? but !== null so I guess
      // this works lol
      s: props.s !== null ? props.s : props.color.s,
      l: props.l ? props.l : light,
    };
    // To generate the scale, I take the original color
    // and set its lightness value to 0. I then add 10
    // incrementally until I get 9 different shades.
    for (let i = 0; i < 9; i++) {
      light += 10;
      newRange.push({ ...color, l: color.l + light });
    }
    setRange(newRange);
  }, [props.color, props.h, props.l, props.s]);

  return range;
};

export default useCalculateColorRange;
