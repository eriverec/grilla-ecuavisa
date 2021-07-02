var principalSheet = 'https://docs.google.com/spreadsheets/d/1Fw7a5tjulR1_wtB7nlTaI3I4kbb1y5iIjnwyhGZZnmo/edit#gid=0';
//window.valObject = {};
$('#principalSheet').sheetrock({
    url: principalSheet,

    query: "select A,B,C order by A desc",
    fetchSize: 50

});

$('#martes-data').sheetrock({
    url: principalSheet,

    query: "select D,E,F order by B desc",
    fetchSize: 50

});

$('#miercoles-data').sheetrock({
    url: principalSheet,

    query: "select A,B,C order by B desc",
    fetchSize: 50

});