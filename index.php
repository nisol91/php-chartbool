<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
<!-- ********************* -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Amatic+SC" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,900" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title></title>
  </head>
  <body>
    <div class="dati_php">
      <?php include 'milestone_1/data.php'; ?>
      <?php include 'milestone_2/server_2.php'; ?>
      <?php include 'milestone_3/server_3.php'; ?>

      <!-- se lo metto qua e' un div nascosto quindi non si vedono i dati, oppure lo metto fuori dal body e lo legge il lettore di JSON. -->
    </div>
    <div class="container">
      <div class="m_1">
        <div class="grafico">
          <canvas class="line-chart"></canvas>
        </div>
      </div>
      <div class="m_2">
        <div class="grafico">
          <canvas class="line-chart-ii"></canvas>
        </div>
        <div class="grafico_torta">
          <canvas class="pie-chart"></canvas>
        </div>
      </div>
      <div class="m_3">
        <div class="vis grafico" id = "<?php echo $access_fatturato; ?>">
          <canvas class="line-chart-iii"></canvas>
        </div>
        <div class="vis grafico_torta" id = "<?php echo $access_fatturato_agent; ?>">
          <canvas class="pie-chart-iii"></canvas>
        </div>
        <div class="vis grafico" id = "<?php echo $access_efficienza; ?>">
          <canvas class="line-chart-iiii"></canvas>
        </div>
      </div>
    </div>

    <script src="milestone_1/script.js"></script>
    <script src="milestone_2/script_2.js"></script>
    <script src="milestone_3/functions.js"></script>
    <script src="milestone_3/script_3.js"></script>

  </body>
</html>
