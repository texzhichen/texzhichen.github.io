function drawSunburst(sunburstID) {
    var width = 640,
        height = 480,
        radius = (Math.min(width, height) / 2) - 10;

    var formatNumber = d3.format(",d");

    var x = d3.scale.linear()
        .range([ 0, 2 * Math.PI ]);

    var y = d3.scale.sqrt()
        .range([ 0, radius ]);

    var color = d3.scale.category20c();
//    var color = d3.scale.ordinal()
//    .range(["#3182bd","#f0d278", "#e07076", "#994c81", "#5085a1", "#53a687", "#84b85c"])
//    .domain(["UEFA","Spanish La Liga", "English Premier League", "French Ligue 1", "German Bundesliga", "Italian Serie A", "Portuguese Liga Nos"]);

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
            .attr('x', -50)
            .attr('y', -60)
            .attr('width', 100)
            .attr('height', 100)
            .attr("xlink:href", "img/uefa_champions_league_logo.svg")
            .on("click", function(d) {
                writeIntro("uefa")
            });
        svg.append("g").append("svg:image")
            .attr('width', 0.36*radius)
            .attr('height', 0.36*radius)
            .attr("transform", "translate("+((0.65)*radius*0.87-0.76*0.18*radius)+","+((-0.76)*radius*0.87-0.65*0.18*radius)+")rotate("+40+")")
            .attr("xlink:href", "img/spanish_laliga.svg")
            .on("click", function(d) {
                writeIntro("spanish")
            });
        svg.append("g").append("svg:image")
            .attr('width', 0.36*radius)
            .attr('height', 0.36*radius)
            .attr("transform", "translate("+((0.84)*radius*0.87+0.52*0.18*radius)+","+((0.52)*radius*0.87-0.84*0.18*radius)+")rotate("+122+")")
            .attr("xlink:href", "img/premier_league_logo.svg")
            .on("click", function(d) {
                writeIntro("england")
            });
		

		svg.append("g").append("svg:image")
            .attr('width', 0.3*radius)
            .attr('height', 0.3*radius)
            .attr("transform", "translate("+((-0.299363123)*radius*0.92+0.954139256*0.15*radius)+","+((0.954139256)*radius*0.92-0.299363123*0.15*radius)+")rotate("+197+")")
            .attr("xlink:href", "img/BundesligaLogo.svg")
            .on("click", function(d) {
                writeIntro("german")
            });
		svg.append("g").append("svg:image")
            .attr('width', 0.18*radius)
            .attr('height', 0.18*radius)
            .attr("transform", "translate("+((-0.97)*radius*0.75-0.25*0.09*radius)+","+((0.25)*radius*0.75+0.97*0.09*radius)+")rotate("+-105+")")
            .attr("xlink:href", "img/SerieALogo.png")
            .on("click", function(d) {
                writeIntro("italian")
            });		
		svg.append("g").append("svg:image")
            .attr('width', 0.597*radius)
            .attr('height', 0.239*radius)
            .attr("transform", "translate("+((-0.85)*radius*0.8-0.53*0.2985*radius)+","+((-0.53)*radius*0.8+0.85*0.2985*radius)+")rotate("+-59+")")
            .attr("xlink:href", "img/Ligue1Logo.png")
            .on("click", function(d) {
                writeIntro("france")
            });		
		svg.append("g").append("svg:image")
            .attr('width', 0.454*radius)
            .attr('height', 0.23*radius)
            .attr("transform", "translate("+((-0.3)*radius*0.8-0.95*0.227*radius)+","+((-0.95)*radius*0.8+0.3*0.227*radius)+")rotate("+-18.4+")")
            .attr("xlink:href", "img/LigaPortugalLogo.png")
            .on("click", function(d) {
                writeIntro("portugal")
            });				

//			console.log(radius);
svg.append("g").append("svg:image").attr('width', 0.144*radius).attr('height', 0.144*radius).attr("transform", "translate("+((0.101168321987432)*radius*0.9-0.072*radius)+","+((-0.994869323391895)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/real_madrid_logo.svg").on("click", function(d) {writeIntro("rma")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.299363122973358)*radius*0.9-0.072*radius)+","+((-0.954139256400049)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/barcelona_logo.png").on("click", function(d) {writeIntro("barca")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.485301962531081)*radius*0.9-0.072*radius)+","+((-0.874346616144582)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/AtleticoLogo.svg").on("click", function(d) {writeIntro("atletico")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.651372482722222)*radius*0.9-0.072*radius)+","+((-0.758758122692791)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/ValenciaLogo.svg").on("click", function(d) {writeIntro("valencia")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.790775736937699)*radius*0.9-0.072*radius)+","+((-0.612105982547663)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/SevillaLogo.svg").on("click", function(d) {writeIntro("sevilla")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.897804539570742)*radius*0.9-0.072*radius)+","+((-0.440394151557634)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/SociedadLogo.svg").on("click", function(d) {writeIntro("sociedad")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.968077118866204)*radius*0.9-0.072*radius)+","+((-0.250652532258721)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/BilbaoLogo.svg").on("click", function(d) {writeIntro("bilbao")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.998716507171053)*radius*0.9-0.072*radius)+","+((-0.0506491688387128)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/ChelseaLogo.svg").on("click", function(d) {writeIntro("chelsea")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.988468324328111)*radius*0.9-0.072*radius)+","+((0.151427777504577)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/ManULogo.svg").on("click", function(d) {writeIntro("manu")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.93775213214708)*radius*0.9-0.072*radius)+","+((0.34730525284482)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/ManCityLogo.svg").on("click", function(d) {writeIntro("mancity")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.848644257494751)*radius*0.9-0.072*radius)+","+((0.528964010326962)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/ArsenalLogo.svg").on("click", function(d) {writeIntro("arsenal")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.72479278722912)*radius*0.9-0.072*radius)+","+((0.688966919075687)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/HotspurLogo.svg").on("click", function(d) {writeIntro("hotspur")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.571268215094792)*radius*0.9-0.072*radius)+","+((0.820763441207276)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/LiverpoolLogo.svg").on("click", function(d) {writeIntro("liverpool")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.394355855113319)*radius*0.9-0.072*radius)+","+((0.918957811620231)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/LeceisterLogo.svg").on("click", function(d) {writeIntro("leicester")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((0.20129852008866)*radius*0.9-0.072*radius)+","+((0.979529941252494)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/BayernMunichLogo.svg").on("click", function(d) {writeIntro("bayern")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((1.22514845490862E-16)*radius*0.9-0.072*radius)+","+((1)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/BVBLogo.svg").on("click", function(d) {writeIntro("bvb")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.201298520088659)*radius*0.9-0.072*radius)+","+((0.979529941252495)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/LeverkusenLogo.svg").on("click", function(d) {writeIntro("leverkusen")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.394355855113319)*radius*0.9-0.072*radius)+","+((0.91895781162023)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/WolfsburgLogo.svg").on("click", function(d) {writeIntro("wolfsburg")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.571268215094792)*radius*0.9-0.072*radius)+","+((0.820763441207277)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/MonchenLogo.svg").on("click", function(d) {writeIntro("monchen")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.72479278722912)*radius*0.9-0.072*radius)+","+((0.688966919075686)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/SchalkeLogo.svg").on("click", function(d) {writeIntro("schalke")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.84864425749475)*radius*0.9-0.072*radius)+","+((0.528964010326963)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/JuventusLogo.svg").on("click", function(d) {writeIntro("juventus")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.93775213214708)*radius*0.9-0.072*radius)+","+((0.347305252844821)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/MilanLogo.svg").on("click", function(d) {writeIntro("milan")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.988468324328111)*radius*0.9-0.072*radius)+","+((0.151427777504577)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/RomaLogo.svg").on("click", function(d) {writeIntro("roma")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.998716507171053)*radius*0.9-0.072*radius)+","+((-0.0506491688387123)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/NanopliLogo.svg").on("click", function(d) {writeIntro("napoli")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.968077118866205)*radius*0.9-0.072*radius)+","+((-0.250652532258719)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/PSGLogo.svg").on("click", function(d) {writeIntro("psg")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.897804539570742)*radius*0.9-0.072*radius)+","+((-0.440394151557634)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/MonacoLogo.svg").on("click", function(d) {writeIntro("monaco")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.790775736937699)*radius*0.9-0.072*radius)+","+((-0.612105982547662)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/LyonnaisLogo.svg").on("click", function(d) {writeIntro("lyon")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.651372482722223)*radius*0.9-0.072*radius)+","+((-0.758758122692791)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/MarseilleLogo.svg").on("click", function(d) {writeIntro("marseille")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.485301962531082)*radius*0.9-0.072*radius)+","+((-0.874346616144582)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/BenficaLogo.svg").on("click", function(d) {writeIntro("benfica")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.299363122973359)*radius*0.9-0.072*radius)+","+((-0.954139256400049)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/PortoLogo.svg").on("click", function(d) {writeIntro("porto")});
svg.append("g").append("svg:image").attr('width', 0.148*radius).attr('height', 0.148*radius).attr("transform", "translate("+((-0.101168321987433)*radius*0.9-0.072*radius)+","+((-0.994869323391895)*radius*0.9-0.072*radius)+")rotate(0)").attr("xlink:href", "img/SportingLogo.png").on("click", function(d) {writeIntro("sporting")});






    });

    function click(d) {
        writeIntro(d.nickname)
    }
}