let swapPic = document.getElementById("swapPic");

function switchImages() {
    if (window.screen.width < 768) {
        swapPic.src = "./assets/images/image-web-3-mobile.jpg"
    } else {
        swapPic.src = "./assets/images/image-web-3-desktop.jpg"
    };
};

switchImages();
window.addEventListener('resize', switchImages);