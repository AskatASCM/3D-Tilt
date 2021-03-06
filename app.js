//Movement Animation to happen
const card = document.querySelector('.card'),
      container = document.querySelector('.container'),
      title = document.querySelector('.title'),
      descrip = document.querySelector('.descrip'),
      sneaker = document.querySelector('.sneaker-img'),
      circle = document.querySelector('.circle'),
      sizes = document.querySelector('.sizes'),
      purchase = document.querySelector('.purchase button');


container.addEventListener('mousemove', (e) =>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15,
        yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseover', e => {
    card.style.transition = 'none';
    title.classList.add('level-1');
    descrip.classList.add('level-3');
    purchase.classList.add('level-2');
    sizes.classList.add('level-2');
    sneaker.classList.add('level-4');
    circle.classList.add('level');
});
container.addEventListener('mouseout', e =>{
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    title.classList.remove('level-1');
    descrip.classList.remove('level-2');
    sneaker.classList.remove('level-4');
    purchase.classList.remove('level-2');
    sizes.classList.remove('level-2');
    circle.classList.remove('level');
});

