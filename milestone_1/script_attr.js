
$(document).ready(function() {
  var data = $('.line-chart').attr('data-database');
  // oppure
  // var data = $('.line-chart').data('database'); scrivo solo quello che c e dopo il trattino se uso data

  console.log(data);
  var dataFinale = JSON.parse(data);
  console.log(dataFinale);
  //con questo metodo utilizzo l index php per passare il database php, poi sfrutto
  //gli attr di jquery. E' un altro modo per far dialogare php e js.


  //grafico
  var mesi = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var ctx = $('.line-chart');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: mesi,
          datasets: [{
              label: "My First dataset",
              backgroundColor: 'rgb(180, 139, 119)',
              borderColor: 'rgb(53, 72, 154)',
              data: dataFinale,
          }]
      },

      // Configuration options go here
      options: {}
  });
});
