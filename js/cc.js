$(function() {
    $.getJSON("data/cc.json", function(data) {
        var output = "<ul>";
        for(var i in data.companies) {
            output += '<li><a href="' + data.companies[i].url + '">' + data.companies[i].name + '</a></li>';
        };
        output += "</ul>";
        $("#ccDiv").append(output);
    });
});
