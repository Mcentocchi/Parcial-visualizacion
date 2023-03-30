d3.csv('data/data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    width: 600,
    height: 200,
    line: true,
    nice: true,
    zero: true,
    grid: true,
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'cluster',
        fillOpacity: 0.6,
        symbol: 'square',
      }),
    ],
  })
  d3.select('#chart_1').append(() => chart)
})
