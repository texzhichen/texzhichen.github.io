var s;

// sunburst
s = "<div class='row'>"
    + "<div class=col-sm-6 id=sunburst></div>"
    + "<div class=col-sm-6 id=intro></div>"
    + "</div>"
$("#chart0").append(s)

drawSunburst("#sunburst")
writeIntro("uefa")


// bar chart
var stringSort = "<div class='row'>"
    + "<div class=col-sm-1><label><input type='checkbox' id='sort'> Sort Values</label></div>"
    + "</div>";
var stringYear = "<div class='row' id='year'>"
    + "<div class=col-sm-1><label><input type='checkbox' id='2013-14'> 2013-14</label></div>"
    + "<div class=col-sm-1><label><input type='checkbox' id='2014-15'> 2014-15</label></div>"
    + "<div class=col-sm-1><label><input type='checkbox' id='2015-16'> 2015-16</label></div>"
    + "<div class=col-sm-1><label><input type='checkbox' id='2016-17' checked> 2016-17</label></div>"
    + "</div>";
var stringAttr = "<div class='row' id='attr'>"
    + "<div class=col-sm-1><label><input name='optradio' type='radio' id='AttackScore' checked> Attack</label></div>"
    + "<div class=col-sm-1><label><input name='optradio' type='radio' id='DefenceScore'> Defence</label></div>"
    + "<div class=col-sm-1><label><input name='optradio' type='radio' id='PossessionScore'> Poseession</label></div>"
    + "<div class=col-sm-1><label><input name='optradio' type='radio' id='SquadValueNum'> Squad Value</label></div>"
    + "</div>";
s = "<div id=barchart0>" + stringSort + stringYear + stringAttr + "</div>";
$("#chart0").append(s)

drawBarChart("#barchart0")
