-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: pickengine
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `pickengine`
--

/*!40000 DROP DATABASE IF EXISTS `pickengine`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `pickengine` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `pickengine`;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_publicacion` int NOT NULL,
  `id_usuario` int DEFAULT NULL,
  `contenido` text NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_publicacion` (`id_publicacion`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,1,2,'This is a comment by Maria on Juan\'s post','2023-03-01 12:00:00'),(2,2,1,'This is a comment by Juan on Maria\'s post','2023-03-02 13:00:00');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conversacion_ia`
--

DROP TABLE IF EXISTS `conversacion_ia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `conversacion_ia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `titulo` varchar(30) NOT NULL,
  `visibilidad` enum('publica','privada') NOT NULL DEFAULT 'publica',
  PRIMARY KEY (`id`),
  UNIQUE KEY `titulo` (`titulo`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `conversacion_ia_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conversacion_ia`
--

LOCK TABLES `conversacion_ia` WRITE;
/*!40000 ALTER TABLE `conversacion_ia` DISABLE KEYS */;
INSERT INTO `conversacion_ia` VALUES (1,1,'Conversation1','publica'),(2,2,'Conversation2','privada');
/*!40000 ALTER TABLE `conversacion_ia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `etiqueta`
--

DROP TABLE IF EXISTS `etiqueta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `etiqueta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `contenido` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `contenido` (`contenido`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etiqueta`
--

LOCK TABLES `etiqueta` WRITE;
/*!40000 ALTER TABLE `etiqueta` DISABLE KEYS */;
INSERT INTO `etiqueta` VALUES (2,'Science'),(1,'Technology');
/*!40000 ALTER TABLE `etiqueta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modelos3d`
--

DROP TABLE IF EXISTS `modelos3d`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modelos3d` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `nombre` varchar(30) NOT NULL,
  `fecha` date NOT NULL,
  `ruta_modelo` varchar(255) NOT NULL,
  `visibilidad` enum('publica','privada') NOT NULL DEFAULT 'publica',
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `modelos3d_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modelos3d`
--

LOCK TABLES `modelos3d` WRITE;
/*!40000 ALTER TABLE `modelos3d` DISABLE KEYS */;
INSERT INTO `modelos3d` VALUES (1,1,'Model1','2023-04-01','/models/model1.obj','publica'),(2,2,'Model2','2023-04-02','/models/model2.obj','privada');
/*!40000 ALTER TABLE `modelos3d` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pregunta`
--

DROP TABLE IF EXISTS `pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pregunta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_conversacion` int NOT NULL,
  `contenido` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_conversacion` (`id_conversacion`),
  CONSTRAINT `pregunta_ibfk_1` FOREIGN KEY (`id_conversacion`) REFERENCES `conversacion_ia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pregunta`
--

LOCK TABLES `pregunta` WRITE;
/*!40000 ALTER TABLE `pregunta` DISABLE KEYS */;
INSERT INTO `pregunta` VALUES (1,1,'What is AI?'),(2,2,'How does machine learning work?');
/*!40000 ALTER TABLE `pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion`
--

DROP TABLE IF EXISTS `publicacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `contenido` text NOT NULL,
  `ruta_imagen` varchar(255) DEFAULT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `votos_favor` int DEFAULT '0',
  `votos_contra` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `publicacion_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `publicacion_chk_1` CHECK ((`votos_favor` >= 0)),
  CONSTRAINT `publicacion_chk_2` CHECK ((`votos_contra` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (1,1,'This is a post by Juan','/images/post1.jpg','2023-03-01 10:00:00',5,1),(2,2,'This is a post by Maria','/images/post2.jpg','2023-03-02 11:00:00',10,0);
/*!40000 ALTER TABLE `publicacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publicacion_etiqueta`
--

DROP TABLE IF EXISTS `publicacion_etiqueta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publicacion_etiqueta` (
  `id_etiqueta` int NOT NULL,
  `id_publicacion` int NOT NULL,
  PRIMARY KEY (`id_etiqueta`,`id_publicacion`),
  KEY `id_publicacion` (`id_publicacion`),
  CONSTRAINT `publicacion_etiqueta_ibfk_1` FOREIGN KEY (`id_etiqueta`) REFERENCES `etiqueta` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `publicacion_etiqueta_ibfk_2` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion_etiqueta`
--

LOCK TABLES `publicacion_etiqueta` WRITE;
/*!40000 ALTER TABLE `publicacion_etiqueta` DISABLE KEYS */;
INSERT INTO `publicacion_etiqueta` VALUES (1,1),(2,2);
/*!40000 ALTER TABLE `publicacion_etiqueta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reporte`
--

DROP TABLE IF EXISTS `reporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reporte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_publicacion` int DEFAULT NULL,
  `id_conversacion` int DEFAULT NULL,
  `id_comentario` int DEFAULT NULL,
  `id_modelo` int DEFAULT NULL,
  `contenido` text NOT NULL,
  `fecha` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_publicacion` (`id_publicacion`),
  KEY `id_conversacion` (`id_conversacion`),
  KEY `id_comentario` (`id_comentario`),
  KEY `id_modelo` (`id_modelo`),
  CONSTRAINT `reporte_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reporte_ibfk_2` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reporte_ibfk_3` FOREIGN KEY (`id_conversacion`) REFERENCES `conversacion_ia` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reporte_ibfk_4` FOREIGN KEY (`id_comentario`) REFERENCES `comentario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `reporte_ibfk_5` FOREIGN KEY (`id_modelo`) REFERENCES `modelos3d` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reporte`
--

LOCK TABLES `reporte` WRITE;
/*!40000 ALTER TABLE `reporte` DISABLE KEYS */;
INSERT INTO `reporte` VALUES (1,1,1,NULL,NULL,NULL,'Report on Juan\'s post','2023-05-01 14:00:00'),(2,2,NULL,1,NULL,NULL,'Report on Conversation1','2023-05-02 15:00:00');
/*!40000 ALTER TABLE `reporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respuesta`
--

DROP TABLE IF EXISTS `respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respuesta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_pregunta` int NOT NULL,
  `contenido` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_pregunta` (`id_pregunta`),
  CONSTRAINT `respuesta_ibfk_1` FOREIGN KEY (`id_pregunta`) REFERENCES `pregunta` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respuesta`
--

LOCK TABLES `respuesta` WRITE;
/*!40000 ALTER TABLE `respuesta` DISABLE KEYS */;
INSERT INTO `respuesta` VALUES (1,1,'AI stands for Artificial Intelligence.'),(2,2,'Machine learning is a subset of AI.');
/*!40000 ALTER TABLE `respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre1` varchar(30) NOT NULL,
  `nombre2` varchar(30) DEFAULT NULL,
  `apellido1` varchar(30) NOT NULL,
  `apellido2` varchar(30) DEFAULT NULL,
  `nick_name` varchar(30) DEFAULT NULL,
  `correo` varchar(250) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `ruta_foto_perfil` varchar(255) DEFAULT NULL,
  `seguidores` int DEFAULT '0',
  `fecha_registro` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rol` enum('admin','usuario') NOT NULL DEFAULT 'usuario',
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`),
  CONSTRAINT `usuario_chk_1` CHECK ((`seguidores` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Juan','Carlos','Perez','Gomez','juancarlos','juan@example.com','password123','/images/juan.jpg',10,'2023-01-01 05:00:00','usuario'),(2,'Maria','Luisa','Lopez','Martinez','marialuisa','maria@example.com','password456','/images/maria.jpg',20,'2023-02-01 05:00:00','usuario'),(7,'Stiven','Alejandro','Carvajal','Pérez','CokeinsZ','stivencarvajal205@gmail.com','1234',NULL,0,'2024-11-10 05:10:10','usuario');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-10  0:18:21
