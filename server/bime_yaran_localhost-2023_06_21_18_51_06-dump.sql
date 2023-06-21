-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bime_yaran
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `branches`
--

DROP TABLE IF EXISTS `branches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branches` (
  `branch_id` int NOT NULL,
  `branch_name` varchar(255) NOT NULL,
  `branch_address` varchar(255) DEFAULT NULL,
  `branch_phone` varchar(255) DEFAULT NULL,
  `branch_type` varchar(255) NOT NULL,
  PRIMARY KEY (`branch_id`),
  UNIQUE KEY `branches_pk2` (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branches`
--

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;
INSERT INTO `branches` VALUES (1,'سما','خیابان بهشتی - بالاتر از پارک دولت','+۲۱-۲۵۶۵۶۵۶','sales'),(2,'آزادگان','خیابان مدنی - جنب مجتمع تجاری البرز','+۲۶-۵۳۵۳۵۳۵','damage'),(3,'نیرو هوایی','خیابان روستا - نبش کوچه ی سیزدهم','+۲۶-۴۵۴۵۴۵۴','sales'),(4,'جمهوری','میدان جمهوری - جنب بانک ملی','+۲۱-۴۳۴۳۲۲۱','sales,damage');
/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carinsurance`
--

DROP TABLE IF EXISTS `carinsurance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carinsurance` (
  `CinsuranceID` int NOT NULL,
  `UserID` int NOT NULL,
  `CarinsuranceType` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `dateissude` date NOT NULL,
  `dateexpire` date NOT NULL,
  `Carinfo` varchar(50) DEFAULT NULL,
  `Branch` int NOT NULL,
  PRIMARY KEY (`CinsuranceID`),
  KEY `ConBranch-BranchID` (`Branch`),
  KEY `Price` (`Price`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `carinsurance_ibfk_1` FOREIGN KEY (`Price`) REFERENCES `insurance` (`InsuranceID`),
  CONSTRAINT `carinsurance_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`user_id`),
  CONSTRAINT `ConBranch-BranchID` FOREIGN KEY (`Branch`) REFERENCES `branches` (`branch_id`),
  CONSTRAINT `carinsurance_chk_1` CHECK (((`CarinsuranceType` = _utf8mb4'Motor') or (0 <> _utf8mb4'Body') or (0 <> _utf8mb4'3rdPerson')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carinsurance`
--

LOCK TABLES `carinsurance` WRITE;
/*!40000 ALTER TABLE `carinsurance` DISABLE KEYS */;
/*!40000 ALTER TABLE `carinsurance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `client` (
  `ID` int NOT NULL,
  `Insurance_Type` int NOT NULL,
  `branch` int NOT NULL,
  `UserID` int NOT NULL,
  `UserName` varchar(50) NOT NULL,
  `LastName` varchar(50) NOT NULL,
  `address` varchar(250) NOT NULL,
  `phone` int NOT NULL,
  `birthday` date DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `client_insurance__fk` (`Insurance_Type`),
  KEY `client_branches_branch_id_fk` (`branch`),
  CONSTRAINT `client_branches_branch_id_fk` FOREIGN KEY (`branch`) REFERENCES `branches` (`branch_id`),
  CONSTRAINT `client_ibfk_1` FOREIGN KEY (`ID`) REFERENCES `users` (`user_id`),
  CONSTRAINT `client_insurance__fk` FOREIGN KEY (`Insurance_Type`) REFERENCES `insurance` (`InsuranceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmployeeID` int NOT NULL,
  `Ename` varchar(50) DEFAULT NULL,
  `Nnum` int NOT NULL,
  `Salary` int NOT NULL,
  `Branch` int DEFAULT NULL,
  PRIMARY KEY (`EmployeeID`),
  UNIQUE KEY `Nnum` (`Nnum`),
  KEY `Branch` (`Branch`),
  CONSTRAINT `EmpID to UserID` FOREIGN KEY (`EmployeeID`) REFERENCES `users` (`user_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`Branch`) REFERENCES `branches` (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fireinsurance`
--

DROP TABLE IF EXISTS `fireinsurance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fireinsurance` (
  `FireinsuranceID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `Price` int NOT NULL,
  `Dateissude` date NOT NULL,
  `DateExpire` date NOT NULL,
  `Housearea` int NOT NULL,
  `branch` int NOT NULL,
  PRIMARY KEY (`FireinsuranceID`),
  KEY `UserID` (`UserID`),
  KEY `branch` (`branch`),
  CONSTRAINT `fireinsurance_ibfk_1` FOREIGN KEY (`FireinsuranceID`) REFERENCES `insurance` (`InsuranceID`),
  CONSTRAINT `fireinsurance_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`user_id`),
  CONSTRAINT `fireinsurance_ibfk_3` FOREIGN KEY (`branch`) REFERENCES `branches` (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fireinsurance`
--

LOCK TABLES `fireinsurance` WRITE;
/*!40000 ALTER TABLE `fireinsurance` DISABLE KEYS */;
/*!40000 ALTER TABLE `fireinsurance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `health insurance`
--

DROP TABLE IF EXISTS `health insurance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `health insurance` (
  `HealthInID` int NOT NULL AUTO_INCREMENT,
  `Branch` int NOT NULL,
  `UserID` int NOT NULL,
  `Price` int NOT NULL,
  `Dateissude` date NOT NULL,
  `DateExpire` date NOT NULL,
  `Age` int NOT NULL,
  PRIMARY KEY (`HealthInID`),
  KEY `UserID` (`UserID`),
  KEY `Branch` (`Branch`),
  KEY `Price` (`Price`),
  CONSTRAINT `health insurance_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`user_id`),
  CONSTRAINT `health insurance_ibfk_2` FOREIGN KEY (`Branch`) REFERENCES `branches` (`branch_id`),
  CONSTRAINT `health insurance_ibfk_3` FOREIGN KEY (`Price`) REFERENCES `insurance` (`InsuranceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health insurance`
--

LOCK TABLES `health insurance` WRITE;
/*!40000 ALTER TABLE `health insurance` DISABLE KEYS */;
/*!40000 ALTER TABLE `health insurance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurance`
--

DROP TABLE IF EXISTS `insurance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insurance` (
  `InsuranceID` int NOT NULL AUTO_INCREMENT,
  `InsuranceName` varchar(50) NOT NULL,
  `Price` int NOT NULL,
  `Description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`InsuranceID`),
  CONSTRAINT `insurance_chk_1` CHECK (((`InsuranceName` = _utf8mb4'Car') or (`InsuranceName` = _utf8mb4'Fire') or (`InsuranceName` = _utf8mb4'Liability') or (`InsuranceName` = _utf8mb4'Life')))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurance`
--

LOCK TABLES `insurance` WRITE;
/*!40000 ALTER TABLE `insurance` DISABLE KEYS */;
INSERT INTO `insurance` VALUES (1,'Car',500,NULL),(2,'Fire',600,NULL),(3,'Life',700,NULL),(4,'Liability',800,NULL);
/*!40000 ALTER TABLE `insurance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `TransactionID` int NOT NULL AUTO_INCREMENT,
  `UserID` int NOT NULL,
  `Branch` int NOT NULL,
  `Date` date NOT NULL,
  `Amount` int NOT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `InsuranceType` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`TransactionID`),
  KEY `UserID` (`UserID`),
  KEY `Branch` (`Branch`),
  CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`user_id`),
  CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`Branch`) REFERENCES `branches` (`branch_id`),
  CONSTRAINT `transaction_chk_1` CHECK (((`InsuranceType` = _utf8mb4'Damage') or (0 <> _utf8mb4'Claim')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`),
  CONSTRAINT `users_chk_1` CHECK (((`user_type` = _utf8mb4'admin') or (0 <> _utf8mb4'owner') or (0 <> _utf8mb4'user')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
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

-- Dump completed on 2023-06-21 18:51:06
