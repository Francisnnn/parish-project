<?php
require_once 'db_config.php';

// Create a new password hash
$new_password = "Church123!"; // Change this to your desired password
$password_hash = password_hash($new_password, PASSWORD_DEFAULT);

// Update the admin password
$sql = "UPDATE admins SET password_hash = ? WHERE username = 'superadmin'";

if ($stmt = $conn->prepare($sql)) {
    $stmt->bind_param("s", $password_hash);
    
    if ($stmt->execute()) {
        echo "Admin password reset successfully!<br>";
        echo "New Login Details:<br>";
        echo "Username: <strong>superadmin</strong><br>";
        echo "Password: <strong>Church123!</strong><br>";
        echo "<br><strong>IMPORTANT: Delete this file after use!</strong>";
    } else {
        echo "Error resetting password: " . $conn->error;
    }
    $stmt->close();
} else {
    echo "Error preparing statement: " . $conn->error;
}

$conn->close();
?>