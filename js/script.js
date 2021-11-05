$( document ).ready(function() {
    var bgBeneficio = document.getElementById("bg-beneficio");
    var bgBeneficioDos = document.getElementById("bg-beneficio-dos");
    var bgImgRespOne = document.getElementById("img-responsive-one");
    
    var valueHeight = bgBeneficio.offsetHeight;
    var valueHeightDos = bgBeneficioDos.offsetHeight;

    var valueImgRespOne = bgImgRespOne.offsetHeight;

    if (window.matchMedia("(min-width: 450px)").matches) {
            $(".box-aldia").css("height",valueHeight);
            $(".box-accede").css("height",valueHeightDos);
        }
        else{
            bgBeneficioDos.src="imgs/mobile/Descuento-motos 125-CC.jpg";
            var imgRespTwo = document.getElementById("img-responsive-two");
            var valueImgRespTwo = imgRespTwo.offsetHeight
        
            $(".box-aldia").css("height",valueImgRespOne + valueImgRespTwo );
            console.log(valueImgRespOne + valueImgRespTwo)
    }
        
    $( "#close" ).click(function() {
        $(".contendor").css("display","none");
    });

});
