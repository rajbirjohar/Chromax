import { useColorContext } from "contexts/ColorContextProvider";
import styles from "./index.module.css";

export default function Title(props: { dark?: boolean }) {
  const context = useColorContext();
  const primaryDark: Hsla = context.range[8];
  const primary: Hsla = context.range[0];
  const fg = `hsla(${primary.h}, ${primary.s}%, ${primary.l}%, ${primary.a})`;
  const darkFg = `hsla(${primaryDark.h}, ${primaryDark.s}%, ${primaryDark.l}%, ${primaryDark.a})`;

  return (
    <div
      style={{
        color: `${props.dark ? darkFg : fg}`,
      }}
      className={styles.wrapper}
    >
      <h1>Title</h1>
      <h2>Subtitle</h2>
      <h3>Heading</h3>
      <h4>Subheading</h4>
      <h5>Small Subheading</h5>
      <h6>Super Small Subheading</h6>
      <p
        style={{
          color: `${props.dark ? "var(--gray-50)" : "var(--gray-900)"}`,
        }}
      >
        He stretched, allowing his eyes to peer over the open window. The wind
        was strong as always. A blue and yellow kite in hand, he struggled onto
        the warm beach underneath him and threw the kite. The kite sliced
        through the clouds, yanked by the thin string intertwined between his
        fingers. The seagulls trailed along the boy, splashing through the wet
        sand. The sun beat down onto his naked back as he reeled his kite in.
        Emptying a bucket full of dried seaweed from yesterday&#39;s adventures,
        he embarked on his journey to conquer the tiny shred of land and
        establish a magnificent sandcastle and fortify the moat. He sat on the
        sandy throne content and innocent.
      </p>
      <p
        style={{
          color: `${props.dark ? "var(--gray-50)" : "var(--gray-900)"}`,
        }}
      >
        His feet toed the sharp line between land and water. Behind him stood
        his home, steadfast through storm and fire. The ocean&#39;s vastness
        spread outlined by white, frothy foam. The quiet waves lapped over his
        sandy ankles, darkened by years under brilliant sunlight. He ran back
        into his small abode. Inside, he heard the waves calling to him. The
        fear and excitement of leaving home grew deep inside.
      </p>
      <p
        style={{
          color: `${props.dark ? "var(--gray-50)" : "var(--gray-900)"}`,
        }}
      >
        After a few calm moments, the boy, now a man, smashed onto the sand with
        a war cry, yielding a paddle. He tossed the oar into the sea-rotten
        boat, nearly tearing apart at the nails. With long heaves, the boat
        pushed and broke the cool, green surface of the water. The waves carried
        the bow forward, pulling it into oblivion. The paddle slammed and
        propelled the boat forward, pushing the white sand, his home, behind
        him. He plopped his captain&#39;s hat over his sandy hair, weaved
        together with fern leaves. The blank map layed prime for exploring the
        deep of the ocean. Gazing at the shrinking home on the horizon, he would
        miss the safety of the roof over his head.
      </p>
      <p
        style={{
          color: `${props.dark ? "var(--gray-50)" : "var(--gray-900)"}`,
        }}
      >
        Many years older and many years wiser, the shores reappeared over the
        horizon, his home still standing empty and alone. The old man dragged
        his barnacle covered ship onto the sand and followed the footsteps that
        the boy placed. Inside, he hung the map, now filled edge to edge, on his
        wall. The blue and yellow kite collected sand and dust near the door.
        The bucket laid upside down. He sat on the sand throne content and
        experienced.
      </p>
    </div>
  );
}
