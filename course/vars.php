<?php
// $videos = array('','','');
// $hides = array('','','');

$full1 = '14 400р.';
$full2 = '26 900р.';
$full3 = '40 900р.';

$sales1 = array('1 500р.','1 000р.','500р.');
$sales2 = array('3 000р.','2 000р.','1 000р.');
$sales3 = array('6 000р.','4 000р.','2 000р.');

$todays1 = array('12 900р.','13 400р.','13 900р.');
$todays2 = array('23 900р.','24 900р.','25 900р.');
$todays3 = array('34 900р.','36 900р.','38 900р.');

$links1 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=269&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=278&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=279&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=280&clean=true&lg=ru');
$links2 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=270&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=281&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=282&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=283&clean=true&lg=ru');
$links3 = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=271&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=284&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=285&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=286&clean=true&lg=ru');

$prepLinks = array('https://shop.mv-centr.ru/?r=ordering/cart/as1&id=273&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=275&clean=true&lg=ru','https://shop.mv-centr.ru/?r=ordering/cart/as1&id=276&clean=true&lg=ru');

$dates = array(strtotime('2020-08-25'),strtotime('2020-08-26'),strtotime('2020-08-27'));
$now = strtotime('now');

if ($now < $dates[0]) {
    $sale1 = $sales1[0];
    $sale2 = $sales2[0];
    $sale3 = $sales3[0];

    $today1 = $todays1[0];
    $today2 = $todays2[0];
    $today3 = $todays3[0];

    $link1 = $links1[0];
    $link2 = $links2[0];
    $link3 = $links3[0];

    $prepLink = $prepLinks[0];
}
elseif (($now >= $dates[0])&&($now < $dates[1])) {
    $sale1 = $sales1[1];
    $sale2 = $sales2[1];
    $sale3 = $sales3[1];

    $today1 = $todays1[1];
    $today2 = $todays2[1];
    $today3 = $todays3[1];

    $link1 = $links1[1];
    $link2 = $links2[1];
    $link3 = $links3[1];

    $prepLink = $prepLinks[1];
}
elseif (($now >= $dates[1])&&($now < $dates[2])) {
    $sale1 = $sales1[2];
    $sale2 = $sales2[2];
    $sale3 = $sales3[2];

    $today1 = $todays1[2];
    $today2 = $todays2[2];
    $today3 = $todays3[2];

    $link1 = $links1[2];
    $link2 = $links2[2];
    $link3 = $links3[2];

    $prepLink = $prepLinks[2];
}
else {
    $link1 = $links1[3];
    $link2 = $links2[3];
    $link3 = $links3[3];
}
?>