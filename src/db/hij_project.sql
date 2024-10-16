-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 16, 2024 at 03:49 PM
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `customer_order`
--

INSERT INTO `customer_order` (`id`, `cr_number`, `buyer_id`, `enquiry_date`, `style_no`, `image`, `fabric_blend`, `combo_no`, `value_added_process`, `projected_qty_pieces`, `sam_per_piece`, `lapdip_no`, `expected_order_placement_date`, `quoted_price`, `fabric_price`, `fabric_consumption`, `yarn_price`, `lapdip_cost`, `trim_cost`, `tech_pack`, `gsm`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(3, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, 1.00, 'example', '2021-01-01', 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, NULL, 1.00, 1, 1, '2024-09-25 04:37:36', NULL, '2024-09-25 10:07:36'),
(4, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, 1.00, 'example', '2021-01-01', 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, NULL, 1.00, 1, 1, '2024-09-25 04:41:40', NULL, '2024-09-25 10:11:40'),
(5, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, 1.00, 'example', '2021-01-01', 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, NULL, 1.00, 1, 1, '2024-09-25 04:41:44', NULL, '2024-09-25 10:11:44'),
(6, 'example', 1, '2021-01-01', 'example', NULL, 'example', 'example', 'yes', 1, 1.00, 'example', '2021-01-01', 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, NULL, 1.00, 1, 1, '2024-09-25 04:41:45', NULL, '2024-09-25 10:11:45'),
(7, '565656', 3, '2024-09-27', '56', NULL, '556', '565', 'yes', 5656, 556.00, '55', '2024-09-25', 4545.00, 4545.00, 45545.00, 5656.00, 5656.00, 5656.00, NULL, 5656.00, 1, 1, '2024-09-25 04:44:37', NULL, '2024-09-25 10:14:37');

-- --------------------------------------------------------

--
-- Table structure for table `enquiry`
--

CREATE TABLE `enquiry` (
  `id` int(11) NOT NULL,
  `client` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `file` varchar(500) DEFAULT NULL,
  `development_type` int(11) DEFAULT NULL,
  `order_type` int(11) DEFAULT NULL,
  `sample_type` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `added_by` int(11) DEFAULT NULL,
  `added_time` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `enquiry`
--

INSERT INTO `enquiry` (`id`, `client`, `type`, `file`, `development_type`, `order_type`, `sample_type`, `status`, `added_by`, `added_time`, `updated_by`, `updated_time`) VALUES
(1, 1, 1, 'example.xlsx', 1, 1, 1, 1, 1, '2024-10-14 13:53:52', NULL, NULL),
(2, 1, 1, NULL, NULL, NULL, NULL, 1, 1, '2024-10-14 14:10:42', NULL, NULL),
(3, 1, 1, NULL, NULL, NULL, NULL, 1, 1, '2024-10-14 17:27:16', NULL, NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
(11, 'EMP003', 'sanjana33', '$2a$10$ceeb2bcf7836hcd2c40b1ujoA/EG5m0CBwk19mtdLfKX1ibV0dMSe', 'sanjana@gmail.com', '0767358574', 2, 2, 1, '2024-09-25 10:43:37', NULL, '2024-09-25 16:13:37');

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
(17, 9, '$2a$10$ceeb2bcf7836hcd2c40b1u23Ug.Ha6UvhNfRf3xI64CbIwQLg/bfK', '2024-09-22 00:16:50', '', 'Windows', 1),
(18, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uceAhBI0lrMnR5.aQ9ejZ0B/plb1ZrX2', '2024-09-24 07:30:21', '', 'Windows', 1),
(19, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u1MUllMaRfKnx5jouaI3thMVtoB9fL1C', '2024-09-24 10:55:32', '', '', 1),
(20, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uaAUBiqtwyCFxdS0E5aN6vls8iv7sEHK', '2024-09-24 10:56:22', '', '', 1),
(21, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uYB8dLDW.xRwNYkbb894EjHyxUFjkvFe', '2024-09-24 10:57:01', '', '', 1),
(22, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uYBAF1hu9bWlCZEMHMfcHhtqrirJ2ZNq', '2024-09-24 11:37:25', '', '', 1),
(23, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uYBAF1hu9bWlCZEMHMfcHhtqrirJ2ZNq', '2024-09-24 11:37:25', '', '', 1),
(24, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uQBUKw.ZfmTQ77jDeG3A2vf36NmfmevG', '2024-09-24 11:37:27', '', '', 1),
(25, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uQBUKw.ZfmTQ77jDeG3A2vf36NmfmevG', '2024-09-24 11:37:27', '', '', 1),
(26, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ui10M13Gfhg.Sh/fIFsFmK5eXuk6Art.', '2024-09-24 11:37:29', '', '', 1),
(27, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u01vtvnTMnVQcLWa.dAPGlZopgZIQYSq', '2024-09-24 11:37:38', '', '', 1),
(28, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u01vtvnTMnVQcLWa.dAPGlZopgZIQYSq', '2024-09-24 11:37:38', '', '', 1),
(29, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uCe0JH/J51CIgzMRVMEFDoOgKuDJedoO', '2024-09-24 11:37:46', '', '', 1),
(30, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uCe0JH/J51CIgzMRVMEFDoOgKuDJedoO', '2024-09-24 11:37:46', '', '', 1),
(31, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u4/6.wQu7ovPfGB1F6fK4Ms3FsGV.PMm', '2024-09-24 11:38:19', '', '', 1),
(32, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uD5aRpOa1EduCOb/eeQLp4dJDm1Gcya2', '2024-09-24 11:38:59', '', '', 1),
(33, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uBhGk.RfUZn5hXRIX18DQKj1OrPLBhm6', '2024-09-24 11:40:13', '', '', 1),
(34, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uBhGk.RfUZn5hXRIX18DQKj1OrPLBhm6', '2024-09-24 11:40:13', '', '', 1),
(35, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uBhGk.RfUZn5hXRIX18DQKj1OrPLBhm6', '2024-09-24 11:40:13', '', '', 1),
(36, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uBhGk.RfUZn5hXRIX18DQKj1OrPLBhm6', '2024-09-24 11:40:13', '', '', 1),
(37, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uDEq.Az0FIuck5QSoXWo91/yIy4iMghC', '2024-09-24 11:40:14', '', '', 1),
(38, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uDEq.Az0FIuck5QSoXWo91/yIy4iMghC', '2024-09-24 11:40:14', '', '', 1),
(39, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uVO4zzlGTknzlaYls0SDGrYKmWYU/phW', '2024-09-24 11:40:45', '', '', 1),
(40, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uzZhkl1Zf5Itl4UWJSdYkj6XjjuFc5ni', '2024-09-24 11:41:51', '', '', 1),
(41, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u9TUDuJ6hGp8gtbIZXE7SKIKt3yoEsJq', '2024-09-24 11:52:29', '', '', 1),
(42, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u9TUDuJ6hGp8gtbIZXE7SKIKt3yoEsJq', '2024-09-24 11:52:29', '', '', 1),
(43, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uicGRED3EX2lLSXuQT0I7EwLfyYHFeG.', '2024-09-24 11:56:54', '', '', 1),
(44, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u0pF49vleyi0.wKICIOoCmgrCCaAUxZS', '2024-09-24 11:57:43', '', '', 1),
(45, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uyYKIWcILRcDrT./1fTKmiPWmml7y/T.', '2024-09-24 12:17:07', '', '', 1),
(46, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ur.JkXktQzM4jwknlvirz6iFnxpXi75m', '2024-09-24 12:17:09', '', '', 1),
(47, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ue.Nnm93KrnVzDQ6xI4BIJlFo4i6fY7O', '2024-09-24 12:47:32', '', '', 1),
(48, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ue.Nnm93KrnVzDQ6xI4BIJlFo4i6fY7O', '2024-09-24 12:47:32', '', '', 1),
(49, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ue.Nnm93KrnVzDQ6xI4BIJlFo4i6fY7O', '2024-09-24 12:47:32', '', '', 1),
(50, 1, '$2a$10$ceeb2bcf7836hcd2c40b1upTNpqWWV6wUwptZPCKfCYi4rGvuhTxO', '2024-09-24 12:55:54', '', '', 1),
(51, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uUU/O16in.6Ki7mCKLjZvqIn3j2xh6xC', '2024-09-24 12:57:33', '', '', 1),
(52, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uUU/O16in.6Ki7mCKLjZvqIn3j2xh6xC', '2024-09-24 12:57:33', '', '', 1),
(53, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ubYC4fZxjSwrQ6QMfeZUy7QK5pIW2RV6', '2024-09-24 12:58:18', '', '', 1),
(54, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uTu8Vho5z36Ne/oi7MFGj0waJ5wLVSFa', '2024-09-24 12:58:28', '', '', 1),
(55, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uV5tiOFcWLgaV1LTC4MudRkKXnbz3cHC', '2024-09-24 12:58:46', '', '', 1),
(56, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uEdXa60Q5QtR3ktqeaXDZxkhpwFVKNFS', '2024-09-24 12:58:54', '', '', 1),
(57, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uHa1VO5fwqnfCXg7CRWAny4spZy3jZsq', '2024-09-24 13:07:30', '', '', 1),
(58, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uIpRFCSf43yzUg1YX8u1tataFYiOeGXq', '2024-09-24 15:10:16', '', '', 1),
(59, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uUs7x4CWQp6QGL6ycEtSshdP8Gidy50e', '2024-09-24 15:14:35', '', '', 1),
(60, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uFCazWiJiLoOtCWXyJ63v2NU4HWZk9s.', '2024-09-24 15:18:57', '', '', 1),
(61, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uUPJsQ54LLhrKBozZLqd5lBg4a/07CE2', '2024-09-24 16:13:07', '', '', 1),
(62, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ugtxmNHAvSTa9et.PzNA7uXkSlF82FNu', '2024-09-24 16:13:12', '', '', 1),
(63, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uICuKX.ZZ7OdIAJjHVvXf5vSlE0mkGSS', '2024-09-25 03:50:58', '', '', 1),
(64, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uWElrZ6aH/7paX0pE8XlJmyTv3XLJ9Ru', '2024-09-25 03:51:07', '', '', 1),
(65, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u6ORia0uovUjstXRnv/ZJFzvOkP/IAKu', '2024-09-25 04:36:39', '', 'Windows', 1),
(66, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ufAEon2LrSV5bRAdlJOE9XR0Kj3j3GCe', '2024-09-25 05:53:49', '', '', 1),
(67, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uS0LNq.RZC6pYrxS3uO.YXfd7jDi7IGu', '2024-09-25 11:18:13', '', '', 1),
(68, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uqYUX2RYKrKyBUjjs/urD7kQWXxvlG6u', '2024-09-25 11:18:50', '', '', 1),
(69, 1, '$2a$10$ceeb2bcf7836hcd2c40b1unGQHUYwHH.pLUb7GV1Y9rpjzqr0PwKK', '2024-09-26 00:51:08', '', '', 1),
(70, 1, '$2a$10$ceeb2bcf7836hcd2c40b1unGQHUYwHH.pLUb7GV1Y9rpjzqr0PwKK', '2024-09-26 00:51:08', '', '', 1),
(71, 1, '$2a$10$ceeb2bcf7836hcd2c40b1unGQHUYwHH.pLUb7GV1Y9rpjzqr0PwKK', '2024-09-26 00:51:08', '', '', 1),
(72, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u9sHPeD280J3q1oezDvhEhnKtxQyLE1.', '2024-09-26 00:51:10', '', '', 1),
(73, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uEbghjSG.yJLgjW9ReguIliqvtL4vNFe', '2024-09-26 01:35:31', '', '', 1),
(74, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uN44fp56Pk4xBsXwiO2l29H0FzrQt7dS', '2024-09-26 01:37:05', '', '', 1),
(75, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uvJbqkEhGGhCSo3YxFIGqSJLI3MvpUoy', '2024-09-26 11:29:09', '', '', 1),
(76, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uDT14ZbkPskO1wR42v3ZD/wbH2q0hgiu', '2024-10-13 12:17:21', '', '', 1),
(77, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ua0fh1TkojtQp4e3A6KXaqxlkc4lxRZe', '2024-10-13 23:00:50', '', '', 1),
(78, 1, '$2a$10$ceeb2bcf7836hcd2c40b1ur5Eq/R2O/NEd6piGJiwQ9mgmpQHHiya', '2024-10-14 13:36:11', '', 'Windows', 1),
(79, 1, '$2a$10$ceeb2bcf7836hcd2c40b1u4gh6p1wMyQ4k7ZSE2dXTcJkcN/ILhbq', '2024-10-14 17:20:29', '', 'Windows', 1),
(80, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uzkrnqfPPIZyvgdQ3Izz1V./UlohpMp2', '2024-10-15 14:00:01', '', '', 1),
(81, 1, '$2a$10$ceeb2bcf7836hcd2c40b1uq6TU56iUorOABCxr/3cPEFfdC.3A1fe', '2024-10-15 15:13:21', '', '', 1);

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
(2, 'example', 'EMP0055', 2, 9, '2024-09-22 00:17:42', 1, '2024-09-26 00:51:47'),
(4, 'sanjana33', 'EMP003', 3, 9, '2024-09-22 00:26:12', 1, '2024-09-25 11:14:01'),
(7, 'dilhara yy', 'EMP00235', 3, 1, '2024-09-25 11:17:49', 1, '2024-09-26 01:39:45'),
(8, 'dilhara aaaaa', 'EMP00239', 3, 1, '2024-09-25 11:18:42', 1, '2024-09-25 11:19:16');

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
-- AUTO_INCREMENT for table `enquiry`
--
ALTER TABLE `enquiry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `user_login_session`
--
ALTER TABLE `user_login_session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `user_register_request`
--
ALTER TABLE `user_register_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
