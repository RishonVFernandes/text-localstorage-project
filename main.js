const bgcolor = localStorage.getItem('background_Color');
const fcolor = localStorage.getItem('font_Color');
const fsize = localStorage.getItem('font_Size');
const text_localstorage = localStorage.getItem('mainText');

const text = document.querySelector('.heading');

console.log(fsize);
document.body.style.backgroundColor = bgcolor;
document.body.style.color = fcolor;
text.style.fontSize = fsize + 'px';
text.innerHTML = text_localstorage;
// console.log(text_localstorage);

const change = () => {

    const background_Color = document.getElementById('background_Color').value;
    const font_Color = document.getElementById('font_Color').value;
    const font_Size = document.getElementById('font_Size').value;

    document.body.style.backgroundColor = background_Color;
    document.body.style.color = font_Color;
    text.style.fontSize = font_Size + 'px';
    console.log(font_Size)

    localStorage.setItem('background_Color', background_Color);
    localStorage.setItem('font_Color', font_Color);
    localStorage.setItem('font_Size', font_Size);
}


const Save = () => {
    localStorage.setItem('mainText', text.innerHTML);
    console.log(text.innerHTML)
}
