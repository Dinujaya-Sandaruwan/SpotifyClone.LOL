<?php

$id = $_POST['id'];
include '../add/dbcon.php';
$sql = 'DELETE FROM `songs` WHERE id='.$id.';';
$conn->query($sql);
header('Location: index.php');

?>