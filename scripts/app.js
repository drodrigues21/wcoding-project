
// Toggle menu
const menuToggle = document.querySelector('.menu_toggle');
const links = document.querySelectorAll('.links');

menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('open-menu');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('open-menu');
    });
});

// Follow Cursor

// const cursor = document.querySelector('.cursor');
// const cursorDiv = document.querySelector('.cursorDiv')

// const moveCursor = (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     cursorDiv.setAttribute('transform', `translate(${mouseX}px, ${mouseY}px, 0)`);
// }

// window.addEventListener('mousemove', () =>{
//     cursorDiv.classList.add('visible')
// });

// window.addEventListener('mousemove', moveCursor);