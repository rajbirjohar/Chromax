import { useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function ColorPicker() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvasCtx = canvasRef.current.getContext("2d");
      if (canvasCtx) {
        let verticalGradient = canvasCtx.createLinearGradient(0, 0, 0, 500);
        verticalGradient.addColorStop(0, "rgba(0,0,0,0)");
        verticalGradient.addColorStop(1, "#000000");
        canvasCtx.fillStyle = verticalGradient;
        canvasCtx.fillRect(
          0,
          0,
          canvasCtx.canvas.width,
          canvasCtx.canvas.height
        );
      }
    }
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
