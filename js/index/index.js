var slider = document.getElementById("slider_summa");
var output = document.getElementById("input_summa");
var output1 = document.getElementById("input_summa1");
var output2 = document.getElementById("summa_discount");

output.innerHTML = slider.value;
output1.innerHTML = slider.value;
output2.innerHTML = slider.value;
output2.innerHTML =  Number(slider.value) + 4400000;
slider.oninput = function() {
    output.innerHTML = this.value;
    output1.innerHTML = this.value;
    output2.innerHTML =  Number(this.value) + 4400000;
}


$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();
    });
    $('#goTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 'slow');
    });
});