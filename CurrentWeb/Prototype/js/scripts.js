$(document).ready(function(){
    $('.btn.btn-dark, ul a, .up a').click(function(){
        var $href = $(this).attr('href');
        var $anchor = $($href).offset();
        if($anchor){
            $('body').animate({ scrollTop: $anchor.top});
        }
        else{
            $('body').animate({ scrollTop: 0 });
        }
        return true;
    })


    var step_1 =
        '<div class="step-1">' +
            '<p>What type of phone do you have?</p><br/>' +
            '<p>' +
                '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Basic Phone</a>' +
                '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">Smart Phone - Android</a>' +
                '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">Smart Phone - iphone</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 1 / 5</p>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-1.png"></p></div>' +
        '</div>';

    var step_2 =
        '<div class="step-2">' +
            '<p>Do you own and have independent access to your phone?</p><br/>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Yes </a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">No</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 2 / 5</p>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-2.png"></p></div>' +
        '</div>';

    var step_3 =
        '<div class="step-3">' +
            '<p>Do you have three trusted contacts in your network who can respond fast in an emergency?</p><br/>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Yes </a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">No</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 3 / 5</p>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-3.png"></p></div>' +
        '</div>';

    var step_4 =
        '<div class="step-4">' +
            '<p>Which category best describes your work?</p><br/>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Human rights defender</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">Journalist</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">Activist</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 4 / 5</p>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-4.png"></p></div>' +
        '</div>';

    var step_5 =
        '<div class="step-5">' +
            '<p>Which country are you based/do you work in?</p>' +
            '<p>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Highest band of telecoms monitoring (China, Iran, Syria etc)</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">Second highest band</a>' +
            '<a class="btn btn-grey col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">Lower band of risk</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Step 5 / 5</p>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-5.png"></p></div>' +
        '</div>';

    var subClick = function(){
        $('.form .sub').bind('click', function(){
            var step = $(this).parent().parent().attr('class');
            var sub_index = $(this).attr('data-option');
            var sub_content = '';

            switch (step){
                case "step-1":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-1">' +
                                        '<p class="border">Sorry, you must have an Android phone to use Panic Button.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-1.png"></p></div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-1">' +
                                        '<p>You should be able to use Panic Button on Android versions___-___</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-1.png"></p></div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-1">' +
                                        '<p class="border">Android is an operating system designed for touchscreen mobile devices such as smartphones and tablet computers. You must have an Android phone to use Panic Button.</p>' +
                                        '<p>' +
                                        '<a class="option" role="button">Tell us what model of phone you have. This will help us to prioritize future versions</a>' +
                                        '</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-1.png"></p></div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_1;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_2;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-2":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-2">' +
                                        '<p>Only use Panic Button if you have independent access to your phone. This prevents false alarms and also misuse, such as partners or family members using the app to track you without your knowledge.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-2.png"></p></div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-2">' +
                                        '<p class="border">Only use Panic Button if you have independent access to your phone. This prevents false alarms and also misuse, such as partners or family members using the app to track you without your knowledge.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-2.png"></p></div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-2">' +
                                        '<p class="border">Independent access means that only you own and access your phone - if you share your phone with a partner or family members it may not be a good idea to use Panic Button. This is to prevent false alarms and also misuse, such as partners or family members using the app to track you without your knowledge.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-2.png"></p></div>' +
                                    '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_2;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_3;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-3":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-3">' +
                                        '<p>Panic Button aims to send your emergency message/s to your trusted contacts when you need help. However, the app is not able to guarantee a response. Think carefully when choosing your trusted contacts and always talk to them first to ensure you have a response plan in place.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-3.png"></p></div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content =
                                    '<div class="step-3">' +
                                        '<p class="border">Panic Button aims to send your emergency message/s to your trusted contacts when you need help. However, the app is not able to guarantee a response. Think carefully when choosing your trusted contacts and always talk to them first to ensure you have a response plan in place.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-3.png"></p></div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content =
                                    '<div class="step-3">' +
                                        '<p class="border">Your trusted contacts should be people that you know personally and should be prepared and able to respond fast when you need them. Panic Button aims to send your emergency message/s but it will not ensure a response. Think carefully when choosing your trusted contacts and always talk to them first to ensure you have a response plan in place.</p>' +
                                        '<p>' +
                                        '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-3.png"></p></div>' +
                                        '</div>';
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_3;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_4;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-4":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content = step_5;
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_2":
                                sub_content = step_5;
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "sub_3":
                                sub_content = step_5;
                                $('.form').animate({
                                    left: "-100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                            case "back":
                                sub_content = step_4;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                }).animate({
                                        left: 0
                                    }, 500);
                                break;
                        }
                    }else{
                        sub_content = step_5;
                        $('.form').animate({
                            left: "-100%"
                        }, 500, function(){
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-5":
                    switch (sub_index){
                        case "sub_1":
                            sub_content =
                                '<div class="step-5">' +
                                    '<p class="border">Your country is known to practise mass telecommunications monitoring and interception. If your profession makes you a target of this, then you should think seriously about whether using Panic Button will reveal information about your location and trusted contacts that could put you or them at increased risk. </p>' +
                                    '<p>' +
                                    '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                    '<span class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub">Step 5 / 5</span>' +
                                    '</p>' +
                                    '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-5.png"></p></div>' +
                                    '</div>';
                            $('.form').animate({
                                left: "-100%"
                            }, 500, function(){
                                $('.form').html(sub_content);
                                $('.form').css('left', '100%');
                                subClick();
                            }).animate({
                                    left: 0
                                }, 500);
                            break;
                        case "sub_2":
                            sub_content =
                                '<div class="step-5">' +
                                    '<p class="border">Needs text.</p>' +
                                    '<p>' +
                                    '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                    '<span class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-xs-12 sub">Step 5 / 5</span>' +
                                    '</p>' +
                                    '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-5.png"></p></div>' +
                                    '</div>';
                            $('.form').animate({
                                left: "-100%"
                            }, 500, function(){
                                $('.form').html(sub_content);
                                $('.form').css('left', '100%');
                                subClick();
                            }).animate({
                                    left: 0
                                }, 500);
                            break;
                        case "sub_3":
                            sub_content =
                                '<div class="step-5">' +
                                    '<p>Needs text.</p>' +
                                    '<p>' +
                                    '<a class="option" role="button">Needs text.</a>' +
                                    '</p>' +
                                    '<p>' +
                                    '<a class="back col-lg-4 col-md-4 col-sm-4 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                    '<p class="col-lg-4 col-md-4 col-sm-4 col-xs-12">Step 5 / 5</p>' +
                                    '</p>' +
                                    '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-5.png"></p></div>' +
                                    '</div>';
                            $('.form').animate({
                                left: "-100%"
                            }, 500, function(){
                                $('.form').html(sub_content);
                                $('.form').css('left', '100%');
                                subClick();
                            }).animate({
                                    left: 0
                                }, 500);
                            break;
                        case "back":
                            sub_content = step_5;
                            $('.form').animate({
                                left: "100%"
                            }, 500, function(){
                                $('.form').html(sub_content);
                                $('.form').css('left', '-100%');
                                subClick();
                            }).animate({
                                    left: 0
                                }, 500);
                            break;
                    }
                    break;
            }
        })
    }
    subClick();

    $('.nav li a').click(function(){
        if( $(window).width() <768 )
            $('.navbar-toggle').trigger('click');
    })
})

