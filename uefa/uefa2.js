    var outerWidth = 475;
    var outerHeight = 350;
    var margin = { left: 75, top: 20, right: 0, bottom: 60 };
    var padding = 100;



  var barPadding = 0.2;
  var barPaddingOuter = 0.1;
  var xColumn = "Percentage";
  var yColumn = "LabelD3";

  var xAxisLabelOffset = 75;


  var innerWidth  = outerWidth  - margin.left - margin.right;
  var innerHeight = outerHeight - margin.top  - margin.bottom;


  var svg = d3.select("body").append("svg")
    .attr("width",  outerWidth)
    .attr("height", outerHeight)
    .attr("viewBox", "0 0 " + outerWidth + " " + outerHeight); 


  var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  var xAxisG = g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + innerHeight + ")")



  var yAxisG = g.append("g")
    .attr("class", "y axis");


  var xScale = d3.scale.linear()
  .range([0, innerWidth - margin.right - margin.left], .1);


  var yScale = d3.scale.ordinal()
  .rangeRoundBands([innerHeight , 0], barPadding, barPaddingOuter);


  var xAxis = d3.svg.axis().scale(xScale).orient("bottom")
    .ticks(7)
    .tickFormat(function(d) {return d + "%"});


  var yAxis = d3.svg.axis().scale(yScale).orient("left")
    .outerTickSize(0);


    function render(data){
    xScale.domain([0, d3.max(data, function (d){ return d[xColumn]; })]);
    yScale.domain(       data.map( function (d){ return d[yColumn]; }));
    xAxisG.call(xAxis);
    yAxisG.call(yAxis);
console.log((yScale.rangeBand()))

    var bars = g.selectAll("rect").data(data);
    bars.enter().append("rect")
      .attr("height", yScale.rangeBand());
    bars
      .attr("x", 0)
      .attr("class", "bar")
      .attr("y",     function (d){ return yScale(d[yColumn]); })
      .attr("width", function (d){ return xScale(d[xColumn]); });


  // horizontal bar labels
   svg.append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .selectAll(".textlabel")
   .data(data)
   .enter()
   .append("text")
 .attr("class", "textlabel")
 .style("font-family", "Arial")
.attr("x", function(d){ return xScale(parseFloat(d["Percentage"])) ;  })
 .attr("y", function(d){ return yScale(d["LabelD3"]) + yScale.rangeBand()/2; })
.text(function(d){ return (d["Percentage"] + "%"); }); 


 // X-axis labels
svg.append("text")
.attr("text-anchor", "middle")
.style("font-size", "13px")
.style("color", "#333333")
.attr("transform", "translate("+ (outerWidth/2) + "," +(outerHeight-(padding/4)) + ")")
.text("% of Households")
.style("font-family", "Arial"); 

 //title for the chart 

svg.append("text")
.attr("text-anchor", "middle")
.style("font-size", "16px")
.style("color", "#333333")
.attr("transform", "translate("+ (outerWidth/3.78) + "," +(outerHeight/30) + ")")
.text("Housing Tenure of DC Residents")
.style("font-family", "Arial");

 //source

svg.append("text")
.attr("text-anchor", "middle")
.style("font-size", "13px")
.style("color", "#333333")
.attr("transform", "translate("+ (outerWidth/3.2) + "," +(outerHeight/1) + ")")
.text("Source: US Census ACS 5-year 2010-2014")
.style("font-family", "Arial")


 svg.append("text")
.attr("text-anchor", "left")
.style("font-size", "10x")
.style("color", "#333333")
.attr("transform", "translate("+ (outerWidth/28) + "," +(outerHeight/12) + ")")
.text("2014")
.style("font-family", "Arial")



    bars.exit().remove();
  }
  function type(d){
    d.population = +d.population;
    return d;
  }
  d3.csv("data/Housing.csv", type, render);