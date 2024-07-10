-- phpMyAdmin SQL Dump
-- version 4.6.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Dim 27 Août 2017 à 17:34
-- Version du serveur :  5.7.18
-- Version de PHP :  5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sequenceur`
--

-- --------------------------------------------------------

--
-- Structure de la table `sequences`
--

CREATE TABLE `sequences` (
  `id` int(11) NOT NULL,
  `seq_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `seq_user_id` int(11) NOT NULL,
  `seq_name` varchar(20) NOT NULL,
  `seq_duration` smallint(4) NOT NULL,
  `seq_timeref` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='pour les sauvegardes des sequences';

--
-- Contenu de la table `sequences`
--

INSERT INTO `sequences` (`id`, `seq_timestamp`, `seq_user_id`, `seq_name`, `seq_duration`, `seq_timeref`) VALUES
(1, '2017-08-27 16:42:36', 1, 'Ma sequence 00', 120, '0,20,15,30;1,40,75,5;2,48');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `sequences`
--
ALTER TABLE `sequences`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `sequences`
--
ALTER TABLE `sequences`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
