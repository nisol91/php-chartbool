var $ = require('jquery');


$(document).ready(function() {


  //####stampo grafico a linea


  function printLineChart(ascissa, ordinata, titolo, posizione, tipo) {


    var chart = new Chart(posizione, {
      // The type of chart we want to create
      type: tipo,

      // The data for our dataset
      data: {
        labels: ascissa,
        datasets: [{
          label: titolo,
          backgroundColor: 'rgb(82, 39, 46, .3)',
          borderColor: 'rgb(82, 39, 46)',
          data: ordinata,
        }]
      },

      // Configuration options go here
      options: {}
    });

  };


  //#####stampo grafico a torta

  function printPieChart(ascissa, ordinata, posizione, tipo) {

    var chart_pie = new Chart(posizione, {
      // The type of chart we want to create
      type: tipo,

      // The data for our dataset
      data: {
        labels: ascissa,
        datasets: [{
          backgroundColor: [getColor(3, 0, 100), getColor(3, 0, 100), getColor(3, 0, 100), getColor(3, 0, 100)],
          borderColor: ['grey', 'grey', 'grey', 'grey'],
          data: ordinata,
        }]
      },

      // Configuration options go here
      options: {}
    });

  };

  //#### colori casuali per il multi line graphic
  //in ingresso prende l opacita' (intero tra 1 e 9) e il range di colore, per generare casualmente colori simili.


  function random_int_number(min, max) {
    return Math.floor(Math.random() * (max - min +  1) + min);
  }



  function getColor(opacity, range_min, range_max) {

    var colors = [];

    //impedisco che un colore possa comparire 2 volte.
    var i = 0;
    while (i < 3) {
      var num = random_int_number(range_min, range_max);
      console.log(num);
      if (!colors.includes(num)) {
        colors.push(num);
        console.log(num);
        i++;
      }
    }

    console.log(colors);
    var finalColor = 'rgb(' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + ', .' + opacity + ')';
    console.log(finalColor);
    return finalColor
  }



  //####stampo grafico multi linea (efficienza)

  function printMultiLineChart(ascissa, ordinata1, ordinata2, ordinata3, titolo1, titolo2, titolo3, posizione, tipo) {

    var chart_ii = new Chart(posizione, {
      // The type of chart we want to create
      type: tipo,

      // The data for our dataset
      data: {
        labels: ascissa,
        datasets: [{
          label: titolo1,
          backgroundColor: getColor(2, 0, 80),
          borderColor: getColor(8, 0, 80),
          data: ordinata1,
        },
        {
          label: titolo2,
          backgroundColor: getColor(2, 0, 80),
          borderColor: getColor(8, 0, 80),
          data: ordinata2,
        },
        {
          label: titolo3,
          backgroundColor: getColor(2, 0, 80),
          borderColor: getColor(8, 0, 80),
          data: ordinata3,
        },
      ]
    },

    // Configuration options go here
    options: {}
  });

  }


  //#### query string

  function queryString() {


    //****controllo per la visualizzazione dei GRAFICI

    //NB: non posso usare una chiamata ajax perche poi sarebbe lei stessa a governare le query.
    //uso window.location per prendere dalla url il valore della query.

      var my_query = window.location.search.substring(7);
      console.log(my_query);

      if (my_query === 'guest') {
        $('.m_3').children('.vis').each(function(index) {
          console.log($(this));
          var chiave = $(this).attr('id');
          console.log(chiave);
          if (chiave != my_query) {
            $(this).hide();
          }
        });

      } else if (my_query === 'employee') {
        $('.m_3').children('.vis').each(function(index) {
          console.log($(this));
          var chiave = $(this).attr('id');
          console.log(chiave);
          if (chiave != my_query && chiave != 'guest') {
            $(this).hide();
          }
        });
      }
  }

  //#### ordinare i dati

  function dataSort(data) {

    var array_venditeAgenti = [];
    var array_Agenti = [];

    for (var variable in data) {
      array_venditeAgenti.push(data[variable]);
      array_Agenti.push(variable);

    }
    return {
      agentsValues: array_venditeAgenti,
      agents: array_Agenti
    }

  }




//----------------------------------------------------






  $.ajax({
    url: 'http://localhost/advanced_charts/milestone_3_laravel_mix/php/server_3.php',
    method: 'GET',
    success: function (data) {

      //rendo i dati leggibili da js
      var my_data = JSON.parse(data);
      console.log(my_data);

      console.log(my_data['fatturato']);
      console.log(my_data['fatturato']['data']);
      console.log(my_data['fatturato']['type']);


      //****preparo i dati (milestone 2) che arrivano dal DB per poter essere letti da chart.js
      //volendo questa parte si poteva fare in php, ma non cambia niente.
      var venditeAgenti = my_data['fatturato_by_agent']['data'];

      var agenti = dataSort(venditeAgenti).agents;
      var valoriVenditeAgenti = dataSort(venditeAgenti).agentsValues;


      //****controllo per la visualizzazione dei GRAFICI
      queryString();

      //*******************************
      //*******STAMPA GRAFICI**********
      //*******************************

      var mesi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      var ctx_ii = $('.line-chart-iii');
      var ctx_iii = $('.pie-chart-iii');
      var ctx_iiii = $('.line-chart-iiii');


      var ord_1 = my_data['fatturato']['data'];
      var titolo_1 = "Vendite annuali, Milestone III";
      var tipo_1 = my_data['fatturato']['type'];

      var tipo_2 = my_data['fatturato_by_agent']['type'];

      var ord_3_a = my_data['team_efficiency']['data']['Team1'];
      var ord_3_b = my_data['team_efficiency']['data']['Team2'];
      var ord_3_c = my_data['team_efficiency']['data']['Team3'];
      var titolo_3_a = "Efficienza Team1, Milestone III";
      var titolo_3_b = "Efficienza Team2, Milestone III";
      var titolo_3_c = "Efficienza Team3, Milestone III";

      printLineChart(mesi, ord_1, titolo_1, ctx_ii, tipo_1);
      printPieChart(agenti, valoriVenditeAgenti, ctx_iii, tipo_2);
      printMultiLineChart(mesi, ord_3_a, ord_3_b, ord_3_c, titolo_3_a, titolo_3_b, titolo_3_c, ctx_iiii, tipo_1);

    },
  });




});
