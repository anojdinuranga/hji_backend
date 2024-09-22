-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 22, 2024 at 07:59 AM
-- Server version: 11.3.2-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hij_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL DEFAULT '',
  `contact_number` varchar(20) NOT NULL DEFAULT '',
  `email` varchar(255) DEFAULT NULL,
  `poc_name` varchar(200) NOT NULL DEFAULT '',
  `poc_contact_number` varchar(20) NOT NULL DEFAULT '',
  `head_office_address` varchar(200) NOT NULL DEFAULT '',
  `logo` varchar(300) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer_order`
--

CREATE TABLE `customer_order` (
  `id` int(11) NOT NULL,
  `cr_number` varchar(50) DEFAULT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  `enquiry_date` date DEFAULT NULL,
  `style_no` varchar(100) DEFAULT NULL,
  `image` varchar(300) DEFAULT NULL,
  `fabric_blend` varchar(255) DEFAULT NULL,
  `combo_no` varchar(100) DEFAULT NULL,
  `value_added_process` enum('yes','no') DEFAULT NULL,
  `projected_qty_pieces` int(11) DEFAULT NULL,
  `sam_per_piece` decimal(10,2) DEFAULT NULL,
  `lapdip_no` varchar(100) DEFAULT NULL,
  `expected_order_placement_date` date DEFAULT NULL,
  `quoted_price` decimal(10,2) DEFAULT NULL,
  `fabric_price` decimal(10,2) DEFAULT NULL,
  `fabric_consumption` decimal(10,2) DEFAULT NULL,
  `yarn_price` decimal(10,2) DEFAULT NULL,
  `lapdip_cost` decimal(10,2) DEFAULT NULL,
  `trim_cost` decimal(10,2) DEFAULT NULL,
  `tech_pack` varchar(300) DEFAULT NULL,
  `gsm` decimal(10,2) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `name`) VALUES
(1, 'pending'),
(2, 'active'),
(3, 'disabled');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `employee_number` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL DEFAULT '',
  `password` varchar(150) NOT NULL DEFAULT '',
  `email` varchar(320) DEFAULT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `role` int(11) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `employee_number`, `name`, `password`, `email`, `mobile`, `status`, `role`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 'EMP001', 'super admin', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'example@email.com', '0786541232', 2, 1, NULL, '2024-04-06 11:21:16', 1, '2024-09-20 14:48:20'),
(8, 'EMP002', 'sanjana', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana@example.com', '0765623214', 2, 2, 1, '2024-09-22 00:01:43', NULL, '2024-09-22 05:31:43'),
(9, 'EMP0020', 'sanjana2', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana2@example.com', '0118862354', 2, 2, 1, '2024-09-22 00:16:32', NULL, '2024-09-22 05:46:32'),
(10, 'EMP003', 'sanjana33', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana33@example.com', '0118862354', 2, 2, 1, '2024-09-22 00:28:19', NULL, '2024-09-22 05:58:19');

-- --------------------------------------------------------

--
-- Table structure for table `user_login_session`
--

CREATE TABLE `user_login_session` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(150) NOT NULL DEFAULT '',
  `login_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `ip_address` varchar(50) NOT NULL DEFAULT '',
  `os_name` varchar(200) NOT NULL DEFAULT '',
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_login_session`
--

INSERT INTO `user_login_session` (`id`, `user_id`, `token`, `login_time`, `ip_address`, `os_name`, `status`) VALUES
(6, 1, '$2a$10$ceeb2bcf7836hcd2c40b1urJMsFZkFGknL8hNykaT0F57/tvQNtVS', '2024-09-20 03:19:19', '', 'Windows', 2),
(7, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uUxm8TxvPxLWBSKJHRVpiduP92hHvRi6', '2024-09-20 03:20:43', '', 'Windows', 1),
(8, 1, '$2a$10$ceeb2bcf7836hcd2c40b1upR4DWbmWk8pFVVHiT8rYvFtbjzjnfVS', '2024-09-20 03:41:02', '', 'Windows', 1),
(9, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uNFZXW5ynXqVGBk.5DnOlSvtSASwUDM6', '2024-09-20 14:28:32', '', 'Windows', 1),
(10, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uoSEl7ajpQlgR.6KTSMIqLtlc70C1Qt6', '2024-09-20 15:19:23', '', 'Windows', 1),
(12, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uJsLPyamNiSCLBrf8zOBmnmy3bkKqR7e', '2024-09-20 16:20:59', '', 'Windows', 1),
(14, 1, '$2a$10$ceeb2bcf7836hcd2c40b1umfHo.8VKdIW9CB.CMcJ5vXvyGLrBdiu', '2024-09-22 00:00:18', '', 'Windows', 1),
(15, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uDLmtZmfi7wLskHLSgok0eBbyAjKXTqy', '2024-09-22 00:01:01', '', 'Windows', 1),
(16, 8, '$2a$10$ceeb2bcf7836hcd2c40b1uGIkOrvVtRwRySUZPRc6I2eP4ay6W7jq', '2024-09-22 00:01:51', '', 'Windows', 1),
(17, 9, '$2a$10$ceeb2bcf7836hcd2c40b1u23Ug.Ha6UvhNfRf3xI64CbIwQLg/bfK', '2024-09-22 00:16:50', '', 'Windows', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_register_request`
--

CREATE TABLE `user_register_request` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `employee_number` varchar(100) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_register_request`
--

INSERT INTO `user_register_request` (`id`, `name`, `employee_number`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(2, 'example', 'EMP0055', 1, 9, '2024-09-22 00:17:42', NULL, NULL),
(4, 'sanjana33', 'EMP003', 2, 9, '2024-09-22 00:26:12', 1, '2024-09-22 00:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_role`
--

INSERT INTO `user_role` (`id`, `name`) VALUES
(1, 'super admin'),
(2, 'employee');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_order`
--
ALTER TABLE `customer_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_address` (`email`) USING BTREE,
  ADD KEY `user_ibfk_1` (`role`),
  ADD KEY `status` (`status`);

--
-- Indexes for table `user_login_session`
--
ALTER TABLE `user_login_session`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_login_sessions_user_id` (`user_id`);

--
-- Indexes for table `user_register_request`
--
ALTER TABLE `user_register_request`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employee_number` (`employee_number`);

--
-- Indexes for table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `customer_order`
--
ALTER TABLE `customer_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `user_login_session`
--
ALTER TABLE `user_login_session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `user_register_request`
--
ALTER TABLE `user_register_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `user_role` (`id`) ON DELETE SET NULL ON UPDATE SET NULL,
  ADD CONSTRAINT `user_ibfk_2` FOREIGN KEY (`status`) REFERENCES `status` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

--
-- Constraints for table `user_login_session`
--
ALTER TABLE `user_login_session`
  ADD CONSTRAINT `user_login_sessions_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
