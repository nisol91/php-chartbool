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
        backgroundColor: ['lightblue', 'rgb(38, 109, 111)', 'rgb(93, 115, 164)', 'rgb(136, 154, 185)'],
        borderColor: ['grey', 'grey', 'grey', 'grey'],
        data: ordinata,
      }]
    },

    // Configuration options go here
    options: {}
  });

};



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
        backgroundColor: 'rgb(82, 39, 46, .3)',
        borderColor: 'rgb(82, 39, 46)',
        data: ordinata1,
      },
      {
        label: titolo2,
        backgroundColor: 'rgb(93, 115, 164, .3)',
        borderColor: 'rgb(93, 115, 164)',
        data: ordinata2,
      },
      {
        label: titolo3,
        backgroundColor: 'rgb(176, 110, 82, .3)',
        borderColor: 'rgb(176, 110, 82)',
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

  //NB: non posso usare una chiamata ajax perche poi sarebbe lei stessa a governare le query, ma noi vogliamo prendere i valori in GET con php

    var my_query = window.location.search.substring(7);
    console.log(my_query);

    if (my_query === 'guest') {
      $('.vis_2').addClass('nascosto');
      $('.vis_3').addClass('nascosto');
    } else if (my_query === 'employee') {
      $('.vis_3').addClass('nascosto');
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
