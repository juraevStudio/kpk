$(window).scroll(function(){
    if ( $(this).scrollTop() > 100) {
        $('.besamogas').css({bottom : '20px'});
    } else {
        $('.besamogas').css({bottom : '-100%'});
    }
});
$('.besamogas').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});
$(".btn_burgir").click(function() {
    if($(".btn_burgir").hasClass("active")) {
        $(".header__navbar").removeClass("active");
        $(".btn_burgir").removeClass("transform");
        setTimeout(function() {
            $(".btn_burgir").removeClass("active");
        }, 300);
    } else {
        $(".header__navbar").addClass("active");
        $(".btn_burgir").addClass("active");
        setTimeout(function() {
            $(".btn_burgir").addClass("transform");
        }, 300);
    }
});
// Tab
if(document.querySelector(".news__tab")) {
    // Tab
    function tabFun(num) {
        if(document.querySelector("#tab-btn-" + num)) {
            $("#tab-btn-" + num).click(function() {
                $(".tab-btn-all").removeClass("active");
                $(".tab-block-all").removeClass("active");
                $(this).addClass("active");
                $("#tab-block-" + num).addClass("active");
            });
        };
    };
    for(var i = 1; i < 11; i++) {
        tabFun(i);
    };
}
$(".header__search .open").click(function() {
    $(".header__search_wrap").addClass("active");
    setTimeout(function() {
        $(".header__search_wrap").addClass("opacity");
    },1);
});
$(".header__search_wrap .close").click(function() {
    $(".header__search_wrap").removeClass("opacity");
    setTimeout(function() {
        $(".header__search_wrap").removeClass("active");
    },300);
});
// modal
if(document.querySelector(".modal")){
    $(".open-modal").click(function() {
        $("#modal-main").addClass("active");
        setTimeout(function() {
            $("#modal-main").addClass("opacity");
        }, 1);
    });
    $(".modal__close").click(function() {
        $(".modal").removeClass("opacity");
        setTimeout(function() {
            $(".modal").removeClass("active");
        }, 500);
    });
    $("#modal-main2 .consultation__form .btn").click(function() {
        $("#modal-main2").removeClass("opacity");
        setTimeout(function() {
            $("#modal-main2").removeClass("active");
        }, 500);
    });
    $(".modal-2-open").click(function() {
        $("#modal-main").removeClass("opacity");
        setTimeout(function() {
            $("#modal-main").removeClass("active");
        }, 500);
        $("#modal-main2").addClass("active");
        setTimeout(function() {
            $("#modal-main2").addClass("opacity");
        }, 1);
    });
};
if(document.querySelector(".reviews__add")) {
    $(".reviews__add").click(function() {
        $("#modal-main3").addClass("active");
        setTimeout(function() {
            $("#modal-main3").addClass("opacity");
        }, 1);
    });
};
if(document.querySelector('.input_phone')) {
    window.addEventListener("DOMContentLoaded", function() {
        [].forEach.call( document.querySelectorAll('.tel'), function(input) {
        var keyCode;
        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function(a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function(a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5)  this.value = ""
        }
    
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    
      });
    
    });
}