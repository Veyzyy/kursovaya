(function() { 
    $('.mini-img').click(function() {
        $('.mini-img').removeClass('active');
        $(this).addClass('active');
        $('.full-image img').attr('src',$(this).attr('src'));
        $('.full-image').attr('data-desc',$(this).attr('data-desc'));

    }
)()});