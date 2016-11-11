function drawBarChart(barchartID) {
    const ClubNameRep = "UniqueName";

    var AttrSelected = "AttackScore";
    var selectedYears = {
        "2013-14" : false,
        "2014-15" : false,
        "2015-16" : false,
        "2016-17" : true
    };

    const clubsID = [ "RMA",
        "FCB",
        "ATL",
        "VAL",
        "SEV",
        "MC",
        "MUN",
        "CHE",
        "ARS",
        "PSG",
        "LYO",
        "BAY",
        "LEV",
        "MGB",
        "WOL",
        "JUV",
        "ROM",
        "BEN",
        "POR" ];
    var clubsOn = {};
    var selectedClubs = [];
    for (var i in clubsID) {
        clubsOn[clubsID[i]] = true;
        selectedClubs.push(clubsID[i]);
    }

    var isSortedByValue = false;
    var svg = d3.select(barchartID).append("svg").attr("width", 860).attr("height", 335);
    render();

    $(':checkbox').change(function() {
        var isClub = $.inArray(this.id, clubsID) > -1;
        if (isClub) {
            clubsOn[this.id] = $(this).prop('checked') ? true : false;
            selectedClubs = [];
            for (var i in clubsID) {
                if (clubsOn[clubsID[i]])
                    selectedClubs.push(clubsID[i])
            }
            console.log(selectedClubs.length)
            d3.selectAll("svg > *").remove();
            render();
        }

        switch (this.id) {
        case '2013-14':
        case '2014-15':
        case '2015-16':
        case '2016-17':
            this.checked ? selectedYears[this.id] = true : selectedYears[this.id] = false;
            d3.selectAll("svg > *").remove();
            render();
            break;
        case 'sort':
            this.checked ? isSortedByValue = true : isSortedByValue = false;
            d3.selectAll("svg > *").remove();
            render();
            break;
        default:
            break;
        }
    });

    $(':radio').change(function() {
        AttrSelected = this.id;
        d3.selectAll("svg > *").remove();
        render();
    });


    function render() {
        var margin = {
                top : 20,
                right : 20,
                bottom : 30,
                left : 40
            },
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom;

        var x = d3.scaleBand().rangeRound([ 0, width ]).padding(0.1),
            y = d3.scaleLinear().rangeRound([ height, 0 ]);

        var color = d3.scaleOrdinal(d3.schemeCategory10);

        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.tsv("data/uefa.tsv", function(d) {
            d[AttrSelected] = +d[AttrSelected];
            return d;
        }, function(error, data) {
            if (error)
                throw error;

            var data = data.filter(function(d) {
                return (selectedYears["2013-14"] && d['Year'] == '2013-14')
                    || (selectedYears["2014-15"] && d['Year'] == '2014-15')
                    || (selectedYears["2015-16"] && d['Year'] == '2015-16')
                    || (selectedYears["2016-17"] && d['Year'] == '2016-17');
            })
            data = data.filter(function(d) {
                return $.inArray(d["ClubCode"], selectedClubs) > -1
            });

            if (isSortedByValue) {
                var data = data.sort(function(a, b) {
                    return b[AttrSelected] - a[AttrSelected];
                })
            } else {
                var data = data.sort(function(a, b) {
                    return d3.ascending(a[ClubNameRep], b[ClubNameRep]);
                })
            }

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

            g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-1.5em")
                .attr("transform", "rotate(-65)")
                .style("font-size", "8px");

            g.append("g")
                .attr("class", "axis axis--y")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("transform", "rotate(90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text(AttrSelected);

            var tooltip = d3.tip()
                .attr("class", "d3-tip")
                .offset([ -8, 0 ])
                .html(function(d) {
                    if (AttrSelected == "SquadValueNum") {
                        return "Club: " + d["Club"] + "<br>"
                            + "Year: " + d["Year"] + "<br>"
                            + "Squad Value: " + d["SquadValue"];
                    } else {
                        return "Club: " + d["Club"] + "<br>"
                            + "Year: " + d["Year"] + "<br>"
                            + AttrSelected + ": " + d[AttrSelected];
                    }


                });
            svg.call(tooltip);

            var bar = g.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .on('mouseover', tooltip.show)
                .on('mouseout', tooltip.hide)
                .style("fill", function(d) {
                    return color(d["Year"]);
                })
                .attr("class", "bar")
                .attr("x", function(d) {
                    return x(d[ClubNameRep]);
                })
                .attr("y", function(d) {
                    return y(d[AttrSelected]);
                })
                .attr("width", x.bandwidth())
                .attr("height", function(d) {
                    return height - y(d[AttrSelected]);
                });


            var options = d3.keys(selectedYears).filter(function(key) {
                return selectedYears[key];
            });

            var legend = svg.selectAll(".legend")
                .data(options.slice())
                .enter().append("g")
                .attr("class", "legend")
                .attr("transform", function(d, i) {
                    return "translate(0," + i * 20 + ")";
                });

            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9)
                .attr("dy", ".35em")
                .attr("transform", "translate(50,0)")
                .style("text-anchor", "end")
                .style("font-size", "10px")
                .text(function(d) {
                    return d;
                });

            legend.append("rect")
                .attr("x", width - 18)
                .attr("width", 18)
                .attr("height", 18)
                .attr("transform", "translate(-15,0)")
                .style("fill", function(d) {
                    return color(d);
                });
        });
    }
}