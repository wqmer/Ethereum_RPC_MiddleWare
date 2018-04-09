-- MySQL dump 10.13  Distrib 5.7.21, for macos10.13 (x86_64)
--
-- Host: localhost    Database: eth
-- ------------------------------------------------------
-- Server version	5.7.21

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
-- Current Database: `eth`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `eth` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `eth`;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `userId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `ethAddress` varchar(42) DEFAULT NULL,
  `ethBalance` decimal(8,2) unsigned zerofill DEFAULT '000000.00',
  `balacneUpdate` datetime DEFAULT NULL,
  `tokenBlance` decimal(8,0) unsigned zerofill DEFAULT '00000000',
  PRIMARY KEY (`userId`),
  UNIQUE KEY `userName_UNIQUE` (`userName`),
  UNIQUE KEY `ethAddress_UNIQUE` (`ethAddress`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'kimmy','wqmer11532@gmail.com',NULL,NULL,000000.00,NULL,00000000),(3,'test1','123gmail',NULL,NULL,000000.00,NULL,00000000),(4,'test2','email1',NULL,NULL,000000.00,NULL,00000000),(6,'test3','email2',NULL,NULL,000000.00,NULL,00000000),(7,'test4','email2',NULL,NULL,000000.00,NULL,00000000),(9,'test5','email2',NULL,NULL,000000.00,NULL,00000000),(15,'test7','email2',NULL,'0x6791b7fad43e824b0832213e6a16bbd6a785a3a8',000050.60,NULL,00000000),(19,'test10','email2',NULL,'0xe80c8bdfc0cdd341b5042438aa9bcc3b0af87a77',000017.76,NULL,00000000);
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-04-08 22:19:27
