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

        // svg.append("g").append("svg:image")
            // .attr('width', 25)
            // .attr('height', 25)
            // .attr("transform", "translate(100,100)rotate(0)")
            // .attr("xlink:href", "img/real_madrid_logo.svg")
            // .on("click", function(d) {
                // writeIntro("real_madrid")
            // });
			// console.log(Math.sin(2/31/Math.PI)*radius);
			// console.log(x);
			// console.log(y);
        // svg.append("g").append("svg:image")
            // .attr('width', 25)
            // .attr('height', 25)
            // .attr("transform", "translate(0.3,100)rotate(0)")
            // .attr("xlink:href", "img/barcelona_logo.png")
            // .on("click", function(d) {
                // writeIntro("barcelona")
            // });
			console.log(radius);
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.101168321987432)*radius*0.9-12.5)+","+((-0.994869323391895)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/real_madrid_logo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.299363122973358)*radius*0.9-12.5)+","+((-0.954139256400049)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/barcelona_logo.png").on("click", function(d) {writeIntro("barcelona")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.485301962531081)*radius*0.9-12.5)+","+((-0.874346616144582)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/AtleticoLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.651372482722222)*radius*0.9-12.5)+","+((-0.758758122692791)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/ValenciaLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.790775736937699)*radius*0.9-12.5)+","+((-0.612105982547663)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/SevillaLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.897804539570742)*radius*0.9-12.5)+","+((-0.440394151557634)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/SociedadLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.968077118866204)*radius*0.9-12.5)+","+((-0.250652532258721)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/BilbaoLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.998716507171053)*radius*0.9-12.5)+","+((-0.0506491688387128)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/BayernMunichLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.988468324328111)*radius*0.9-12.5)+","+((0.151427777504577)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/BVBLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.93775213214708)*radius*0.9-12.5)+","+((0.34730525284482)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/LeverkusenLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.848644257494751)*radius*0.9-12.5)+","+((0.528964010326962)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/WolfsburgLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.72479278722912)*radius*0.9-12.5)+","+((0.688966919075687)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/MonchenLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.571268215094792)*radius*0.9-12.5)+","+((0.820763441207276)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/SchalkeLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.394355855113319)*radius*0.9-12.5)+","+((0.918957811620231)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/ManCityLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((0.20129852008866)*radius*0.9-12.5)+","+((0.979529941252494)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/ChelseaLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((1.22514845490862E-16)*radius*0.9-12.5)+","+((1)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/ArsenalLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.201298520088659)*radius*0.9-12.5)+","+((0.979529941252495)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/HotspurLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.394355855113319)*radius*0.9-12.5)+","+((0.91895781162023)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/LiverpoolLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.571268215094792)*radius*0.9-12.5)+","+((0.820763441207277)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/ManULogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.72479278722912)*radius*0.9-12.5)+","+((0.688966919075686)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/LeceisterLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.84864425749475)*radius*0.9-12.5)+","+((0.528964010326963)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/JuventusLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.93775213214708)*radius*0.9-12.5)+","+((0.347305252844821)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/MilanLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.988468324328111)*radius*0.9-12.5)+","+((0.151427777504577)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/RomaLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.998716507171053)*radius*0.9-12.5)+","+((-0.0506491688387123)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/NanopliLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.968077118866205)*radius*0.9-12.5)+","+((-0.250652532258719)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/PSGLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.897804539570742)*radius*0.9-12.5)+","+((-0.440394151557634)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/MonacoLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.790775736937699)*radius*0.9-12.5)+","+((-0.612105982547662)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/LyonnaisLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.651372482722223)*radius*0.9-12.5)+","+((-0.758758122692791)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/MarseilleLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.485301962531082)*radius*0.9-12.5)+","+((-0.874346616144582)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/BenficaLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.299363122973359)*radius*0.9-12.5)+","+((-0.954139256400049)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/PortoLogo.svg").on("click", function(d) {writeIntro("real_madrid")});
svg.append("g").append("svg:image").attr('width', 25).attr('height', 25).attr("transform", "translate("+((-0.101168321987433)*radius*0.9-12.5)+","+((-0.994869323391895)*radius*0.9-12.5)+")rotate(0)").attr("xlink:href", "img/SportingLogo.png").on("click", function(d) {writeIntro("real_madrid")});

    });

    function click(d) {
        writeIntro(d.nickname)
    }
}