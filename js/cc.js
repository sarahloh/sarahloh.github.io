$(function() {
    $.getJSON("data/cc.json", function(data) {
        var output = '<div class="row">';
        for(var i in data.companies) {
                output += '<div class="col-md-2"><a href="' + 
                            data.companies[i].url + 
                            '" class="thumbnail">' + 
                            '<img src="img/blue.jpg">' +
                            '<div class="caption"><p>' + data.companies[i].name + '<p></div>' +
                            '</a></div>';
        };
        output += "</div>";
        $("#ccDiv").append(output);
    });

    function makeRow(i,data) {

    };
});

