const generator = document.getElementById('colorpalet');
const button = document.getElementById('generate');
const container = document.querySelector('.container');

button.addEventListener('click', generatePalette);

function generatePalette() {
    generator.innerHTML = "";

    // Change body background to a random color
    const bgColor = generateColor();
    document.body.style.backgroundColor = bgColor;

    // Change container background to a random gradient
    setRandomGradient();

    // Generate 100 random color boxes
    for (let i = 0; i < 100; i++) {
        const color = generateColor();
        const colorBox = generateBox(color);
        generator.appendChild(colorBox);
    }
}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBox(value) {
    const box = document.createElement('div');
    box.classList.add('color-box');
    box.style.backgroundColor = value;
    box.textContent = value;

    // Click-to-copy feature
    box.addEventListener('click', () => {
        navigator.clipboard.writeText(value).then(() => {
            showCopiedMessage(value);
        });
    });

    return box;
}

function setRandomGradient() {
    const color1 = generateColor();
    const color2 = generateColor();
    container.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// Small popup when copied
function showCopiedMessage(color) {
    const popup = document.createElement('div');
    popup.textContent = `Copied: ${color}`;
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.background = 'black';
    popup.style.color = 'white';
    popup.style.padding = '8px 12px';
    popup.style.borderRadius = '5px';
    popup.style.opacity = '0';
    popup.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(popup);

    setTimeout(() => (popup.style.opacity = '1'), 50);
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => popup.remove(), 300);
    }, 1500);
}
