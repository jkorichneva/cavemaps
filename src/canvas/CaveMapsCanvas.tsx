import { useRef, useEffect } from "react";
import sampleGraphs from "../constants/sampleGraphs";

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
        ctx.font = "24px sans-serif";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "green";

        const gap = 100;
        const circleSize = 50;
        const fontSize = 24;
        let startX = 10;
        let startY = 10;
        Object.keys(sampleGraphs).forEach(vertice => {
            ctx.beginPath();
            ctx.roundRect(startX, startY, circleSize, circleSize, 50);
            ctx.stroke();
            ctx.strokeText(vertice, startX + circleSize/2 - 8, startY + circleSize/2 + 8);

            if (startX + gap >= 500) {
                startY += gap;
            }
            startX += gap;
        });
    });

    return <canvas ref={canvasRef} width={500} height={500} className="Maps-canvas"/>;
}
