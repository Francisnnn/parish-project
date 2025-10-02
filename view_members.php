<?php
require_once 'db_config.php';

// Check if admin is logged in
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: admin.html");
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>View Members - Admin Panel</title>
    <style>
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #000080; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
    </style>
</head>
<body>
    <h1>Registered Members</h1>
    <a href="admin_dashboard.php">← Back to Dashboard</a>
    
    <?php
    // Fetch all members
    $sql = "SELECT * FROM members ORDER BY registration_date DESC";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        echo "<table>";
        echo "<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Registration Date</th>
              </tr>";
        
        while($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>{$row['member_id']}</td>
                    <td>{$row['name']}</td>
                    <td>{$row['email']}</td>
                    <td>{$row['phone']}</td>
                    <td>{$row['outstation_name']}</td>
                    <td>{$row['registration_date']}</td>
                  </tr>";
        }
        echo "</table>";
        echo "<p>Total members: " . $result->num_rows . "</p>";
    } else {
        echo "<p>No members registered yet.</p>";
    }
    $conn->close();
    ?>
</body>
</html>