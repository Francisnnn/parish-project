--
-- Database: `if0_39981932_holytrinity`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
-- Used for the Church Member Biodata Registration form (bio.html)
--

CREATE TABLE `members` (
  `member_id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) UNIQUE,
  `phone` VARCHAR(20) NOT NULL,
  `outstation_name` VARCHAR(100) NOT NULL,
  `gender` ENUM('Male', 'Female', 'Other') NOT NULL,
  `marital_status` VARCHAR(50) NOT NULL,
  `date_of_birth` DATE NOT NULL,
  `address` TEXT NOT NULL,
  `occupation` VARCHAR(255) NOT NULL,
  `societies` TEXT NULL,
  `about_me` TEXT NULL,
  `profile_pic_url` VARCHAR(255) NULL,
  `registration_date` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `events`
-- Used for managing news, announcements, and mass schedules.
--

CREATE TABLE `events` (
  `event_id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `event_date` DATE NOT NULL,
  `event_time` TIME NULL,
  `location` VARCHAR(255) NULL,
  `posted_by_parish` ENUM('Parish', 'Outstation', 'Both') NOT NULL DEFAULT 'Parish',
  `image_url` VARCHAR(255) NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
-- Used for the admin login (admin.html)
--

CREATE TABLE `admins` (
  `admin_id` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL COMMENT '**MUST** store a strong hash (e.g., using PHP password_hash)',
  `full_name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL UNIQUE,
  `role` VARCHAR(50) NOT NULL DEFAULT 'editor'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Initial Admin Account (Remember to Hash the Password!)
-- *This is just an example for structure.*
--

INSERT INTO `admins` (`username`, `password_hash`, `full_name`, `email`, `role`) VALUES
('superadmin', 'REPLACE_WITH_A_STRONG_PASSWORD_HASH', 'Main Administrator', 'admin@yourchurch.org', 'superadmin');