d3.csv('data/data2000.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'fertility',
        y: 'life_expect',
        stroke: 'cluster',
        r: 'pop',
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  d3.select('#chart_2').append(() => chart)
})
