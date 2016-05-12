$(function() {

    /*
        Load slider
    */
    var slider = $('.bxslider').bxSlider({
        controls: false,
        pager: false,
        adaptiveHeight: true,
        speed: '1000',
        onSlideAfter: function(){
            $('.btn-slider').removeAttr('disabled');
        } 
    });
    
    /*
        Creative coding slide
    */
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

    /*
        Slider controls
    */
    $('.btn-slider').click(function(){
        $('.btn-slider').removeClass("rotate");
        slider.goToSlide($(this).val());
        $('.btn-slider').removeClass('active');
        $(this).addClass('active');
        //$('.btn-slider').attr('disabled', 'disabled');

        $('.btn-slider').toggleClass("rotate");
    });

    /*
        Three.js slide
    */
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
    $('#threejs-div').append( renderer.domElement );
                        
    var cSize = 3;
    var geometry = new THREE.BoxGeometry( cSize/2, cSize/2, cSize/2 );
    var material = new THREE.MeshBasicMaterial( { color: 0xcbff, wireframe: true } );
    var cube1 = new THREE.Mesh( geometry, material );
    var cube2 = new THREE.Mesh( geometry, material );
    var cube3 = new THREE.Mesh( geometry, material );
                        
    scene.add( cube1 );
    scene.add( cube2 );
    scene.add( cube3 );

    camera.position.z = 4;
                        
    function render() {
        setTimeout( function() {
           requestAnimationFrame( render );
        }, 1000/20 );
        cube1.position.x = -2;
        cube1.rotation.y -= 0.1;
        cube2.rotation.x += 0.1;
        cube3.position.x = 2;
        cube3.rotation.y += 0.1;
        renderer.render( scene, camera );
    }
    render();
});

