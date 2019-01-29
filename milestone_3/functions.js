//stampo grafico a linea


function printLineChart(ascissa, ordinata) {

  var mesi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var ctx_ii = $('.line-chart-iii');
  var ctx_iii = $('.pie-chart-iii');
  var ctx_iiii = $('.line-chart-iiii');



  var chart = new Chart(ctx_ii, {
    // The type of chart we want to create
    type: my_data['fatturato']['type'],

    // The data for our dataset
    data: {
      labels: mesi,
      datasets: [{
        label: "Vendite annuali, Milestone III",
        backgroundColor: 'rgb(82, 39, 46, .3)',
        borderColor: 'rgb(82, 39, 46)',
        data: my_data['fatturato']['data'],
      }]
    },

    // Configuration options go here
    options: {}
  });

};


//stampo grafico a torta

function printPieChart() {

  var chart_pie = new Chart(ctx_iii, {
    // The type of chart we want to create
    type: my_data['fatturato_by_agent']['type'],

    // The data for our dataset
    data: {
      labels: agenti,
      datasets: [{
        backgroundColor: ['lightblue', 'rgb(38, 109, 111)', 'rgb(93, 115, 164)', 'rgb(136, 154, 185)'],
        borderColor: ['grey', 'grey', 'grey', 'grey'],
        data: valoriVenditeAgenti,
      }]
    },

    // Configuration options go here
    options: {}
  });

};



//stampo grafico
