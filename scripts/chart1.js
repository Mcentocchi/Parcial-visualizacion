const mapaFetch = d3.json('barrios-caba.geojson')
const dataFetch = d3.dsv(';', "../data/147_desratizacion_muchos_anios.csv", d3.autoType)

d3.dsv(';','../data/147_desratizacion_muchos_anios.csv', d3.autoType).then(data => {
  console.log(data)
  let datosFiltrados = data.filter(d => d.anio==2019 )
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true,
      label:"Cantidad de denuncias",
    },

    marks: [
      Plot.barY(datosFiltrados, Plot.groupX({y: "count"}, {x: "estacion", fill: "blue"})),
      Plot.ruleY([0])
    ]
  })
  d3.select("#chart1")
  .append('h4')
  .text('Cantidad de denuncias por estación en el año 2019')
  // Agregamos chart al div#chart de index.html
  d3.select('#chart1').append(() => chart)
})