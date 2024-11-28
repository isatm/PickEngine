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
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (5,'Accesorios'),(4,'Baterías'),(7,'Cargadores'),(9,'Cuidado del coche'),(10,'Espejos'),(3,'Filtros'),(8,'Interior'),(11,'Limpieza'),(1,'Lubricantes'),(2,'Neumáticos'),(6,'Suspensión');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `etiqueta`
--

LOCK TABLES `etiqueta` WRITE;
/*!40000 ALTER TABLE `etiqueta` DISABLE KEYS */;
INSERT INTO `etiqueta` VALUES (5,''),(4,'Aceite'),(7,'Hoalasd fasdf'),(3,'Motor'),(6,'nothing'),(8,'Saludo'),(2,'Science'),(1,'Technology');
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
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_vendedor` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `ruta_imagen` varchar(255) DEFAULT NULL,
  `fecha_publicacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('disponible','vendido','agotado') DEFAULT 'disponible',
  PRIMARY KEY (`id`),
  KEY `id_vendedor` (`id_vendedor`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_vendedor`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producto_chk_1` CHECK ((`precio` > 0)),
  CONSTRAINT `producto_chk_2` CHECK ((`stock` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (11,1,'Aceite para motor','Aceite sintético para motor de alta calidad',29.99,50,'https://th.bing.com/th/id/OIP.Zra-VNw-uXlZU37p1_YEXgAAAA?w=144&h=150&c=7&r=0&o=5&pid=1.7','2024-11-22 04:53:35','disponible'),(12,1,'Llantas todo terreno','Juego de 4 llantas todo terreno',499.99,20,'https://th.bing.com/th/id/OIP.wrrZVvuCDNjv_GjAsGZ8DgAAAA?w=134&h=150&c=7&r=0&o=5&pid=1.7','2024-11-22 04:53:35','disponible'),(13,2,'Filtro de aire','Filtro de aire de alto rendimiento',19.99,100,'https://th.bing.com/th/id/OIP.D1PdXeATWVjjlh_D5gO8_wAAAA?w=145&h=144&c=7&r=0&o=5&pid=1.7','2024-11-22 04:53:35','disponible'),(14,2,'Batería de coche','Batería de larga duración para coche',89.99,30,'https://www.3mce.com.br/img/19daf70c01fa17f745ee9236445bc0b8.png','2024-11-22 04:53:35','disponible'),(15,2,'Limpiaparabrisas','Juego de limpiaparabrisas de alta calidad',15.99,75,'https://th.bing.com/th/id/OIP.tYtGgv09ifTfMnyeDe-M3wAAAA?w=131&h=140&c=7&r=0&o=5&pid=1.7','2024-11-22 04:53:35','disponible'),(16,1,'Amortiguadores','Amortiguadores para coche de alto rendimiento',199.99,40,'https://docs.aws.amazon.com/es_es/deepracer/latest/developerguide/images/chassis-parts/front-shock-absorber.png','2024-11-22 04:53:35','disponible'),(17,1,'Cargador de batería','Cargador de batería portátil para coche',49.99,25,'https://images-eu.ssl-images-amazon.com/images/I/71gtr-bQM5L._SL150_.jpg','2024-11-22 04:53:35','disponible'),(18,2,'Alfombrillas','Juego de alfombrillas para coche',39.99,60,'https://images-eu.ssl-images-amazon.com/images/I/81mKG4qY3SL._SL150_.jpg','2024-11-22 04:53:35','disponible'),(19,2,'Cera para coche','Cera de alta calidad para coche',9.99,150,'https://th.bing.com/th/id/OIP.k5YD_TjEqeKZQv7E6WxV7AAAAA?w=141&h=144&c=7&r=0&o=5&pid=1.7','2024-11-22 04:53:35','disponible'),(20,1,'Espejos laterales','Juego de espejos laterales para coche',79.99,35,'https://images-eu.ssl-images-amazon.com/images/I/51cPmm1W2vL._AC_US160_.jpg','2024-11-22 04:53:35','disponible'),(22,1,'Paño','pa;ielo',50000.00,1,'https://tse2.mm.bing.net/th/id/OIP.JCHG16VCyBwYJqgwZQspXgAAAA?w=147&h=150&c=7&r=0&o=5&pid=1.7','2024-11-22 20:16:20','disponible'),(23,1,'Paño','pa;ielo',50000.00,1,'https://tse2.mm.bing.net/th/id/OIP.JCHG16VCyBwYJqgwZQspXgAAAA?w=147&h=150&c=7&r=0&o=5&pid=1.7','2024-11-22 20:16:30','disponible'),(24,1,'Paño','pa;ielo',50000.00,1,'https://tse2.mm.bing.net/th/id/OIP.JCHG16VCyBwYJqgwZQspXgAAAA?w=147&h=150&c=7&r=0&o=5&pid=1.7','2024-11-22 20:16:46','disponible');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_categoria`
--

DROP TABLE IF EXISTS `producto_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_categoria` (
  `id_producto` int NOT NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_producto`,`id_categoria`),
  KEY `id_categoria` (`id_categoria`),
  CONSTRAINT `producto_categoria_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `producto_categoria_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_categoria`
--

LOCK TABLES `producto_categoria` WRITE;
/*!40000 ALTER TABLE `producto_categoria` DISABLE KEYS */;
INSERT INTO `producto_categoria` VALUES (11,1),(12,2),(13,3),(14,4),(15,5),(16,6),(17,7),(18,8),(19,9),(20,10),(22,11),(23,11),(24,11);
/*!40000 ALTER TABLE `producto_categoria` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publicacion`
--

LOCK TABLES `publicacion` WRITE;
/*!40000 ALTER TABLE `publicacion` DISABLE KEYS */;
INSERT INTO `publicacion` VALUES (1,1,'This is a post by Juan','/images/post1.jpg','2023-03-01 10:00:00',5,1),(2,2,'This is a post by Maria','/images/post2.jpg','2023-03-02 11:00:00',10,0),(3,1,'Hola gente\nSoy ADMIN btw',NULL,'2024-11-13 22:51:28',0,0),(4,1,'',NULL,'2024-11-15 15:08:16',0,0),(5,1,'Aburridooooo',NULL,'2024-11-15 15:24:57',0,0),(6,1,'JEJEJEJ soy un loquillo',NULL,'2024-11-22 00:00:15',0,0),(7,1,'Hola mundo',NULL,'2024-11-22 14:03:10',0,0);
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
INSERT INTO `publicacion_etiqueta` VALUES (1,1),(2,2),(3,3),(4,3),(5,4),(6,5),(7,6),(8,7);
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
  `id_producto` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_publicacion` (`id_publicacion`),
  KEY `id_conversacion` (`id_conversacion`),
  KEY `id_comentario` (`id_comentario`),
  KEY `id_modelo` (`id_modelo`),
  KEY `fk_reporte_producto` (`id_producto`),
  CONSTRAINT `fk_reporte_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`),
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
INSERT INTO `reporte` VALUES (1,1,1,NULL,NULL,NULL,'Report on Juan\'s post','2023-05-01 14:00:00',NULL),(2,2,NULL,1,NULL,NULL,'Report on Conversation1','2023-05-02 15:00:00',NULL);
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
-- Table structure for table `transaccion`
--

DROP TABLE IF EXISTS `transaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaccion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_comprador` int NOT NULL,
  `id_producto` int NOT NULL,
  `cantidad` int NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `fecha_compra` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('pendiente','completada','cancelada') DEFAULT 'pendiente',
  PRIMARY KEY (`id`),
  KEY `id_comprador` (`id_comprador`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `transaccion_ibfk_1` FOREIGN KEY (`id_comprador`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaccion_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `transaccion_chk_1` CHECK ((`cantidad` > 0)),
  CONSTRAINT `transaccion_chk_2` CHECK ((`total` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaccion`
--

LOCK TABLES `transaccion` WRITE;
/*!40000 ALTER TABLE `transaccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaccion` ENABLE KEYS */;
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
  `telefono` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correo` (`correo`),
  UNIQUE KEY `telefono` (`telefono`),
  CONSTRAINT `usuario_chk_1` CHECK ((`seguidores` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Juan','Carlos','Perez','Gomez','juancarlos','juan@example.com','$2b$10$avhAUAaJJdbnl.6393aJOu6ouNmZ3FiVpo0dae9Bym9US5PYKv2UK','/images/juan.jpg',10,'2023-01-01 05:00:00','usuario','123'),(2,'Maria','Luisa','Lopez','Martinez','marialuisa','maria@example.com','$2b$10$1l7sT5GAZjmtxIMJRFSs7ePGG2doVj4w0LJiDlpeqCJkV2tfwBiqq','/images/maria.jpg',20,'2023-02-01 05:00:00','usuario','456'),(7,'Stiven','Alejandro','Carvajal','Pérez','CokeinsZ','stivencarvajal205@gmail.com','1234',NULL,0,'2024-11-10 05:10:10','usuario',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'pickengine'
--

--
-- Dumping routines for database 'pickengine'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 17:45:43
