
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

const cursor = document.querySelector('.cursor');
// const cursorDiv = document.querySelector('.cursorDiv')

const onMouseMove = (e) => {
    // const mouseX = e.pageX;
    // const mouseY = e.pageY;
    
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

    // cursor.setAttribute('transform', `translate(${mouseX}px, ${mouseY}px)`);
}

// document.addEventListener('mousemove', () =>{
//     cursorDiv.classList.add('visible')
// });

document.addEventListener('mousemove', onMouseMove);