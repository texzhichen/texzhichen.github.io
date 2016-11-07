var larghezzaChart = 430
var altezzaChart = 335
var primoBound = 80
var secondoBound = 30
var terzoBound = 340
var quartoBound = 200

function title(svg,title) { 

svg.selectAll("title_text")
        .data([title])
        .enter()
        .append("text")
          .attr("x", 10)
          .attr("y", 15)
          .style("font-family", "sans-serif")
          .style("font-size", "16px")
          .style("color", "Black")
          .text(function (d) { return d; });
}
 
      d3.csv("data/dimple_facebook_growth.csv", function (data) {
      var svg01 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg01.attr("id","svg01");
      title(svg01,"scatter matrix")
      var myChart01 = new dimple.chart(svg01, data);
      myChart01.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart01.addCategoryAxis("x", ["growth", "size"]);
      myChart01.addCategoryAxis("y", "macro category");
      myChart01.addSeries("size", dimple.plot.bubble);
      myChart01.addLegend(120, 10, 330, 20, "right");
      myChart01.draw();

      var svg02 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg02.attr("id","svg02");
      title(svg02,"bar matrix")     
      var myChart02 = new dimple.chart(svg02, data);
      myChart02.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart02.addCategoryAxis("x", ["growth", "size"]);
      myChart02.addCategoryAxis("y", "macro category");
      myChart02.addSeries("size", dimple.plot.bar);
      myChart02.addLegend(120, 10, 330, 20, "right");
      myChart02.draw();

      var svg03 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg03.attr("id","svg03");
      title(svg03,"bubbles matrix")
      var myChart03 = new dimple.chart(svg03, data);
      myChart03.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart03.addCategoryAxis("x", ["growth", "size"]);
      myChart03.addCategoryAxis("y", "macro category");
      var z = myChart03.addMeasureAxis("z", "posts");
      var s = myChart03.addSeries("size", dimple.plot.bubble);
      s.aggregate = dimple.aggregateMethod.max;
      z.overrideMax = 300;
      myChart03.addLegend(120, 10, 330, 20, "right")
      myChart03.draw();

      var svg04 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg04.attr("id","svg04");
      title(svg04,"vertical grouped bubbles")
      var myChart04 = new dimple.chart(svg04, data);
      myChart04.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart04.addCategoryAxis("x", ["growth", "size"]);
      myChart04.addMeasureAxis("y", "posts");
      myChart04.addMeasureAxis("z", "talking ratio");
      myChart04.addSeries("size", dimple.plot.bubble);
      myChart04.addLegend(120, 10, 330, 20, "right")
      myChart04.draw();

      var svg05 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg05.attr("id","svg05");
      title(svg05,"horizontal scatter lollipop")
      var myChart05 = new dimple.chart(svg05, data);
      myChart05.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart05.addCategoryAxis("y", ["growth", "size"]);
      myChart05.addMeasureAxis("x", "posts");
      myChart05.addMeasureAxis("z", "talking ratio");
      myChart05.addSeries("size", dimple.plot.bubble);
      myChart05.addLegend(120, 10, 330, 20, "right")
      myChart05.draw();

      var svg06 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg06.attr("id","svg06");
      title(svg06,"bubble scatter")
      var myChart06 = new dimple.chart(svg06, data);
      myChart06.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart06.addMeasureAxis("x", "talking ratio");
      myChart06.addMeasureAxis("y", "posts");
      myChart06.addMeasureAxis("z", "likes");
      myChart06.addSeries(["growth", "size"], dimple.plot.bubble);
      myChart06.addLegend(120, 10, 330, 20, "right");
      myChart06.draw();

    });    

        d3.csv("data/dimple_facebook_month.csv", function (data) {
        var svg07 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg07,"vertical scatter lollipop") 
        svg07.attr("id","svg07")
        var myChart07 = new dimple.chart(svg07, data);
        myChart07.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
        myChart07.addMeasureAxis("x", "talking ratio");
        var y = myChart07.addCategoryAxis("y", "Month");
        y.addOrderRule("Order");
        myChart07.addSeries("size", dimple.plot.bubble);
        myChart07.addLegend(120, 10, 360, 20, "right");
        myChart07.draw();

        var svg08 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
        svg08.attr("id","svg08");
      title(svg08,"horizontal scatter loppipop")
        var myChart08 = new dimple.chart(svg08, data);
        myChart08.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
        var x = myChart08.addCategoryAxis("x", "Month");
        x.addOrderRule("Order");
        myChart08.addMeasureAxis("y", "talking ratio");
        myChart08.addSeries("size", dimple.plot.bubble);
        myChart08.addLegend(120, 10, 360, 20, "right");
        myChart08.draw();
      
      var svg09 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg09.attr("id","svg09");
      title(svg09,"vertical line")
      var myChart09 = new dimple.chart(svg09, data);
      myChart09.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart09.addMeasureAxis("x", "talking ratio");
      var y = myChart09.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      var s = myChart09.addSeries(null, dimple.plot.line);
      myChart09.draw();

      var svg10 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg10.attr("id","svg10");
       title(svg10,"vertical lines")
      var myChart10 = new dimple.chart(svg10, data);
      myChart10.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart10.addMeasureAxis("x", "talking ratio");
      var y = myChart10.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      var s = myChart10.addSeries("size", dimple.plot.line);
      myChart10.addLegend(0, 10, 500, 20, "right");
      myChart10.draw();

      var svg11 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg11.attr("id","svg11");
      title(svg11,"horizontal grouped lines")
      var myChart11 = new dimple.chart(svg11, data);
      myChart11.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var y = myChart11.addCategoryAxis("y", ["size", "Month"]);
      y.addGroupOrderRule("Order");
      myChart11.addMeasureAxis("x", "talking ratio");
      var s = myChart11.addSeries("size", dimple.plot.line);
      s.barGap = 0.05;
      myChart11.draw();

      var svg12 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg12.attr("id","svg12");
      title(svg12,"horizontal line") 
      var myChart12 = new dimple.chart(svg12, data);
      myChart12.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart12.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart12.addMeasureAxis("y", "talking ratio");
      var s = myChart12.addSeries(null, dimple.plot.line);
      myChart12.draw();

      var svg13 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg13.attr("id","svg13");
        title(svg13,"horizontal lines")
      var myChart13 = new dimple.chart(svg13, data);
      myChart13.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart13.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart13.addMeasureAxis("y", "talking ratio");
      var s = myChart13.addSeries("size", dimple.plot.line);
      myChart13.draw();

      var svg14 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg14.attr("id","svg14");
      title(svg14,"horizontal grouped lines")
      var myChart14 = new dimple.chart(svg14, data);
      myChart14.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart14.addCategoryAxis("x", ["size", "Month"]);
      x.addGroupOrderRule("Order");
      myChart14.addMeasureAxis("y", "talking ratio");
      var s = myChart14.addSeries("size", dimple.plot.line);
      s.barGap = 0.05;
      myChart14.draw();

      var svg15 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg15.attr("id","svg15");
      title(svg15,"horizontal line dynamically colored")
      var myChart15 = new dimple.chart(svg15, data);
      myChart15.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart15.addCategoryAxis("x", "Month")
      myChart15.addMeasureAxis("y", "talking ratio");
      x.addOrderRule("Order");
      myChart15.addColorAxis("talking", ["green", "yellow", "red"]);
      var lines = myChart15.addSeries(null, dimple.plot.line); 
      lines.lineWeight = 5;
      lines.lineMarkers = true;
      myChart15.draw();

      var svg16 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg16.attr("id","svg16");
      title(svg16,"horizonal area chart")
      var myChart16 = new dimple.chart(svg16, data);
      myChart16.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart16.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart16.addMeasureAxis("y", "talking ratio");
      var s = myChart16.addSeries(null, dimple.plot.area);
      myChart16.draw();

      var svg17 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg17.attr("id","svg17");
       title(svg17,"vertical area chart")
      var myChart17 = new dimple.chart(svg17, data);
      myChart17.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart17.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart17.addMeasureAxis("x", "talking ratio");
      var s = myChart17.addSeries(null, dimple.plot.area);
      myChart17.draw();

      var svg18 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg18.attr("id","svg18");
      title(svg18,"vertical stacked areas")
      var myChart18 = new dimple.chart(svg18, data);
      myChart18.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart18.addMeasureAxis("x", "talking ratio");
      var y = myChart18.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart18.addSeries("size", dimple.plot.area);
      myChart18.addLegend(120, 10, 360, 20, "right");
      myChart18.draw();

      var svg19 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg19.attr("id","svg19");
      title(svg19,"horizontal stacked areas")
      var myChart19 = new dimple.chart(svg19, data);
      myChart19.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart19.addMeasureAxis("y", "talking ratio");
      var x = myChart19.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart19.addSeries("size", dimple.plot.area);
      myChart19.addLegend(120, 10, 360, 20, "right");
      myChart19.draw();

      var svg20 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg20.attr("id","svg20");
      title(svg20,"horizontal grouped areas I")
      var myChart20 = new dimple.chart(svg20, data);
      myChart20.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var y = myChart20.addCategoryAxis("y", ["size", "Month"]);
      y.addGroupOrderRule("Order");
      myChart20.addMeasureAxis("x", "talking ratio");
      var s = myChart20.addSeries("size", dimple.plot.area);
      s.lineWeight = 1;
      s.barGap = 0.05;
      myChart20.draw();

      var svg21 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg21.attr("id","svg21");
      title(svg21,"vertical grouped areas I")
      var myChart21 = new dimple.chart(svg21, data);
      myChart21.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart21.addCategoryAxis("x", ["size", "Month"]);
      x.addGroupOrderRule("Order");
      myChart21.addMeasureAxis("y", "talking ratio");
      var s = myChart21.addSeries("size", dimple.plot.area);
      s.lineWeight = 1;
      s.barGap = 0.05;
      myChart21.draw();

      var svg22 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg22.attr("id","svg22");
       title(svg22,"vertical areas %")
      data22 = dimple.filterData(data, "size", ["small", "big"])
      var myChart22 = new dimple.chart(svg22, data22);
      myChart22.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart22.addPctAxis("y", "talking");
      var x = myChart22.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart22.addSeries("size", dimple.plot.area);
      myChart22.addLegend(10, 10, 500, 20, "right");
      myChart22.draw();
      
      var svg23 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg23.attr("id","svg23");
       title(svg23,"horizontal areas %")
      data23 = dimple.filterData(data, "size", ["small", "big"])
      var myChart23 = new dimple.chart(svg23, data23);
      myChart23.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart23.addPctAxis("x", "talking");
      var y = myChart23.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart23.addSeries("size", dimple.plot.area);
      myChart23.addLegend(10, 10, 500, 20, "right");
      myChart23.draw();
   
      var svg24 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg24.attr("id","svg24");
       title(svg24,"horizontal bar chart")
      var myChart24 = new dimple.chart(svg24, data);
      myChart24.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart24.addMeasureAxis("x", "talking ratio");
      var y = myChart24.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart24.addSeries(null, dimple.plot.bar);
      myChart24.draw(); 

      var svg25 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg25.attr("id","svg25");
       title(svg25,"vertical bar chart")
      var myChart25 = new dimple.chart(svg25, data);
      myChart25.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart25.addMeasureAxis("y", "talking ratio");
      var x = myChart25.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart25.addSeries(null, dimple.plot.bar);
      myChart25.draw(); 
  
      var svg26 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg26.attr("id","svg26");
       title(svg26,"vertical stacked bars")
      var myChart26 = new dimple.chart(svg26, data);
      myChart26.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart26.addMeasureAxis("x", "talking ratio");
      var y = myChart26.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart26.addSeries("size", dimple.plot.bar);
      myChart26.addLegend(0, 10, 500, 20, "right");
      myChart26.draw();

      var svg27 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg27.attr("id","svg27");
      title(svg27,"horizontal stacked bars")
      var myChart27 = new dimple.chart(svg27, data);
      myChart27.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart27.addMeasureAxis("y", "talking ratio");
      var x = myChart27.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart27.addSeries("size", dimple.plot.bar);
      myChart27.addLegend(0, 10, 500, 20, "right");
      myChart27.addLegend(0, 10, 500, 20, "right");
      myChart27.draw();     
   
      var svg28 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg28.attr("id","svg28");
      title(svg28,"vertical stacked bars %")
      var myChart28 = new dimple.chart(svg28, data);
      myChart28.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart28.addPctAxis("x", "talking ratio");
      var y = myChart28.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart28.addSeries("size", dimple.plot.bar);
      myChart28.addLegend(0, 10, 500, 20, "right");
      myChart28.draw();
   
      var svg29 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg29.attr("id","svg29");
      title(svg29,"horizontal stacked bars %")
      var myChart29 = new dimple.chart(svg29, data);
      myChart29.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart29.addPctAxis("y", "talking ratio");
      var x = myChart29.addCategoryAxis("x", "Month");
      x.addOrderRule("Order");
      myChart29.addSeries("size", dimple.plot.bar);
      myChart29.addLegend(0, 10, 500, 20, "right");
      myChart29.draw();     
 
      var svg30 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg30.attr("id","svg30");
      title(svg30,"horizontal bubbles lollipop")
      data30 = dimple.filterData(data, "Order", [
      "15", "16", "17","18", "19", "20","21", "22", "23", "24","25", "26"]);
      var myChart30 = new dimple.chart(svg30, data30);
      myChart30.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart30.addMeasureAxis("x", "talking ratio");
      var y = myChart30.addCategoryAxis("y", "Month");
      y.addOrderRule("Order");
      myChart30.addMeasureAxis("z", "talking");
      myChart30.addSeries("size", dimple.plot.bubble);
      myChart30.addLegend(120, 10, 360, 20, "right");
      myChart30.draw();

        var svg31 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
        svg31.attr("id","svg31");
      title(svg31,"vertical bubbles lollipop")
        data31 = dimple.filterData(data, "Order", [
        "15", "16", "17","18", "19", "20","21", "22", "23", "24","25", "26"]);
        var myChart31 = new dimple.chart(svg31, data31);
        myChart31.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
        myChart31.addMeasureAxis("y", "talking ratio");
        var x = myChart31.addCategoryAxis("x", "Month");
        x.addOrderRule("Order");
        myChart31.addMeasureAxis("z", "talking");
        myChart31.addSeries("size", dimple.plot.bubble);
        myChart31.addLegend(120, 10, 360, 20, "right");
        myChart31.draw();
    });    

      d3.csv("data/dimple_facebook_size_growth.csv", function (data) {
      var svg32 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
        title(svg32,"vertical grouped bars I")
      svg32.attr("id","svg32");
      var myChart32 = new dimple.chart(svg32, data);
      myChart32.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart32.addCategoryAxis("x", ["size", "growth"]);
      myChart32.addMeasureAxis("y", "talking");
      myChart32.addSeries("growth", dimple.plot.bar);
      myChart32.addLegend(0, 20, 500, 20, "right");
      myChart32.draw();
   
      var svg33 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg33.attr("id","svg33");
       title(svg33,"horizontal grouped bars I")
      var myChart33 = new dimple.chart(svg33, data);
      myChart33.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart33.addCategoryAxis("y", ["size", "growth"]);
      myChart33.addMeasureAxis("x", "talking");
      myChart33.addSeries("growth", dimple.plot.bar);
      myChart33.addLegend(0, 20, 500, 20, "right");
      myChart33.draw(); 
    });

      d3.csv("data/dimple_facebook_size_category.csv", function (data) {
      var svg34 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg34,"vertical grouped bars II")
      svg34.attr("id","svg34");
      var myChart34 = new dimple.chart(svg34, data);
      myChart34.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart34.addCategoryAxis("x", ["size", "growth"]);
      myChart34.addMeasureAxis("y", "talking");
      myChart34.addSeries("macro category", dimple.plot.bar);
      myChart34.addLegend(0, 20, 500, 20, "right");
      myChart34.draw();
    
      var svg35 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg35.attr("id","svg35");
       title(svg35,"horizontal grouped bars II")
      var myChart35 = new dimple.chart(svg35, data);
      myChart35.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart35.addCategoryAxis("y", ["size", "growth"]);
      myChart35.addMeasureAxis("x", "talking");
      myChart35.addSeries("macro category", dimple.plot.bar);
      myChart35.addLegend(0, 20, 500, 20, "right");
      myChart35.draw(); 

      var svg36 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg36.attr("id","svg36")
      title(svg36,"vertical grouped bars % ")
      var myChart36 = new dimple.chart(svg36, data);
      myChart36.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart36.addCategoryAxis("x", ["growth", "size"]);
      myChart36.addPctAxis("y", "talking");
      myChart36.addSeries("macro category", dimple.plot.bar);
      myChart36.addLegend(140, 0, 360, 40, "right");
      myChart36.draw();

      var svg37 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg37.attr("id","svg37")
      title(svg37,"horizontal grouped bars %")
      var myChart37 = new dimple.chart(svg37, data);
      myChart37.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart37.addCategoryAxis("y", ["growth", "size"]);
      myChart37.addPctAxis("x", "talking");
      myChart37.addSeries("macro category", dimple.plot.bar);
      myChart37.addLegend(140, 0, 360, 40, "right");
      myChart37.draw();
});

      d3.csv("data/dimple_facebook_group.csv", function (data) {
      var svg38 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg38,"vertical grouped areas II")
      svg38.attr("id","svg38")
      var myChart38 = new dimple.chart(svg38, data);
      myChart38.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var y = myChart38.addCategoryAxis("y", ["Group", "Month"]);
      y.addGroupOrderRule("Order");
      myChart38.addMeasureAxis("x", "talking ratio");
      var s = myChart38.addSeries(["Page"], dimple.plot.area);
      s.lineWeight = 1;
      s.barGap = 0.05;
      myChart38.addLegend(140, 0, 360, 40, "right");      
      myChart38.draw();
      
      var svg39 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
        title(svg39,"horizontal grouped areas II")
      svg39.attr("id","svg39")
      var myChart39 = new dimple.chart(svg39, data);
      myChart39.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart39.addCategoryAxis("x", ["Group", "Month"]);
      x.addGroupOrderRule("Order");
      myChart39.addMeasureAxis("y", "talking ratio");
      var s = myChart39.addSeries(["Page"], dimple.plot.area);
      s.lineWeight = 1;
      s.barGap = 0.05;
      myChart39.addLegend(140, 0, 360, 40, "right");      
      myChart39.draw();

      var svg40 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg40,"vertical grouped areas II %")
      svg40.attr("id","svg40")
      var myChart40 = new dimple.chart(svg40, data);
      myChart40.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var y = myChart40.addCategoryAxis("y", ["Group", "Month"]);
      y.addGroupOrderRule("Order");
      myChart40.addPctAxis("x", "talking ratio");
      var s = myChart40.addSeries(["Page"], dimple.plot.area);
      s.lineWeight = 1;
      s.barGap = 0.05;
      myChart40.addLegend(140, 0, 360, 40, "right");      
      myChart40.draw();
     
      var svg41 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg41,"horizontal grouped areas II %")
      svg41.attr("id","svg41")
      var myChart41 = new dimple.chart(svg41, data);
      myChart41.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart41.addCategoryAxis("x", ["Group", "Month"]);
      x.addGroupOrderRule("Order");
      myChart41.addPctAxis("y", "talking ratio");
      var s = myChart41.addSeries(["Page"], dimple.plot.area);
      s.lineWeight = 1;
      s.barGap = 0.05;
      myChart41.addLegend(140, 0, 360, 40, "right");      
      myChart41.draw();
    });

      d3.csv("data/dimple_facebook_group.csv", function (data) {
      var svg42 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg42,"horizontal grouped lines II")
      svg42.attr("id","svg42")
      var myChart42 = new dimple.chart(svg42, data);
      myChart42.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart42.addMeasureAxis("x", "talking ratio");
      var y = myChart42.addCategoryAxis("y", ["Group", "Month"]);
      y.addGroupOrderRule("Order");
      var s = myChart42.addSeries(["Page"], dimple.plot.line);
      s.barGap = 0.05;
      myChart42.addLegend(140, 0, 360, 40, "right");      
      myChart42.draw();

      var svg43 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg43,"vertical grouped lines II")
      svg43.attr("id","svg43")
      var myChart43 = new dimple.chart(svg43, data);
      myChart43.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart43.addCategoryAxis("x", ["Group", "Month"]);
      x.addGroupOrderRule("Order");
      myChart43.addMeasureAxis("y", "talking ratio");
      var s = myChart43.addSeries(["Page"], dimple.plot.line);
      s.barGap = 0.05;
      myChart43.addLegend(140, 0, 360, 40, "right");
      myChart43.draw();

      var svg44 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg44,"horizontal marimekko")
      svg44.attr("id","svg44")
      var myChart44 = new dimple.chart(svg44, data);
      myChart44.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart44.addPctAxis("x", "likes");
      var y = myChart44.addAxis("y", "Group", "Page");
      y.showPercent = true;
      myChart44.addSeries("Page", dimple.plot.bar);
      myChart44.addLegend(140, 0, 360, 40, "right");
      myChart44.draw();

      var svg45 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg45,"vertical marimekko")
      svg45.attr("id","svg45")
      var myChart45 = new dimple.chart(svg45, data);
      myChart45.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart45.addAxis("x", "Group", "Page");
      x.showPercent = true;      
      var y = myChart45.addPctAxis("y", "likes");
      x.addOrderRule("Group");
      myChart45.addSeries("Page", dimple.plot.bar);
      myChart45.addLegend(140, 0, 360, 40, "right");
      myChart45.draw();

      var svg46 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg46,"animated marimekko")
      svg46.attr("id","svg46")      
      var myChart46 = new dimple.chart(svg46, data);
      myChart46.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart46.addAxis("x", ["Group", "Page"], "talking ratio");
      x.showPercent = true;
      myChart46.addPctAxis("y", "talking ratio");
      var c = myChart46.addColorAxis("talking ratio");
      c.overrideMin = -10000;
      myChart46.addSeries(["Page", "Group"], dimple.plot.bar);
      myChart46.addLegend(140, 0, 360, 40, "right");
      myChart46.setStoryboard("Month");
      myChart46.draw();
    });

      d3.csv("data/dimple_facebook_matrix.csv", function (data) {
      var svg47 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg47,"marimekko matrix")
      svg47.attr("id","svg47")   
      var myChart47 = new dimple.chart(svg47, data);
      myChart47.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      var x = myChart47.addCategoryAxis("x", "Quarter");
      var y = myChart47.addCategoryAxis("y", "size");
      y.addOrderRule(["small", "medium", "large"]);
      var s = myChart47.addSeries("Hide", dimple.plot.bar);
      myChart47.assignColor("Hide", "#fff", "#fff", 0);
      s.barGap = 0.1;
      s.addEventHandler("mouseover", function (e) {});
      myChart47.draw();
      x.shapes.selectAll("path,line").remove();
      x.titleShape.remove();
      y.shapes.selectAll("path,line").remove();
      y.titleShape.remove();
      s.shapes.each(function (d) {
        var filteredData = dimple.filterData(data, "Quarter", d.xField);
        filteredData = dimple.filterData(filteredData, "size", d.yField);
        var subChart = new dimple.chart(svg47, filteredData);
        var shape = d3.select(this);
        subChart.setBounds(
            parseFloat(shape.attr("x")),
            parseFloat(shape.attr("y")) - parseFloat(shape.attr("height")),
            parseFloat(shape.attr("width")),
            parseFloat(shape.attr("height")));
        var subX = subChart.addAxis("x", "growth", "talking");
        subX.showPercent = true;
        subX.hidden = true;
        var subY = subChart.addPctAxis("y", "talking");
        subX.addOrderRule(["low growth", "medium growth", "high growth"]);
        subY.hidden = true;
        var subS = subChart.addSeries(["macro category", "Quarter", "growth"],
            dimple.plot.bar);
        subChart.draw();
      });
    });

    d3.csv("data/dimple_facebook.csv", function (data) {
      
      var svg48 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg48,"scatter plot")
      svg48.attr("id","svg48")
      var myChart48 = new dimple.chart(svg48, data);
      myChart48.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart48.addMeasureAxis("y", "likes ratio");
      myChart48.addMeasureAxis("x", "engaged ratio");
      var mySeries = myChart48.addSeries(["category", "macro category"], dimple.plot.bubble);
      var myLegend48 =  myChart48.addLegend(120, 0, 360, 40, "Right");       
      myChart48.draw();
      myChart48.legends= []
      var filterValues = dimple.getUniqueValues(data, "macro category");
      myLegend48.shapes.selectAll("rect")
      .on("click", function (e) {
      var hide = false;
      var newFilters = [];
      filterValues.forEach(function (f) {
      if (f === e.aggField.slice(-1)[0]) {
        hide = true;
      } else {
       newFilters.push(f);
        }
      });
      if (hide) {
      d3.select(this).style("opacity", 0.1);
      } else {
      newFilters.push(e.aggField.slice(-1)[0]);
      d3.select(this).style("opacity", 0.8);
      }
      filterValues = newFilters;
      myChart48.data = dimple.filterData(data, "macro category", filterValues);
      myChart49.data = dimple.filterData(data, "macro category", filterValues);
      myChart50.data = dimple.filterData(data, "macro category", filterValues);
      myChart48.draw(800);
      myChart49.draw(800);
      myChart50.draw(800);
      });

      data49 = dimple.filterData(data, "year", "2012");
      var svg49 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      title(svg49,"horizontal grouped scatter")
      svg49.attr("id","svg49")
      var myChart49 = new dimple.chart(svg49, data49);
      myChart49.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart49.addCategoryAxis("x", ["macro category", "category"]);
      myChart49.addMeasureAxis("y", "likes ratio");
      myChart49.addSeries(["category", "macro category"], dimple.plot.bubble);
      myChart49.draw();
    
      var svg50 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
      svg50.attr("id","svg50")
      title(svg50,"vertical grouped scatter")
      var myChart50 = new dimple.chart(svg50, data);
      myChart50.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      myChart50.addCategoryAxis("y", ["macro category", "category"]);
      myChart50.addMeasureAxis("x", "engaged ratio");
      myChart50.addSeries(["category", "macro category"], dimple.plot.bubble); 
      myChart50.draw();
});

    d3.csv("data/dimple_facebook_group_months.csv", function (data) {
    var svg51 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg51,"horizontal grouped scatter with tooltip charts")
    svg51.attr("id","svg51")
    data = dimple.filterData(data, "Group", ["Ferrero", "Fiat Group"]);
    var myChart51 = new dimple.chart(svg51, data);
    var tipChart = null;
    var popup = null;
    myChart51.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
    myChart51.addCategoryAxis("x", "Group");
    myChart51.addMeasureAxis("y", "likes");
    myChart51.addMeasureAxis("z", "talking ratio");
    var s = myChart51.addSeries(["Page", "Group"], dimple.plot.bubble);
    s.addEventHandler("mouseover", onHover);
    s.addEventHandler("mouseleave", onLeave);
    myChart51.draw();
    function onHover(e) {
    var cx = parseFloat(e.selectedShape.attr("cx")),
    cy = parseFloat(e.selectedShape.attr("cy")),
    r = parseFloat(e.selectedShape.attr("r")),
    fill = e.selectedShape.attr("fill"),
    stroke = e.selectedShape.attr("stroke");
    var width = 150,
    height = 100,
    x = (cx + r + width + 10 < svg51.attr("width") ?
    cx + r + 10 :
    cx - r - width - 20);
    y = (cy - height / 2 < 0 ?
    15 :
    cy - height / 2);
    var popupFillColor = d3.rgb(
    d3.rgb(fill).r + 0.8 * (255 - d3.rgb(fill).r),
    d3.rgb(fill).g + 0.8 * (255 - d3.rgb(fill).g),
    d3.rgb(fill).b + 0.8 * (255 - d3.rgb(fill).b)
    );
    popup = svg51.append("g");
    popup
      .append("rect")
      .attr("x", x + 5)
      .attr("y", y - 5)
      .attr("width", width)
      .attr("height", height)
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", popupFillColor)
      .style("stroke", stroke)
      .style("stroke-width", 2);
    popup
      .append("text")
      .attr("x", x + 10)
      .attr("y", y + 10)
      .text(e.seriesValue[0])
      .style("font-family", "sans-serif")
      .style("font-size", 10)
      .style("fill", stroke);
    var hoverData = dimple.filterData(data, "Group", e.xValue);
        hoverData = dimple.filterData(hoverData, "Page", e.seriesValue);
        tipChart = new dimple.chart(svg51,  hoverData);
        tipChart.setBounds(x + 10, y + 30, width - 10, height - 40);
        tipChart.addCategoryAxis("x", "Month").hidden = true;
        tipChart.addMeasureAxis("y", "talking").hidden = true;
    var popUpSeries = tipChart.addSeries("SelectedSeries", dimple.plot.area);
        popUpSeries.barGap = 0.8;
        tipChart.assignColor("SelectedSeries", stroke, stroke);
        tipChart.draw();
            };
           function onLeave(e) {
        if (tipChart !== null) {
          tipChart._group.remove();
        }
        if (popup !== null) {
          popup.remove();
        }
      };
     });

    d3.csv("data/dimple_facebook_group_months.csv", function (data) {
    var svg52 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
    svg52.attr("id","svg52")
      title(svg52,"vertical grouped scatter with tooltip charts")
    data = dimple.filterData(data, "Group", ["Ferrero", "Fiat Group"]);
    var myChart52 = new dimple.chart(svg52, data);
    var tipChart = null;
    var popup = null;
    myChart52.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
    myChart52.addCategoryAxis("y", "Group");
    myChart52.addMeasureAxis("x", "likes");
    myChart52.addMeasureAxis("z", "talking ratio");
    var s = myChart52.addSeries(["Page", "Group"], dimple.plot.bubble);
    s.addEventHandler("mouseover", onHover);
    s.addEventHandler("mouseleave", onLeave);
    myChart52.draw();
    function onHover(e) {
    var cx = parseFloat(e.selectedShape.attr("cx")),
    cy = parseFloat(e.selectedShape.attr("cy")),
    r = parseFloat(e.selectedShape.attr("r")),
    fill = e.selectedShape.attr("fill"),
    stroke = e.selectedShape.attr("stroke");
    var width = 150,
    height = 100,
    x = (cx + r + width + 10 < svg52.attr("width") ?
    cx + r + 10 :
    cx - r - width - 20);
    y = (cy - height / 2 < 0 ?
    15 :
    cy - height / 2);
    var popupFillColor = d3.rgb(
    d3.rgb(fill).r + 0.8 * (255 - d3.rgb(fill).r),
    d3.rgb(fill).g + 0.8 * (255 - d3.rgb(fill).g),
    d3.rgb(fill).b + 0.8 * (255 - d3.rgb(fill).b)
    );
    popup = svg52.append("g");
    popup
      .append("rect")
      .attr("x", x + 5)
      .attr("y", y - 5)
      .attr("width", width)
      .attr("height", height)
      .attr("rx", 5)
      .attr("ry", 5)
      .style("fill", popupFillColor)
      .style("stroke", stroke)
      .style("stroke-width", 2);
    popup
      .append("text")
      .attr("x", x + 10)
      .attr("y", y + 10)
      .text(e.seriesValue[0])
      .style("font-family", "sans-serif")
      .style("font-size", 10)
      .style("fill", stroke);
    var hoverData = dimple.filterData(data, "Group", e.yValue);
        hoverData = dimple.filterData(hoverData, "Page", e.seriesValue);
        tipChart = new dimple.chart(svg52,  hoverData);
        tipChart.setBounds(x + 10, y + 30, width - 10, height - 40);
        tipChart.addCategoryAxis("x", "Month").hidden = true;
        tipChart.addMeasureAxis("y", "talking").hidden = true;
    var popUpSeries = tipChart.addSeries("SelectedSeries", dimple.plot.area);
        popUpSeries.barGap = 0.8;
        tipChart.assignColor("SelectedSeries", stroke, stroke);
        tipChart.draw();
            };
           function onLeave(e) {
        if (tipChart !== null) {
          tipChart._group.remove();
        }
        if (popup !== null) {
          popup.remove();
        }
      };
     });
  
    d3.tsv("data/trevis.txt", function (data) {
      var svg53 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg53,"small multiples")
      svg53.attr("id","svg53")
      var months = dimple.getUniqueValues(data, "Date");
      var row = 0,
          col = 0,
          top = 15,
          left = 70,
          inMarg = 15,
          width = 90,
          height = 75,
          totalWidth = parseFloat(svg53.attr("width"));

      months = months.slice(months.length - 12);
      months.forEach(function (month) {
          if (left + ((col + 1) * (width + inMarg)) > totalWidth) {
            row += 1;
            col = 0;
          }
          var chartData = dimple.filterData(data, "Date", month);
          svg53
            .append("text")
                .attr("x", left + (col * (width + inMarg)) + (width / 2))
                .attr("y", top + (row * (height + inMarg)) + (height / 2) + 12)
                .style("font-family", "sans-serif")
                .style("text-anchor", "middle")
                .style("font-size", "28px")
                .style("opacity", 0.2)
                .text(chartData[0].Month.substring(0, 3));
          var myChart53 = new dimple.chart(svg53, chartData);
          myChart53.setBounds(
            left + (col * (width + inMarg)),
            top + (row * (height + inMarg)),
            width,
            height);
          var x = myChart53.addCategoryAxis("x", "macro category");
          x.addOrderRule(["stars", "media", "food",
            "retail", "fashion", "cars", "other"]);
          var y = myChart53.addMeasureAxis("y", "talking");
          y.overrideMax = 350000;
          myChart53.addSeries(["Month", "macro category"], dimple.plot.bar);
          myChart53.draw();
          if (col > 0) {
            y.shapes.selectAll("text").remove();
          }
          if (row < 2) {
             x.shapes.selectAll("text").remove();
          }
          y.titleShape.remove();
          x.titleShape.remove();
          col += 1;

      }, this);
    });
        d3.tsv("data/price_range.txt", function (data) {
        var svg54 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg54,"dynamic price range")
        svg54.attr("id","svg54")
        var myChart54 = new dimple.chart(svg54, data);
        myChart54.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
        var x = myChart54.addCategoryAxis("x", "macro category");
        var y1 = myChart54.addMeasureAxis("y", "ratio");
        var y2 = myChart54.addMeasureAxis("y", "fans");
        x.addOrderRule("fans", true);
        myChart54.assignColor("sales", "#222222", "#000000", 0.1);
        myChart54.addSeries("sales", dimple.plot.bar, [x, y2]);
        var min = myChart54.addSeries("Min", dimple.plot.bubble, [x, y1]);
        min.aggregate = dimple.aggregateMethod.min;
        var avg = myChart54.addSeries("Avg", dimple.plot.bubble, [x, y1]);
        avg.aggregate = dimple.aggregateMethod.avg;
        var max = myChart54.addSeries("Max", dimple.plot.bubble, [x, y1]);
        max.aggregate = dimple.aggregateMethod.max;
        myChart54.setStoryboard("Date");
        myChart54.draw();
      });

    d3.tsv("data/storyboard.txt", function (data) {
    var svg55 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
            svg55.attr("id","svg55")
       title(svg55,"animated scatter matrix")
      var indicator = new dimple.chart(svg55, data);
      var defaultColor = indicator.defaultColors[0];
      var indicatorColor = indicator.defaultColors[2];
      var frame = 3000;
      indicator.setBounds(384, 49, 100, 211);
      var y = indicator.addCategoryAxis("y", "Month");
      y.addOrderRule("Date", "Desc");
      var x = indicator.addMeasureAxis("x", "ratio");
      x.hidden = true;
      var s = indicator.addSeries(null, dimple.plot.bar);
      s.addEventHandler("click", onClick);
      indicator.draw();
      y.titleShape.remove();
      y.shapes.selectAll("line,path").remove();
      y.shapes.selectAll("text")
        .style("text-anchor", "start")
        .style("font-size", "11px")
        .attr("transform", "translate(18, 0.5)");
      svg55.selectAll("title_text")
        .data(["Click bar to select",
          "and pause. Click again",
          "to resume animation"])
        .enter()
        .append("text")
          .attr("x", 384)
          .attr("y", function (d, i) { return 15 + i * 12; })
          .style("font-family", "sans-serif")
          .style("font-size", "10px")
          .style("color", "Black")
          .text(function (d) { return d; });
      s.shapes
          .attr("rx", 10)
          .attr("ry", 10)
          .style("fill", defaultColor.fill)
          .style("stroke", defaultColor.stroke)
          .style("opacity", 0.4);
      svg55.selectAll("rect.May-12")
          .style("fill", indicatorColor.fill)
          .style("stroke", indicatorColor.stroke);
      var bubbles = new dimple.chart(svg55, data);
      bubbles.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
      bubbles.addMeasureAxis("x", "likes");
      bubbles.addMeasureAxis("y", "talking");
      bubbles.addSeries(["Page", "group", "dimension"], dimple.plot.bubble)
      bubbles.addLegend(60, 10, 300, 20);
      var story = bubbles.setStoryboard("Month", onTick);
      story.frameDuration = frame;
      story.addOrderRule("Date");
      bubbles.draw();
      bubbles.legends = [];
      story.storyLabel.remove();
      function onClick(e) {
        story.pauseAnimation();
        if (e.yValue === story.getFrameValue()) {
          story.startAnimation();
        } else {
          story.goToFrame(e.yValue);
          story.pauseAnimation();
        }
      }
      function onTick(e) {
        s.shapes
          .transition()
            .duration(frame / 2)
            .style("fill", defaultColor.fill)
            .style("stroke", defaultColor.stroke);
        svg55.selectAll("rect." + e)
          .transition()
            .duration(frame / 2)
            .style("fill", indicatorColor.fill)
            .style("stroke", indicatorColor.stroke);
      }
   
    });

 d3.tsv("data/dimple_facebook_waterfall.txt", function (error, data) {
        data.forEach(function(d) {
        d.value = +d.value;
          });
        var yMin = 0,
        yMax = 4e8,
        xLabel = "Bar",
        yLabel = "Value";
    var svg56 = dimple.newSvg("#chartContainer", larghezzaChart, altezzaChart);
       title(svg56,"waterfall")
    svg56.attr("id","svg56")
    var waterfallData = [];
    var runningTotal = 0;
    var padBase = Math.abs(yMin);
    data.forEach(function (d, i) {
      waterfallData.push({
        x: i,
        y: padBase
          + (d.type === "var" ? runningTotal : 0)
          + (d.value < 0 ? d.value : 0),
        series: "pad" });
      waterfallData.push({
        x: i,
        y: Math.abs(d.value),
        series: (d.type === "bar" ?
          "bar" : (d.value < 0 ?
          "negative" : "positive")) });
        runningTotal = (d.type === "var" ? runningTotal : 0) + d.value;
    });
    var myChart56 = new dimple.chart(svg56, waterfallData);
    myChart56.setBounds(primoBound, secondoBound,terzoBound, quartoBound);
    var x = myChart56.addCategoryAxis("x", "x");
    x.addOrderRule("x");
    var y1 = myChart56.addMeasureAxis("y", yLabel);
    y1.overrideMin = padBase * -1;
    y1.overrideMax = yMax;
    var y2 = myChart56.addMeasureAxis("y", "y");
    y2.overrideMin = 0;    
    y2.overrideMax = padBase + yMax;
    y2.hidden = true;
    var s = myChart56.addSeries(["series"], dimple.plot.bar, [x, y2]);
    myChart56.assignColor("bar", myChart56.defaultColors[0].fill);
    myChart56.assignColor("negative", myChart56.defaultColors[1].fill);
    myChart56.assignColor("positive", myChart56.defaultColors[3].fill);
    myChart56.draw();
    x.titleShape.remove();
    y1.titleShape.remove();
    x.shapes.selectAll("text").text(function (d) {
      return (d === "" ? "" : data[parseInt(d)].label);
    });
    svg56.selectAll(".pad").remove();
    s.y.measure = yLabel;
    s.x.categoryFields = [xLabel];
    s.categoryFields = [];
    s.shapes.each(function (d) {
      var j = parseInt(d.xField[0]);
      d.xField[0] = data[j].label;
      d.height = data[j].value;
    });
  });

