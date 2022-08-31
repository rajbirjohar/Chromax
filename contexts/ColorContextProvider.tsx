import { createContext, useContext, useMemo, useState } from "react";
import useCalculateColorRange from "@/hooks/useCalculateColorRange";

type Theme = {
  zero: Hsla;
  one: Hsla;
  two: Hsla;
  three: Hsla;
  four: Hsla;
  five: Hsla;
  six: Hsla;
  seven: Hsla;
  eight: Hsla;
  nine: Hsla;
  text: Hsla;
};

interface ColorContext {
  color: Hsla;
  setColor: (color: Hsla) => void;
  range: Hsla[];
  setRange: (range: Hsla[]) => void;
  light: Theme;
  dark: Theme;
}

const defaultColor: Hsla = {
  h: 0,
  s: 0,
  l: 0,
  a: 0,
};

export const ColorContext = createContext({
  color: defaultColor,
  setColor: (range: Hsla) => {},
  range: [{ h: 0, s: 0, l: 0, a: 0 }],
  setRange: (range: Hsla[]) => {},
  light: {
    zero: defaultColor,
    one: defaultColor,
    two: defaultColor,
    three: defaultColor,
    four: defaultColor,
    five: defaultColor,
    six: defaultColor,
    seven: defaultColor,
    eight: defaultColor,
    text: defaultColor,
  },
  dark: {
    zero: defaultColor,
    one: defaultColor,
    two: defaultColor,
    three: defaultColor,
    four: defaultColor,
    five: defaultColor,
    six: defaultColor,
    seven: defaultColor,
    eight: defaultColor,
    text: defaultColor,
  },
});

export function ColorContextProvider(props: { children: React.ReactNode }) {
  let [color, setColor] = useState<Hsla>({ h: 230, s: 100, l: 50, a: 1 });
  let [range, setRange] = useState<Hsla[]>([]);

  range = useCalculateColorRange({ color: color, h: null, s: null, l: null });

  const light = useMemo(
    () => ({
      zero: range[0],
      one: range[1],
      two: range[2],
      three: range[3],
      four: range[4],
      five: range[5],
      six: range[6],
      seven: range[7],
      eight: range[8],
      text: { h: color.h, s: 0, l: 10, a: 1 },
    }),
    [color, range]
  );
  const dark = useMemo(
    () => ({
      zero: range[9],
      one: range[1],
      two: range[2],
      three: range[3],
      four: range[4],
      five: range[5],
      six: range[6],
      seven: range[7],
      eight: range[8],
      text: { h: color.h, s: 0, l: 90, a: 1 },
    }),
    [color, range]
  );

  const value = useMemo(
    () => ({
      color,
      setColor,
      range,
      setRange,
      light,
      dark,
    }),
    [color, range, light, dark]
  );

  return (
    <ColorContext.Provider value={value}>
      {props.children}
    </ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
