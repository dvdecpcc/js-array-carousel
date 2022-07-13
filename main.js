const imagesArray =[
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
]

let activeImg = 0;
const imagesDom = document.querySelector('.images');

for(let x = 0; x<imagesArray.length; x++){
    imagesDom.innerHTML+= `<div class="image"><img class="img" src = "${imagesArray[x]}"></div>`
}

const imageList = document.getElementsByClassName('image');
imageList[activeImg].classList.add('show');

const next = document.querySelector('.next');
next.addEventListener('click',
    function(){
        imageList[activeImg].classList.remove('show');
        activeImg++;
        itemList[activeImg].classList.add('show');
        prev.classList.remove('hidden');
        if (activeImg == imageList.length -1) {
            next.classList.add('hidden');
        }
    }
)

prev.addEventListener('click',
    function(){
        imageList[activeImg].classList.remove('show');
        activeImg--;
        itemList[activeImg].classList.add('show');
        next.classList.remove('hidden');
        if (activeImg == 0) {
            prev.classList.add('hidden');
        }
    }
)
