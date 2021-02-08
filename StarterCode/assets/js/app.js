var svgWidth = parseInt(d3.select('#scatter').style('width')) * 3;
var svgHeight = svgWidth - svgWidth/2;
var margin = {top:10, right:10, bottom:10, left:20};
var width = svgWidth * .75;
var height = svgHeight * .75;


var svg = d3
    .select("#scatter")
    .append("svg")
    .attr('class', 'chart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.select(".chart")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


