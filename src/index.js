
d3.select('p.singleP').style('color', 'blue')
d3.selectAll('p').style('background', 'pink')

d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .style(
      "font-size",
      (dataNode) => dataNode + "px"
    );

d3.select("section#ctr-d3--intro")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .enter().append("p")
      .text(function(d) { return "I’m number " + d + "!"; });
