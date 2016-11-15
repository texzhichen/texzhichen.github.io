function drawSunburst(sunburstID) {
    var width = 430,
        height = 355,
        radius = (Math.min(width, height) / 2) - 10;

    var formatNumber = d3.format(",d");

    var x = d3.scale.linear()
        .range([ 0, 2 * Math.PI ]);

    var y = d3.scale.sqrt()
        .range([ 0, radius ]);

    var color = d3.scale.category20c();

    var svg = d3.select(sunburstID).append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

    var partition = d3.layout.partition()
        .sort(null)
        .value(function(d) {
            return 1;
        });

    var arc = d3.svg.arc()
        .startAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x)));
        })
        .endAngle(function(d) {
            return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx)));
        })
        .innerRadius(function(d) {
            return Math.max(0, y(d.y));
        })
        .outerRadius(function(d) {
            return Math.max(0, y(d.y + d.dy));
        });

    d3.json("./data/sunburst.json", function(error, root) {
        if (error)
            throw error;
        
        node = root;
        var path = svg.datum(root).selectAll("path")
            .data(partition.nodes)
            .enter().append("path")
            .attr("d", arc)
            .style("fill", function(d) {
                return color((d.children ? d : d.parent).name);
            })
            .on("click", function(d) {
                click(d)
            });

        svg.append("g").append("svg:image")
            .attr('x', -48)
            .attr('y', -70)
            .attr('width', 100)
            .attr('height', 100)
            .attr("xlink:href", "img/uefa_champions_league_logo.svg")
            .on("click", function(d) {
                writeIntro("uefa")
            });
        svg.append("g").append("svg:image")
            .attr('width', 80)
            .attr('height', 80)
            .attr("transform", "translate(85,-135)rotate(52)")
            .attr("xlink:href", "img/spanish_laliga.svg")
            .on("click", function(d) {
                writeIntro("spanish")
            });
        svg.append("g").append("svg:image")
            .attr('width', 70)
            .attr('height', 70)
            .attr("transform", "translate(140,70)rotate(135)")
            .attr("xlink:href", "img/premier_league_logo.svg")
            .on("click", function(d) {
                writeIntro("england")
            });
        svg.append("g").append("svg:image")
            .attr('width', 25)
            .attr('height', 25)
            .attr("transform", "translate(12,-164)rotate(0)")
            .attr("xlink:href", "img/real_madrid_logo.svg")
            .on("click", function(d) {
                writeIntro("real_madrid")
            });
        svg.append("g").append("svg:image")
            .attr('width', 25)
            .attr('height', 25)
            .attr("transform", "translate(58,-146)rotate(0)")
            .attr("xlink:href", "img/barcelona_logo.png")
            .on("click", function(d) {
                writeIntro("barcelona")
            });
    });

    function click(d) {
        writeIntro(d.nickname)
    }
}