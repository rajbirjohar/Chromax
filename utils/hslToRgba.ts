import hueToRgb from "./hueToRgb";

export default function hslToRgba(props: { color: Hsla }) {
  let rgba: Rgba = { r: 0, g: 0, b: 0, a: 0 },
    hsl = {
      h: props.color.h / 360,
      s: props.color.s / 100,
      l: props.color.l / 100,
      a: props.color.a,
    };
  if (hsl.s === 0) {
    let v = Math.round(255 * hsl.l);
    rgba = {
      r: v,
      g: v,
      b: v,
      a: hsl.a,
    };
  } else {
    let q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : hsl.l + hsl.s - hsl.l * hsl.s;
    let p = 2 * hsl.l - q;
    rgba.r = Number(Math.round(hueToRgb(p, q, hsl.h + 1 / 3) * 255).toFixed(0));
    rgba.g = Number(Math.round(hueToRgb(p, q, hsl.h) * 255).toFixed(0));
    rgba.b = Number(Math.round(hueToRgb(p, q, hsl.h - 1 / 3) * 255).toFixed(0));
    rgba.a = hsl.a;
  }

  return rgba;
}
