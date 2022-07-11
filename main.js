const imagesArray =[
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg',
    '05.jpg'
]

const imagesDom = document.querySelector('.images');

let activeImg = 0;

for(let x = 0; x<imagesArray.length; x++){
    imagesDom.innerHTML+= <div class='image'><img class="img" src = "$(imagesArra[x]9)"></img></div>
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
