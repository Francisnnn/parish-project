<?php
require_once 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Get input data
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $date_of_birth = trim($_POST['date_of_birth'] ?? '');
    $gender = trim($_POST['gender'] ?? '');
    $marital_status = trim($_POST['maritalStatus'] ?? '');
    $outstation_name = trim($_POST['outstation_name'] ?? '');
    $address = trim($_POST['address'] ?? '');
    $occupation = trim($_POST['occupation'] ?? '');
    $about_me = trim($_POST['about'] ?? '');
    
    // Generate automatic username since field is required but we don't want it
    $username = 'member_' . time() . '_' . rand(1000, 9999);
    
    $societies = isset($_POST['society']) ? implode(', ', $_POST['society']) : '';
    $profile_pic_url = null;
    
    // Validate required fields
    if (empty($name) || empty($phone) || empty($date_of_birth)) {
        die("<script>alert('Error: Please fill all required fields.'); window.location.href='bio.html';</script>");
    }
    
    // Try without username first, if error, try with auto-generated username
    $sql = "INSERT INTO members (name, email, phone, outstation_name, gender, marital_status, date_of_birth, address, occupation, societies, about_me, profile_pic_url) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("ssssssssssss", 
            $name, $email, $phone, $outstation_name, $gender, 
            $marital_status, $date_of_birth, $address, $occupation, 
            $societies, $about_me, $profile_pic_url
        );
        
        if ($stmt->execute()) {
            header("location: registration_success.html");
            exit;
        } else {
            // If failed, try with username
            $sql_with_username = "INSERT INTO members (name, username, email, phone, outstation_name, gender, marital_status, date_of_birth, address, occupation, societies, about_me, profile_pic_url) 
                                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            
            if ($stmt2 = $conn->prepare($sql_with_username)) {
                $stmt2->bind_param("sssssssssssss", 
                    $name, $username, $email, $phone, $outstation_name, $gender, 
                    $marital_status, $date_of_birth, $address, $occupation, 
                    $societies, $about_me, $profile_pic_url
                );
                
                if ($stmt2->execute()) {
                    header("location: registration_success.html");
                    exit;
                } else {
                    $error_msg = "Registration failed. Please try again.";
                }
                $stmt2->close();
            }
        }
        
        if (isset($error_msg)) {
            echo "<script>alert('$error_msg'); window.location.href='bio.html';</script>";
        }
    } else {
        echo "<script>alert('Database error. Please try again.'); window.location.href='bio.html';</script>";
    }
} else {
    header("location: bio.html");
    exit;
}
$conn->close();
?>