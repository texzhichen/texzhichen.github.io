function drawBarChart(barchartID) {
    const ClubNameRep = "UniqueName";
    const clubsID = [ "ARS",
        "ATH",
        "ATL",
        "BAY",
        "BEN",
        "CHE",
        "DOR",
        "FCB",
        "JUV",
        "LEV",
        "LIV",
        "LYO",
        "MAR",
        "MC",
        "MGB",
        "MIL",
        "MON",
        "MUN",
        "NAP",
        "POR",
        "PSG",
        "RMA",
        "ROM",
        "RSO",
        "SCH",
        "SCP",
        "SEV",
        "VAL",
        "WOL" ];

    const leagues = [ "Spanish La Liga", "English Premier League", "French Ligue 1",
        "German Bundesliga", "Italian Serie A", "Portuguese Liga Nos" ]

    var selectedClubs = [];
    var clubsOn = {};
    for (var i in clubsID) {
        clubsOn[clubsID[i]] = true;
        selectedClubs.push(clubsID[i]);
    }
    var AttrSelected = "Overall";
    var AttrName = {
        "Overall" : "Overall Performance Score",
        "PossessionScore" : "Possession Score",
        "AttackScore" : "Attack Score",
        "DefenceScore" : "Defence Score"
    };
    var selectedYears = {
        "2013-14" : false,
        "2014-15" : false,
        "2015-16" : false,
        "2016-17" : true
    };
    var isSortedByValue = true;

    var svg = d3.select("#barchart").append("svg").attr("width", 1160).attr("height", 335);
    redraw();

    $(':checkbox').change(function() {
        var isClub = $.inArray(this.id, clubsID) > -1;
        if (isClub) {
            clubsOn[this.id] = $(this).prop('checked') ? true : false;
            selectedClubs = [];
            for (var i in clubsID) {
                if (clubsOn[clubsID[i]])
                    selectedClubs.push(clubsID[i])
            }
            redraw();
        }
    });

    $(barchartID + ' :checkbox').change(function() {
        switch (this.id) {
        case '2013-14':
        case '2014-15':
        case '2015-16':
        case '2016-17':
            this.checked ? selectedYears[this.id] = true : selectedYears[this.id] = false;
            redraw();
            break;
        case 'sort':
            this.checked ? isSortedByValue = true : isSortedByValue = false;
            redraw();
            break;
        default:
            break;
        }
    });

    $(barchartID + ' :radio').change(function() {
        switch (this.id) {
        case '2013-14':
        case '2014-15':
        case '2015-16':
        case '2016-17':
            for (var key in selectedYears) {
                selectedYears[key] = false;
            }
            selectedYears[this.id] = true;
            break;
        default:
            AttrSelected = this.id;
            break;
        }

        redraw();
    });


    function redraw() {
        d3.select("#barchart").selectAll("svg > *").remove();
        render();
    }
    function render() {
        var margin = {
                top : 20,
                right : 20,
                bottom : 30,
                left : 40
            },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;
            //      d3.v4        
            //        var x = d3.scaleBand().rangeRound([ 0, width ]).padding(0.1);
            //        var y = d3.scaleLinear().rangeRound([ height, 0 ]);
            //        var color = d3.scaleOrdinal(d3.schemeCategory10);

        //      d3.v3        
        var x = d3.scale.ordinal().rangeRoundBands([ 0, width ], .1, 1);
        var y = d3.scale.linear().range([ height, 0 ]);
        // var color = d3.scale.category10();

        color = d3.scale.ordinal()
            .range([ "#EFB605", "#E01A25", "#991C71", "#2074A0", "#10A66E", "#7EB852" ])
            .domain([ "Spanish La Liga", "English Premier League", "French Ligue 1", "German Bundesliga", "Italian Serie A", "Portuguese Liga Nos" ]);

        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("data/barchart.tsv", function(d) {
            d[AttrSelected] = +d[AttrSelected];
            return d;
        }, function(error, data) {
            if (error)
                throw error;

            // process data
            var data = data.filter(function(d) {
                return (selectedYears["2013-14"] && d['Year'] == '2013-14')
                    || (selectedYears["2014-15"] && d['Year'] == '2014-15')
                    || (selectedYears["2015-16"] && d['Year'] == '2015-16')
                    || (selectedYears["2016-17"] && d['Year'] == '2016-17');
            })
            data = data.filter(function(d) {
                return $.inArray(d["ClubCode"], selectedClubs) > -1
            });

            var data = data.sort(function(a, b) {
                return b[AttrSelected] - a[AttrSelected];
            })
            //            if (isSortedByValue) {
            //                var data = data.sort(function(a, b) {
            //                    return b[AttrSelected] - a[AttrSelected];
            //                })
            //            } else {
            //                var data = data.sort(function(a, b) {
            //                    return d3.ascending(a[ClubNameRep], b[ClubNameRep]);
            //                })
            //            }

            // draw x and y axises
            x.domain(data.map(function(d) {
                return d[ClubNameRep];
            }));

            var minY = Math.min(0, d3.min(data, function(d) {
                return d[AttrSelected];
            }))
            minY < 0 ? minY = minY - 10 : 0;
            y.domain([ minY, d3.max(data, function(d) {
                return d[AttrSelected];
            }) ]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            g.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + (height) + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-1.5em")
                .attr("transform", "rotate(-65)")
                .style("font-size", "8px");
            
            g.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .style("text-anchor", "end")
                .text(AttrName[AttrSelected]);
            

            // tooltip setting
            var tooltip = d3.tip()
                .attr("class", "d3-tip")
                .offset([ -8, 0 ])
                .html(function(d) {
                    return "Club: " + d["Club"] + "<br>"
                    + "League: " + d["League"] + "<br>"
                    + AttrName[AttrSelected] + ": " + d[AttrSelected];
                });
            svg.call(tooltip);

            // draw bar
            var bar = g.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .on('mouseover', tooltip.show)
                .on('mouseout', tooltip.hide)
                .style("fill", function(d) {
                    return color(d["League"]);
                })
                .attr("class", "bar")
                .attr("x", function(d) {
                    return x(d[ClubNameRep]);
                })
                .attr("y", function(d) {
                    return y(d[AttrSelected]);
                })
                .attr("width", x.rangeBand())
                .attr("height", function(d) {
                    return height - y(d[AttrSelected]);
                });

            // legend
            //            var options = d3.keys(leagues).filter(function(key) {
            //                return leagues[key];
            //            });
            var options = leagues;

            var legend = svg.selectAll(".legend")
                .data(options.slice())
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * 20 + ")";
                });

            legend.append("text")
                .attr("x", width - 170)
                .attr("y", 9)
                .attr("dy", ".35em")
                .attr("transform", "translate(50,0)")
                .style("text-anchor", "begin")
                .style("font-size", "10px")
                .text(function(d) {
                    return d;
                });

            legend.append("rect")
                .attr("x", width - 130)
                .attr("width", 18)
                .attr("height", 18)
                .attr("transform", "translate(-15,0)")
                .style("fill", function(d) {
                    return color(d);
                });

            svg.select(".axis").selectAll("text").remove();

            var ticks = svg.select(".axis").selectAll(".tick")
                .data(data)
                .append("svg:image")
                .attr("xlink:href", function(d) {

                    return "img/" + d.img;
                })
                .attr("x", -13)
                .attr("y", 4)
                .attr("width", 25)
                .attr("height", 25);
        });
    }
}