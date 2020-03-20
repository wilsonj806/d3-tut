# Intro To D3
D3 is a document manipulation library that lets you modify your HTML based on your data. It's actually important to distinguish between a data visualization library and what D3 refers itself as, a data driven document manipulation library. The reason being that, rather than having it's own custom API that generates a data visualization, D3 emphasizes that everything D3 does is web standard compliant, which means that while it might be obtuse to wrap your head around, you can easily check and manipulate the output.

## Selector API
So with vanilla JS, we use `querySelector()` to select DOM nodes and then manipulate them, but this is quite verbose and tedious.
```js
  const pEle = document.querySelector('p')
  pEle.style.setProperty('color', 'blue', null)

  const pEles = document.getElementsByTagName('p')
  pEles.forEach(p => {
    p.style.setProperty('color', 'blue', null)
  })
```
In D3 the above becomes:
```js
  import d3 from 'd3'

  d3.select('p.singleP').style('color', 'blue')

  d3.selectAll('p').style('background', 'pink')
```

## Data Binding
This should look quite a bit like jQuery, except we can compute our properties with *functions of data*. This is super simple, but super powerful and is how `d3.geoPath` works.

For example, to randomly color paragraphs, we can use:
```js
  d3.selectAll("p").style("color", function() {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
  });
```

We can also bind and pass our data around to render it! It goes like so:
```js
d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(dataNode) { return dataNode + "px"; });
```

## Entering and Exiting
We can also dynamically add DOM nodes to our selected DOM elements like in normal JavaScript. This is done using the `enter()` and `exit()` methods like so:
```js
d3.select("ctr-d3--intro")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });
```