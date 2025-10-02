<?php
/*
| -------------------------------------------------------------------
| DATABASE CONFIGURATION FILE
| -------------------------------------------------------------------
*/

// Define database credentials
define('DB_SERVER', 'sql211.infinityfree.com');
define('DB_USERNAME', 'if0_39981932');
define('DB_PASSWORD', 'Gabbytech26');
define('DB_NAME', 'if0_39981932_holytrinity'); // Fixed database name

// Attempt to establish the database connection
$conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn->connect_error) {
    die("ERROR: Could not connect to the database. " . $conn->connect_error);
}

// Set character set to UTF-8 for proper data handling
$conn->set_charset("utf8mb4");

// Start a session for user management
session_start();
?>