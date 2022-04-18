
/* const imgs = [];
imgs[1] = 'images/1.jpeg';
imgs[2] = 'images/2.jpeg';
imgs[3] = 'images/3.jpeg';
imgs[4] = 'images/4.jpg';

window.onload = function() {

    const random = Math.floor(Math.random * imgs.length);
   document.body.style.backgroundImage = `url(${imgs[random]})`; 
}
*/

 var images = [
     'images/1.jpeg',
     'images/2.jpeg',
     'images/3.jpeg',
     'images/4.jpg'];

var img = document.getElementById("home");
function imgDisp(num) {

    var size = images.length;
    var num = Math.floor(size * Math.random());
    img.style.background = url('images/1.jpeg');

}
imgDisp();


/*
   var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('home');
    console.log(element);
    element[0].style["background"] = "url("+ images[x] + ") no-repeat;";
    document.addEventListener("home", randomImage);

} */ 