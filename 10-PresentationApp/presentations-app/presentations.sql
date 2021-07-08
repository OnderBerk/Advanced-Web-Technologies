-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1:3308
-- Üretim Zamanı: 02 Ara 2020, 11:39:23
-- Sunucu sürümü: 8.0.18
-- PHP Sürümü: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `presentations`
--
CREATE DATABASE IF NOT EXISTS `presentations` DEFAULT CHARACTER SET utf8 COLLATE utf8_turkish_ci;
USE `presentations`;

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `topics`
--

DROP TABLE IF EXISTS `topics`;
CREATE TABLE IF NOT EXISTS `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_turkish_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `students` varchar(200) COLLATE utf8_turkish_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_turkish_ci;

--
-- Tablo döküm verisi `topics`
--

INSERT INTO `topics` (`id`, `title`, `status`, `students`) VALUES
(1, 'Apache Kafka', 0, ''),
(2, 'RabbitMQ', 0, ''),
(6, 'Kubernetes', 0, ''),
(5, 'Docker', 0, ''),
(7, 'Electron', 0, ''),
(8, 'React Native', 0, ''),
(9, 'PWA (Progressive Web)', 0, ''),
(10, 'Web Assembly', 0, ''),
(11, 'Redis', 0, ''),
(12, 'Firebase', 0, ''),
(13, 'GraphQL', 0, ''),
(14, 'Next.js', 0, ''),
(15, 'Three.js', 0, ''),
(16, 'TensorFlow.js', 0, ''),
(17, 'Serverless JS with AWS', 0, ''),
(18, 'Chrome Extension Dev.', 0, ''),
(19, 'Web Socket', 0, ''),
(20, 'Web Workers', 0, ''),
(21, 'Web RTC', 0, ''),
(22, 'Face-api.js', 0, ''),
(23, 'Socket.io', 0, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
