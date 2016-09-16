// customize.js

$(document)
    .ready(function() {
        // fix menu when passed
        $('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            })
        ;
        // create sidebar and attach to menu open
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item')
        ;
    })
;

// dropdown
$('.ui.dropdown')
    .dropdown()
;

// popup wechat qr code
$('#wechat-qr-code-click')
    .popup({
        popup : $('#wechat-qr-code'),
        on    : 'click'
    })
;

// footer copyright
$('#copyright')
    .html(
         function(){
             var date = new Date();
             return '<i class="fa fa-copyright fa-fw"></i> 2011-' +  date.getFullYear() + ' 云英语 版权所有';
         }
    )
;

// footer contacts
$('#contacts-footer-link')
    .on('click', function () {
        $('#contacts-dimmer')
            .dimmer('show')
        ;
    })
;