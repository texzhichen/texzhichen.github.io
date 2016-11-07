var clubsName = [ "barcelona", "bayern", "madrid", "lyon" ];
var attrsName = [ "networth", "attack", "defense", "possession" ];

$(":checkbox").on('change', function(event) {
    var clubsOn = {};
    for (var i in clubsName) {
        clubsOn[i] = false;
    }

    var attrsOn = {};
    for (var i in attrsName) {
        attrsOn[i] = false;
    }
 
    for (var i in clubsName) {
        if (clubsOn[id])
            console.log("tt" + clubsOn[id]);
    }
    
    var id = event.target.id;
    var isClub = $.inArray(id, clubsName) > -1;
    if (isClub) {
        clubsOn[id] = $(this).prop('checked') ? true : false;
    } else {
        attrsOn[id] = $(this).prop('checked') ? true : false;
    }
    for (var i in clubsName) {
        if (clubsOn[id])
            console.log(clubsOn[id]);
    }
    
});

function checkClubs() {
    for (var i in clubsName) {
        if (clubsOn[i]) {
            console.log(clubsName + " is on");
        }
    }
}

var larghezzaChart = 430;
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

var svg = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
var data = [
    {
        "Club" : "A",
        "Attack" : 100,
        "Defense" : 80,
        "P" : 0.7
    },
    {
        "Club" : "B",
        "Attack" : 80,
        "Defense" : 60,
        "P" : 0.6
    },
    {
        "Club" : "C",
        "Attack" : 60,
        "Defense" : 100,
        "P" : 0.5
    },
];
var myChart = new dimple.chart(svg, data);
myChart.addCategoryAxis("x", "Attack");
myChart.addCategoryAxis("y", "Defense");
myChart.addMeasureAxis("z", "P");
myChart.addSeries("Club", dimple.plot.bubble);
myChart.addLegend(60, 10, 510, 20, "right");
myChart.draw();

var svg = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
d3.tsv("/data/networth.tsv", function(data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(75, 30, 480, 330)
    myChart.addMeasureAxis("x", "Networth");
    var y = myChart.addCategoryAxis("y", "Clubs");
    y.addOrderRule("Date");
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw();
});