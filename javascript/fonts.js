const fonts = [
    'Arial, sans-serif',
    'Courier New, Courier, monospace',
    'Georgia, serif',
    'Times New Roman, Times, serif',
    'Verdana, sans-serif',
    'Trebuchet MS, sans-serif',
    'Impact, Charcoal, sans-serif',
    'Comic Sans MS, cursive, sans-serif',
    'Shadows Into Light, cursive',
    'Rock Salt, cursive',
    'Permanent Marker, cursive',
    'Fredericka the Great, cursive',
    'Gloria Hallelujah, cursive',
    'Special Elite, cursive'
];

function changeFont() {
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.querySelector('.logo h1').style.fontFamily = randomFont;
}

setInterval(changeFont, 200); // Adjust the interval to 2000ms for a smoother visual effect
