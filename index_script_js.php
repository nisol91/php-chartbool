<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<!-- ********************* -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet">

    <title></title>
  </head>
  <body>
    <div class="container">
      <div class="grafico">
        <canvas class="line-chart"></canvas>
      </div>
    </div>

    <script type="text/javascript">
    <?php include 'data.php'; ?>
    // var database = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
    // console.log(database);
    var dataPhp = "<?php echo $dataset; ?>";
    var dataFinale = JSON.parse(dataPhp);
    console.log(dataFinale);
    //NOTA: con questo metodo evito la chiamata AJAX. In pratica metto uno script javascript direttamente nell index.php, cosi posso scrivere il php dentro al javascript. Unico accorgimento e' mettere gli apici "" ai dati provenienti da php per poter essere parsati correttamente. Di solito e' la chiamata ajax che restituisce una stringa. Ma qui non essendoci e' sempre meglio dirgli che tutti i dati che devono essere parsati (provenienti dal db php), siano una stringa. E' un metodo per far dialogare php e js.



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
    </script>
  </body>
</html>
