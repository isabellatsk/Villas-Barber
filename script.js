let isa_form = document.querySelector(".isa-form")

function abrirForm(){
    isa_form.style.opacity = "1"
    isa_form.style.pointerEvents = "auto"
    document.body.style.overflow = 'hidden'
}
function fecharForm(){
    isa_form.style.opacity = "0"
    isa_form.style.pointerEvents = "none"
    document.body.style.overflow = 'visible'
}

function enviar(event) {
    event.preventDefault()

    let input_text = document.getElementById('isa-nome').value
        if(!isNaN(input_text)){
        alert("Inválido! Nome incorreto.")
    }
    else{
        const nome = document.querySelector('#isa-agendamento input[type="text"]').value
        const dataInput = document.querySelector('#isa-agendamento input[type="date"]').value
        const hora = document.querySelector('#isa-agendamento input[type="time"]').value

        const [ano, mes, dia] = dataInput.split('-') 
        const dataFormatada = `${dia}/${mes}/${ano}` 

        const mensagem = `Olá, meu nome é ${nome}. Se estiver disponível, gostaria de agendar um horário com vocês em ${dataFormatada} às ${hora}.`
        const encodedMensagem = encodeURIComponent(mensagem)
        
        window.open(`https://wa.me/555185374108?text=${encodedMensagem}`, '_blank')
    }
}




/*BRUNO*/
document.querySelectorAll('.service-image').forEach((image) => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)'; 
        image.style.transition = 'transform 0.3s ease'; 
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)'; 
    });
});




/*YURI*/
const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')
const images = document.querySelector('.box-images')

let currentSlide = 0

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()

    if(currentSlide == slider.length - 1){
        currentSlide = 0
    }
    else{
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()

    if(currentSlide == 0){
        currentSlide = slider.length - 1
    }
    else{
        currentSlide--
    }
    showSlider()
}
btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

let btns = [btnNext, btnPrev]
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        images.style.transform = 'scale(1.05)'
        setTimeout(() => {
            images.style.transform = 'scale(1)' 
        }, 300)
    })
})






/*GABRIEL*/
window.addEventListener('scroll', function () {
    const btn = document.querySelector('.gabriel-voltar-topo');
    if (window.scrollY > 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}