let chart
d3.csv('data/data2000.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'life_expect',
        r: 'pop',
        fill: 'cluster',
        opacity: 0.4,
      }),
      Plot.text(data, {
        x: 'fertility',
        y: 'life_expect',
        text: d => (d.pop > 100000000 ? d.country : ''),
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  d3.select('#chart_3').append(() => chart)
})
