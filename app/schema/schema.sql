CREATE DATABASE amirapi;

USE amirapi;

-- Drop tables --

DROP TABLE IF EXISTS USER;

-- Create tables --

CREATE TABLE
    `USER` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `fullName` VARCHAR (50),
        `username` VARCHAR (10),
        `password` VARCHAR (10),
        `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    `NOTES` (
        `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        `author` INT,
        `title` VARCHAR(20),
        `details` VARCHAR(20),
        `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (author) REFERENCES USER(id)
    );