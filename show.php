<?php
    

    $host = "localhost";
    $dbusername = "fergus";
    $dbpassword = "Fergus10";
    $dbname = "fergus";

    //Opprette kobling
    $kobling = new mysqli ($host, $dbusername, $dbpassword, $dbname, 3325);

    //Sjekk om kobling virker
    if ($kobling->connect_error) {
        die("Noe gikk galt: " . $kobling->connect_error);
    }

    //Angi UTF-8 som tegnsett
    $kobling->set_charset("utf8");

    $sql = 'SELECT * from users';
    $resultat = $kobling->query($sql);

  

    

    if (!$resultat) {
        echo "Noe gikk galt med spørringen $sql ($kobling->error).";
    } else {

        while ($rad = $resultat->fetch_assoc()) {
        $username = $rad["userName"];
        $password = $rad["password"];
       
    }


    // Viser brukernavn og passord
    echo 
    '
    <div class="user">'.$username.'</div>
    <div class="pass">'.$password.'</div><br>
    ';
       
    }

?>