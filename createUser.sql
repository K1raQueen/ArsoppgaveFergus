CREATE USER 'fergus'@'localhost' IDENTIFIED BY 'fergus10';
GRANT ALL PRIVILEGES ON fergusdb.* TO 'fergus'@'localhost';
FLUSH PRIVILEGES;