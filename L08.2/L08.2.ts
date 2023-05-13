const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const crc2 = canvas.getContext('2d');

//Berge
crc2.fillStyle = '#c0c0c0';
crc2.beginPath();
crc2.moveTo(0, 600);
crc2.lineTo(0, 400);
crc2.lineTo(200, 400);
crc2.lineTo(300, 300);
crc2.lineTo(400, 400);
crc2.lineTo(500, 300);
crc2.lineTo(600, 400);
crc2.lineTo(800, 400);
crc2.lineTo(800, 600);
crc2.closePath();
crc2.fill();

//Sonne
crc2.fillStyle = '#ffd700';
crc2.beginPath();
crc2.arc(700, 100, 50, 0, 2 * Math.PI);
crc2.fill();

//Wolken
crc2.fillStyle = '#ffffff';
crc2.beginPath();
crc2.arc(200, 100, 50, 0, 2 * Math.PI);
crc2.arc(250, 75, 50, 0, 2 * Math.PI);
crc2.arc(300, 100, 50, 0, 2 * Math.PI);
crc2.arc(250, 125, 50, 0, 2 * Math.PI);
crc2.fill();

//Bäume
crc2.fillStyle = '#8b4513';
crc2.fillRect(100, 350, 25, 150);
crc2.fillStyle = '#00b300';
crc2.beginPath();
crc2.arc(110, 300, 50, 0, 2 * Math.PI);
crc2.fill();
crc2.beginPath();
crc2.arc(140, 300, 50, 0, 2 * Math.PI);
crc2.fill();
crc2.beginPath();
crc2.arc(120, 250, 50, 0, 2 * Math.PI);
crc2.fill();

crc2.fillStyle = '#8b4513';
crc2.fillRect(650, 300, 25, 200);
crc2.fillStyle = '#00b300';
crc2.beginPath();
crc2.arc(660, 250, 50, 0, 2 * Math.PI);
crc2.fill();
crc2.beginPath();
crc2.arc(690, 250, 50, 0, 2 * Math.PI);
crc2.fill();
crc2.beginPath();
crc2.arc(670, 200, 50, 0, 2 * Math.PI);
crc2.fill();

//Wiese
crc2.fillStyle = '#00b300';
crc2.fillRect(0, 450, 800, 150);

//Bienen
crc2.fillStyle = '#000000';
for (let i = 0; i < 10; i++) {
    let x = Math.random() * 750 + 25; 
    let y = Math.random() * 100 + 375; 
    let r = 10; 
    
    crc2.beginPath();
    crc2.arc(x, y, r, 0, 2 * Math.PI);
    crc2.fill();
    crc2
    crc2.fillStyle = '#444444';
    crc2.beginPath();
    crc2.moveTo(x + r, y);
    crc2.lineTo(x + r + 5, y - 10);
    crc2.lineTo(x + r + 10, y);
    crc2.lineTo(x + r + 5, y + 10);
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(x - r, y)
}
