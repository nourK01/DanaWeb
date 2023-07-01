<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];

    // Email details
    $to = "nour.kachmar0@hotmail.com"; // Replace with your email address
    $subject = "New RSVP";
    $message = "Name: " . $name . "\n";
    $message .= "Email: " . $email;

    // Send the email
    mail($to, $subject, $message);

    // Redirect back to the form page
    header("Location: index.html");
    exit();
}
?>
