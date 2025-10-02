<?php
require_once 'db_config.php';

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: admin.html");
    exit;
}

// Get member statistics
$total_members = $conn->query("SELECT COUNT(*) as total FROM members")->fetch_assoc()['total'];
$recent_members = $conn->query("SELECT COUNT(*) as recent FROM members WHERE registration_date >= DATE_SUB(NOW(), INTERVAL 7 DAY)")->fetch_assoc()['recent'];
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <style>
        .stats { display: flex; gap: 20px; margin: 20px 0; }
        .stat-card { background: #f8f9fa; padding: 20px; border-radius: 5px; border-left: 4px solid #000080; }
    </style>
</head>
<body>
    <h1>Welcome, <?php echo htmlspecialchars($_SESSION["username"]); ?>!</h1>
    <p>Role: <strong><?php echo htmlspecialchars($_SESSION["role"]); ?></strong></p>
    
    <div class="stats">
        <div class="stat-card">
            <h3>Total Members</h3>
            <p style="font-size: 24px; font-weight: bold;"><?php echo $total_members; ?></p>
        </div>
        <div class="stat-card">
            <h3>New This Week</h3>
            <p style="font-size: 24px; font-weight: bold;"><?php echo $recent_members; ?></p>
        </div>
    </div>

    <h2>Quick Actions:</h2>
    <ul>
        <li><a href="view_members.php">View All Members</a></li>
        <li><a href="#">Add New Event</a> (Coming Soon)</li>
        <li><a href="#">Manage Content</a> (Coming Soon)</li>
    </ul>

    <p><a href="logout.php">Logout</a></p>
</body>
</html>