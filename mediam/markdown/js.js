const temo=document.querySelector('#input')
const pemo=document.querySelector('.output')
temo.addEventListener('input',function(e)
{
    const htm=marked.parse(`${temo.value}`)
    const to=htm.replace(/\n/g,'<br>\n')
    pemo.innerHTML=to
}
)