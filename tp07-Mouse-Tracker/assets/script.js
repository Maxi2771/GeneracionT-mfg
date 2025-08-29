const imagen = document.querySelector('.imagen-siguiendo');
let isMouseDown = false;

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

document.body.addEventListener('mousemove', (e) => {
    if (isMouseDown) { 
        imagen.style.top = e.clientY + 'px';
        imagen.style.left = e.clientX + 'px';
    }
});