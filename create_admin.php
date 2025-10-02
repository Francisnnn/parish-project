<?php
require_once 'db_config.php';

// Check if admin already exists
$check_sql = "SELECT * FROM admins WHERE username = 'superadmin'";
$result = $conn->query($check_sql);

if ($result->num_rows > 0) {
    echo "Admin account already exists!";
} else {
    // Create a secure password hash
    $password = "Admin123!"; // Change this to your desired password
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
    // Insert the admin account
    $sql = "INSERT INTO admins (username, password_hash, full_name, email, role) 
            VALUES ('superadmin', ?, 'Main Administrator', 'admin@holytrinity.org', 'superadmin')";
    
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("s", $password_hash);
        
        if ($stmt->execute()) {
            echo "Admin account created successfully!<br>";
            echo "Username: superadmin<br>";
            echo "Password: Admin123!<br>";
            echo "<strong>IMPORTANT: Change this password immediately after login!</strong>";
        } else {
            echo "Error creating admin account: " . $conn->error;
        }
        $stmt->close();
    }
}
$conn->close();
?>