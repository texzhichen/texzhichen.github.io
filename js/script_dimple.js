var clubsName = [ "barcelona", "bayern", "madrid", "lyon" ];
var attrsName = [ "networth", "attack", "defense", "possession" ];

var clubsOn = {};
for (var i in clubsName) {
    clubsOn[clubsName[i]] = false;
}

var attrsOn = {};
for (var i in attrsName) {
    attrsOn[attrsName[i]] = false;
}

$(":checkbox").on('change', function(event) {
    var id = event.target.id;
    var isClub = $.inArray(id, clubsName) > -1;
    if (isClub) {
        clubsOn[id] = $(this).prop('checked') ? true : false;
    } else {
        attrsOn[id] = $(this).prop('checked') ? true : false;
    }
    for (var i in clubsName) {
        console.log(clubsName[i] + " " + clubsOn[clubsName[i]]);
    }
    for (var i in attrsName) {
        console.log(attrsName[i] + " " + attrsOn[attrsName[i]]);
    }

});

var larghezzaChart = 860;
var altezzaChart = 335;
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
const maxNumChart = 10;

// temporary variable declaration
var i;
var s;
var oldVal;

// create chart containers
for (i = 0; i < maxNumChart; i++) {
    s = "<div id=barchart" + i + "></div>";
    $("#chart").append(s)    
}

// draw all then hide [minNumChart, maxNumChart) charts
for (i = 0; i < maxNumChart; i++) {
    s = "#barchart" + i;
    svg = d3.select(s).append("svg").attr("width", 860).attr("height", 355);
    drawBarChart(svg);
}
for (i = minNumChart; i < maxNumChart; i++) {
    s = "#barchart" + i;
    $(s).hide();
}

// show [0, event.value] charts
$('#barchart').slider().on('slide', function(event){
    for (i = 0; i < maxNumChart; i++) {
        s = "#barchart" + i;
        i < event.value ? $(s).show() : $(s).hide();
    }
});





//var svg = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
//var data = [
//    {
//        "Club" : "A",
//        "Attack" : 100,
//        "Defense" : 80,
//        "P" : 0.7
//    },
//    {
//        "Club" : "B",
//        "Attack" : 80,
//        "Defense" : 60,
//        "P" : 0.6
//    },
//    {
//        "Club" : "C",
//        "Attack" : 60,
//        "Defense" : 100,
//        "P" : 0.5
//    },
//];
//var myChart = new dimple.chart(svg, data);
//myChart.addCategoryAxis("x", "Attack");
//myChart.addCategoryAxis("y", "Defense");
//myChart.addMeasureAxis("z", "P");
//myChart.addSeries("Club", dimple.plot.bubble);
//myChart.addLegend(60, 10, 510, 20, "right");
//myChart.draw();
//
//var svg = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
//d3.tsv("/data/networth.tsv", function(data) {
//    var myChart = new dimple.chart(svg, data);
//    myChart.setBounds(75, 30, 480, 330)
//    myChart.addMeasureAxis("x", "Networth");
//    var y = myChart.addCategoryAxis("y", "Clubs");
//    y.addOrderRule("Date");
//    myChart.addSeries(null, dimple.plot.bar);
//    myChart.draw();
//});