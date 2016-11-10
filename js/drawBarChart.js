function drawBarChart(svg, clubs) {
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
        d.AttackScore = +d.AttackScore;
        return d;
    }, function(error, data) {
        if (error)
            throw error;

        var data = data.sort(function(a, b) {
            return d3.ascending(a.ClubCode, b.ClubCode);
        })

        x.domain(data.map(function(d) {
            return d.ClubCode;
        }));
        y.domain([ 0, d3.max(data, function(d) {
            return d.AttackScore;
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
                return x(d.ClubCode);
            })
            .attr("y", function(d) {
                return y(d.AttackScore);
            })
            .attr("width", x.bandwidth())
            .attr("height", function(d) {
                return height - y(d.AttackScore);
            });


        d3.select("#barchart0").select("input").on("change", change);

        function change() {
            // Copy-on-write since tweens are evaluated after a delay.
            var x0 = x.domain(data.sort(this.checked
                ? function(a, b) {
                    return b.AttackScore - a.AttackScore;
                }
                : function(a, b) {
                    return d3.ascending(a.ClubCode, b.ClubCode);
                })
                .map(function(d) {
                    return d.ClubCode;
                }))
                .copy();

            svg.selectAll(".bar")
                .sort(function(a, b) {
                    return x0(a.ClubCode) - x0(b.ClubCode);
                });

            var transition = svg.transition().duration(500);
            var delay = function(d, i) {
                return i * 50;
            };

            transition.selectAll(".bar")
                .delay(delay)
                .attr("x", function(d) {
                    return x0(d.ClubCode);
                });

            transition.select(".axis")
                .call(d3.axisBottom(x))
                .selectAll("g")
                .delay(delay);
        }
    });
}