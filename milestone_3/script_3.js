
$(document).ready(function() {


  $.ajax({
    url: 'http://localhost/advanced_charts/milestone_3/server_3.php',
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

      var mesi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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
