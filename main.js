const bgcolor = localStorage.getItem('background_Color');
        const fcolor = localStorage.getItem('font_Color');

        document.body.style.backgroundColor = bgcolor;
        document.body.style.color = fcolor;

        const change = () => {

            const background_Color = document.getElementById('background_Color').value;
            const font_Color = document.getElementById('font_Color').value;

            console.log(background_Color)
            document.body.style.backgroundColor = background_Color;
            document.body.style.color = font_Color;

            localStorage.setItem('background_Color', background_Color);
            localStorage.setItem('font_Color', font_Color);
        }