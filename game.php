<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Game </title>
    <link rel="stylesheet" href="style.css">
</head>

<body>



    <div id="game">



        <div id="after_submit">

            <p id="number_correct"></p>

            <img id="picture">

        </div>



        <h1 id="questionHeader"> </h1>


        <form id="form" onsubmit="answerCompare();return false">
            <input type="text" id="response" name="response">
            <input type="submit" value="Submit">
        </form>







    </div>
    <?php
    include('show.php');
    ?>

    <script src="script.js"> </script>

</body>

</html>