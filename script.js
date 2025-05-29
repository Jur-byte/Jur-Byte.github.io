function changeText() {
    let p = document.querySelector('#toggleText');
    p.innerText = p.innerText === 'You clicked the button!' ? 'This is a test site to learn web development.' : 'You clicked the button!';
}
function changeImage() {
    let img = document.querySelector('img');
    img.src = img.src.includes('200') ? 'https://picsum.photos/300/201' : 'https://picsum.photos/300/200';
}
function toggleButtonColor() {
    let button = document.querySelector('button[onclick="toggleButtonColor()"]');
    button.style.backgroundColor = button.style.backgroundColor === 'darkblue' ? 'navy' : 'darkblue';
}
function highlightNav() {
    let links = document.querySelectorAll('nav a');
    links.forEach(link => link.style.color = 'yellow');
}