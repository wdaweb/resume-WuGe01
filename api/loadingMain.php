<?php
include_once "../plugins/base.php";
$str=$main->find(1);
$date=[
    'text1'=>$str['text1'],
    'text2'=>$str['text2'],
    'text3'=>$str['text3']
];
echo json_encode($date);
?>