function drawBarChart(barchartID, clubs) {
    var AttrSelected = "AttackScore";
    var ClubName = "ClubCode";

    var selectedYears = {
        "2013-14" : false,
        "2014-15" : false,
        "2015-16" : true,
        "2016-17" : false
    };
    
    var isSorted = false;
    var svg = d3.select(barchartID).append("svg").attr("width", 860).attr("height", 335);

    $(':checkbox').change(function() {
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
            this.checked ? isSorted = true : isSorted = false;
            d3.selectAll("svg > *").remove();
            render();
            break;
        default:
            break;
        }
    });

    render();
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

            if (!isSorted) {
                var data = data.sort(function(a, b) {
                    return d3.ascending(a[ClubName], b[ClubName]);
                })
            } else {
                var data = data.sort(function(a, b) {
                    return b[AttrSelected] - a[AttrSelected];
                })                
            }

            x.domain(data.map(function(d) {
                return d[ClubName];
            }));
            y.domain([ 0, d3.max(data, function(d) {
                return d[AttrSelected];
            }) ]);

            g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            g.append("g")
                .attr("class", "axis axis--y")
                .call(d3.axisLeft(y))
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Frequency");

            g.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) {
                    return x(d[ClubName]);
                })
                .attr("y", function(d) {
                    return y(d[AttrSelected]);
                })
                .attr("width", x.bandwidth())
                .attr("height", function(d) {
                    return height - y(d[AttrSelected]);
                });


            d3.select(barchartID).select('#sort').select("input").on("change", change);

            //            $(':checkbox').change(function() {
            //                if (this.id == 'sort') {
            //                    change();
            //                }
            //            });

            function change() {
                // Copy-on-write since tweens are evaluated after a delay.
                var x0 = x.domain(data.sort(this.checked
                    ? function(a, b) {
                        return b[AttrSelected] - a[AttrSelected];
                    }
                    : function(a, b) {
                        return d3.ascending(a[ClubName], b[ClubName]);
                    })
                    .map(function(d) {
                        return d[ClubName];
                    }))
                    .copy();

                svg.selectAll(".bar")
                    .sort(function(a, b) {
                        return x0(a[ClubName]) - x0(b[ClubName]);
                    });

                var transition = svg.transition().duration(500);
                var delay = function(d, i) {
                    return i * 50;
                };

                transition.selectAll(".bar")
                    .delay(delay)
                    .attr("x", function(d) {
                        return x0(d[ClubName]);
                    });

                transition.select(".axis")
                    .call(d3.axisBottom(x))
                    .selectAll("g")
                    .delay(delay);
            }
        });
    }
}