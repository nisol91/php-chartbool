
$(document).ready(function() {


  $.ajax({
    url: 'http://localhost/advanced_charts/server_2.php',
    method: 'GET',
    success: function (data) {

      //rendo i dati leggibili da js
      var my_data = JSON.parse(data);
      console.log(my_data);

      console.log(my_data['fatturato']);
      console.log(my_data['fatturato']['data']);
      console.log(my_data['fatturato']['type']);


      //preparo i dati che arrivano dal DB per poter essere letti da chart.js
      var venditeAgenti = my_data['fatturato_by_agent']['data'];
      var valoriVenditeAgenti = [];
      var agenti = [];
      console.log(my_data['fatturato_by_agent']['data']);
      for (var variable in venditeAgenti) {
        valoriVenditeAgenti.push(venditeAgenti[variable]);
        agenti.push(variable);

        console.log(venditeAgenti[variable]);
      }
      console.log(valoriVenditeAgenti);

    //************************
    //*******GRAFICI**********
    //************************


      //grafico a linee********
      var mesi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var ctx_ii = $('.line-chart-ii');
      var ctx_iii = $('.pie-chart');


      var chart = new Chart(ctx_ii, {
        // The type of chart we want to create
        type: my_data['fatturato']['type'],

        // The data for our dataset
        data: {
          labels: mesi,
          datasets: [{
            label: "Vendite annuali, Milestone II",
            backgroundColor: 'rgb(47, 108, 69, .3)',
            borderColor: 'rgb(47, 108, 69)',
            data: my_data['fatturato']['data'],
          }]
        },

        // Configuration options go here
        options: {}
      });



      //grafico a torta*********
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



    },
  });




});
