const parallax_el= document.querySelectorAll(".translate")
console.log(parallax_el);

let xValue= 0
let yValue= 0

window.addEventListener('mousemove', (e)=>{
    xValue= e.clientX - window.innerWidth /2
    yValue= e.clientY - window.innerHeight /2

    console.log(xValue, yValue);

    parallax_el.forEach(el =>{
        let speedx= el.dataset.speedx;
        let speedy= el.dataset.speedy;
        el.style.transform= `translateX(calc(-50% + ${-xValue * speedx}px )) translateY(calc(-50% + ${-yValue * speedy}px ))`
    })
})
window.addEventListener('scroll', (ed)=>{
    scroll= window.pageYOffset

    parallax_el.forEach(elele =>{
        speed= elele.dataset.speedy

        elele.style.transform= `translateY(calc(-50% + ${-scroll * speed}px)) translateX(-50%)`
    })
})