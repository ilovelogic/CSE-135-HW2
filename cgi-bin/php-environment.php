<?php
header("Cache-Control: no-cache");
header("Content-Type: text/html");

echo "<!doctype html>";
echo "<head><title>Environment Variables</title></head>";

echo "<body>";
echo "<h1 align=center>Environment Variables</h1>";
echo "<hr/>";
echo "<h2>Environment Variables:</h2>";
echo "<ul>";
foreach ($_ENV as $env_var => $value) {
    echo "<li><strong>$env_var</strong>: $value</li>";
}
echo "</ul>";
echo "<h2>Server Variables</h2>";
echo "<ul>";
foreach ($_SERVER as $serv_var => $value) {
    echo "<li><strong>$serv_var</strong>: $value</li>";
}
echo "</ul>";
echo "</body>";
echo "</html>";
?>