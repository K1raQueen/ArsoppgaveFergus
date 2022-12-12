


<?php

// Lagrer usename i en variabel
$username = filter_input(INPUT_POST, 'username');
$password = filter_input(INPUT_POST, 'password');

if (!empty($username)){
if (!empty($password)){
$host = "localhost";
$dbusername = "fergus";
$dbpassword = "Fergus10";
$dbname = "fergus";

// lager kobling
$kobling = new mysqli ($host, $dbusername, $dbpassword, $dbname, 3325);

 //Sjekk om kobling virker
 if ($kobling->connect_error) {
    die("Noe gikk galt: " . $kobling->connect_error);
}

else{
$sql = "INSERT INTO users (username, password)
values ('$username','$password')";
if ($kobling->query($sql)){
echo "New record is inserted sucessfully";
}
else{
echo "Error: ". $sql ."
". $kobling->error;
}
$kobling->close();
}
}
else{
echo "Password should not be empty";
die();
}
}
else{
echo "Username should not be empty";
die();
}
?>
