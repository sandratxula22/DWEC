<?php
$provincias["01"]["01"] = "Almería";
$provincias["01"]["02"] = "Cádiz";
$provincias["01"]["03"] = "Córdoba";
$provincias["01"]["04"] = "Granada";
$provincias["01"]["05"] = "Huelva";
$provincias["01"]["06"] = "Jaén";
$provincias["01"]["07"] = "Málaga";
$provincias["01"]["08"] = "Sevilla";
$provincias["02"]["01"] = "Huesca";
$provincias["02"]["02"] = "Teruel";
$provincias["02"]["03"] = "Zaragoza";
$provincias["03"]["01"] = "Asturias";
$provincias["04"]["01"] = "Islas Baleares";
$provincias["05"]["01"] = "Las Palmas";
$provincias["05"]["02"] = "Santa Cruz de Tenerife";
$provincias["06"]["01"] = "Cantabria";
$provincias["07"]["01"] = "Albacete";
$provincias["07"]["02"] = "Ciudad Real";
$provincias["07"]["03"] = "Cuenca";
$provincias["07"]["04"] = "Guadalajara";
$provincias["07"]["05"] = "Toledo";
$provincias["08"]["01"] = "Ávila";
$provincias["08"]["02"] = "Burgos";
$provincias["08"]["03"] = "León";
$provincias["08"]["04"] = "Palencia";
$provincias["08"]["05"] = "Salamanca";
$provincias["08"]["06"] = "Segovia";
$provincias["08"]["07"] = "Soria";
$provincias["08"]["08"] = "Valladolid";
$provincias["08"]["09"] = "Zamora";
$provincias["09"]["01"] = "Barcelona";
$provincias["09"]["02"] = "Girona";
$provincias["09"]["03"] = "Lleida";
$provincias["09"]["04"] = "Tarragona";
$provincias["10"]["01"] = "Badajoz";
$provincias["10"]["02"] = "Cáceres";
$provincias["11"]["01"] = "A Coruña";
$provincias["11"]["02"] = "Lugo";
$provincias["11"]["03"] = "Ourense";
$provincias["11"]["04"] = "Pontevedra";
$provincias["12"]["01"] = "Madrid";
$provincias["13"]["01"] = "Murcia";
$provincias["14"]["01"] = "Navarra";
$provincias["15"]["01"] = "La Rioja";
$provincias["16"]["01"] = "Álava";
$provincias["16"]["02"] = "Guipúzcoa";
$provincias["16"]["03"] = "Vizcaya";
$provincias["17"]["01"] = "Alicante";
$provincias["17"]["02"] = "Castellón";
$provincias["17"]["03"] = "Valencia";
$provincias["18"]["01"] = "Ceuta";
$provincias["19"]["01"] = "Melilla";

$comunidad = trim($_POST["comunidad"]);
$lasProvincias = $provincias[$comunidad];

foreach($lasProvincias as $codigo => $nombre){
    $elementos_json[] = "\"$codigo\": \"$nombre\"";
}

echo "{".implode(",", $elementos_json)."}";
?>
