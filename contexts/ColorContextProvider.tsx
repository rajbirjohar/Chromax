import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import usePrimaryRange from "../hooks/usePrimaryRange";

interface ColorContext {
  range: Hsla[];
  setRange: (range: Hsla[]) => void;
}

export const ColorContext = createContext({
  range: [{ h: 0, s: 0, l: 0, a: 0 }],
  setRange: (range: Hsla[]) => {},
});

export function ColorContextProvider(props: { children: React.ReactNode }) {
  const [range, setRange] = useState<Hsla[]>([]);

  return (
    <ColorContext.Provider value={{ range, setRange }}>
      {props.children}
    </ColorContext.Provider>
  );
}

export function useColorContext() {
  return useContext(ColorContext);
}
