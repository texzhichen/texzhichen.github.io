////////////////////////////////////////////////////////////
//////////////////////// Set-up ////////////////////////////
////////////////////////////////////////////////////////////
var svg, wrapper, opacityCircles, color, height, margin, width, height, voronoi, voronoiGroup, cText;

//Quick fix for resizing some things for mobile-ish viewers
function drawGraph(xText, yText, rText, cText) {
    $('#chart').find('svg').remove();
    $('#legend').find('svg').remove();
    var mobileScreen = ($(window).innerWidth() < 500 ? true : false);

    //Scatterplot
    margin = {
            left: 30,
            top: 20,
            right: 20,
            bottom: 20
        },
        width = Math.min($("#chart").width(), 800) - margin.left - margin.right,
        height = width * 2 / 3;

    svg = d3.select("#chart").append("svg") 
        .attr("width", (width + margin.left + margin.right))
        .attr("height", (height + margin.top + margin.bottom));

    wrapper = svg.append("g").attr("class", "chordWrapper")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    //////////////////////////////////////////////////////
    ///////////// Initialize Axes & Scales ///////////////
    //////////////////////////////////////////////////////

    opacityCircles = 0.5;

    //Set the color for each league
    if (cText == "League") {
        color = d3.scale.ordinal()
            .range(["#EFB605", "#E01A25", "#991C71", "#2074A0", "#10A66E", "#7EB852"])
            .domain(["Spanish La Liga", "English Premier League", "French Ligue 1", "German Bundesliga", "Italian Serie A", "Portuguese Liga Nos"]);
    } else if (cText == "Season") {
        color = d3.scale.ordinal()
            .range(["#EFB605", "#E01A25", "#991C71", "#2074A0"])
            .domain(["2013-14", "2014-15", "2015-16", "2016-17"]);
    } else if (cText == "FinalRound") {
        color = d3.scale.ordinal()
            .range(["#EEEEEE", "#FA9FB5", "#F768A1", "#DD3497", "#AE017E", "#7A0177", "#49006A"])
            .domain(["TBD", "Group Stage", "Round of 16", "Quarter-finals", "Semi-finals", "Final", "Winner"]);
    }


    //Set the new x axis range
    var xScale = d3.scale.linear()
        .range([0, width])
        .domain(d3.extent(clubs, function(d) {
            return d[xText];
        }))
        .nice();
    //Set new x-axis
    var xAxis = d3.svg.axis()
        .orient("bottom")
        .ticks(6)
        .tickFormat(function(d) {
            return xScale.tickFormat((mobileScreen ? 4 : 8), function(d) {
                var prefix = d3.formatPrefix(d);
                return "$" + prefix.scale(d) + prefix.symbol;
            })(d);
        })
        .scale(xScale);
    //Append the x-axis
    wrapper.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + 0 + "," + height + ")")
        .call(xAxis
            .tickFormat(function(d) {
                if (xText == "SquadValue(Million)") {
                    return "£" + d;
                } else {
                    return d
                }
            }));

    //Set the new y axis range
    var yScale = d3.scale.linear()
        .range([height, 0])
        .domain(d3.extent(clubs, function(d) {
            return d[yText];
        }))
        .nice();
    var yAxis = d3.svg.axis()
        .orient("left")
        .ticks(6) //Set rough # of ticks
        .scale(yScale);
    //Append the y-axis
    wrapper.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 5 + "," + 0 + ")")
        .call(yAxis
            .tickFormat(function(d) {
                if (yText == "SquadValue(Million)") {
                    return "£" + d;
                } else {
                    return d
                }
            }));

    //Scale for the bubble size
    var rScale = d3.scale.sqrt()
        .range([mobileScreen ? 1 : 2, mobileScreen ? 10 : 16])
        .domain(d3.extent(clubs, function(d) {
            return d[rText];
        }));

    ////////////////////////////////////////////////////////////    
    /////////////////// Scatterplot Circles ////////////////////
    ////////////////////////////////////////////////////////////    

    //Initiate a group element for the circles  
    var circleGroup = wrapper.append("g")
        .attr("class", "circleWrapper");

    //Place the club circles
    circleGroup.selectAll("clubs")
        .data(clubs.sort(function(a, b) {
            return b[rText] > a[rText];
        })) //Sort so the biggest circles are below
        .enter().append("circle")
        .attr("class", function(d, i) {
            return "clubs " + d.ClubCode + " " + d.UniqueName;
        })
        .style("opacity", opacityCircles)
        .style("fill", function(d) {
            return color(d[cText]);
        })
        .attr("cx", function(d) {
            return xScale(d[xText]);
        })
        .attr("cy", function(d) {
            return yScale(d[yText]);
        })
        .attr("r", function(d) {
            return rScale(d[rText]);
        });

    ////////////////////////////////////////////////////////////// 
    //////////////////////// Voronoi ///////////////////////////// 
    ////////////////////////////////////////////////////////////// 

    //Initiate the voronoi function
    //Use the same variables of the data in the .x and .y as used in the cx and cy of the circle call
    //The clip extent will make the boundaries end nicely along the chart area instead of splitting up the entire SVG
    //(if you do not do this it would mean that you already see a tooltip when your mouse is still in the axis area, which is confusing)
    voronoi = d3.geom.voronoi()
        .x(function(d) {
            return xScale(d[xText]);
        })
        .y(function(d) {
            return yScale(d[yText]);
        })
        .clipExtent([
            [0, 0],
            [width, height]
        ]);

    //Initiate a group element to place the voronoi diagram in
    voronoiGroup = wrapper.append("g")
        .attr("class", "voronoiWrapper");

    //Create the Voronoi diagram
    voronoiGroup.selectAll("path")
        .data(voronoi(clubs)) //Use vononoi() with your dataset inside
        .enter().append("path")
        .attr("d", function(d, i) {
            return "M" + d.join("L") + "Z";
        })
        .datum(function(d, i) {
            return d.point;
        })
        .attr("class", function(d, i) {
            return "voronoi " + d.ClubCode;
        }) //Give each cell a unique class where the unique part corresponds to the circle classes
        //.style("stroke", "#2074A0") //I use this to look at how the cells are dispersed as a check
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", showTooltip)
        .on("mouseout", removeTooltip)
        .on("click", function(){
            ;
        });

    //////////////////////////////////////////////////////
    ///////////////// Initialize Labels //////////////////
    //////////////////////////////////////////////////////

    var xLabel = xText.replace(/([a-z])([A-Z])/g, "$1 $2");
    var yLabel = yText.replace(/([a-z])([A-Z])/g, "$1 $2");
    //Set up X axis label
    wrapper.append("g")
        .append("text")
        .attr("class", "x title")
        .attr("text-anchor", "end")
        .style("font-size", (mobileScreen ? 8 : 12) + "px")
        .attr("transform", "translate(" + width + "," + (height - 10) + ")")
        .text(xLabel);

    //Set up y axis label
    wrapper.append("g")
        .append("text")
        .attr("class", "y title")
        .attr("text-anchor", "end")
        .style("font-size", (mobileScreen ? 8 : 12) + "px")
        .attr("transform", "translate(23, 0) rotate(-90)")
        .text(yLabel);

    ///////////////////////////////////////////////////////////////////////////
    ///////////////////////// Create the Legend////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////

    if (!mobileScreen) {
        //Legend            
        var legendMargin = {
                left: 5,
                top: 10,
                right: 5,
                bottom: 10
            },
            legendWidth = 145,
            legendHeight = 270;

        var svgLegend = d3.select("#legend").append("svg")
            .attr("width", (legendWidth + legendMargin.left + legendMargin.right))
            .attr("height", (legendHeight + legendMargin.top + legendMargin.bottom));

        var legendWrapper = svgLegend.append("g").attr("class", "legendWrapper")
            .attr("transform", "translate(" + legendMargin.left + "," + legendMargin.top + ")");

        var rectSize = 15, //dimensions of the colored square
            rowHeight = 20, //height of a row in the legend
            maxWidth = 144; //widht of each row

        //Create container per rect/text pair  
        var legend = legendWrapper.selectAll('.legendSquare')
            .data(color.range())
            .enter().append('g')
            .attr('class', 'legendSquare')
            .attr("transform", function(d, i) {
                return "translate(" + 0 + "," + (i * rowHeight) + ")";
            })
            .style("cursor", "pointer")
            .on("mouseover", selectLegend(0.02, cText))
            .on("mouseout", selectLegend(opacityCircles, cText))
            .on("click", clickLegend(cText));

        //Non visible white rectangle behind square and text for better hover
        legend.append('rect')
            .attr('width', maxWidth)
            .attr('height', rowHeight)
            .style('fill', "white");
        //Append small squares to Legend
        legend.append('rect')
            .attr('width', rectSize)
            .attr('height', rectSize)
            .style('fill', function(d) {
                return d;
            });
        //Append text to Legend
        legend.append('text')
            .attr('transform', 'translate(' + 22 + ',' + (rectSize / 2) + ')')
            .attr("class", "legendText")
            .style("font-size", "10px")
            .attr("dy", ".35em")
            .text(function(d, i) {
                return color.domain()[i];
            });

        //Create g element for bubble size legend
        var bubbleSizeLegend = legendWrapper.append("g")
            .attr("transform", "translate(" + (legendWidth / 2 - 30) + "," + (color.domain().length * rowHeight + 20) + ")");
        //Draw the bubble size legend
        bubbleLegend(bubbleSizeLegend, rScale, legendSizes = [-30, 40, 200], legendName = "Possession Score");
    } //if !mobileScreen
    else {
        d3.select("#legend").style("display", "none");
    }
}

drawGraph('AttackScore', 'DefenceScore', 'PossessionScore', 'League');

//////////////////////////////////////////////////////
////////////////// Selection Change //////////////////
//////////////////////////////////////////////////////
function setGraph() {
    drawGraph($('#x-value').val(), $('#y-value').val(), $('#r-value').val(), $('#c-value').val());
}

//////////////////////////////////////////////////////
/////////////////// Bubble Legend ////////////////////
//////////////////////////////////////////////////////

function bubbleLegend(wrapperVar, scale, sizes, titleName) {

        var legendSize1 = sizes[0],
            legendSize2 = sizes[1],
            legendSize3 = sizes[2],
            legendCenter = 0,
            legendBottom = 50,
            legendLineLength = 25,
            textPadding = 5,
            numFormat = d3.format(",");

        wrapperVar.append("text")
            .attr("class", "legendTitle")
            .attr("transform", "translate(" + legendCenter + "," + 0 + ")")
            .attr("x", 0 + "px")
            .attr("y", 0 + "px")
            .attr("dy", "1em")
            .text(titleName);

        wrapperVar.append("circle")
            .attr('r', scale(legendSize1))
            .attr('class', "legendCircle")
            .attr('cx', legendCenter)
            .attr('cy', (legendBottom - scale(legendSize1)));
        wrapperVar.append("circle")
            .attr('r', scale(legendSize2))
            .attr('class', "legendCircle")
            .attr('cx', legendCenter)
            .attr('cy', (legendBottom - scale(legendSize2)));
        wrapperVar.append("circle")
            .attr('r', scale(legendSize3))
            .attr('class', "legendCircle")
            .attr('cx', legendCenter)
            .attr('cy', (legendBottom - scale(legendSize3)));

        wrapperVar.append("line")
            .attr('class', "legendLine")
            .attr('x1', legendCenter)
            .attr('y1', (legendBottom - 2 * scale(legendSize1)))
            .attr('x2', (legendCenter + legendLineLength))
            .attr('y2', (legendBottom - 2 * scale(legendSize1)));
        wrapperVar.append("line")
            .attr('class', "legendLine")
            .attr('x1', legendCenter)
            .attr('y1', (legendBottom - 2 * scale(legendSize2)))
            .attr('x2', (legendCenter + legendLineLength))
            .attr('y2', (legendBottom - 2 * scale(legendSize2)));
        wrapperVar.append("line")
            .attr('class', "legendLine")
            .attr('x1', legendCenter)
            .attr('y1', (legendBottom - 2 * scale(legendSize3)))
            .attr('x2', (legendCenter + legendLineLength))
            .attr('y2', (legendBottom - 2 * scale(legendSize3)));

        wrapperVar.append("text")
            .attr('class', "legendText")
            .attr('x', (legendCenter + legendLineLength + textPadding))
            .attr('y', (legendBottom - 2 * scale(legendSize1)))
            .attr('dy', '0.25em')
            .text(numFormat(Math.round(legendSize1)));
        wrapperVar.append("text")
            .attr('class', "legendText")
            .attr('x', (legendCenter + legendLineLength + textPadding))
            .attr('y', (legendBottom - 2 * scale(legendSize2)))
            .attr('dy', '0.25em')
            .text(numFormat(Math.round(legendSize2)));
        wrapperVar.append("text")
            .attr('class', "legendText")
            .attr('x', (legendCenter + legendLineLength + textPadding))
            .attr('y', (legendBottom - 2 * scale(legendSize3)))
            .attr('dy', '0.25em')
            .text(numFormat(Math.round(legendSize3)));

    } //bubbleLegend

///////////////////////////////////////////////////////////////////////////
//////////////////// Hover function for the legend ////////////////////////
///////////////////////////////////////////////////////////////////////////

//Decrease opacity of non selected circles when hovering in the legend  
function selectLegend(opacity) {
        return function(d, i) {
            var chosen = color.domain()[i];
            wrapper.selectAll(".clubs")
                .filter(function(d) {
                    return d[cText] != chosen;
                })
                .transition()
                .style("opacity", opacity);
        };
    } //function selectLegend

///////////////////////////////////////////////////////////////////////////
///////////////////// Click functions for legend //////////////////////////
///////////////////////////////////////////////////////////////////////////

//Function to show only the circles for the clicked sector in the legend
function clickLegend(cText) {
        return function(d, i) {
            event.stopPropagation();

            //deactivate the mouse over and mouse out events
            d3.selectAll(".legendSquare")
                .on("mouseover", null)
                .on("mouseout", null);

            //Chosen legend item
            var chosen = color.domain()[i];

            //Only show the circles of the chosen sector
            wrapper.selectAll(".clubs")
                .style("opacity", opacityCircles)
                .style("visibility", function(d) {
                    if (d[cText] != chosen) {
                        return "hidden";
                    } else {
                        return "visible";
                    }
                });

            //Make sure the pop-ups are only shown for the clicked on legend item
            wrapper.selectAll(".voronoi")
                .on("mouseover", function(d, i) {
                    if (d[cText] != chosen) {
                        return null;
                    } else {
                        return showTooltip.call(this, d, i);
                    }
                })
                .on("mouseout", function(d, i) {
                    if (d[cText] != chosen) return null;
                    else return removeTooltip.call(this, d, i);
                });
        };
    } //sectorClick

//Show all the cirkels again when clicked outside legend
function resetClick() {

        //Activate the mouse over and mouse out events of the legend
        d3.selectAll(".legendSquare")
            .on("mouseover", selectLegend(0.02))
            .on("mouseout", selectLegend(opacityCircles));

        //Show all circles
        wrapper.selectAll(".clubs")
            .style("opacity", opacityCircles)
            .style("visibility", "visible");

        //Activate all pop-over events
        wrapper.selectAll(".voronoi")
            .on("mouseover", showTooltip)
            .on("mouseout", function(d, i) {
                removeTooltip.call(this, d, i);
            });

    } //resetClick

//Reset the click event when the user clicks anywhere but the legend
d3.select("#chart").on("click", resetClick);

///////////////////////////////////////////////////////////////////////////
/////////////////// Hover functions of the circles ////////////////////////
///////////////////////////////////////////////////////////////////////////

//Hide the tooltip when the mouse moves away
function removeTooltip(d, i) {

        //Save the chosen circle (so not the voronoi)
        var element = d3.selectAll(".clubs." + d.ClubCode);

        //Fade out the bubble again
        element.style("opacity", opacityCircles);

        //Hide tooltip
        $('.popover').each(function() {
            $(this).remove();
        });

        //Fade out guide lines, then remove them
        d3.selectAll(".guide")
            .transition().duration(200)
            .style("opacity", 0)
            .remove();

    } //function removeTooltip

//Show the tooltip on the hovered over slice
function showTooltip(d, i) {
        //Save the chosen circle (so not the voronoi)
        var highlightElement = d3.selectAll(".clubs." + d.ClubCode);
        var element = d3.selectAll(".clubs." + d.ClubCode + "." + d.UniqueName)

        //Define and show the tooltip
        $(element).popover({
            placement: 'auto top',
            container: '#chart',
            trigger: 'manual',
            html: true,
            content: function() {
                return "<span style='font-size: 11px; text-align: center;'>" + d.Club + "</span>" + "<br>" + "<span style='font-size: 11px; text-align: center;'>" + d.Season + "</span>";
            }
        });
        $(element).popover('show');

        //Make chosen circle more visible
        highlightElement.style("opacity", 1);

        //Append lines to bubbles that will be used to show the precise data points
        //vertical line
        wrapper.append("g")
            .attr("class", "guide")
            .append("line")
            .attr("x1", element.attr("cx"))
            .attr("x2", element.attr("cx"))
            .attr("y1", +element.attr("cy"))
            .attr("y2", (height))
            .style("stroke", element.style("fill"))
            .style("opacity", 0)
            .style("pointer-events", "none")
            .transition().duration(200)
            .style("opacity", 0.5);
        //horizontal line
        wrapper.append("g")
            .attr("class", "guide")
            .append("line")
            .attr("x1", +element.attr("cx"))
            .attr("x2", 0)
            .attr("y1", element.attr("cy"))
            .attr("y2", element.attr("cy"))
            .style("stroke", element.style("fill"))
            .style("opacity", 0)
            .style("pointer-events", "none")
            .transition().duration(200)
            .style("opacity", 0.5);

    } //function showTooltip

jQuery(function ($) {
    // init the state from the input
    $(".image-checkbox").each(function () {
        if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
            $(this).addClass('image-checkbox-checked');
        }
        else {
            $(this).removeClass('image-checkbox-checked');
        }
    });

    // sync the state to the input
    $(".image-checkbox").on("click", function (e) {
        if ($(this).hasClass('image-checkbox-checked')) {
            $(this).removeClass('image-checkbox-checked');
            $(this).find('input[type="checkbox"]').first().removeAttr("checked");
        }
        else {
            $(this).addClass('image-checkbox-checked');
            $(this).find('input[type="checkbox"]').first().attr("checked", "checked");
        }
        e.preventDefault();
    });
});

//iFrame handler
var pymChild = new pym.Child();
pymChild.sendHeight()
setTimeout(function() {
    pymChild.sendHeight();
}, 5000);