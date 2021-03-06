use DB_SC_Addendum
-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: DB_SC_Addendum
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addendumSectionMaster`
--

DROP TABLE IF EXISTS `addendumSectionMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addendumSectionMaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdBy` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdAtTimezone` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addendumSectionMaster`
--

LOCK TABLES `addendumSectionMaster` WRITE;
/*!40000 ALTER TABLE `addendumSectionMaster` DISABLE KEYS */;
INSERT INTO `addendumSectionMaster` VALUES (1,'Meds',11564,'2018-12-18 10:17:18','IST'),(2,'Substance use',11564,'2018-12-18 10:17:18','IST'),(3,'ROS',11564,'2018-12-18 10:17:18','IST'),(4,'MSE',11564,'2018-12-18 10:17:18','IST'),(5,'Self Harm',11564,'2018-12-18 10:17:18','IST'),(6,'Diagnosis',11564,'2018-12-18 10:17:18','IST'),(7,'Rule out diagnosis',11564,'2018-12-18 10:17:18','IST'),(8,'Hospitalisation',11564,'2018-12-18 10:17:18','IST'),(9,'Body Measurement',11564,'2018-12-18 10:17:18','IST'),(10,'Recommendations',11564,'2018-12-18 10:17:18','IST'),(11,'Reminders',11564,'2018-12-18 10:17:18','IST'),(12,'Service Statements',11564,'2018-12-18 10:17:18','IST'),(13,'Allergies',11564,'2018-12-18 10:17:18','IST');
/*!40000 ALTER TABLE `addendumSectionMaster` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
