function light(show){
    var pic;
    if (show == 0){
        pic = "BG_img/Bong rith art7392.jpg"
    }
    else{
        pic = "BG_img/Bong rith art7392b.jpg"
    }

    document.getElementById('bulb').src = pic;
}

window.addEventListener('scroll', function () {
    const photo = document.querySelector('.photo');
    let scrollPosition =window.pageYOffset;
    let value = window.scrollY;

    photo.style.transform = 'translateY(' + scrollPosition * .5 + 'px)';
})

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)