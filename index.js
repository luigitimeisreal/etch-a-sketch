/* let displayer = document.querySelector('#displayer');
const GRIDSIZE = 16;
displayer.style.display = "flex";


for(let i = 0; i < GRIDSIZE; i++) {
    const square = document.createElement('div');
    const innerDiv = document.createElement('div');
    innerDiv.textContent = `DIV ${ i + 1}`;
    square.style.height = "0";
    square.style.width = "20%";
    square.style.paddingBottom = "20%";
    square.style.backgroundColor = "blue";
    innerDiv.style.position = "absolute";
    square.appendChild(innerDiv);
    console.log(displayer)
    displayer.appendChild(square);
} */

window.addEventListener('load', () => {
    function animate() {
        update();
        ctx.fillRect(x, y, 10, 10);
        requestAnimationFrame(animate);
    }

    function update() {
        if (x <= 1000 && y <= 1000) {
            x += speedX;
            y += speedY;
        }
    }
    const btn = document.getElementById('btn');
    const btn2 = document.getElementById('btn2');
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;
    let speedX = 1;
    let speedY = 1;
    let x = 500;
    let y = 500;
    btn.addEventListener('click', () => {
        speedX *= -1;
    })
    btn2.addEventListener('click', () => {
        speedY *= -1;
    })
    animate();
})