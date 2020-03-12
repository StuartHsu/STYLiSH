-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: stylish
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `campaigns`
--

DROP TABLE IF EXISTS `campaigns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `campaigns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL COMMENT 'Product id.',
  `picture` varchar(255) NOT NULL COMMENT 'Picture URL.',
  `story` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Multiline story.',
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `campaigns_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaigns`
--

LOCK TABLES `campaigns` WRITE;
/*!40000 ALTER TABLE `campaigns` DISABLE KEYS */;
INSERT INTO `campaigns` VALUES (1,1,'/assets/keyvisuals/698827.jpg','於是 我也想要給你 一個那麼美好的自己。 不朽《與自己和好如初》'),(2,2,'/assets/keyvisuals/702629.jpg','永遠 展現自信與專業 無法抵擋的男人魅力。 復古《再一次經典》'),(3,3,'/assets/keyvisuals/237896.jpg','瞬間 在城市的角落 找到失落多時的記憶。 印象《都會故事集》'),(4,4,'/assets/keyvisuals/819739.jpg','哈哈哈'),(5,5,'/assets/keyvisuals/885975.jpg','哇哈哈哈測試'),(6,5,'/assets/keyvisuals/78773.jpg','哈哈'),(7,6,'/assets/keyvisuals/434369.jpg','好耶'),(8,7,'哈哈','/assets/keyvisuals/660709.jpg'),(9,7,'哈哈','/assets/keyvisuals/549196.jpg'),(10,8,'23','/assets/keyvisuals/601992.jpg'),(11,8,'哈哈ㄏ','/assets/keyvisuals/401795.jpg'),(12,8,'dasdad','/assets/keyvisuals/874596.jpg'),(13,8,'/assets/keyvisuals/451813.jpg','sakldhj');
/*!40000 ALTER TABLE `campaigns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderlists`
--

DROP TABLE IF EXISTS `orderlists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `orderlists` (
  `order_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Order id.',
  `product_id` bigint(20) unsigned NOT NULL COMMENT 'Product id.',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Product''s name.',
  `price` int(255) NOT NULL COMMENT 'Product''s price',
  `color_code` varchar(20) NOT NULL COMMENT 'Color''s hex code.',
  `color_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Color''s name.',
  `size` varchar(255) NOT NULL COMMENT 'Product order size',
  `qty` int(255) NOT NULL COMMENT 'Product order quantity.',
  `payment_id` bigint(20) unsigned NOT NULL COMMENT 'Payment id.',
  PRIMARY KEY (`order_id`),
  KEY `payment_id` (`payment_id`),
  CONSTRAINT `orderlists_ibfk_1` FOREIGN KEY (`payment_id`) REFERENCES `payments` (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderlists`
--

LOCK TABLES `orderlists` WRITE;
/*!40000 ALTER TABLE `orderlists` DISABLE KEYS */;
INSERT INTO `orderlists` VALUES (1,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,1),(2,4,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,4),(3,4,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,5),(4,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,6),(5,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,7),(6,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,8),(7,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,9),(8,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,10),(9,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,11),(10,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,12),(11,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,13),(12,2,'活力花紋長筒牛仔褲',1234,'FF0000','紅','M',1,14),(13,1,'冬季褲子',1234,'FF0000','紅','M',5,15),(14,1,'冬季褲子',1234,'FF0000','紅','M',5,16),(15,1,'冬季褲子',1234,'FF0000','紅','M',5,17),(16,1,'冬季褲子',1234,'FF0000','紅','M',5,18),(17,1,'冬季褲子',1234,'FF0000','紅','M',5,19),(18,1,'冬季褲子',1234,'FF0000','紅','M',5,20),(19,1,'冬季褲子',1234,'FF0000','紅','M',5,21),(20,1,'冬季褲子',1234,'FF0000','紅','M',5,22),(21,1,'冬季褲子',1234,'FF0000','紅','M',5,23),(22,1,'冬季褲子',1234,'FF0000','紅','M',5,24),(23,1,'冬季褲子',1234,'FF0000','紅','M',5,25),(24,1,'冬季褲子',1234,'FF0000','紅','M',5,26),(25,1,'冬季褲子',1234,'FF0000','紅','M',5,27),(26,1,'冬季褲子',1234,'FF0000','紅','M',5,28),(27,1,'冬季褲子',1234,'FF0000','紅','M',5,29),(28,1,'冬季褲子',1234,'FF0000','紅','M',5,30),(29,1,'冬季褲子',1234,'FF0000','紅','M',5,31),(30,1,'冬季褲子',1234,'FF0000','紅','M',5,32),(31,1,'冬季褲子',1234,'FF0000','紅','M',5,33),(32,1,'冬季褲子',1234,'FF0000','紅','M',5,34),(33,1,'冬季褲子',1234,'FF0000','紅','M',5,35),(34,2,'外套',1234,'FF0000','紅','M',5,36),(35,1,'冬季褲子',1234,'FF0000','紅','M',5,37),(36,2,'外套',1234,'FF0000','紅','M',5,38),(37,1,'冬季褲子',1234,'FF0000','紅','M',5,39),(38,1,'冬季褲子',1234,'FF0000','紅','M',5,40),(39,1,'冬季褲子',1234,'FF0000','紅','M',5,41),(40,2,'外套',1234,'FF0000','紅','M',5,42),(41,3,'防風外套',1234,'FF0000','紅','M',4,43),(42,1,'冬季褲子',1234,'FF0000','紅','M',5,44),(43,2,'外套',1234,'FF0000','紅','M',5,45),(44,2,'外套',1234,'FF0000','紅','M',5,46),(45,2,'外套',1234,'FF0000','紅','M',5,47),(46,2,'外套',1234,'FF0000','紅','M',5,48),(47,1,'冬季褲子',1234,'FF0000','紅','M',5,49),(48,1,'冬季褲子',1234,'FF0000','紅','M',5,50),(49,1,'冬季褲子',1234,'FF0000','紅','M',5,51),(50,1,'冬季褲子',1234,'FF0000','紅','M',5,52),(51,1,'冬季褲子',1234,'FF0000','紅','M',5,53),(52,1,'冬季褲子',1234,'FF0000','紅','M',5,54),(53,1,'冬季褲子',1234,'FF0000','紅','M',5,55),(54,1,'冬季褲子',1234,'FF0000','紅','M',5,56),(55,1,'冬季褲子',1234,'FF0000','紅','M',5,57),(56,1,'冬季褲子',1234,'FF0000','紅','M',5,58),(57,1,'冬季褲子',1234,'FF0000','紅','M',5,59),(58,1,'冬季褲子',1234,'FF0000','紅','M',5,60),(59,1,'冬季褲子',1234,'FF0000','紅','M',5,61),(60,3,'防風外套',1234,'FF0000','紅','M',4,62),(61,4,'手錶',1234,'FF0000','紅','M',3,63),(62,2,'外套',1234,'FF0000','紅','M',5,64),(63,2,'外套',1234,'FF0000','紅','M',5,65),(64,1,'冬季褲子',1234,'FF0000','紅','M',5,66),(65,1,'冬季褲子',1234,'FF0000','紅','M',5,67),(66,1,'冬季褲子',1234,'FF0000','紅','M',5,68),(67,1,'冬季褲子',1234,'FF0000','紅','M',5,69),(68,5,'手套',1234,'FF0000','紅','M',2,70),(69,6,'測試產品',1234,'FF0000','紅','M',23,71),(70,13,'眼鏡',1234,'FF0000','紅','M',2,72);
/*!40000 ALTER TABLE `orderlists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `payments` (
  `payment_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'Payment id.',
  `shipping` varchar(255) NOT NULL COMMENT 'Shipping.',
  `payment` varchar(255) NOT NULL COMMENT 'Payment.',
  `subtotal` int(255) NOT NULL COMMENT 'Subtotal pay.',
  `freight` int(255) NOT NULL COMMENT 'Freight.',
  `total` int(255) NOT NULL COMMENT 'Total pay.',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'User''s name.',
  `phone` varchar(255) NOT NULL COMMENT 'User''s phone',
  `email` varchar(255) NOT NULL COMMENT 'User''s email.',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'User''s address.',
  `time` varchar(255) NOT NULL COMMENT 'Shipping time.',
  `pay_status` varchar(255) NOT NULL COMMENT 'Pay status.',
  `user_token` varchar(255) DEFAULT NULL COMMENT 'User''s token.',
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
INSERT INTO `payments` VALUES (1,'delivery','credit_card',1234,14,1248,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(2,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(3,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(4,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(5,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(6,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(7,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(8,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(9,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(10,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(11,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(12,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(13,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','fail',NULL),(14,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(15,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(16,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(17,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(18,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(19,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(20,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(21,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(22,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(23,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(24,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(25,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(26,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(27,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(28,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(29,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(30,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(31,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(32,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(33,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(34,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(35,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(36,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(37,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(38,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(39,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(40,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(41,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(42,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(43,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(44,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(45,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(46,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(47,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(48,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(49,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(50,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(51,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(52,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(53,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(54,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(55,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(56,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(57,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(58,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(59,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(60,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(61,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(62,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(63,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(64,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(65,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(66,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(67,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(68,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','unpaid',NULL),(69,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(70,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(71,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL),(72,'delivery','credit_card',1234,14,1300,'Luke','0987654321','luke@gmail.com','市政府站','morning','paid',NULL);
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT 'Product id.',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Product title.',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Product description.',
  `price` bigint(20) unsigned NOT NULL COMMENT 'Product price.',
  `texture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Product texture.',
  `wash` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'The way we can wash the product.',
  `place` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Place of production.',
  `note` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'The note of product.',
  `story` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Product multiline story.',
  `main_image` varchar(255) DEFAULT NULL COMMENT 'Main image.',
  `campaign` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Title of the hots section.',
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT 'Product category.',
  `images` varchar(255) DEFAULT NULL COMMENT 'Other images.',
  PRIMARY KEY (`id`),
  KEY `category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'冬季褲子','很保暖',5000,'棉 100%','手洗，溫水','中國','顆顆','O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.','assets/1/main.jpg','冬季特賣','women','assets/1/main.jpg,assets/1/0.jpg,assets/1/1.jpg'),(2,'外套','就外套啊',9000,'塑膠','烘烤','新加坡','痾','很有故事','assets/2/main.jpg','快來買啊','women','assets/2/main.jpg,assets/2/0.jpg,assets/2/1.jpg'),(3,'防風外套','非常防風，還順便防雨',7200,'尼龍','水洗','中國','非常耐穿','來自青康藏高原的...嗯...外套','assets/3/main.jpg','','men','assets/3/main.jpg,assets/3/0.jpg,assets/3/1.jpg'),(4,'手錶','昂貴的手錶',9999,'金屬','乾洗','瑞士','買這個靠信仰','來自高貴的瑞士','assets/4/main.jpg','','accessories','assets/4/main.jpg,assets/4/0.jpg,assets/4/1.jpg'),(5,'手套','暖心手套',3000,'塑膠','不用','黑心國家','買了代表你是盤子','買就對了','assets/5/main.jpg','','accessories','assets/5/main.jpg,assets/5/0.jpg,assets/5/1.jpg'),(6,'測試產品','測試用',345,'測試材質','測試洗一下r','測試地','就測試咩','還在測試','assets/6/main.jpg','顆顆','men','assets/6/main.jpg,assets/6/0.jpg,assets/6/1.jpg'),(7,'不好','簡述',50,'舒服','亂洗','台灣','沒有','啥鬼','assets/7/main.jpg','顆顆','men','assets/7/main.jpg,assets/7/0.jpg,assets/7/1.jpg'),(8,'不好','溫暖',30,'羊毛','亂洗','台灣','沒有','啥鬼','assets/8/main.jpg','好的','accessories','assets/8/main.jpg,assets/8/0.jpg,assets/8/1.jpg'),(9,'針織毛帽','相當保暖',500,'羊毛','手洗','冰島','便宜好用','來自冰島','assets/9/208396.jpg','','accessories','assets/9/208396.jpg,assets/9/660349.jpg,assets/9/875957.jpg'),(10,'時尚手錶','時尚感',4999,'金屬製','擦拭','泰國','來自馬來西亞','O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.','assets/keyvisuals/351636.jpg','','accessories','assets/keyvisuals/351636.jpg,assets/keyvisuals/340141.jpg,assets/keyvisuals/396691.jpg'),(11,'高級手機','耐操好用',4799,'金屬製','酒精擦拭','美國','最新款手機','輪班星人血汗製作','assets/keyvisuals/856504.jpg','','accessories','assets/keyvisuals/856504.jpg,assets/keyvisuals/93929.jpg,assets/keyvisuals/940931.jpg'),(12,'圓領毛衣','很透氣',499,'流蘇','水洗','泰國','請勿重摔','O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.','assets/keyvisuals/502048.jpg','','women','assets/keyvisuals/502048.jpg,assets/keyvisuals/207147.jpg,assets/keyvisuals/265386.jpg'),(13,'眼鏡','懷舊眼鏡',320,'金屬','水洗','台灣','懷舊復古老眼鏡，戴上去什麼都看不到','O.N.S is all about options, which is why we took our staple polo shirt and upgraded it with slubby linen jersey, making it even lighter for those who prefer their summer style extra-breezy.','assets/keyvisuals/927732.jpg','','accessories','assets/keyvisuals/927732.jpg,assets/keyvisuals/101150.jpg,assets/keyvisuals/489444.jpg'),(123,'手套','手套',500,'綿','水洗','美國','沒有','','assets/123/main.jpg','冬季特賣','accessories','assets/123/main.jpg,assets/123/0.jpg,assets/123/1.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'User''s id.',
  `name` varchar(255) NOT NULL COMMENT 'User''s name.',
  `email` varchar(255) NOT NULL COMMENT 'User''s email',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'User''s password.',
  `provider` varchar(20) NOT NULL COMMENT 'Service provider.',
  `picture` varchar(255) NOT NULL COMMENT 'User''s picture.',
  `access_expired` int(30) NOT NULL COMMENT 'User''s expired.',
  `access_token` varchar(255) NOT NULL COMMENT 'User''s token.',
  `token_time` datetime NOT NULL COMMENT 'Token time.',
  `expired_time` datetime NOT NULL COMMENT 'Token expired time.',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'111','12@12','6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918','facebook','https://schoolvoyage.ga/images/123498.png',30,'82b7694149499639038a6744713a6a8be8a47a98881fab23dfc4e0ff8fc52288','2019-12-12 09:30:20','2019-12-12 09:35:20'),(2,'123','1@3','535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790','facebook','https://schoolvoyage.ga/images/123498.png',30,'49d0ea001a13d6a387867351bd3332db3fdef21137989cdcb195c1631fc8f1b3','2019-12-12 17:34:00','2019-12-12 09:35:20'),(3,'122','12@21','6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918','facebook','https://schoolvoyage.ga/images/123498.png',30,'5a090208714615f158ee4cd78b60dc88081561cd32e6bf278baf341d29a83c1b','2019-12-12 17:36:52','2019-12-12 09:35:20'),(4,'12333','w@3','e29c9c180c6279b0b02abd6a1801c7c04082cf486ec027aa13515e4f3884bb6b','facebook','https://schoolvoyage.ga/images/123498.png',30,'26693414f4bebc00f8565127b164aeff3fdc0b50819299e66b3c02b0a75b7e0c','2019-12-12 17:37:53','2019-12-12 09:35:20'),(5,'412','123@321','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','facebook','https://schoolvoyage.ga/images/123498.png',30,'c6f9d50c5e65f035b7993dfb65aa358e505b54525b1c5addcd174f527630824c','2019-12-12 17:48:40','2019-12-12 17:49:10'),(6,'341','213@55','1863f21a40d3cae12f1862c79887f6015686b755820b27d2395bed8cf538e0af','facebook','https://schoolvoyage.ga/images/123498.png',50,'c7fddb9f27519a2c0b0bc810090973a9e0abe8a19b41960c14eb8dc046441522','2019-12-12 17:49:15','2019-12-12 17:50:05'),(7,'3234','2134@231','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','facebook','https://schoolvoyage.ga/images/123498.png',50,'6bd1762b2cc960bc0be2436befecd4ec4ad7db945ec57debfe121106c5d6f1d6','2019-12-12 18:00:23','2019-12-12 18:01:13'),(8,'13234','2134@2311','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','facebook','https://schoolvoyage.ga/images/123498.png',50,'84abcb490d9b2ffb8faeaf8a069d792f5d14743688ac7b30c316f64401856099','2019-12-12 18:01:04','2019-12-12 18:01:54'),(9,'132341','2134@23111','6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b','facebook','https://schoolvoyage.ga/images/123498.png',50,'e9ac9baff996683f0fea9e3646fba6c245f2707890e2b0c359d5d96991722e73','2019-12-12 18:01:55','2019-12-12 18:02:45'),(10,'12354','312@51','a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','facebook','https://schoolvoyage.ga/images/123498.png',50,'d330db78458372063da122c73d0e3421c998983f5fb930a9cf07e553308afd08','2019-12-12 18:02:29','2019-12-12 18:03:19'),(11,'242','134@123','535fa30d7e25dd8a49f1536779734ec8286108d115da5045d77f3b4185d8f790','facebook','https://schoolvoyage.ga/images/123498.png',50,'6a158722e027d3742bb02c99a0bf64053938f571df3deb7112c0b64f11e1502e','2019-12-12 18:15:25','2019-12-12 18:16:15'),(12,'2421','134@1223','d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35','facebook','https://schoolvoyage.ga/images/123498.png',50,'f8f40ea345224ab1c7ed66ef9f6cdfb0e7399faee393acb7f5c18d2871d8534e','2019-12-12 18:15:37','2019-12-12 18:16:27'),(13,'24221','1342@1223','6b51d431df5d7f141cbececcf79edf3dd861c3b4069f0b11661a3eefacbba918','facebook','https://schoolvoyage.ga/images/123498.png',50,'30c76f97051a1dfc7d58ea1a5ff0509fa1df31948e6a4e46cd7dbfacd1c0e959','2019-12-12 18:15:52','2019-12-12 18:16:42'),(14,'999','99@99','9b871512327c09ce91dd649b3f96a63b7408ef267c8cc5710114e629730cb61f','facebook','https://schoolvoyage.ga/images/123498.png',50,'973e0e1c1ab3e10a6e2b5507ebd1554b2920c48240a8536b8f1f5d93064c6876','2019-12-12 18:16:18','2019-12-12 18:17:08'),(15,'undefined','undefined','1','facebook','https://schoolvoyage.ga/images/123498.png',50,'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3','2019-12-12 19:45:28','2019-12-12 19:46:18'),(16,'2342356','234@4234','114bd151f8fb0c58642d2170da4ae7d7c57977260ac2cc8905306cab6b2acabc','facebook','https://schoolvoyage.ga/images/123498.png',50,'32b6d962b9d2d862e67cff8ce3b16716215c295b8e987fd753013aa16ded138e','2019-12-12 19:54:37','2019-12-12 19:55:27'),(17,'2342asd356','23asd4@4234','688787d8ff144c502c7f5cffaafe2cc588d86079f9de88304c26b0cb99ce91c6','facebook','https://schoolvoyage.ga/images/123498.png',50,'6f7432b30b945d3f0e8cc7a870d3b0bcb9ffd3a1cf2858cce8859afc460d96da','2019-12-12 19:55:12','2019-12-12 19:56:02'),(18,'9821231sad12323121','tes1asd231221313t@test.com','f9cd3cc38654b281629452d353084b34672a23b696b58daee54fbfd257d3d905','facebook','https://schoolvoyage.ga/images/123498.png',50,'3be185b1a81e930823c26c49dcbf0bc86691a51ac199f087575d623b68dc8e49','2019-12-12 20:07:26','2019-12-12 20:08:16'),(19,'982as1231sad12323121','tesas1asd231221313t@test.com','f9cd3cc38654b281629452d353084b34672a23b696b58daee54fbfd257d3d905','facebook','https://schoolvoyage.ga/images/123498.png',50,'ad5e5883d2422e4f66f26e5256936653a1357beef65a51de23a786be0495535e','2019-12-12 20:41:38','2019-12-12 20:42:28'),(20,'21300','tesa3t@test.com','9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08','facebook','https://schoolvoyage.ga/images/123498.png',50,'252773d3b7239edf1a7994bf57fca6fb4d22e98056f1ee3b93dddf1cfba33354','2019-12-12 20:54:35','2019-12-12 20:55:25'),(21,'abc123','abc123@test.com','6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090','abc123@test.com','https://schoolvoyage.ga/images/123498.png',50,'a6866e11166a0a5f97613616277267ded35768cd0dc2b88748429cda56942f6e','2019-12-12 21:02:42','2019-12-12 21:03:32'),(22,'abc345','abc345@test.com','828214bd0930d7d548477b9a1814f12d6513aac608b63ab37ed794ee0e3a55ad','native','https://schoolvoyage.ga/images/123498.png',50,'a1cb78354784eb97c46ba0a8c68561fbafa0a20f585a90030f4bb37a13457cd5','2019-12-12 21:03:18','2019-12-13 10:58:21'),(23,'gogo345','gogo345@test.com','bc6386e1d70e9e5c614871f1ba153c447b243db9ad47a1b4dbdc88b1b73425a1','facebook','https://schoolvoyage.ga/images/123498.png',50,'837d72a3730f3b6c49cc2d08e345789f9f68c558443f04db764881464c79190d','2019-12-13 08:51:05','2019-12-13 10:56:58'),(24,'gogo456','gogo456@test.com','161ea90da8a0043ad01689cb964380d337bfdeee948dd4121eff520a5380bf14','native','https://schoolvoyage.ga/images/123498.png',60,'7a4a758f8f7bcffb0519f4807aac98a6022176a3075b9fcf70a963c488c0e00b','2019-12-13 10:44:25','2019-12-13 10:45:25'),(25,'go999','go999@test.com','706304bc140d57d4bcde7d45d269053e7dc4e4336cf36235be7fc2b28474b0f9','native','https://schoolvoyage.ga/images/123498.png',60,'f46ffc1e2f914d0aa46bfbfbe2d7c3813b6c1c6266f2756ce0998f37ffab5ebc','2019-12-13 11:01:44','2019-12-13 11:03:07'),(26,'go99','go99@test.com','40374bc5e468f95002c83fde304086c7bb3d732aac6eedd1e6c7593cfdf7a989','native','https://schoolvoyage.ga/images/123498.png',60,'fe9a38f9274edbc36cd48fddb07ffd8dd3315d1f610cbffeab80f2b64559d04e','2019-12-13 11:04:20','2019-12-13 13:43:08'),(27,'go991','go991@test.com','46437230aa327eed2d7d458f9937bf3b4147916bd6478b2fdac4e8502da4cdc1','facebook','https://schoolvoyage.ga/images/123498.png',60,'afb5400753a4870e1a4aff4c92fcbb3a10e91282f32f80ef3cad8637e14c9201','2019-12-13 11:06:48','2019-12-13 16:09:59'),(28,'go992','go992@test.com','c341164685425047d86b6415f8f9238594f2f7c9848e1ff59ba482624aca062c','facebook','https://schoolvoyage.ga/images/123498.png',60,'71e5b95be3792bc85a5d31563b6052ac72ae8b873d96394efda20a1009178123','2019-12-13 11:12:03','2019-12-13 16:03:36'),(29,'go12','go12@test.com','b48ec0181bf1fb4225b84495001c018ae775a79d647695eb84fca665b09d96a8','native','https://schoolvoyage.ga/images/123498.png',60,'e12980ee6c95f2f39791cea7dedd31a0a07ad7198a54d3ad0477ede7a59ef63c','2019-12-13 13:05:07','2019-12-13 13:06:07'),(30,'go112','go112@test.com','92e0ec5682969dc04c3a6fa9c3f568883af0d80c955799969393ac060f21aed3','native','https://schoolvoyage.ga/images/123498.png',60,'c157c97fd24323533a010e193b7d63a9e1bbeb24474a1d14e8aa0f23ea0a75af','2019-12-13 13:41:53','2019-12-13 13:42:53'),(31,'go1122','go1122@test.com','1e62bb554459f564dc517743e50a8479bf853cbccc33d6edda348994a6c4a96f','native','https://schoolvoyage.ga/images/123498.png',60,'24b6a7740b186f6f5221864664cd8150c766e9e8923197b264e805d4a9ccf509','2019-12-13 13:42:43','2019-12-13 13:43:43'),(32,'go11212','go11122@test.com','1e62bb554459f564dc517743e50a8479bf853cbccc33d6edda348994a6c4a96f','native','https://schoolvoyage.ga/images/123498.png',60,'9de73b0f731f3b9827176b6542f8c45ff45000aa7030a694caec1b11945e8be8','2019-12-13 13:44:10','2019-12-13 13:45:10'),(33,'go111212','go111122@test.com','1e62bb554459f564dc517743e50a8479bf853cbccc33d6edda348994a6c4a96f','native','https://schoolvoyage.ga/images/123498.png',60,'9b2135b0cfe88f72b765f95c848c5b3b452ee0da7edd6feb8096eda96925b3f5','2019-12-13 13:44:48','2019-12-13 13:45:48'),(34,'go311212','go13122@test.com','1e62bb554459f564dc517743e50a8479bf853cbccc33d6edda348994a6c4a96f','native','https://schoolvoyage.ga/images/123498.png',60,'602a1db7a337646a19b292885939c4ef905c9036abaa91fdcb3696ce82bb8441','2019-12-13 13:45:40','2019-12-13 13:46:40'),(35,'go3123w1212','go123w122@test.com','0563727809c0341414bb49f59622c3c48b22d9c0e7ec7b83b141505fe20cd447','native','https://schoolvoyage.ga/images/123498.png',60,'b5498515f05c0331b4ddb75ace4074253ce5c80e02431f30da33d31b86d691e0','2019-12-13 13:58:12','2019-12-13 13:59:12'),(36,'go3123qww1212','go123qww122@test.com','1819f69353835e5741c7201e5a3669a669a72acec28e835ac192a7d2e794d7e1','native','https://schoolvoyage.ga/images/123498.png',60,'8ef69d4719364ca8bb4ef764c92698594e74302d8b8bcbbfe0980f6b2e8ae170','2019-12-13 14:17:19','2019-12-13 14:18:19'),(37,'go44','go44@test.com','6bf07fbc9b2088d7172364795b7c14d7878c83075a7265eb0aaf5f16c9785e2c','native','https://schoolvoyage.ga/images/123498.png',60,'25ae435b85868844f01c029bea76de1e4a0e60c3ff3960e38b3a6847bf67877e','2019-12-13 15:51:50','2019-12-13 15:57:48'),(38,'go441','go441@test.com','c50ff49036f2093fe676ec6cb47cfdaa819996706e21d0644fea6eb5bf91b3f2','native','https://schoolvoyage.ga/images/123498.png',60,'93f122b05c93a4dfc733d43114a73bb6f12a7cc0fa6412319f73efee63bba4ac','2019-12-13 16:09:29','2019-12-24 20:36:23'),(39,'Stuart Hsu','yopauu@yahoo.com.tw','fb no need password','facebook','https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2889170854428009&height=200&width=200&ext=1578894969&hash=AeQGuZd_Gj_jC_Ct',60,'a2edec2e6f7c69c79a00b0771bf2cd15a37fbd086f210fb122084953532b9885','2019-12-14 13:56:07','2019-12-23 15:41:40'),(40,'go55','go55@test.com','53328fb2280ff03531c8b136affcf1c77927a11ef962ffd6322c23efcdb0ced9','native','https://schoolvoyage.ga/images/123498.png',60,'4eb52c132583fde8be3bec75f1fd60419eb8e748dd0a46a5e270182eeefbc967','2019-12-19 18:44:32','2019-12-19 18:45:32'),(41,'go56','go56@test.com','39f90650aef01be4b0720bf125937e71fec4c2c21ebd8f36cdb3ef85d89b3c8d','native','https://schoolvoyage.ga/images/123498.png',60,'702654b347a27ac4d1c71e9ab657e1f681413e683ea04500c92cc0125d677bd9','2019-12-19 19:00:55','2019-12-19 23:07:20'),(42,'go57','go57@test.com','766c146d3ca0854de753a03ed3368dd31ab33ef4d59072c142dbce42901ad453','native','https://schoolvoyage.ga/images/123498.png',60,'5bb42af87a403451d861e2de5c0c9d447d721ac213db566209e53a3519d88a9b','2019-12-19 19:02:27','2019-12-19 19:03:27'),(43,'go58','go58@twst.com','847dc137a5a88d9c3d6c22e4a1157e838dea437ad077e363bc7b3b0b4244b12d','native','https://schoolvoyage.ga/images/123498.png',60,'35d15d826a45604dd1d3fb2ecadb0729721159871865be94e526853a11be9bf3','2019-12-19 19:23:01','2019-12-19 19:24:01'),(44,'go77','go77@test.com','063052943ce4ae5c1f984212ac40a70491ddbdfbc94649a87ef061841637a0d2','native','https://schoolvoyage.ga/images/123498.png',60,'94f0d0f6ae8eac7f314006c4b10c692047439f44298983c220bf9f5c3087d8f5','2019-12-19 22:08:31','2019-12-19 22:09:31'),(45,'go72','go72@test.com','ad8e70b3ed3deccb57ce83185dd9b143679d632ec0aa21f3f14c1138ae326119','native','https://schoolvoyage.ga/images/123498.png',60,'d116e6e06b477cb5ebb48106c0b1e4eb9585b8202832b01964c4a2bfe0fb5a0b','2019-12-20 10:43:28','2019-12-20 10:44:28'),(46,'go79','go79@test.com','a71294d55773534d2e2d81437e320987e3d7537e2dab5e136692f0e56eb004ef','native','https://schoolvoyage.ga/images/123498.png',60,'69de2eed7900743216f4d54c89ccd076b1acd22671556e9b371cdbc00645e9a7','2019-12-20 11:15:33','2019-12-20 11:16:33'),(47,';','aa@com','41b805ea7ac014e23556e98bb374702a08344268f92489a02f0880849394a1e4','native','https://schoolvoyage.ga/images/123498.png',60,'f4bf9131e5170f2a29b8467c8e1285173c24c472cb73720c0fe8b550acf0e9c4','2019-12-20 17:57:56','2019-12-20 17:58:56'),(48,'go91','go91@test.com','d2f075c9d78d2ec3fa7e7cb83c935095bd35022f31373082d31c9deb81b07aba','native','https://schoolvoyage.ga/images/123498.png',60,'6e958dbf82a9f8f9c10c027de91f4035702071fb69e1a947a4a3e3c6e8041ba9','2019-12-23 13:25:09','2019-12-23 13:26:09'),(49,'go92','go92@test.com','e959ee9d9d3f74e902369ee7e7a87032a3ee8df11bb16224a7cb9589df28a0e7','native','https://schoolvoyage.ga/images/123498.png',60,'f4bd5c7b386b9af70aa234429b1404ee692ab0661d75222e1c81249650115a6e','2019-12-23 13:25:44','2019-12-23 13:26:44'),(50,'go93','go93@test.com','6195e6263447103632ee5b249fe1f477cde760994b09caaf0fdec7156fe65eca','native','https://schoolvoyage.ga/images/123498.png',60,'7b6b1054262036cc00798b1b1066f6b4eebbd32b91e04b82aa64c40c5659e71c','2019-12-23 13:29:03','2019-12-23 13:30:03'),(51,'go94','go94@test.com','7cd5265caf08f221bf9d76a6d0b66855ac362df1d3453e7a9c03b2bd0118d933','native','https://schoolvoyage.ga/images/123498.png',60,'e230eebedda3791b4ca58ae5b9f4f46ab8ccd48440d8a6c5da0636686a477793','2019-12-23 13:30:20','2019-12-23 13:31:20'),(52,'go95','go95@test.com','a2a5cf2164ec978afaaca87ac06864635052750a677d4b165d8b1060f5f6e4f9','native','https://schoolvoyage.ga/images/123498.png',60,'9ec99bd19cc04bc1d71245584ef2407afca13ff2f47295168eb5be71245c097e','2019-12-23 13:30:59','2019-12-23 13:31:59'),(53,'go96','go96@test.com','2d566a973c283f652cd962f460ea6ae9a69b32ae90406b12b248ea9a764d7e9f','native','https://schoolvoyage.ga/images/123498.png',60,'11aa45b5b1f472ca3f3f780a55d8bc566b2427fecbb124e4f1458a51d1d489c0','2019-12-23 13:32:40','2019-12-23 13:33:40'),(54,'go97','go97@test.com','1dde2a8cda92b3f8d981eee7c022d0fcdba5ba4cd1451550d209215549e2dc57','native','https://schoolvoyage.ga/images/123498.png',60,'aaf608cf55fd937c6989377be647b0b86d5d0fbde4e4411c6ba5fd8252278392','2019-12-23 13:35:30','2019-12-23 13:36:30'),(55,'go98','go98@test.com','b47c19d2e9d8ea414c72b9544fe294f061658f6937005ae1bef712e50a55f5fd','native','https://schoolvoyage.ga/images/123498.png',60,'3877fae44699ea5f3058ff49888f52f12f5cd95baa11f364bba5567931f42dbf','2019-12-23 13:38:57','2019-12-23 13:39:57'),(56,'go911','go911@test.com','cae54b109cf9696889eaabad03f84301dcca3c2014f510c6aa930942c75f0386','native','https://schoolvoyage.ga/images/123498.png',60,'70c2d9c15388128d03f4018cea0f99dfda3ec4f1c08af03ea3ec3741927b312f','2019-12-23 13:40:35','2019-12-23 15:43:16'),(57,'go912','go912@test.com','e82ce53a9a97ddb60d3b543ae2c15eedf8288180d0c8374dea7f215f86251ca5','native','https://schoolvoyage.ga/images/123498.png',60,'3f9e1f28f05d423d0d9774452a2d80584f2a0136a445546d277c9d71bab24ef5','2019-12-23 13:41:21','2019-12-23 13:42:21'),(58,'go913','go913@test.com','ed344e8ceb7183f43b624a47f516e319c4bf92112306687f84c083e5ef472a3e','native','https://schoolvoyage.ga/images/123498.png',60,'3b1f91cae9f62224a40930279be3d9a36ecec420634515234c211494649d7483','2019-12-23 13:49:06','2019-12-23 13:50:06'),(59,'go914','go914@test.com','f4c7e9068f2e24df842e84524d0d4a6c305129fc69897d8a89e2137b3e9dbbe1','native','https://schoolvoyage.ga/images/123498.png',60,'ec19b208c908b760d4683acc0322fed7e6768bda5d0cfff273d7c38a33afb978','2019-12-23 13:50:08','2019-12-23 13:51:08'),(60,'go915','go915@test.com','c56f3b9559acc3e3256c5bf080116abac34f88eb2f2bfb7c35694ac161873ede','native','https://schoolvoyage.ga/images/123498.png',60,'58e936f0637a1859f53b2314ab40b3c4e48c8b20a325ec3eef15aed41832e7c5','2019-12-23 14:02:21','2019-12-23 14:03:21'),(61,'go916','go916@test.com','cb5e3c689badc72ae17b7f34ee841dacf8e68ad575b08d610ed199d70d769840','native','https://schoolvoyage.ga/images/123498.png',60,'db717699765e699a0c4f222bc7bdb1f8c094bbf50ea96aa48598e363f15304c5','2019-12-23 14:04:00','2019-12-23 14:05:00'),(62,'go917','go917@test.com','2e79239d8ecc71fdb706f91c4e68583045b8eef75ca0d30a112d66ac43573e82','native','https://schoolvoyage.ga/images/123498.png',60,'80ec3688a1574fcf052b437e7c0c661e84631e7c093f4b344c571b4637d3cc7d','2019-12-23 14:04:59','2019-12-23 14:05:59'),(63,'go918','go918@test.com','c6d2560e09e657881836b23e34c15b69955f87258c0ff19d012dec072ca4be76','native','https://schoolvoyage.ga/images/123498.png',60,'ee7a7704bdfb36dcf8177446d8f890a40ee0953ba4452a7535bbe3435c4ac36c','2019-12-23 14:36:04','2019-12-23 14:37:04');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variants`
--

DROP TABLE IF EXISTS `variants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8 */;
CREATE TABLE `variants` (
  `variant_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL COMMENT 'Product id.',
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'Color''s name',
  `size` varchar(20) NOT NULL COMMENT 'Size.',
  `stock` tinyint(20) DEFAULT NULL COMMENT 'Stock.',
  `code` varchar(20) DEFAULT NULL COMMENT 'Color''s hex code.',
  PRIMARY KEY (`variant_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `variants_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variants`
--

LOCK TABLES `variants` WRITE;
/*!40000 ALTER TABLE `variants` DISABLE KEYS */;
INSERT INTO `variants` VALUES (1,1,'紅','M',5,'ffecb4'),(2,1,'紅','L',2,'beebfa'),(3,1,'白','M',4,'fab4a7'),(4,1,'白','S',3,'34FFFF'),(5,1,'黑','L',1,'000000'),(6,2,'紅','M',5,'ffecb4'),(7,2,'白','S',5,'beebfa'),(8,2,'白','L',1,'ffccff'),(9,3,'白','L',4,'fab4a7'),(10,3,'綠','M',12,'008000'),(12,3,'紅','M',33,'ffccff'),(13,6,'綠','M',23,'beebfa'),(14,6,'紅','M',9,'ffecb4'),(15,4,'黑','M',3,'000000'),(16,5,'白','M',2,'FFFFFF'),(17,5,'紅','S',3,'ffecb4'),(18,5,'藍','L',50,'ffccff'),(20,9,'紅','M',4,'FF0000'),(21,11,'藍','M',3,'0000FF'),(22,11,'紅','S',4,'FF0000'),(23,10,'白','L',3,'FFFFFF'),(24,10,'紅','M',4,'FF0000'),(25,10,'黑','L',30,'000000'),(26,12,'藍','L',2,'0000FF'),(27,13,'黑','L',2,'000000'),(28,13,'紅','M',4,'FF0000'),(29,13,'紅','S',5,'FF0000');
/*!40000 ALTER TABLE `variants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-25 13:39:51
