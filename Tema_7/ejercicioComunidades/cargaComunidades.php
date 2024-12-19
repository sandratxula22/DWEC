<?php
$comunidades["01"] = "Andalucía";
$comunidades["02"] = "Aragón";
$comunidades["03"] = "Asturias";
$comunidades["04"] = "Baleares";
$comunidades["05"] = "Canarias";
$comunidades["06"] = "Cantabria";
$comunidades["07"] = "Castilla-La Mancha";
$comunidades["08"] = "Castilla y León";
$comunidades["09"] = "Cataluña";
$comunidades["10"] = "Extremadura";
$comunidades["11"] = "Galicia";
$comunidades["12"] = "Madrid";
$comunidades["13"] = "Murcia";
$comunidades["14"] = "Navarra";
$comunidades["15"] = "La Rioja";
$comunidades["16"] = "País Vasco";
$comunidades["17"] = "Valencia";
$comunidades["18"] = "Ceuta";
$comunidades["19"] = "Melilla";

foreach($comunidades as $codigo => $nombre){
    $elementos_json[] = "\"$codigo\": \"$nombre\"";
}

echo "{".implode(",", $elementos_json)."}";
?>