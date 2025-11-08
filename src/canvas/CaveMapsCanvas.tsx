import { useRef, useEffect } from "react";

export const CaveMapsCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        // Get the canvas element and its drawing context
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";
        ctx.fillRect(10, 10, 150, 100);
    });

    return <canvas ref={canvasRef} width={500} height={500} className="Maps-canvas"/>;
}
