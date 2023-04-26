d3.dsv(';', '../data/147_desratizacion_muchos_anios.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    let chart = Plot.plot({
        x: {
            legend : false,
            ticks :2,
            label:"año",
          },
      y: {
        grid: true,
        label: "Cantidad de denuncias",
        domain: [0,12500] // Aquí se establece el dominio del eje y del gráfico para que muestre valores de y a partir de 6000
        //limitamos y 
    },
  
      marks: [
        Plot.areaY(data, Plot.groupX({y: "count"}, {x: "anio",fill: "Red",fillOpacity: 0.7})),
        Plot.ruleY([0]),
      ]
    })
    d3.select("#chart5")
    .append('h4')
    .text('Denuncias totales por año')
    // Agregamos chart al div#chart de index.html
    d3.select('#chart5').append(() => chart)
  })