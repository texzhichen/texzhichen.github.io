var csvValue = "RMA15";
var csvValue2 = "ATL15";

$("#season").on('change', function(e) {
  var season = $("#season").find('option:selected').val();
  $("#option-container").children().appendTo("#club");
  $("#club").children().removeAttr('disabled');
  var unselectedSeason = $("#club").children("[data-group!='" + season + "']");
  $(unselectedSeason).attr('disabled', 'disabled');
  unselectedSeason.appendTo("#option-container");
  $("#club").removeAttr("disabled");
  $('.selectpicker').selectpicker('refresh');
});

$("#season2").on('change', function(e) {
  var season2 = $("#season2").find('option:selected').val();
  $("#option-container2").children().appendTo("#club2");
  $("#club2").children().removeAttr('disabled');
  var unselectedSeason2 = $("#club2").children("[data-group!='" + season2 + "']");
  $(unselectedSeason2).attr('disabled', 'disabled');
  unselectedSeason2.appendTo("#option-container2");
  $("#club2").removeAttr("disabled");
  $('.selectpicker').selectpicker('refresh');
});

$("#club-dropdown").on('change', 'select', function(e) {
  $('#boxplot').find('svg').remove();
  csvValue = $(this).val();
  drawBox("data/" + csvValue + ".csv", "data/" + csvValue2 + ".csv");
});

$("#club-dropdown2").on('change', 'select', function(e) {
  $('#boxplot').find('svg').remove();
  csvValue2 = $(this).val();
  drawBox("data/" + csvValue + ".csv", "data/" + csvValue2 + ".csv");
});

drawBox("data/RMA15.csv", "data/ATL15.csv");

var midline, midline2, yScale, yAxis, data, data2, csvMerge, outliers, outliers2, minVal, minVal2, 
    lowerWhisker, lowerWhisker2, q1Val, q1Val2, medianVal, medianVal2, q3Val, q3Val2, 
    iqr, iqr2, upperWhisker, upperWhisker2, maxVal, maxVal2, maxMergeVal, boxlegendColor;

function drawBox(csvName1, csvName2) {

  //Boxlegend
  var boxlegendMargin = {
        left: 40,
        top: 10,
        right: 5,
        bottom: 10
    },
    boxlegendWidth = 460,
    boxlegendHeight = 30;
  var colorTeam1, colorTeam2;

  switch (csvValue) {
    case "RMA13":
        colorTeam1 = "Real Madrid (Season 13-14)";
        break;
    case "FCB13":
        colorTeam1 = "FC Barcelona (Season 13-14)";
        break;
    case "ATL13":
        colorTeam1 = "Atletico Madrid (Season 13-14)";
        break;
    case "MU13":
        colorTeam1 = "Manchester United (Season 13-14)";
        break;
    case "CHE13":
        colorTeam1 = "Chelsea (Season 13-14)";
        break;
    case "BAY13":
        colorTeam1 = "Bayern Munich (Season 13-14)";
        break;
    case "DOR13":
        colorTeam1 = "Borussia Dortmund (Season 13-14)";
        break;
    case "PSG13":
        colorTeam1 = "Paris Saint-Germain (Season 13-14)";
        break;
    case "RMA14":
        colorTeam1 = "Real Madrid (Season 14-15)";
        break;
    case "FCB14":
        colorTeam1 = "FC Barcelona (Season 14-15)";
        break;
    case "ATL14":
        colorTeam1 = "Atletico Madrid (Season 14-15)";
        break;
    case "BAY14":
        colorTeam1 = "Bayern Munich (Season 14-15)";
        break;
    case "JUV14":
        colorTeam1 = "Juventus (Season 14-15)";
        break;
    case "PSG14":
        colorTeam1 = "Paris Saint-Germain (Season 14-15)";
        break;
    case "MON14":
        colorTeam1 = "Monaco (Season 14-15)";
        break;
    case "POR14":
        colorTeam1 = "Portu (Season 14-15)";
        break;
    case "RMA15":
        colorTeam1 = "Real Madrid (Season 15-16)";
        break;
    case "FCB15":
        colorTeam1 = "FC Barcelona (Season 15-16)";
        break;
    case "ATL15":
        colorTeam1 = "Atletico Madrid (Season 15-16)";
        break;
    case "MCI15":
        colorTeam1 = "Manchester City (Season 15-16)";
        break;
    case "BAY15":
        colorTeam1 = "Bayern Munich (Season 15-16)";
        break;
    case "WOL15":
        colorTeam1 = "Wolfsburg (Season 15-16)";
        break;
    case "PSG15":
        colorTeam1 = "Paris Saint-Germain (Season 15-16)";
        break;
    case "BEN15":
        colorTeam1 = "Benfica (Season 15-16)";
        break;
  }

    switch (csvValue2) {
    case "RMA13":
        colorTeam2 = " Real Madrid (Season 13-14)";
        break;
    case "FCB13":
        colorTeam2 = " FC Barcelona (Season 13-14)";
        break;
    case "ATL13":
        colorTeam2 = " Atletico Madrid (Season 13-14)";
        break;
    case "MU13":
        colorTeam2 = " Manchester United (Season 13-14)";
        break;
    case "CHE13":
        colorTeam2 = " Chelsea (Season 13-14)";
        break;
    case "BAY13":
        colorTeam2 = " Bayern Munich (Season 13-14)";
        break;
    case "DOR13":
        colorTeam2 = " Borussia Dortmund (Season 13-14)";
        break;
    case "PSG13":
        colorTeam2 = " Paris Saint-Germain (Season 13-14)";
        break;
    case "RMA14":
        colorTeam2 = " Real Madrid (Season 14-15)";
        break;
    case "FCB14":
        colorTeam2 = " FC Barcelona (Season 14-15)";
        break;
    case "ATL14":
        colorTeam2 = " Atletico Madrid (Season 14-15)";
        break;
    case "BAY14":
        colorTeam2 = " Bayern Munich (Season 14-15)";
        break;
    case "JUV14":
        colorTeam2 = " Juventus (Season 14-15)";
        break;
    case "PSG14":
        colorTeam2 = " Paris Saint-Germain (Season 14-15)";
        break;
    case "MON14":
        colorTeam2 = " Monaco (Season 14-15)";
        break;
    case "POR14":
        colorTeam2 = " Portu (Season 14-15)";
        break;
    case "RMA15":
        colorTeam2 = " Real Madrid (Season 15-16)";
        break;
    case "FCB15":
        colorTeam2 = " FC Barcelona (Season 15-16)";
        break;
    case "ATL15":
        colorTeam2 = " Atletico Madrid (Season 15-16)";
        break;
    case "MCI15":
        colorTeam2 = " Manchester City (Season 15-16)";
        break;
    case "BAY15":
        colorTeam2 = " Bayern Munich (Season 15-16)";
        break;
    case "WOL15":
        colorTeam2 = " Wolfsburg (Season 15-16)";
        break;
    case "PSG15":
        colorTeam2 = " Paris Saint-Germain (Season 15-16)";
        break;
    case "BEN15":
        colorTeam2 = " Benfica (Season 15-16)";
        break;
  }

  //Set the color for each club
  boxlegendColor = d3.scale.ordinal()
  .range(["#EFB605", "#E01A25"])
  .domain([colorTeam1, colorTeam2]);
  $('#boxlegend').empty();
  var svgBoxlegend = d3.select("#boxlegend").append("svg")
      .attr("width", (boxlegendWidth + boxlegendMargin.left + boxlegendMargin.right))
      .attr("height", (boxlegendHeight + boxlegendMargin.top + boxlegendMargin.bottom));

  var boxlegendWrapper = svgBoxlegend.append("g").attr("class", "boxlegendWrapper")
      .attr("transform", "translate(" + boxlegendMargin.left + "," + boxlegendMargin.top + ")");

  var rectSize = 18, //dimensions of the colored square
      maxWidth = 50; //width of each legend row
      rowWidth = 230; //width of each row

  //Create container per rect/text pair  
  var boxlegend = boxlegendWrapper.selectAll('.boxlegendSquare')
      .data(boxlegendColor.range())
      .enter().append('g')
      .attr('class', 'boxlegendSquare')
      .attr("transform", function(d, i) {
          return "translate(" + (i * rowWidth) + "," + 0 + ")";
      })

  //Append small squares to Legend
  boxlegend.append('rect')
      .attr('width', rectSize)
      .attr('height', rectSize)
      .style('fill', function(d) {
          return d;
      });
  //Append text to Legend
  boxlegend.append('text')
      .attr('transform', 'translate(' + 25 + ',' + (rectSize / 2) + ')')
      .attr("class", "legendText")
      .style("font-size", "12px")
      .attr("dy", ".35em")
      .text(function(d, i) {
          return boxlegendColor.domain()[i];
      });


  multiCsv([csvName1, csvName2], function (err, results) {
    csvMerge = results;
  });
  //initialize the dimensions
  margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  },
  boxWidth = 260 - margin.left - margin.right,
  boxHeight = 480 - margin.top - margin.bottom,
  padding = 60,
  midline = 100;
  midline2 = 150;
  color

  //initialize the y scale
  yScale = d3.scale.linear()
    .range([padding, boxHeight - padding]);

  //initialize the y axis
  yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

  //initialize boxplot statistics
  data = [],
  data2 = [],
  dataMerge = [],
  outliers = [],
  minVal = Infinity,
  lowerWhisker = Infinity,
  q1Val = Infinity,
  medianVal = 0,
  q3Val = -Infinity,
  iqr = 0,
  upperWhisker = -Infinity,
  maxVal = -Infinity;
  outliers2 = [],
  minVal2 = Infinity,
  lowerWhisker2 = Infinity,
  q1Val2 = Infinity,
  medianVal2 = 0,
  q3Val2 = -Infinity,
  iqr2 = 0,
  upperWhisker2 = -Infinity,
  maxVal2 = -Infinity;


  d3.csv(csvName1, type, function(error1, csv1) { // load the data
      d3.csv(csvName2, type, function(error2, csv2) {
        data = csv1.map(function(d) {
          return d.ChancesCreated;
        });
        data.forEach(function(d, i) {
          data[i] = +d;
        });
        data = data.sort(d3.ascending);

        data2 = csv2.map(function(d) {
          return d.ChancesCreated;
        });
        data2.forEach(function(d, i) {
          data2[i] = +d;
        });
        data2 = data2.sort(d3.ascending);
        dataMerge = csvMerge.map(function(d) {
          return d.ChancesCreated;
        });
        dataMerge.forEach(function(d, i) {
          dataMerge[i] = +d;
        });
        dataMerge = dataMerge.sort(d3.ascending);

        //calculate the 1-1 boxplot statistics
        minVal = data[0],
        q1Val = d3.quantile(data, .25),
        medianVal = d3.quantile(data, .5),
        q3Val = d3.quantile(data, .75),
        iqr = q3Val - q1Val,
        maxVal = data[data.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        var index = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index < data.length && lowerWhisker == Infinity) {

          if (data[index] >= (q1Val - 1.5 * iqr))
            lowerWhisker = data[index];
          else
            outliers.push(data[index]);
          index++;
        }

        index = data.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index >= 0 && upperWhisker == -Infinity) {

          if (data[index] <= (q3Val + 1.5 * iqr))
            upperWhisker = data[index];
          else
            outliers.push(data[index]);
          index--;
        }

        //calculate the boxplot 1-2 statistics
        minVal2 = data2[0],
        q1Val2 = d3.quantile(data2, .25),
        medianVal2 = d3.quantile(data2, .5),
        q3Val2 = d3.quantile(data2, .75),
        iqr2 = q3Val2 - q1Val2,
        maxVal2 = data[data2.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        var index2 = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index2 < data2.length && lowerWhisker2 == Infinity) {

          if (data2[index2] >= (q1Val2 - 1.5 * iqr))
            lowerWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2++;
        }

        index2 = data2.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index2 >= 0 && upperWhisker2 == -Infinity) {

          if (data2[index2] <= (q3Val2 + 1.5 * iqr2))
            upperWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2--;
        }

        //map the domain to the x scale +10%
        yScale.domain([maxMergeVal * 1.10, 0]);

        var chart1 = d3.select("#boxplot").append("svg")
          .attr("width", boxWidth)
          .attr("height", boxHeight);

        chart1.append("text")
          .attr("x", (boxWidth / 2))
          .attr("y", (padding / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "12px")
          .text("Chances Created");

        //append the axis
        chart1.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(50, 0)")
          .call(yAxis);

        //draw horizontal line for lowerWhisker
        chart1.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(lowerWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw horizontal line for upperWhisker
        chart1.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart1.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline)
          .attr("x2", midline);

        //draw rect for iqr
        chart1.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val))
          .attr("x", midline - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr));

        //draw vertical line at median
        chart1.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal))
          .attr("y2", yScale(medianVal))
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw data as points
        chart1.selectAll("empty")
          .data(csv1)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.ChancesCreated < lowerWhisker || d.ChancesCreated > upperWhisker)
              return "outlier pt" + i;
            else
              return "point pt" + i;
          })
          .attr("cx", function(d) {
            return random_jitter();
          })
          .attr("cy", function(d) {
            return yScale(d.ChancesCreated);
          })
          .style("fill", color(boxlegendColor.range()[0]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 1-2
        //draw horizontal line for lowerWhisker
        chart1.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(lowerWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw horizontal line for upperWhisker
        chart1.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart1.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2)
          .attr("x2", midline2);

        //draw rect for iqr
        chart1.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val2))
          .attr("x", midline2 - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr2));

        //draw vertical line at median
        chart1.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal2))
          .attr("y2", yScale(medianVal2))
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw data as points
        chart1.selectAll("empty")
          .data(csv2)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.ChancesCreated < lowerWhisker2 || d.ChancesCreated > upperWhisker2)
              return "outlier pt2" + i;
            else
              return "point pt2" + i;
          })
          .attr("cx", function(d) {
            return random_jitter2();
          })
          .attr("cy", function(d) {
            return yScale(d.ChancesCreated);
          })
          .style("fill", color(boxlegendColor.range()[1]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt2" + i)
            .attr("r", 5)
            .style("opacity", "");
            removeBoxtip(d);
          });
          
        // Chart 2
        data = [],
        outliers = [],
        minVal = Infinity,
        lowerWhisker = Infinity,
        q1Val = Infinity,
        medianVal = 0,
        q3Val = -Infinity,
        iqr = 0,
        upperWhisker = -Infinity,
        maxVal = -Infinity;
        data2 = [],
        outliers2 = [],
        minVal2 = Infinity,
        lowerWhisker2 = Infinity,
        q1Val2 = Infinity,
        medianVal2 = 0,
        q3Val2 = -Infinity,
        iqr2 = 0,
        upperWhisker2 = -Infinity,
        maxVal2 = -Infinity;

        data = csv1.map(function(d) {
          return d.SuccessfulPasses;
        });
        data.forEach(function(d, i) {
          data[i] = +d;
        });
        data = data.sort(d3.ascending);

        data2 = csv2.map(function(d) {
          return d.SuccessfulPasses;
        });
        data2.forEach(function(d, i) {
          data2[i] = +d;
        });
        data2 = data2.sort(d3.ascending);
        dataMerge = csvMerge.map(function(d) {
          return d.SuccessfulPasses;
        });
        dataMerge.forEach(function(d, i) {
          dataMerge[i] = +d;
        });
        dataMerge = dataMerge.sort(d3.ascending);

        //calculate the 2-1 boxplot statistics
        minVal = data[0],
        q1Val = d3.quantile(data, .25),
        medianVal = d3.quantile(data, .5),
        q3Val = d3.quantile(data, .75),
        iqr = q3Val - q1Val,
        maxVal = data[data.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index < data.length && lowerWhisker == Infinity) {
          if (data[index] >= (q1Val - 1.5 * iqr))
            lowerWhisker = data[index];
          else
            outliers.push(data[index]);
          index++;
        }

        index = data.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index >= 0 && upperWhisker == -Infinity) {

          if (data[index] <= (q3Val + 1.5 * iqr))
            upperWhisker = data[index];
          else
            outliers.push(data[index]);
          index--;
        }

        //calculate the boxplot 2-2 statistics
        minVal2 = data2[0],
        q1Val2 = d3.quantile(data2, .25),
        medianVal2 = d3.quantile(data2, .5),
        q3Val2 = d3.quantile(data2, .75),
        iqr2 = q3Val2 - q1Val2,
        maxVal2 = data[data2.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index2 = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index2 < data2.length && lowerWhisker2 == Infinity) {

          if (data2[index2] >= (q1Val2 - 1.5 * iqr))
            lowerWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2++;
        }

        index2 = data2.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index2 >= 0 && upperWhisker2 == -Infinity) {

          if (data2[index2] <= (q3Val2 + 1.5 * iqr2))
            upperWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2--;
        }

        //map the domain to the x scale +10%
        yScale.domain([maxMergeVal * 1.10, 0]);


        var chart2 = d3.select("#boxplot").append("svg")
          .attr("width", boxWidth)
          .attr("height", boxHeight);

        chart2.append("text")
          .attr("x", (boxWidth / 2))
          .attr("y", (padding / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "12px")
          .text("Successful Passes");
        //append the axis
        chart2.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(50, 0)")
          .call(yAxis);

        //draw horizontal line for lowerWhisker
        chart2.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(lowerWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw horizontal line for upperWhisker
        chart2.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart2.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline)
          .attr("x2", midline);

        //draw rect for iqr
        chart2.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val))
          .attr("x", midline - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr));

        //draw vertical line at median
        chart2.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal))
          .attr("y2", yScale(medianVal))
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw data as points
        chart2.selectAll("empty")
          .data(csv1)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.SuccessfulPasses < lowerWhisker || d.SuccessfulPasses > upperWhisker)
              return "outlier pt" + i;
            else
              return "point pt" + i;
          })
          .attr("cx", function(d) {
            return random_jitter();
          })
          .attr("cy", function(d) {
            return yScale(d.SuccessfulPasses);
          })
          .style("fill", color(boxlegendColor.range()[0]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 2-2
        //draw horizontal line for lowerWhisker
        chart2.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(lowerWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw horizontal line for upperWhisker
        chart2.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart2.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2)
          .attr("x2", midline2);

        //draw rect for iqr
        chart2.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val2))
          .attr("x", midline2 - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr2));

        //draw vertical line at median
        chart2.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal2))
          .attr("y2", yScale(medianVal2))
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw data as points
        chart2.selectAll("empty")
          .data(csv2)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.SuccessfulPasses < lowerWhisker2 || d.SuccessfulPasses > upperWhisker2)
              return "outlier pt2" + i;
            else
              return "point pt2" + i;
          })
          .attr("cx", function(d) {
            return random_jitter2();
          })
          .attr("cy", function(d) {
            return yScale(d.SuccessfulPasses);
          })
          .style("fill", color(boxlegendColor.range()[1]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 3
        data = [],
        outliers = [],
        minVal = Infinity,
        lowerWhisker = Infinity,
        q1Val = Infinity,
        medianVal = 0,
        q3Val = -Infinity,
        iqr = 0,
        upperWhisker = -Infinity,
        maxVal = -Infinity;
        data2 = [],
        outliers2 = [],
        minVal2 = Infinity,
        lowerWhisker2 = Infinity,
        q1Val2 = Infinity,
        medianVal2 = 0,
        q3Val2 = -Infinity,
        iqr2 = 0,
        upperWhisker2 = -Infinity,
        maxVal2 = -Infinity;

        data = csv1.map(function(d) {
          return d.DefensiveActions;
        });
        data.forEach(function(d, i) {
          data[i] = +d;
        });
        data = data.sort(d3.ascending);

        data2 = csv2.map(function(d) {
          return d.DefensiveActions;
        });
        data2.forEach(function(d, i) {
          data2[i] = +d;
        });
        data2 = data2.sort(d3.ascending);
        dataMerge = csvMerge.map(function(d) {
          return d.DefensiveActions;
        });
        dataMerge.forEach(function(d, i) {
          dataMerge[i] = +d;
        });
        dataMerge = dataMerge.sort(d3.ascending);

        //calculate the 3-1 boxplot statistics
        minVal = data[0],
        q1Val = d3.quantile(data, .25),
        medianVal = d3.quantile(data, .5),
        q3Val = d3.quantile(data, .75),
        iqr = q3Val - q1Val,
        maxVal = data[data.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index < data.length && lowerWhisker == Infinity) {
          if (data[index] >= (q1Val - 1.5 * iqr))
            lowerWhisker = data[index];
          else
            outliers.push(data[index]);
          index++;
        }

        index = data.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index >= 0 && upperWhisker == -Infinity) {

          if (data[index] <= (q3Val + 1.5 * iqr))
            upperWhisker = data[index];
          else
            outliers.push(data[index]);
          index--;
        }

        //calculate the boxplot 3-2 statistics
        minVal2 = data2[0],
        q1Val2 = d3.quantile(data2, .25),
        medianVal2 = d3.quantile(data2, .5),
        q3Val2 = d3.quantile(data2, .75),
        iqr2 = q3Val2 - q1Val2,
        maxVal2 = data[data2.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index2 = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index2 < data2.length && lowerWhisker2 == Infinity) {

          if (data2[index2] >= (q1Val2 - 1.5 * iqr))
            lowerWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2++;
        }

        index2 = data2.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index2 >= 0 && upperWhisker2 == -Infinity) {

          if (data2[index2] <= (q3Val2 + 1.5 * iqr2))
            upperWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2--;
        }

        //map the domain to the x scale +10%
        yScale.domain([maxMergeVal * 1.10, 0]);


        var chart3 = d3.select("#boxplot").append("svg")
          .attr("width", boxWidth)
          .attr("height", boxHeight);

        chart3.append("text")
          .attr("x", (boxWidth / 2))
          .attr("y", (padding / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "12px")
          .text("Defensive Actions");
        //append the axis
        chart3.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(50, 0)")
          .call(yAxis);

        //draw horizontal line for lowerWhisker
        chart3.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(lowerWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw horizontal line for upperWhisker
        chart3.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart3.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline)
          .attr("x2", midline);

        //draw rect for iqr
        chart3.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val))
          .attr("x", midline - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr));

        //draw vertical line at median
        chart3.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal))
          .attr("y2", yScale(medianVal))
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw data as points
        chart3.selectAll("empty")
          .data(csv1)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.DefensiveActions < lowerWhisker || d.DefensiveActions > upperWhisker)
              return "outlier pt" + i;
            else
              return "point pt" + i;
          })
          .attr("cx", function(d) {
            return random_jitter();
          })
          .attr("cy", function(d) {
            return yScale(d.DefensiveActions);
          })
          .style("fill", color(boxlegendColor.range()[0]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 3-2
        //draw horizontal line for lowerWhisker
        chart3.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(lowerWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw horizontal line for upperWhisker
        chart3.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart3.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2)
          .attr("x2", midline2);

        //draw rect for iqr
        chart3.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val2))
          .attr("x", midline2 - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr2));

        //draw vertical line at median
        chart3.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal2))
          .attr("y2", yScale(medianVal2))
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw data as points
        chart3.selectAll("empty")
          .data(csv2)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.DefensiveActions < lowerWhisker2 || d.DefensiveActions > upperWhisker2)
              return "outlier pt2" + i;
            else
              return "point pt2" + i;
          })
          .attr("cx", function(d) {
            return random_jitter2();
          })
          .attr("cy", function(d) {
            return yScale(d.DefensiveActions);
          })
          .style("fill", color(boxlegendColor.range()[1]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 4
        data = [],
        outliers = [],
        minVal = Infinity,
        lowerWhisker = Infinity,
        q1Val = Infinity,
        medianVal = 0,
        q3Val = -Infinity,
        iqr = 0,
        upperWhisker = -Infinity,
        maxVal = -Infinity;
        data2 = [],
        outliers2 = [],
        minVal2 = Infinity,
        lowerWhisker2 = Infinity,
        q1Val2 = Infinity,
        medianVal2 = 0,
        q3Val2 = -Infinity,
        iqr2 = 0,
        upperWhisker2 = -Infinity,
        maxVal2 = -Infinity;

        data = csv1.map(function(d) {
          return d.Possession;
        });
        data.forEach(function(d, i) {
          data[i] = +d;
        });
        data = data.sort(d3.ascending);

        data2 = csv2.map(function(d) {
          return d.Possession;
        });
        data2.forEach(function(d, i) {
          data2[i] = +d;
        });
        data2 = data2.sort(d3.ascending);
        dataMerge = csvMerge.map(function(d) {
          return d.Possession;
        });
        dataMerge.forEach(function(d, i) {
          dataMerge[i] = +d;
        });
        dataMerge = dataMerge.sort(d3.ascending);

        //calculate the 4-1 boxplot statistics
        minVal = data[0],
        q1Val = d3.quantile(data, .25),
        medianVal = d3.quantile(data, .5),
        q3Val = d3.quantile(data, .75),
        iqr = q3Val - q1Val,
        maxVal = data[data.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index < data.length && lowerWhisker == Infinity) {
          if (data[index] >= (q1Val - 1.5 * iqr))
            lowerWhisker = data[index];
          else
            outliers.push(data[index]);
          index++;
        }

        index = data.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index >= 0 && upperWhisker == -Infinity) {

          if (data[index] <= (q3Val + 1.5 * iqr))
            upperWhisker = data[index];
          else
            outliers.push(data[index]);
          index--;
        }

        //calculate the boxplot 4-2 statistics
        minVal2 = data2[0],
        q1Val2 = d3.quantile(data2, .25),
        medianVal2 = d3.quantile(data2, .5),
        q3Val2 = d3.quantile(data2, .75),
        iqr2 = q3Val2 - q1Val2,
        maxVal2 = data[data2.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index2 = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index2 < data2.length && lowerWhisker2 == Infinity) {

          if (data2[index2] >= (q1Val2 - 1.5 * iqr))
            lowerWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2++;
        }

        index2 = data2.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index2 >= 0 && upperWhisker2 == -Infinity) {

          if (data2[index2] <= (q3Val2 + 1.5 * iqr2))
            upperWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2--;
        }

        //map the domain to the x scale +10%
        yScale.domain([maxMergeVal * 1.10, 0]);


        var chart4 = d3.select("#boxplot").append("svg")
          .attr("width", boxWidth)
          .attr("height", boxHeight);

        chart4.append("text")
          .attr("x", (boxWidth / 2))
          .attr("y", (padding / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "12px")
          .text("Possession Percentage");
        //append the axis
        chart4.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(50, 0)")
          .call(yAxis);

        //draw horizontal line for lowerWhisker
        chart4.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(lowerWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw horizontal line for upperWhisker
        chart4.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart4.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline)
          .attr("x2", midline);

        //draw rect for iqr
        chart4.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val))
          .attr("x", midline - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr));

        //draw vertical line at median
        chart4.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal))
          .attr("y2", yScale(medianVal))
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw data as points
        chart4.selectAll("empty")
          .data(csv1)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.Possession < lowerWhisker || d.Possession > upperWhisker)
              return "outlier pt" + i;
            else
              return "point pt" + i;
          })
          .attr("cx", function(d) {
            return random_jitter();
          })
          .attr("cy", function(d) {
            return yScale(d.Possession);
          })
          .style("fill", color(boxlegendColor.range()[0]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 4-2
        //draw horizontal line for lowerWhisker
        chart4.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(lowerWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw horizontal line for upperWhisker
        chart4.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart4.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2)
          .attr("x2", midline2);

        //draw rect for iqr
        chart4.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val2))
          .attr("x", midline2 - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr2));

        //draw vertical line at median
        chart4.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal2))
          .attr("y2", yScale(medianVal2))
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw data as points
        chart4.selectAll("empty")
          .data(csv2)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.Possession < lowerWhisker2 || d.Possession > upperWhisker2)
              return "outlier pt2" + i;
            else
              return "point pt2" + i;
          })
          .attr("cx", function(d) {
            return random_jitter2();
          })
          .attr("cy", function(d) {
            return yScale(d.Possession);
          })
          .style("fill", color(boxlegendColor.range()[1]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });


        // Chart 5
        data = [],
        outliers = [],
        minVal = Infinity,
        lowerWhisker = Infinity,
        q1Val = Infinity,
        medianVal = 0,
        q3Val = -Infinity,
        iqr = 0,
        upperWhisker = -Infinity,
        maxVal = -Infinity;
        data2 = [],
        outliers2 = [],
        minVal2 = Infinity,
        lowerWhisker2 = Infinity,
        q1Val2 = Infinity,
        medianVal2 = 0,
        q3Val2 = -Infinity,
        iqr2 = 0,
        upperWhisker2 = -Infinity,
        maxVal2 = -Infinity;

        data = csv1.map(function(d) {
          return d.FoulsCommitted;
        });
        data.forEach(function(d, i) {
          data[i] = +d;
        });
        data = data.sort(d3.ascending);

        data2 = csv2.map(function(d) {
          return d.FoulsCommitted;
        });
        data2.forEach(function(d, i) {
          data2[i] = +d;
        });
        data2 = data2.sort(d3.ascending);
        dataMerge = csvMerge.map(function(d) {
          return d.FoulsCommitted;
        });
        dataMerge.forEach(function(d, i) {
          dataMerge[i] = +d;
        });
        dataMerge = dataMerge.sort(d3.ascending);

        //calculate the 5-1 boxplot statistics
        minVal = data[0],
        q1Val = d3.quantile(data, .25),
        medianVal = d3.quantile(data, .5),
        q3Val = d3.quantile(data, .75),
        iqr = q3Val - q1Val,
        maxVal = data[data.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index < data.length && lowerWhisker == Infinity) {
          if (data[index] >= (q1Val - 1.5 * iqr))
            lowerWhisker = data[index];
          else
            outliers.push(data[index]);
          index++;
        }

        index = data.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index >= 0 && upperWhisker == -Infinity) {

          if (data[index] <= (q3Val + 1.5 * iqr))
            upperWhisker = data[index];
          else
            outliers.push(data[index]);
          index--;
        }

        //calculate the boxplot 5-2 statistics
        minVal2 = data2[0],
        q1Val2 = d3.quantile(data2, .25),
        medianVal2 = d3.quantile(data2, .5),
        q3Val2 = d3.quantile(data2, .75),
        iqr2 = q3Val2 - q1Val2,
        maxVal2 = data[data2.length - 1];
        maxMergeVal = dataMerge[dataMerge.length - 1];

        index2 = 0;

        //search for the lower whisker, the mininmum value within q1Val - 1.5*iqr
        while (index2 < data2.length && lowerWhisker2 == Infinity) {

          if (data2[index2] >= (q1Val2 - 1.5 * iqr))
            lowerWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2++;
        }

        index2 = data2.length - 1; // reset index to end of array

        //search for the upper whisker, the maximum value within q1Val + 1.5*iqr
        while (index2 >= 0 && upperWhisker2 == -Infinity) {

          if (data2[index2] <= (q3Val2 + 1.5 * iqr2))
            upperWhisker2 = data2[index2];
          else
            outliers2.push(data2[index2]);
          index2--;
        }

        //map the domain to the x scale +10%
        yScale.domain([maxMergeVal * 1.10, 0]);


        var chart5 = d3.select("#boxplot").append("svg")
          .attr("width", boxWidth)
          .attr("height", boxHeight);

        chart5.append("text")
          .attr("x", (boxWidth / 2))
          .attr("y", (padding / 2))
          .attr("text-anchor", "middle")
          .style("font-size", "12px")
          .text("Fouls Committed");
        //append the axis
        chart5.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(50, 0)")
          .call(yAxis);

        //draw horizontal line for lowerWhisker
        chart5.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(lowerWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw horizontal line for upperWhisker
        chart5.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart5.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker))
          .attr("y2", yScale(upperWhisker))
          .attr("stroke", "black")
          .attr("x1", midline)
          .attr("x2", midline);

        //draw rect for iqr
        chart5.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val))
          .attr("x", midline - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr));

        //draw vertical line at median
        chart5.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal))
          .attr("y2", yScale(medianVal))
          .attr("x1", midline - 15)
          .attr("x2", midline + 15);

        //draw data as points
        chart5.selectAll("empty")
          .data(csv1)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.FoulsCommitted < lowerWhisker || d.FoulsCommitted > upperWhisker)
              return "outlier pt" + i;
            else
              return "point pt" + i;
          })
          .attr("cx", function(d) {
            return random_jitter();
          })
          .attr("cy", function(d) {
            return yScale(d.FoulsCommitted);
          })
          .style("fill", color(boxlegendColor.range()[0]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });

        // Chart 5-2
        //draw horizontal line for lowerWhisker
        chart5.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(lowerWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw horizontal line for upperWhisker
        chart5.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(upperWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw vertical line from lowerWhisker to upperWhisker
        chart5.append("line")
          .attr("class", "whisker")
          .attr("y1", yScale(lowerWhisker2))
          .attr("y2", yScale(upperWhisker2))
          .attr("stroke", "black")
          .attr("x1", midline2)
          .attr("x2", midline2);

        //draw rect for iqr
        chart5.append("rect")
          .attr("class", "box")
          .attr("stroke", "black")
          .attr("fill", "white")
          .attr("y", yScale(q3Val2))
          .attr("x", midline2 - 15)
          .attr("width", 30)
          .attr("height", boxHeight - padding - yScale(iqr2));

        //draw vertical line at median
        chart5.append("line")
          .attr("class", "median")
          .attr("stroke", "black")
          .attr("y1", yScale(medianVal2))
          .attr("y2", yScale(medianVal2))
          .attr("x1", midline2 - 15)
          .attr("x2", midline2 + 15);

        //draw data as points
        chart5.selectAll("empty")
          .data(csv2)
          .enter()
          .append("circle")
          .attr("r", 5)
          .attr("class", function(d, i) {
            if (d.FoulsCommitted < lowerWhisker2 || d.FoulsCommitted > upperWhisker2)
              return "outlier pt2" + i;
            else
              return "point pt2" + i;
          })
          .attr("cx", function(d) {
            return random_jitter2();
          })
          .attr("cy", function(d) {
            return yScale(d.FoulsCommitted);
          })
          .style("fill", color(boxlegendColor.range()[1]))
          .on("mouseover", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 10)
              .style("opacity", "1");
            showBoxtip(d);
          })
          .on("mouseout", function(d, i) {
            d3.selectAll("circle.pt2" + i)
              .attr("r", 5)
              .style("opacity", "");
            removeBoxtip(d);
          });
      });
  });
}

function random_jitter() {
  if (Math.round(Math.random() * 1) == 0)
    var seed = -12;
  else
    var seed = 12;
  return midline + Math.floor((Math.random() * seed) + 1);
}

function random_jitter2() {
  if (Math.round(Math.random() * 1) == 0)
    var seed = -12;
  else
    var seed = 12;
  return midline2 + Math.floor((Math.random() * seed) + 1);
}

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

//Hide the tooltip when the mouse moves away
function removeBoxtip(d, i) {
  //Hide tooltip
  d3.select("#boxtip")
    .transition().duration(100)
    .style("opacity", 0);
} //function removeTooltip

//Show the tooltip on the hovered over slice
function showBoxtip(d) {
    //Define and show the tooltip
    //Find location of mouse on page
    var xpos = d3.event.pageX;
    var ypos = d3.event.pageY;

    //Set country
    var matchColor;
    if (d.FinalRound == "TBD") {
      matchColor = '#EEEEEE';
    } else if ((d.MatchType).substring(0, 11) == "Group Stage") {
      matchColor = '#FA9FB5';
    } else if ((d.MatchType).substring(0, 11) == "Round of 16") {
      matchColor = '#F768A1';
    } else if ((d.MatchType).substring(0, 14) == "Quarter-finals") {
      matchColor = '#DD3497';
    } else if ((d.MatchType).substring(0, 11) == "Semi-finals") {
      matchColor = '#AE017E';
    } else if ((d.MatchType).substring(0, 5) == "Final") {
      matchColor = '#7A0177';
    }
    d3.select("#boxtip .boxtip-match")
      .style('color', matchColor)
      .text(d.MatchType);

    d3.select("#boxtip .boxtip-result")
        .html('<span><span style="color:#17A554">' + d.MatchResult);

    // if (d3)
    // d3.select("#boxtip .boxtip-detail")
    //   .style('color', matchColor)
    //   .text(d3.keys(data[0]));
    // console.log(d);
    //Set the tooltip in the right location and have it appear
    d3.select("#boxtip")
      .style("top", (ypos - 20) + "px")
      .style("left", (xpos) + "px")
      .transition().duration(0)
      .style("opacity", 1);
} //function showBoxtip

function multiCsv(files, callback) {
  var results = [];
  var error = "";
  var filesLength = (files || []).length;
  var callbackInvoked = false;
  for (var i = 0; i < filesLength; i++) {
    (function(url) {
      d3.csv(url, function(data) {
        if (data === null) {
          error += "Error retrieving \"" + url + "\"\n";
        } else {
          results.push(data);
        }
        // all files retrieved or an error occurred
        if (!callbackInvoked && (error || results.length === filesLength)) {
          if (error) {
            callback(error, null); // might want to send partial results here
          } else {
            callback(null, d3.merge(results));
          }
          callbackInvoked = true;
        }
      });
    })(files[i]);
  }
}