$(function() {

    var slider = $('.bxslider').bxSlider({
        controls: false,
        pager: false,
        adaptiveHeight: true,
        speed: '1000'
    });

    $.getJSON("data/cc.json", function(data) {
        var output = '<div class="row">';
        for(var i in data.companies) {
                output += '<div class="col-md-2">' + 
                            '<a href="' + data.companies[i].url + '">' +
                            '<div class="thumbnail">' + 
                            '<img src="img/' + data.companies[i].name + '.png">' +
                            '<div class="caption"><p>' + data.companies[i].name + '</p></div>' +
                            '</div></a></div>';
        };
        output += "</div>";
        $('#cc-div').append(output);
        slider.reloadSlider();
    });

    $('.btn-slider').click(function(){
        $('.btn-slider').removeClass('active');
        $(this).addClass('active');
        console.log($(this).val());
        slider.goToSlide($(this).val());
    });

});

