$(document).ready(function(){
    $('.btn.btn-dark, ul a, .up a').click(function(){
        var $href = $(this).attr('href');
        var offset = $(this).attr('data-offset');
        var $anchor = $($href).offset();
        if($anchor){
            if(offset){
                $('body').animate({ scrollTop: $anchor.top-offset});
            }else{
                $('body').animate({ scrollTop: $anchor.top});
                return false;
            }
        }
        else{
            if($(this).hasClass('restart') || $(this).hasClass('sub') )
                return true;
            else
                $('body').animate({ scrollTop: 0 });
                return true;
        }
    })


    var step_1 =
        '<div class="step-1" id="first">' +
            '<p>What type of phone do you have?</p><br/>' +
            '<p>' +
                '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Basic Phone</a>' +
                '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">Smart Phone - Android</a>' +
                '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">Smart Phone - iphone</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>Question 1 / 5</p>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-1.png"></p></div>' +
        '</div>';

    var step_2 =
        '<div class="step-2">' +
            '<p>Do you own and have independent access to your phone?</p><br/>' +
            '<p>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Yes </a>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">No</a>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Question 2 / 5</p>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-2.png"></p></div>' +
        '</div>';

    var step_3 =
        '<div class="step-3">' +
            '<p>Do you have three trusted contacts in your network who can respond fast in an emergency?</p><br/>' +
            '<p>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Yes </a>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">No</a>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">I do not know</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Question 3 / 5</p>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-3.png"></p></div>' +
        '</div>';

    var step_4 =
        '<div class="step-4">' +
            '<p>Which country are you based/do you work in?</p><br/>' +
            '<p>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-xs-offset-0 col-sm-ref-offset-1 col-md-ref-offset-1 sub" role="button" data-option="sub_1">Highest band of telecoms monitoring (China, Iran, Syria etc)</a>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-5 col-xs-12 col-sm-ref-offset-0 col-md-ref-offset-0 sub" role="button" data-option="sub_2">Second highest band</a>' +
            '<a class="btn btn-dark col-lg-3 col-md-3 col-sm-6 col-xs-12 col-sm-offset-3 col-md-ref-offset-0 sub" role="button" data-option="sub_3">Lower band of risk</a>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<p>' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Question 4 / 5</p>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-4.png"></p></div>' +
        '</div>';

    var step_5 =
            '<div class="step-5">' +
            '<p>Panic Button is a useful tool to alert your network quickly and discretely in an emergency. It is not a fail-safe security tool!</p>' +
            '<p>' +
            '<a class="col-xs-12 link" role="button">Read more about good practices</a>' +
            '</p>' +
            '<br>' +
            '<div class="clearfix"></div>' +
            '<p>' +
            '<a class="sub-back col-lg-2 col-md-2 col-sm-2 col-xs-12" role="button">back</a>' +
            '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 5 / 5</p>' +
            '</p>' +
            '<div class="clearfix"></div>' +
            '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3"><p><img src="images/step-5.png"></p></div>' +
            '</div>';

    var prev_content_1;
    var prev_content_2;
    var prev_content_3;
    var prev_content_4;
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 1 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<div class="step-progress col-lg-5 col-md-5 col-sm-5 col-xs-5 col-xs-offset-0 col-sm-ref-offset-2 col-md-ref-offset-2 col-xs-ref-offset-3">' +
                                        '<p><img src="images/step-1.png"></p>' +
                                        '</div>' +
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 1 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 1 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                    backClick();
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
                            prev_content_1 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 2 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 2 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 2 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                    backClick();
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
                            prev_content_2 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 3 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 3 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 3 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                    backClick();
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
                            prev_content_3 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
                        }).animate({
                                left: 0
                            }, 500);
                    }
                    break;
                case "step-4":
                    if(sub_index){
                        switch (sub_index){
                            case "sub_1":
                                sub_content =
                                    '<div class="step-4">' +
                                        '<p class="border">Your country is known to practise mass telecommunications monitoring and interception. If your profession makes you a target of this, then you should think seriously about whether using Panic Button will reveal information about your location and trusted contacts that could put you or them at increased risk. </p>' +
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 4 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                    '<div class="step-4">' +
                                        '<p class="border">Needs text.</p>' +
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue Anyway &emsp; &#62;</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 4 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                    '<div class="step-4">' +
                                        '<p>Needs text.</p>' +
                                        '<p>' +
                                        '<a class="option" role="button">Needs text.</a>' +
                                        '</p>' +
                                        '<br>' +
                                        '<p>' +
                                        '<a class="btn btn-dark col-lg-4 col-md-4 col-sm-4 col-sm-offset-4 col-xs-12 sub" role="button">Continue</a>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
                                        '<p>' +
                                        '<a class="back col-lg-2 col-md-2 col-sm-2 col-xs-12 sub" role="button" data-option="back">back</a>' +
                                        '<p class="col-lg-8 col-md-8 col-sm-8 col-xs-12" role="button">Recommendation 4 / 5</p>' +
                                        '</p>' +
                                        '<div class="clearfix"></div>' +
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
                                sub_content = step_4;
                                $('.form').animate({
                                    left: "100%"
                                }, 500, function(){
                                    $('.form').html(sub_content);
                                    $('.form').css('left', '-100%');
                                    subClick();
                                    backClick();
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
                            prev_content_4 = $('.form').html();
                            $('.form').html(sub_content);
                            $('.form').css('left', '100%');
                            subClick();
                            backClick();
                        }).animate({
                                left: 0
                            }, 500);
                        }
                    break;
                case "step-5":
                    backClick();
                    break;
            }
        })
    }
    subClick();

    $('.nav li a').click(function(){
        if( $(window).width() < 768 )
            $('.navbar-toggle').trigger('click');
    })

    $('.btn.btn-dark.restart').click(function(){
        sub_content = step_1;
        if($('.form').children().attr('id') == 'first'){
            return true;
        }else{
            $('.form').animate({
                left: "100%"
            }, 500, function(){
                $('.form').html(sub_content);
                $('.form').css('left', '-100%');
                subClick();
            }).animate({
                    left: 0
                }, 500);
        }
    })

    var backClick = function(){
        $('.form .sub-back').click(function(){
            var back = $(this).parent().parent().attr('class');
            var sub_content = '';
            console.log(back);

            switch (back){
                case "step-2":
                    sub_content = prev_content_1;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function(){
                        prev_content_1 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                            left: 0
                        }, 500);
                    break;

                case "step-3":
                    sub_content = prev_content_2;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function(){
                        prev_content_2 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                            left: 0
                        }, 500);
                    break;

                case "step-4":
                    sub_content = prev_content_3;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function(){
                        prev_content_3 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                            left: 0
                        }, 500);
                    break;

                case "step-5":
                    sub_content = prev_content_4;
                    $('.form').animate({
                        left: "100%"
                    }, 500, function(){
                        prev_content_4 = $('.form').html();
                        $('.form').html(sub_content);
                        $('.form').css('left', '-100%');
                        subClick();
                    }).animate({
                            left: 0
                        }, 500);
                    break;
            }
        })
    }
})

