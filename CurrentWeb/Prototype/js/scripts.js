$(document).ready(function(){
    $('.btn.btn-dark, ul a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        console.log($anchor.top);
        $('body').animate({ scrollTop: $anchor.top });
        return false;
    })

    var step_1 =
        '<div class="step-1">' +
            '<p>Do you own and have independent access to your phone?</p>' +
            '<p>' +
                '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12" role="button">Yes </a>' +
                '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-offset-2 col-md-ref-offset-1" role="button">No</a>' +
                '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-1" role="button">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 1 / 5</p>' +
            '<p><img src="images/step-1.png"></p>' +
        '</div>';

    var step_2 =
        '<div class="step-2">' +
            '<p>Do you own and have independent access to your phone?</p>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12" role="button">Yes </a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-offset-2 col-md-ref-offset-1" role="button">No</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-1" role="button">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 2 / 5</p>' +
            '<p><img src="images/step-2.png"></p>' +
        '</div>';

    var step_3 =
        '<div class="step-3">' +
            '<p>Do you own and have independent access to your phone?</p>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12" role="button">Yes </a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-offset-2 col-md-ref-offset-1" role="button">No</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-1" role="button">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 3 / 5</p>' +
            '<p><img src="images/step-3.png"></p>' +
        '</div>';

    var step_4 =
        '<div class="step-4">' +
            '<p>Do you own and have independent access to your phone?</p>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12" role="button">Yes </a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-offset-2 col-md-ref-offset-1" role="button">No</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-1" role="button">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 4 / 5</p>' +
            '<p><img src="images/step-4.png"></p>' +
        '</div>';

    var step_5 =
        '<div class="step-5">' +
            '<p>Do you own and have independent access to your phone?</p>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12" role="button">Yes </a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-offset-2 col-md-ref-offset-1" role="button">No</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-1" role="button">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 5 / 5</p>' +
            '<p><img src="images/step-5.png"></p>' +
        '</div>';

    var click = function(){
        $('.form a').bind('click', function(){
            var step = $(this).parent().parent().attr('class');
            console.log(step);

            switch (step){
                case "step-1":
                    $('.form').animate({
                        left: "-100%"
                    }, 500, function(){
                        $('.form').html(step_2);
                        $('.form').css('left', '100%');
                        click();
                    }).animate({
                            left: 0
                        }, 500);
                    break;
                case "step-2":
                    $('.form').animate({
                        left: "-100%"
                    }, 500, function(){
                        $('.form').html(step_3);
                        $('.form').css('left', '100%');
                        click();
                    }).animate({
                            left: 0
                        }, 500);
                    break;
                case "step-3":
                    $('.form').animate({
                        left: "-100%"
                    }, 500, function(){
                        $('.form').html(step_4);
                        $('.form').css('left', '100%');
                        click();
                    }).animate({
                            left: 0
                        }, 500);
                    break;
                case "step-4":
                    $('.form').animate({
                        left: "-100%"
                    }, 500, function(){
                        $('.form').html(step_5);
                        $('.form').css('left', '100%');
                        click();
                    }).animate({
                            left: 0
                        }, 500);
                    break;
                case "step-5":
//                    $('.form').animate({
//                        left: "-100%"
//                    }, 500, function(){
//                        $('.form').html(step_2);
//                        $('.form').css('left', '100%');
//                        click();
//                    }).animate({
//                            left: 0
//                        }, 500);
                    break;
            }
        })
    }
    click();

})

