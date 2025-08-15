const pre = document.querySelector('#prev')
const nex = document.querySelector('#next')
let Numbe = 0;
const slidt = document.querySelector('.slid-track')
pre.addEventListener('click', backward)
nex.addEventListener('click', forward)
function backward() {
    Numbe++;
    if (Numbe >= 2) {
        Numbe = -4;
    }
    slidt.style.translate = `${100 * Numbe}%`;

}
function forward() {
    Numbe--;
    if (Numbe <= -5) {
        Numbe = 1;
    }

    slidt.style.translate = `${100 * Numbe}%`;
}

function sts() {

    asv = setInterval(
        forward
        , 1000)
}
function stos() {
    clearInterval(asv)

} slidt.addEventListener('mouseenter', stos)
 pre.addEventListener('mouseenter', stos)
 nex.addEventListener('mouseenter', stos)
slidt.addEventListener('mouseleave', sts)
pre.addEventListener('mouseleave', sts)
nex.addEventListener('mouseleave', sts)