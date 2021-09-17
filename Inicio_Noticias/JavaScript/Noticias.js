function changeImage() {
    var image = document.getElementById('unlike');
    if(image.src.match("Recursos/Icon_unlike.png")){
        image.src = "Recursos/Icon_like.png"
    }else{
        image.src = "Recursos/Icon_unlike.png"
    }

}