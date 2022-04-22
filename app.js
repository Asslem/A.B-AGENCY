const translation = () => {
    const asslem=document.querySelector('.asslem');
    const bilel=document.querySelector('.bilel');
    const title=document.querySelector('.title');
    const btn=document.querySelector('.btn');
    const subtitle=document.querySelector('.subtitle');
    btn.style.transform="translate(0%)";
    btn.style.opacity="1";
    subtitle.style.transform="translate(0%)";
    subtitle.style.opacity="1";
    title.style.transform="scale(1)";
    title.style.opacity="1";
    asslem.style.left="0%";
    bilel.style.right="0%";
    asslem.style.opacity="1";
    bilel.style.opacity="1";
}
function audio(){
    const audio= new Audio();
    audio.src="woosh.mp3";
    audio.play();
}

const nav = document.querySelector('nav');
const header = document.querySelector('header');

const options = {

}

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nav.classList.remove('changeColor')
            }else{
                nav.classList.add('changeColor')
            }
    })
}, options)

observer.observe(header)



