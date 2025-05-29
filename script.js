function changeText() {
    let p = document.querySelector('#toggleText');
    p.innerText = p.innerText === 'You clicked the button!' ? 'This is a test site to learn web development.' : 'You clicked the button!';
}
function changeImage() {
    let img = document.querySelector('img');
    img.src = img.src === 'https://picsum.photos/300/200' ? 'https://picsum.photos/300/201' : 'https://picsum.photos/300/200';
}