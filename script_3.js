
$(document).ready(function() {


  $.ajax({
    url: 'http://localhost/advanced_charts/server_3.php',
    method: 'GET',
    success: function (data) {

      //rendo i dati leggibili da js
      var my_data = JSON.parse(data);
      console.log(my_data);

      console.log(my_data['fatturato']);
      console.log(my_data['fatturato']['data']);
      console.log(my_data['fatturato']['type']);


      //preparo i dati (milestone 2) che arrivano dal DB per poter essere letti da chart.js
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

      //preparo i dati (milestone 3)
      console.log(my_data['team_efficiency']['data']);


      //controllo per la visualizzazione dei GRAFICI
      //NB: non posso usare una chiamata ajax perche poi sarebbe lei stessa a governare le query, ma noi vogliamo prendere i valori in GET con php

        var my_query = window.location.search.substring(7);
        console.log(my_query);

            if (my_query === 'guest') {
              $('.vis_2').addClass('nascosto');
              $('.vis_3').addClass('nascosto');
            } else if (my_query === 'employee') {
              $('.vis_3').addClass('nascosto');
            } 


    //************************
    //*******GRAFICI**********
    //************************


      //grafico a linee********
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

      //grafico a linee_efficiency********
      var chart_ii = new Chart(ctx_iiii, {
        // The type of chart we want to create
        type: my_data['fatturato']['type'],

        // The data for our dataset
        data: {
          labels: mesi,
          datasets: [{
            label: "Efficienza Team1, Milestone III",
            backgroundColor: 'rgb(82, 39, 46, .3)',
            borderColor: 'rgb(82, 39, 46)',
            data: my_data['team_efficiency']['data']['Team1'],
          },
          {
            label: "Efficienza Team2, Milestone III",
            backgroundColor: 'rgb(93, 115, 164, .3)',
            borderColor: 'rgb(93, 115, 164)',
            data: my_data['team_efficiency']['data']['Team2'],
          },
          {
            label: "Efficienza Team3, Milestone III",
            backgroundColor: 'rgb(176, 110, 82, .3)',
            borderColor: 'rgb(176, 110, 82)',
            data: my_data['team_efficiency']['data']['Team3'],
          },
        ]
        },

        // Configuration options go here
        options: {}
      });

    },
  });




});
