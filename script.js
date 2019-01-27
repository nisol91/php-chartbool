
$(document).ready(function() {


  $.ajax({
    url: 'http://localhost/advanced_charts/data.php',
    method: 'GET',
    success: function (data) {
      var my_data = JSON.parse(data);
      console.log(my_data);
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
            data: my_data,
          }]
        },

        // Configuration options go here
        options: {}
      });
    },
  });




});
