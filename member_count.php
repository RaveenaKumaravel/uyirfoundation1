<?php
$countFile = 'member_count.txt';
if (file_exists($countFile)) {
    echo file_get_contents($countFile);
} else {
    echo '0';
}
?>
