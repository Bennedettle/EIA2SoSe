const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
//Berge
ctx.fillStyle = '#c0c0c0';
ctx.beginPath();
ctx.moveTo(0, 600);
ctx.lineTo(0, 400);
ctx.lineTo(200, 400);
ctx.lineTo(300, 300);
ctx.lineTo(400, 400);
ctx.lineTo(500, 300);
ctx.lineTo(600, 400);
ctx.lineTo(800, 400);
ctx.lineTo(800, 600);
ctx.closePath();
ctx.fill();
//Sonne
ctx.fillStyle = '#ffd700';
ctx.beginPath();
ctx.arc(700, 100, 50, 0, 2 * Math.PI);
ctx.fill();
//Wolken
ctx.fillStyle = '#ffffff';
ctx.beginPath();
ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.arc(250, 75, 50, 0, 2 * Math.PI);
ctx.arc(300, 100, 50, 0, 2 * Math.PI);
ctx.arc(250, 125, 50, 0, 2 * Math.PI);
ctx.fill();
//Bäume
ctx.fillStyle = '#8b4513';
ctx.fillRect(100, 350, 25, 150);
ctx.fillStyle = '#00b300';
ctx.beginPath();
ctx.arc(110, 300, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(140, 300, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(120, 250, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = '#8b4513';
ctx.fillRect(650, 300, 25, 200);
ctx.fillStyle = '#00b300';
ctx.beginPath();
ctx.arc(660, 250, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(690, 250, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(670, 200, 50, 0, 2 * Math.PI);
ctx.fill();
//Wiese
ctx.fillStyle = '#00b300';
ctx.fillRect(0, 450, 800, 150);
//Bienen
ctx.fillStyle = '#000000';
for (let i = 0; i < 10; i++) {
    let x = Math.random() * 750 + 25;
    let y = Math.random() * 100 + 375;
    let r = 10;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#444444';
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + r + 5, y - 10);
    ctx.lineTo(x + r + 10, y);
    ctx.lineTo(x + r + 5, y + 10);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x - r, y);
}
//# sourceMappingURL=L08.2.js.map