class Sketch {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    lines: { start: { x: number, y: number }, end: { x: number, y: number }, color: string, curve: number }[];

    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext('2d');
        this.lines = [];

        const backgroundPalette = ['#011627', '#2EC4B6', '#E71D36', '#FF9F1C', '#F8F32B', '#B5EAEA', '#FFB6B9'];
        const randomBackground = backgroundPalette[Math.floor(Math.random() * backgroundPalette.length)];
        document.body.style.backgroundColor = randomBackground;

        const colorPalette = ['#FFC300', '#FF5733', '#C70039', '#900C3F', '#581845'];

        const numLines = Math.floor(Math.random() * 500) + 500;
        for (let i = 0; i < numLines; i++) {
            const start = {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
            };
            const end = {
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
            };
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            const curve = Math.random() * 30;
            this.lines.push({ start, end, color, curve });
        }

        for (const line of this.lines) {
            const start = { x: line.start.x, y: line.start.y };
            const end = { x: line.end.x, y: line.end.y };
            const midX = (start.x + end.x) / 2;
            const midY = (start.y + end.y) / 2;
            const deltaX = end.x - start.x;
            const deltaY = end.y - start.y;
            const angle = Math.atan2(deltaY, deltaX);
            const radius = Math.sqrt(deltaX ** 2 + deltaY ** 2) / 2;
            const controlRadius = Math.abs(radius / Math.sin(line.curve * Math.PI / 180));
            const controlX = midX + controlRadius * Math.cos(angle - Math.PI / 2);
            const controlY = midY + controlRadius * Math.sin(angle - Math.PI / 2);

            this.context.beginPath();
            this.context.strokeStyle = line.color;
            this.context.moveTo(start.x, start.y);
            this.context.quadraticCurveTo(controlX, controlY, end.x, end.y);
            this.context.stroke();
        }
    }
}

new Sketch();

