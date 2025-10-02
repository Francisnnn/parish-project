<?php
require_once 'db_config.php';

echo "<h3>Debugging Login Issues</h3>";

// Check if admins table exists and has data
$result = $conn->query("SHOW TABLES LIKE 'admins'");
if ($result->num_rows > 0) {
    echo "✅ Admins table exists<br>";
    
    $admins = $conn->query("SELECT * FROM admins");
    if ($admins->num_rows > 0) {
        echo "✅ Admin accounts found: " . $admins->num_rows . "<br>";
        
        while($admin = $admins->fetch_assoc()) {
            echo "<hr>";
            echo "Username: <strong>" . $admin['username'] . "</strong><br>";
            echo "Password Hash: " . $admin['password_hash'] . "<br>";
            echo "Role: " . $admin['role'] . "<br>";
            
            // Test password verification
            $test_password = "password";
            if (password_verify($test_password, $admin['password_hash'])) {
                echo "✅ Password 'password' works!<br>";
            } else {
                echo "❌ Password 'password' does NOT work<br>";
            }
            
            $test_password2 = "Church123!";
            if (password_verify($test_password2, $admin['password_hash'])) {
                echo "✅ Password 'Church123!' works!<br>";
            } else {
                echo "❌ Password 'Church123!' does NOT work<br>";
            }
        }
    } else {
        echo "❌ No admin accounts found in the table<br>";
    }
} else {
    echo "❌ Admins table does not exist<br>";
}

$conn->close();
?>