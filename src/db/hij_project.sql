-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2024 at 11:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `name`, `contact_number`, `email`, `poc_name`, `poc_contact_number`, `head_office_address`, `logo`, `status`, `updated_by`, `updated_time`, `added_by`, `added_time`) VALUES
(3, 'mmmm', '0115623584', 'example@example.com', 'example', '05532658441', 'example', 'uploads/17269904576542hutgdtz.jpg', 2, NULL, NULL, 9, '2024-09-22 02:05:29'),
(7, 'sanjana', '0767358574', '2020t00929@stu.cmb.ac.lk', '4545454', '0767358574', 'kuliyapitiya', '1727334439588hiuqwqw4.png', 2, 1, '2024-09-26 01:37:19', 1, '2024-09-24 16:20:55');

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer_order`
--

INSERT INTO `customer_order` (`id`, `cr_number`, `buyer_id`, `enquiry_date`, `style_no`, `image`, `fabric_blend`, `combo_no`, `value_added_process`, `projected_qty_pieces`, `sam_per_piece`, `lapdip_no`, `expected_order_placement_date`, `quoted_price`, `fabric_price`, `fabric_consumption`, `yarn_price`, `lapdip_cost`, `trim_cost`, `tech_pack`, `gsm`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(3, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, '1.00', 'example', '2021-01-01', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', NULL, '1.00', 1, 1, '2024-09-25 04:37:36', NULL, '2024-09-25 10:07:36'),
(4, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, '1.00', 'example', '2021-01-01', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', NULL, '1.00', 1, 1, '2024-09-25 04:41:40', NULL, '2024-09-25 10:11:40'),
(5, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, '1.00', 'example', '2021-01-01', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', NULL, '1.00', 1, 1, '2024-09-25 04:41:44', NULL, '2024-09-25 10:11:44'),
(6, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, '1.00', 'example', '2021-01-01', '1.00', '1.00', '1.00', '1.00', '1.00', '1.00', NULL, '1.00', 1, 1, '2024-09-25 04:41:45', NULL, '2024-09-25 10:11:45'),
(7, '565656', 3, '2024-09-27', '56', NULL, '556', '565', 'yes', 5656, '556.00', '55', '2024-09-25', '4545.00', '4545.00', '45545.00', '5656.00', '5656.00', '5656.00', NULL, '5656.00', 1, 1, '2024-09-25 04:44:37', NULL, '2024-09-25 10:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `department_name` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `department_name`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(2, 'sdf', 1, 1, '2024-10-16 11:09:37', NULL, NULL),
(3, 'asdas', 1, 1, '2024-10-16 11:10:09', NULL, NULL),
(13, 'sd', 1, 1, '2024-10-18 01:25:50', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `department_designation`
--

CREATE TABLE `department_designation` (
  `id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `status` int(11) NOT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `department_designation`
--

INSERT INTO `department_designation` (`id`, `department_id`, `designation`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 2, 'sdf', 1, 1, '2024-10-16 11:09:37', NULL, NULL),
(2, 3, 'asdsad', 1, 1, '2024-10-16 11:10:09', NULL, NULL),
(3, 3, 'asdasd', 1, 1, '2024-10-16 11:10:09', NULL, NULL),
(4, 3, 'dasdsad', 1, 1, '2024-10-16 11:10:09', NULL, NULL),
(17, 13, 'sds', 1, 1, '2024-10-18 01:25:50', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `client` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `file` longtext DEFAULT NULL,
  `file_2` varchar(500) DEFAULT NULL,
  `development_type` int(11) DEFAULT NULL,
  `order_type` int(11) DEFAULT NULL,
  `sample_type` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `client`, `type`, `file`, `file_2`, `development_type`, `order_type`, `sample_type`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 1, 1, 'example.xlsx', NULL, 1, 1, 1, 1, 1, '2024-10-14 13:53:52', NULL, NULL),
(2, 1, 1, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-10-14 14:10:42', NULL, NULL),
(3, 1, 1, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-10-14 17:27:16', NULL, NULL),
(4, 3, 1, NULL, NULL, NULL, NULL, NULL, 1, 1, '2024-10-18 01:51:08', NULL, NULL),
(5, 3, 2, NULL, NULL, 1, 1, 1, 1, 1, '2024-10-18 01:51:18', NULL, NULL),
(6, 3, 2, NULL, NULL, 1, 1, 1, 1, 1, '2024-10-18 01:52:35', NULL, NULL),
(7, 3, 1, '', NULL, NULL, NULL, NULL, 1, 1, '2024-10-18 02:10:37', NULL, NULL),
(8, 3, 1, '', NULL, NULL, NULL, NULL, 1, 1, '2024-10-18 02:11:18', NULL, NULL),
(9, 3, 1, '', NULL, NULL, NULL, NULL, 1, 1, '2024-10-18 02:34:02', NULL, NULL),
(10, 3, 2, '', NULL, NULL, NULL, NULL, 1, 1, '2024-10-18 02:34:57', NULL, NULL),
(11, 3, 1, '', NULL, NULL, NULL, NULL, 1, 1, '2024-10-18 03:37:26', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_accessory_fabric`
--

CREATE TABLE `enquiry_accessory_fabric` (
  `id` int(11) NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `knit_structure` varchar(100) DEFAULT NULL,
  `blend` varchar(100) DEFAULT NULL,
  `gsm` int(11) DEFAULT NULL,
  `placement` varchar(100) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry_accessory_fabric`
--

INSERT INTO `enquiry_accessory_fabric` (`id`, `enquiry_id`, `knit_structure`, `blend`, `gsm`, `placement`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 1, 'example', 'example', 1, 'example', NULL, '2024-10-14 17:27:26', NULL, NULL),
(2, 1, 'example', 'example', 1, 'example', NULL, '2024-10-14 17:28:42', NULL, NULL),
(3, 1, 'example', 'example', 1, 'example', NULL, '2024-10-14 17:29:48', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_main_fabric`
--

CREATE TABLE `enquiry_main_fabric` (
  `id` int(11) NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `knit_structure` varchar(100) DEFAULT NULL,
  `blend` varchar(100) DEFAULT NULL,
  `gsm` int(11) DEFAULT NULL,
  `finish` varchar(100) DEFAULT NULL,
  `dry_method` varchar(100) DEFAULT NULL,
  `placement` varchar(100) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry_main_fabric`
--

INSERT INTO `enquiry_main_fabric` (`id`, `enquiry_id`, `knit_structure`, `blend`, `gsm`, `finish`, `dry_method`, `placement`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(2, 1, 'example', 'example', 1, 'example', 'example', 'example', 1, '2024-10-14 17:27:26', NULL, NULL),
(3, 1, 'example', 'example', 1, 'example', 'example', 'example', 1, '2024-10-14 17:28:42', NULL, NULL),
(4, 1, 'example', 'example', 1, 'example', 'example', 'example', 1, '2024-10-14 17:29:48', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_spec_sheet`
--

CREATE TABLE `enquiry_spec_sheet` (
  `id` int(11) NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `point_of_measure` varchar(200) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `how_to_measure` varchar(200) DEFAULT NULL,
  `critical` int(11) DEFAULT NULL COMMENT '1=true, 2=false',
  `type` int(11) DEFAULT NULL COMMENT '1=full, 2=half',
  `tolerance` float DEFAULT NULL,
  `s` float DEFAULT NULL,
  `m` float DEFAULT NULL,
  `l` float DEFAULT NULL,
  `xl` float DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry_spec_sheet`
--

INSERT INTO `enquiry_spec_sheet` (`id`, `enquiry_id`, `point_of_measure`, `code`, `how_to_measure`, `critical`, `type`, `tolerance`, `s`, `m`, `l`, `xl`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 1, 'example', 'example', 'example', 1, 1, 1, 1, 1, 1, 1, NULL, '2024-10-14 17:27:26', NULL, NULL),
(2, 1, 'example', 'example', 'example', 1, 1, 1, 1, 1, 1, 1, NULL, '2024-10-14 17:28:42', NULL, NULL),
(3, 1, 'example', 'example', 'example', 1, 1, 1, 1, 1, 1, 1, NULL, '2024-10-14 17:29:48', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `enquiry_trims`
--

CREATE TABLE `enquiry_trims` (
  `id` int(11) NOT NULL,
  `enquiry_id` int(11) NOT NULL,
  `type` int(11) DEFAULT NULL COMMENT '1=button, 2=thread, 3=label',
  `description` varchar(100) DEFAULT NULL,
  `content` varchar(100) DEFAULT NULL,
  `placement` varchar(100) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquiry_trims`
--

INSERT INTO `enquiry_trims` (`id`, `enquiry_id`, `type`, `description`, `content`, `placement`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 1, 1, 'example', 'example', 'example', 1, '2024-10-14 17:29:48', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `department` int(11) NOT NULL,
  `designation` int(11) NOT NULL,
  `approve_level` int(11) NOT NULL,
  `status` int(11) DEFAULT 1,
  `role` int(11) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `employee_number`, `name`, `password`, `email`, `mobile`, `department`, `designation`, `approve_level`, `status`, `role`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 'EMP001', 'super admin', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'example@email.com', '0786541232', 0, 0, 0, 2, 1, NULL, '2024-04-06 11:21:16', 1, '2024-09-20 14:48:20'),
(8, 'EMP002', 'sanjana', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana@example.com', '0765623214', 0, 0, 0, 2, 2, 1, '2024-09-22 00:01:43', NULL, '2024-09-22 05:31:43'),
(9, 'EMP0020', 'sanjana2', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana2@example.com', '0118862354', 0, 0, 0, 2, 2, 1, '2024-09-22 00:16:32', NULL, '2024-09-22 05:46:32'),
(10, 'EMP003', 'sanjana33', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana33@example.com', '0118862354', 0, 0, 0, 2, 2, 1, '2024-09-22 00:28:19', NULL, '2024-09-22 05:58:19'),
(11, 'asdas', 'adasd', '$2a$10$ceeb2bcf7836hcd2c40b1uvpCZIgCCuogW4tKtAtjWnYbrL12O93i', 'noreply@switchsquid.com', '0778452145', 3, 2, 0, 2, 2, 1, '2024-10-16 12:02:05', NULL, '2024-10-16 17:32:05'),
(13, 'sdfsd', 'dfds', '$2a$10$ceeb2bcf7836hcd2c40b1uvpCZIgCCuogW4tKtAtjWnYbrL12O93i', 'noreply@swditchsquid.com', '077425896', 3, 3, 1, 2, 2, 1, '2024-10-17 21:54:37', NULL, '2024-10-18 03:24:37');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
(17, 9, '$2a$10$ceeb2bcf7836hcd2c40b1u23Ug.Ha6UvhNfRf3xI64CbIwQLg/bfK', '2024-09-22 00:16:50', '', 'Windows', 1),
(18, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uAM1C6nJyqlZ30E.4Gms7g5Q/c/sQbC.', '2024-10-15 22:39:14', '', '', 1),
(19, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ufXKdwzu6qq63JXioSdSfg4GDf1UQUEu', '2024-10-16 10:52:16', '', '', 1),
(20, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u1PcO.Q.MlIDk8PIZ7/c7n4aTk6FSIPe', '2024-10-17 20:03:52', '', '', 1),
(21, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uu4PzQkLEc7bY8z62q2Dk7sdfGgo9BCO', '2024-10-17 20:23:26', '', '', 1),
(22, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uogaMT0xVTM.B/7VBROSzBol6T2KFi72', '2024-10-18 01:39:19', '', 'Windows', 1),
(23, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uSmUykAABZq1rFW1yggOL/TM7aPco3cS', '2024-10-18 01:57:23', '', '', 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`),
  ADD KEY `d_add` (`added_by`),
  ADD KEY `d_updated` (`updated_by`);

--
-- Indexes for table `department_designation`
--
ALTER TABLE `department_designation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `d_d_id` (`department_id`),
  ADD KEY `d_d_added` (`added_by`),
  ADD KEY `d_d_updated` (`updated_by`);

--
-- Indexes for table `enquiry`
--
ALTER TABLE `enquiry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry_accessory_fabric`
--
ALTER TABLE `enquiry_accessory_fabric`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry_main_fabric`
--
ALTER TABLE `enquiry_main_fabric`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry_spec_sheet`
--
ALTER TABLE `enquiry_spec_sheet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enquiry_trims`
--
ALTER TABLE `enquiry_trims`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `customer_order`
--
ALTER TABLE `customer_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `department_designation`
--
ALTER TABLE `department_designation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `enquiry_accessory_fabric`
--
ALTER TABLE `enquiry_accessory_fabric`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enquiry_main_fabric`
--
ALTER TABLE `enquiry_main_fabric`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `enquiry_spec_sheet`
--
ALTER TABLE `enquiry_spec_sheet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `enquiry_trims`
--
ALTER TABLE `enquiry_trims`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user_login_session`
--
ALTER TABLE `user_login_session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

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
-- Constraints for table `department`
--
ALTER TABLE `department`
  ADD CONSTRAINT `d_add` FOREIGN KEY (`added_by`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `d_updated` FOREIGN KEY (`updated_by`) REFERENCES `user` (`id`);

--
-- Constraints for table `department_designation`
--
ALTER TABLE `department_designation`
  ADD CONSTRAINT `d_d_added` FOREIGN KEY (`added_by`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `d_d_id` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`),
  ADD CONSTRAINT `d_d_updated` FOREIGN KEY (`updated_by`) REFERENCES `user` (`id`);

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
