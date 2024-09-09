const images = [
    "../images/image1.avif",
    "../images/image2.webp",
    "../images/image3.webp",
    "../images/image4.jpg",
    "../images/image5.webp",
    "../images/image6.webp",
    "../images/image7.jpg"
];

function getRandomImage() {
    const random = Math.floor(Math.random() * images.length)
    return images[random]
}

const button = document.getElementById('button');
let clickCounter = 0;
button.addEventListener('click', () => {
    clickCounter++

    let randomImage = getRandomImage();
    document.getElementById('image').src = randomImage;

    if(clickCounter === 1) {
        clickCounter = 0;
    }
});


