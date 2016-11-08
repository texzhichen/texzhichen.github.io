var TeamList=new Array(5);
var TeamExample=["Real Madrid","Bacerlona","Atletico Madrid", "Bayern Munchen","Arsenal"];//Team example  球队例子
var AttrExample=["NetWorth","TotalMarketValue"];//Attribute example   属性例子


d3.tsv("data/data.tsv", function(error, data) {
  if (error) throw error;

  //Coerce the data to numbers.
  	

  data.forEach(function(d)
  {
    TeamList[d.Number-1]=new Object();
	TeamList[d.Number-1].Name=d.Name;
    // console.log(TeamList[d.Number-1].Name);
	TeamList[d.Number-1].TotalMarketValue=+d.TotalMarketValue;
    TeamList[d.Number-1].NetWorth=+d.NetWorth;
    TeamList[d.Number-1].Place=d.Number-1;
    console.log(TeamList[d.Number-1].Place);
    console.log(TeamList[d.Number-1].Name);
    
  })


console.log(TeamList);
console.log(TeamList.length);
var tree = {
    name: "tree"
};

 tree.children=new Array(TeamExample.length);
 selectTeams(TeamExample,AttrExample);
var width = innerWidth-40,
    height = innerHeight-40,
    color = d3.scale.category20c(),
    div = d3.select("body").append("div")
       .style("position", "relative");

var treemap = d3.layout.treemap()
    .size([width, height])
    .sticky(true)
    .value(function(d) { return d.size; });
 
var node = div.datum(tree).selectAll(".node")
      .data(treemap.nodes)
    .enter().append("div")
      .attr("class", "node")
      .call(position)
      .style("background-color", function(d) {
          return d.name == 'tree' ? '#fff' : color(d.name); })
      .append('div')
      .style("font-size", function(d) {
          // compute font size based on sqrt(area)
          return Math.max(20, 0.18*Math.sqrt(d.area))+'px'; })
      .text(function(d) { return d.children ? null : d.name; });
 
function position()
{
  this.style("left", function(d) { return d.x + "px"; })
      .style("top", function(d) { return d.y + "px"; })
      .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
      .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
}



function selectTeams(_inputTeam,_inputAttr) //input  teams[] and attributes[] here  传入 队名[]属性[]
{
	for(var i=0;i<_inputTeam.length;i++)
	{
        console.log(_inputTeam.length);
        console.log(_inputTeam[i]);        
        var Place=searchTeam(_inputTeam[i]); //search the input teams
        console.log(Place);
        console.log(TeamList[Place].Name);
        tree.children[i]=new Object();
        tree.children[i].name=TeamList[Place].Name;
        tree.children[i].size=0;
        for(var j=0;j<_inputAttr.length;j++)
        {
            tree.children[i].size+=returnAttrs(TeamList[Place],_inputAttr[j]); //sum value of attributes 计算总分
            
            tree.children[i].name=tree.children[i].name+"+"+returnAttrs(TeamList[Place],_inputAttr[j]);
        }
        console.log(tree.children[i].size);
	}
}

function searchTeam(_inputTeamName) //search input team
{
    for(var i=0;i<TeamList.length;i++)
    {
        
        if(TeamList[i].Name==_inputTeamName)
        {
        //    console.log(i);
            return i;
            break;
        }
    }
    
}
function returnAttrs(in_putTeam,_inputAttr) //get value of attributes
{
    switch(_inputAttr)
    {
        case "NetWorth":
            return in_putTeam.NetWorth;
            break;
        case "TotalMarketValue":
            return in_putTeam.TotalMarketValue;
            break;
        default:
        break;
    }
}




}
)

