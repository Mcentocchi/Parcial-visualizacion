const mapaFetch = d3.json('barrios-caba.geojson')
const dataFetch = d3.dsv(';', "147_desratizacion_muchos_anios.csv", d3.autoType)

// Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
//   let datosFiltrados = data.filter(d => d.periodo==202109 )
//   /* Mapa Coroplético */
//   let chartMap = Plot.plot({
//     // https://github.com/observablehq/plot#projection-options
//     projection: {
//       type: 'mercator',
//       domain: barrios, // Objeto GeoJson a encuadrar
//     },
//     color: {
//       scheme: 'ylorbr',
//     },
//     marks: [
//       Plot.density(datosFiltrados, { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
//       Plot.geo(barrios, {
//         stroke: 'gray',
//         title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
//       }),
//     ],
//   })

//   /* Agregamos al DOM la visualización chartMap */
//   d3.select('#chart').append(() => chartMap)
// })


d3.dsv(';','147_desratizacion_muchos_anios.csv', d3.autoType).then(data => {
  console.log(data)
  
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    y: {
      grid: true
    },

    marks: [
      Plot.barY(data, Plot.groupX({y: "count"}, {x: "estacion", fill: "blue"})),
      Plot.ruleY([0])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})

d3.dsv(';','147_desratizacion_muchos_anios.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart2 = Plot.plot({
    y: {
      grid: true,
      domain: [6000,12500]
    },

    marks: [
      Plot.areaY(data, Plot.groupX({y: "count"}, {x: "anio",fill: "Red",fillOpacity: 0.7})),
      Plot.ruleY([0])
    ]
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart2').append(() => chart2)
})





d3.json('https://cdn.jsdelivr.net/npm/d3-time-format@3/locale/es-ES.json').then(locale => {
  d3.timeFormatDefaultLocale(locale)
})



Promise.all([mapaFetch, dataFetch]).then(([barrios, data]) => {
  let datosFiltrados = data.filter(d => d.anio==2019 )
  /* Mapa Coroplético */
  let chartMap = Plot.plot({
    // https://github.com/observablehq/plot#projection-options
    projection: {
      type: 'mercator',
      domain: barrios, // Objeto GeoJson a encuadrar
    },
    color: {
      scheme: 'ylorbr',
    },
    marks: [
      Plot.density(data, { x: 'lon', y: 'lat', fill: 'density',bandwidth: 2, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
    facet: {
      data: data,
      x: d => d.estacion,
      y: d => d.anio
    },
    fx: {
      domain: ['verano', 'otoño', 'primavera', 'invierno']
    },
    
    width: 1000
  })

  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart').append(() => chartMap)
})
