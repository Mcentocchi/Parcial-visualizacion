const mapaFetch3 = d3.json('../barrios-caba.geojson')
const dataFetch3 = d3.dsv(';', "../data/147_desratizacion_muchos_anios.csv", d3.autoType)



d3.json('https://cdn.jsdelivr.net/npm/d3-time-format@3/locale/es-ES.json').then(locale => {
  d3.timeFormatDefaultLocale(locale)
})



Promise.all([mapaFetch3, dataFetch3]).then(([barrios, data]) => {
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
      Plot.density(data, { x: 'lon', y: 'lat', fill: 'density',bandwidth: 15, thresholds: 30 }),
      Plot.geo(barrios, {
        stroke: 'gray',
        title: d => `${d.properties.BARRIO}\n${d.properties.DENUNCIAS} denuncias`,
      }),
    ],
    facet: {
      data: data,
      x: d => d.anio
    },
    // fx: {
    //   domain: ['verano', 'otoño', 'primavera', 'invierno']
    // },
    
    width: 1000
  })
  d3.select("#chart3")
  .append('h4')
  .text('Progreso anual por estación')
  /* Agregamos al DOM la visualización chartMap */
  d3.select('#chart3').append(() => chartMap)
})







