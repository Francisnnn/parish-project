<?php
// Include the database connection script and start the session
require_once 'db_config.php';

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Get and sanitize input
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    // 2. Prepare the SQL query to prevent SQL Injection
    // The '?' are placeholders for secure binding
    $sql = "SELECT admin_id, username, password_hash, role FROM admins WHERE username = ?";
    
    if ($stmt = $conn->prepare($sql)) {
        // Bind parameters: 's' for string
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result(); // Get the result set
        
        // 3. Check if username exists
        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();
            
            // 4. Verify the password hash
            if (password_verify($password, $user['password_hash'])) {
                // Password is correct, create a session
                
                $_SESSION["loggedin"] = true;
                $_SESSION["admin_id"] = $user['admin_id'];
                $_SESSION["username"] = $user['username'];
                $_SESSION["role"] = $user['role'];
                
                // Redirect admin to the dashboard page
                header("location: admin_dashboard.php");
                exit;
            } else {
                // Invalid password
                $login_err = "Invalid username or password.";
            }
        } else {
            // Username doesn't exist
            $login_err = "Invalid username or password.";
        }
        $stmt->close();
    }
    
    // If there was a login error, redirect back to admin.html with an error message.
    if (isset($login_err)) {
        // Use a generic message for security
        echo "<script>alert('Login Failed: Invalid username or password.'); window.location.href='admin.html';</script>";
    }
    
}
$conn->close();
?>