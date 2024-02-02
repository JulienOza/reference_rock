CREATE DATABASE  IF NOT EXISTS `reference_rock` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reference_rock`;
-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: localhost    Database: reference_rock
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `band_members`
--

DROP TABLE IF EXISTS `band_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `band_members` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pict_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `bio` text,
  `quote` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `band_members`
--

LOCK TABLES `band_members` WRITE;
/*!40000 ALTER TABLE `band_members` DISABLE KEYS */;
INSERT INTO `band_members` VALUES 
(1,'../src/assets/photos/manu.webp','Manu','Guitare Lead','Guitariste autodidacte, Manu a joué dans de nombreux groupes avec lesquels il a fait les premières parties de Zazie, Calogero (alors avec les Charts) et Tri-Yann. Il sait motiver, mobiliser et guider l''équipe : il a toujours les mots qu''il faut. Bien qu''il soit un véritable geek de matos, une seule guitare trouve grâce à ses yeux : La Les Paul ! Pour Manu, un concert doit toujours être anticipé et ça passe aussi par l''équipement technique : il a toujours avec lui l''outil qu''il faut en cas de pépin. Sur scène, on aime le voir vivre la musique à travers ses solos mais aussi en jouant avec les autres musiciens. On le retrouve également aux choeurs. Le petit plus : il joue dans un groupe de compos appelé Né sous X.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
(2,'../src/assets/photos/seb.webp','Seb','Guitare Basse','Grand fan de rock, ska, reggae et soul, Seb a suivi le cursus jazz du conservatoire de Tourcoing. Avec lui la bonne ambiance est assurée en répète, toujours le mot qu''il faut pour détendre l''atmosphère et favoriser la bonne entente. En plus d''assurer les chœurs, il faut souligner qu''il n''est pas un bassiste comme les autres : pour l''anecdote, Seb joue avec un doigt plus court ! Si si... on vous passe les détails, mais il semblerait qu''il ait perdu malencontreusement un morceau il y a quelques années. Ce qui le rend si spécial, un bassiste qui ne lâche rien !! ','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
(3,'../src/assets/photos/guillaume.webp','Guillaume','Batterie','Formé à l''informatique en école d''ingé, il est réglé comme une boîte à rythme. De nature discrète, il est la parfaite contradiction quand il s''agit de donner de la puissance aux morceaux ! Son ambition de proposer un set de qualité lui fait noter les remarques des répètes même s''il lui arrive de les oublier en live. Il nous fait parfois rire : il est tellement à fond qu''il en perd parfois ses baguettes. Mais un bon batteur en a toujours une panoplie de rechange. C''est aussi un grand fan de Telephone.','Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
(4,'../src/assets/photos/julien.webp','Julien','Guitare Rythmique','Pourtant de formation classique, Julien sait s''adapter aux différents styles du rock en jonglant entre sa guitare electrique et sa guitare acoustique. Toujours très sérieux en répète, il n''hésite pas à suggérer des idées et à aider les membres du groupe. Quand il est satisfait il le fait savoir, il a toujours la phrase qui fait sourire après une bonne répète. On adore l''entendre faire des choeurs, ce qui doit sûrement attirer son fan club, il n''est pas rare d''entendre crier son nom pendant un concert...','Cheddar for ever'),
(5,'../src/assets/photos/aude.webp','Aude','Chant','La voix du groupe ! Elle est aujourd''hui accompagnée par une technicienne vocale après une formation en guitare classique au conservatoire. Son univers de balades en guitare-voix est à l''opposé de ce qu''elle chante avec Reference Rock : c''est que ce n''est pas elle qui a adopté le rock, c''est le rock qui l''a adoptée. Elle vit chaque prestation avec une énergie débordante et incarne chaque morceau. Sa voix grave donne un côté mystérieux et surprenant aux titres repris. Avec plus d''une corde à son arc, on doit aussi vous dire qu''elle compose ses propres chansons...','Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*!40000 ALTER TABLE `band_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_form`
--

DROP TABLE IF EXISTS `contact_form`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_form` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) DEFAULT NULL,
  `message` text,
  `time_stamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contact_form_users` (`user_id`),
  CONSTRAINT `fk_contact_form_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_form`
--

LOCK TABLES `contact_form` WRITE;
/*!40000 ALTER TABLE `contact_form` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_form` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 14:35:16
