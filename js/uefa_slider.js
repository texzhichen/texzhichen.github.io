$("#barchart").slider();
$("#barchart").on("slide", function(slideEvt) {
    $("#barchartval").text("bar chart: " + slideEvt.value);
});

$("#scatterplot").slider();
$("#scatterplot").on("slide", function(slideEvt) {
    $("#scatterplotval").text("scatter plot: " + slideEvt.value);
});

$("#treemap").slider();
$("#treemap").on("slide", function(slideEvt) {
    $("#treemapval").text("tree map: " + slideEvt.value);
});