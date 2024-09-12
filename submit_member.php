<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    // Store member details (In a real application, use a database instead of a text file)
    $file = 'members.txt';
    $current = file_get_contents($file);
    $current .= "$name, $email\n";
    file_put_contents($file, $current);

    // Update member count
    $countFile = 'member_count.txt';
    $count = file_exists($countFile) ? (int)file_get_contents($countFile) : 0;
    file_put_contents($countFile, ++$count);

    // Redirect to thank you page or back to contact page
    header('Location: thank_you.html');
    exit();
}
?>
