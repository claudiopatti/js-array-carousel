console.log('ciao console');

const img = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',

];

const images = document.querySelector('.images');




for (let i = 0; i < 1; i++ ) {
    
    images.innerHTML += `
        <div class="card sizeImg">
            <img src="img/01.webp" alt="">
            
           
        </div>
    
        <div class="card sizeImg">
            <img src="img/02.webp" alt="">
            
            
        </div>
    
        <div class="card sizeImg">
            <img src="img/03.webp" alt="">
            
           
        </div>
    
        <div class="card sizeImg">
            <img src="img/04.webp" alt="">
            
            
        </div>
        <div class="card sizeImg">
            <img src="img/05.webp" alt="">
            
            
        </div> 
             
    `;
}
let slideAttiva = 0;
let cards = document.getElementsByClassName('card');
cards[slideAttiva].classList.add('sizeImgActive')

let nextImg = document.querySelector('.arrowDown');

nextImg.addEventListener('click',
    function () {
        cards[slideAttiva].classList.remove('sizeImgActive');
        if (slideAttiva >= cards.length- 1) {
            slideAttiva = 0;
        }
        else  {
            slideAttiva++
        }
        
        cards[slideAttiva].classList.add('sizeImgActive');
        // cards[slideAttiva].classList.remove('sizeImgActive');
        // slideAttiva++; 
        // cards[slideAttiva].classList.add('sizeImgActive');
        console.log(cards[slideAttiva])
        
        
    }
    
)

let prevImg = document.querySelector('.arrowUp');


prevImg.addEventListener('click',
    function () {
        cards[slideAttiva].classList.remove('sizeImgActive');
        if (slideAttiva >= cards.length- 1) {
            slideAttiva = 0;
        }
        else  {
            slideAttiva++
        }
        
        cards[slideAttiva].classList.add('sizeImgActive');
        // cards[slideAttiva].classList.remove('sizeImgActive');
        // slideAttiva++; 
        // cards[slideAttiva].classList.add('sizeImgActive');
        console.log(cards[slideAttiva])
        
    }
    
)
