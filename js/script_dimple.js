const clubsName = [ "Atletico Madrid", "Barcelona", "Real Madrid", "Sevilla", "Valencia",
    "Bayern Munich", "Leverkusen", "Gladbach", "Wolfsburg",
    "Arsenal", "Chelsea", "Man City", "Man Utd",
    "Lyon", "PSG",
    "Juventus", "Roma",
    "Benfica", "Portu" ];

var clubsOn = {};
var selectedClubs = [];
for (var i in clubsName) {
    clubsOn[clubsName[i]] = true;
    selectedClubs.push(clubsName[i]);
}

$(":checkbox").on('change', function(event) {
    var id = event.target.id;
    var isClub = $.inArray(id, clubsName) > -1;
    if (isClub) {
        clubsOn[id] = $(this).prop('checked') ? true : false;
    }
    selectedClubs = [];
    for (var i in clubsName) {
        if (clubsOn[clubsName[i]])
            selectedClubs.push(clubsName[i])
    }
});

const chartWidth = 860;
const chartHeight = 335;
var primoBound = 80;
var secondoBound = 30;
var terzoBound = 340;
var quartoBound = 200;

function title(svg, title) {
    svg.selectAll("title_text")
        .data([ title ])
        .enter()
        .append("text")
        .attr("x", 10)
        .attr("y", 15)
        .style("font-family", "sans-serif")
        .style("font-size", "16px")
        .style("color", "Black")
        .text(function(d) {
            return d;
        });
}


// constants
const minNumChart = 1;
const maxNumChart = 1;

// temporary variable declaration
var i;
var s;
var oldVal;

// create chart containers
for (i = 0; i < maxNumChart; i++) {
    var stringSort = "<label><input type='checkbox' id='sort'> Sort Values</label>";
    var stringYear = "<div class='row' id='year'>"
        + "<div class=col-sm-1><label><input type='checkbox' id='2013-14'> 2013-14</label></div>"
        + "<div class=col-sm-1><label><input type='checkbox' id='2014-15'> 2014-15</label></div>"
        + "<div class=col-sm-1><label><input type='checkbox' id='2015-16' checked> 2015-16</label></div>"
        + "<div class=col-sm-1><label><input type='checkbox' id='2016-17'> 2016-17</label></div>"
        + "</div>";
    s = "<div id=barchart" + i + ">" + stringSort + stringYear + "</div>";
    $("#chart").append(s)
}

// draw all then hide [minNumChart, maxNumChart) charts
for (i = 0; i < maxNumChart; i++) {
//    svg = d3.select(s).append("svg").attr("width", chartWidth).attr("height", chartHeight);
    drawBarChart("#barchart" + i, selectedClubs);
}
for (i = minNumChart; i < maxNumChart; i++) {
    s = "#barchart" + i;
    $(s).hide();
}

// show [0, event.value] charts
$('#barchart').slider().on('slide', function(event) {
    for (i = 0; i < maxNumChart; i++) {
        s = "#barchart" + i;
        i < event.value ? $(s).show() : $(s).hide();
    }
});
