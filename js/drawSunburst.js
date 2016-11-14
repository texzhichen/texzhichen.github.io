function drawSunburst(sunburstID) {
    var width = 430,
        height = 355,
        radius = (Math.min(width, height) / 2) - 10;

    var formatNumber = d3.format(",d");

    var x = d3.scaleLinear()
        .range([ 0, 2 * Math.PI ]);

    var y = d3.scaleSqrt()
        .range([ 0, radius ]);

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var partition = d3.partition();

    var arc = d3.arc()
        .startAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x0)));
        })
        .endAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x1)));
        })
        .innerRadius(function(d) {
            return Math.max(0, y(d.y0));
        })
        .outerRadius(function(d) {
            return Math.max(0, y(d.y1));
        });


    var svg = d3.select(sunburstID).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    d3.json("/data/clubs.json", function(error, root) {
        if (error)
            throw error;

        root = d3.hierarchy(root);
        root.sum(function(d) {
            return d.size;
        });
        svg.selectAll("path")
            .data(partition(root).descendants())
            .enter().append("path")
            .attr("d", arc)
            .style("fill", function(d) {
                return color((d.children ? d : d.parent).data.name);
            })
            .on("click", click)
            .append("title")
            .text(function(d) {
                return d.data.name;
            });
        svg.append("g").append("svg:image")
            .attr('x', -48)
            .attr('y', -70)
            .attr('width', 100)
            .attr('height', 100)
            .attr("xlink:href", "img/uefa_champions_league_logo.svg")
            .on("click", function(d){writeIntro("uefa")});
        svg.append("g").append("svg:image")
            .attr('width', 80)
            .attr('height', 80)
            .attr("transform", "translate(85,-135)rotate(52)")
            .attr("xlink:href", "img/spanish_laliga.svg")
            .on("click", function(d){writeIntro("spanish")});
        svg.append("g").append("svg:image")
            .attr('width', 70)
            .attr('height', 70)
            .attr("transform", "translate(140,70)rotate(135)")
            .attr("xlink:href", "img/premier_league_logo.svg")
            .on("click", function(d){writeIntro("england")});
        svg.append("g").append("svg:image")
            .attr('width', 25)
            .attr('height', 25)
            .attr("transform", "translate(12,-164)rotate(0)")
            .attr("xlink:href", "img/real_madrid_logo.svg")
            .on("click", function(d){writeIntro("real_madrid")});
        svg.append("g").append("svg:image")
            .attr('width', 25)
            .attr('height', 25)
            .attr("transform", "translate(58,-146)rotate(0)")
            .attr("xlink:href", "img/barcelona_logo.png")
            .on("click", function(d){writeIntro("barcelona")});
    });


    function click(d) {
        writeIntro(d.data.nickname)
    }

    d3.select(self.frameElement).style("height", height + "px");

    function getAngle(d) {
        // Offset the angle by 90 deg since the '0' degree axis for arc is Y axis, while
        // for text it is the X axis.
        var thetaDeg = (180 / Math.PI * (arc.startAngle()(d) + arc.endAngle()(d)) / 2 - 90);
        // If we are rotating the text by more than 90 deg, then "flip" it.
        // This is why "text-anchor", "middle" is important, otherwise, this "flip" would
        // a little harder.
        return (thetaDeg > 90) ? thetaDeg - 180 : thetaDeg;
    }


}