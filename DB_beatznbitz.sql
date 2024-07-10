-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 18 sep. 2017 à 14:56
-- Version du serveur :  5.7.17
-- Version de PHP :  7.1.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `beatznbitz`
--

-- --------------------------------------------------------

--
-- Structure de la table `sequences`
--

CREATE TABLE `sequences` (
  `seq_id` int(11) NOT NULL,
  `seq_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `seq_user_id` int(11) NOT NULL,
  `seq_name` varchar(20) NOT NULL,
  `seq_duration` smallint(4) NOT NULL,
  `seq_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='pour les sauvegardes des sequences';

--
-- Déchargement des données de la table `sequences`
--

INSERT INTO `sequences` (`seq_id`, `seq_timestamp`, `seq_user_id`, `seq_name`, `seq_duration`, `seq_data`) VALUES
(13, '2017-09-02 13:42:17', 1, 'sequence00', 600, '37.666666666666664,50.16666666666667,62.66666666666667,75.16666666666667,87.66666666666667,0.16666666666666669,12.666666666666668,25.166666666666664;;;; ,37.666666666666664,0.16666666666666669 '),
(16, '2017-09-02 16:05:42', 1, 'Ma sÃ©quence', 600, '25.166666666666664;62.66666666666667;;50.16666666666667;62.66666666666667,75.16666666666667,87.66666666666667,12.666666666666668  '),
(17, '2017-09-02 18:39:42', 1, 'ma_sequence', 600, '50.16666666666667,75.16666666666667;37.666666666666664;;; '),
(18, '2017-09-02 19:13:36', 1, 'ma sequence', 600, '12.666666666666668;87.66666666666667,0.16666666666666669;62.66666666666667;25.166666666666664,37.666666666666664;50.16666666666667 '),
(19, '2017-09-02 19:40:22', 3, 'ma sequenceÃ©Ã©', 600, '25.166666666666664;28.291666666666664;47.041666666666664;40.791666666666664; '),
(20, '2017-09-03 11:59:58', 1, 'ma sequence', 600, '75.16666666666667;;;; '),
(21, '2017-09-06 13:13:19', 3, 'testsae', 600, '75.16666666666667,87.66666666666667;;;; '),
(22, '2017-09-06 13:15:41', 3, 'test2', 600, '50.16666666666667,62.66666666666667,75.16666666666667,87.66666666666667;50.16666666666667,62.66666666666667,75.16666666666667,87.66666666666667;50.16666666666667;; '),
(23, '2017-09-06 14:31:25', 1, 'testmessage', 600, '37.666666666666664,50.16666666666667;62.66666666666667;50.16666666666667;; '),
(24, '2017-09-06 14:32:03', 1, 'testmessag', 600, '75.16666666666667,87.66666666666667;;;; '),
(25, '2017-09-12 11:55:31', 1, 'test tempo', 150, '38.166666666666664,60.04166666666667,75.66666666666667,91.29166666666667,3.791666666666667,19.416666666666664;28.791666666666664,63.16666666666667,81.91666666666667,97.54166666666667,6.916666666666667,19.416666666666664;47.541666666666664,69.41666666666667,85.04166666666667,97.54166666666667,13.166666666666666;; '),
(26, '2017-09-13 16:05:19', 1, 'test bpm', 300, ';;;87.5,100,0; '),
(27, '2017-09-13 16:05:44', 1, 'test save', 300, ';25,37.5,50;;; ');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_pseudo` varchar(255) NOT NULL,
  `user_pass` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_date` date NOT NULL,
  `user_token` varchar(32) NOT NULL,
  `user_statut` tinyint(1) NOT NULL COMMENT '1 = confirmer',
  `user_rights` tinyint(1) NOT NULL COMMENT '1 = admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`user_id`, `user_pseudo`, `user_pass`, `user_email`, `user_date`, `user_token`, `user_statut`, `user_rights`) VALUES
(1, 'demo', '13ddf4b9149e7c3f20586798047fc1fdaedee77d', 'demo@demo.fr', '2017-08-23', '', 1, 1),
(2, 'user', 'User2017', 'user@user.user', '2017-08-28', '', 1, 0),
(3, 'testcompte', 'ee9b2d0e6f66116626c70a0713cbd129c0b81294', 'test@test.fr', '2017-09-06', '', 1, 0),
(4, 'testcompte2', 'ee9b2d0e6f66116626c70a0713cbd129c0b81294', 'test2@test.fr', '2017-09-06', '', 1, 0),
(5, 'testnew', '879a89482066167d84cbebba0d69731917fa66f9', 'test80@test.fr', '2017-09-13', '', 1, 0);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `sequences`
--
ALTER TABLE `sequences`
  ADD PRIMARY KEY (`seq_id`),
  ADD KEY `seq_user_id_fk` (`seq_user_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `sequences`
--
ALTER TABLE `sequences`
  MODIFY `seq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `sequences`
--
ALTER TABLE `sequences`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`seq_user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
