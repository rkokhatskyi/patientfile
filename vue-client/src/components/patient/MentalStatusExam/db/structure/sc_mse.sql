-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Jun 12, 2020 at 05:13 PM
-- Server version: 10.4.13-MariaDB-1:10.4.13+maria~bionic
-- PHP Version: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `sc_mse`
--

-- --------------------------------------------------------

--
-- Table structure for table `affect`
--

CREATE TABLE `affect` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `euthymic` tinyint(1) NOT NULL,
  `dysphoric` tinyint(1) NOT NULL,
  `irritable` tinyint(1) NOT NULL,
  `angry` tinyint(1) NOT NULL,
  `bright` tinyint(1) NOT NULL,
  `euphoric` tinyint(1) NOT NULL,
  `labile` tinyint(1) NOT NULL,
  `stable` tinyint(1) NOT NULL,
  `mood-congruent` tinyint(1) NOT NULL,
  `mood-incongruent` tinyint(1) NOT NULL,
  `expansive` tinyint(1) NOT NULL,
  `full-range` tinyint(1) NOT NULL,
  `constricted` tinyint(1) NOT NULL,
  `blunted` tinyint(1) NOT NULL,
  `flat` tinyint(1) NOT NULL,
  `anxious` tinyint(1) NOT NULL,
  `tearful` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `dysthymic` tinyint(1) NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appearence`
--

CREATE TABLE `appearence` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `good-grooming-and-hygiene` tinyint(1) NOT NULL,
  `no-apparent-distress` tinyint(1) NOT NULL,
  `well-developed-well-nourished` tinyint(1) NOT NULL,
  `appears-stated-age` tinyint(1) NOT NULL,
  `appears-younger-then-stated-age` tinyint(1) NOT NULL,
  `appears-older-then-stated-age` tinyint(1) NOT NULL,
  `obese` tinyint(1) NOT NULL,
  `thin-or-cachetic` tinyint(1) NOT NULL,
  `disheveled-unkempt` tinyint(1) NOT NULL,
  `malodorus` tinyint(1) NOT NULL,
  `others` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `attitude`
--

CREATE TABLE `attitude` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `pleasant-and-cooperative` tinyint(1) NOT NULL,
  `uncooperative` tinyint(1) NOT NULL,
  `hostile-or-defiant` tinyint(1) NOT NULL,
  `guarded` tinyint(1) NOT NULL,
  `evasive` tinyint(1) NOT NULL,
  `apathetic` tinyint(1) NOT NULL,
  `disorganized-behavior` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cognition`
--

CREATE TABLE `cognition` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `grossly-intact-no-memory-impairment-adequate-fund-of-knowledge-n` tinyint(1) NOT NULL,
  `impaired` tinyint(1) NOT NULL,
  `fluctuating` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `constituional`
--

CREATE TABLE `constituional` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `vitals-signs-stable` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `eye-contact`
--

CREATE TABLE `eye-contact` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `appropriate` tinyint(1) NOT NULL,
  `downcast` tinyint(1) NOT NULL,
  `intense` tinyint(1) NOT NULL,
  `fleeting` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `impulse-control`
--

CREATE TABLE `impulse-control` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `good` tinyint(1) NOT NULL,
  `fair` tinyint(1) NOT NULL,
  `questionable` tinyint(1) NOT NULL,
  `poor` tinyint(1) NOT NULL,
  `impaired` tinyint(1) NOT NULL,
  `limited` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `insight`
--

CREATE TABLE `insight` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `good` tinyint(1) NOT NULL,
  `fair` tinyint(1) NOT NULL,
  `questionable` tinyint(1) NOT NULL,
  `poor` tinyint(1) NOT NULL,
  `impaired` tinyint(1) NOT NULL,
  `limited` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `judgement`
--

CREATE TABLE `judgement` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `good` tinyint(1) NOT NULL,
  `fair` tinyint(1) NOT NULL,
  `questionable` tinyint(1) NOT NULL,
  `poor` tinyint(1) NOT NULL,
  `impaired` tinyint(1) NOT NULL,
  `limited` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `neurological`
--

CREATE TABLE `neurological` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `gait-and-station-normal` tinyint(1) NOT NULL,
  `gait-and-station-abnormal` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `perception`
--

CREATE TABLE `perception` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `no-avh` tinyint(1) NOT NULL,
  `ah` tinyint(1) NOT NULL,
  `command-ah` tinyint(1) NOT NULL,
  `vh` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `psychomotor`
--

CREATE TABLE `psychomotor` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `normal` tinyint(1) NOT NULL,
  `agitated` tinyint(1) NOT NULL,
  `retarded` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `speech`
--

CREATE TABLE `speech` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `regular-rate-and-rhythm` tinyint(1) NOT NULL,
  `fluent` tinyint(1) NOT NULL,
  `incoherent` tinyint(1) NOT NULL,
  `talkative` tinyint(1) NOT NULL,
  `pressured` tinyint(1) NOT NULL,
  `mumbling` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thaught-content`
--

CREATE TABLE `thaught-content` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `no-si-intent-or-plan` tinyint(1) NOT NULL,
  `no-passive-death-wish` tinyint(1) NOT NULL,
  `no-hi-intent-or-plan` tinyint(1) NOT NULL,
  `no-delusional-thinking-observed` tinyint(1) NOT NULL,
  `no-obsessive-thinking-observed` tinyint(1) NOT NULL,
  `ruminations` tinyint(1) NOT NULL,
  `si-without-intent-or-plan` tinyint(1) NOT NULL,
  `si-as-detailed-below` tinyint(1) NOT NULL,
  `hi-as-detailed-below` tinyint(1) NOT NULL,
  `delusions` tinyint(1) NOT NULL,
  `ior` tinyint(1) NOT NULL,
  `obsessions` tinyint(1) NOT NULL,
  `passive-death-wish` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thaught-process`
--

CREATE TABLE `thaught-process` (
  `uuid` varchar(64) NOT NULL,
  `patientUUID` varchar(64) NOT NULL,
  `linear-logical-and-goal-directed` tinyint(1) NOT NULL,
  `disorganized` tinyint(1) NOT NULL,
  `circumstantial` tinyint(1) NOT NULL,
  `tangential` tinyint(1) NOT NULL,
  `looseness-of-associations` tinyint(1) NOT NULL,
  `flight-of-ideas` tinyint(1) NOT NULL,
  `poverty-of-thought` tinyint(1) NOT NULL,
  `other` text NOT NULL,
  `recordChangedByUUID` varchar(64) NOT NULL,
  `recordChangedFromIPAddress` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `affect`
--
ALTER TABLE `affect`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `appearence`
--
ALTER TABLE `appearence`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `attitude`
--
ALTER TABLE `attitude`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `cognition`
--
ALTER TABLE `cognition`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `constituional`
--
ALTER TABLE `constituional`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `eye-contact`
--
ALTER TABLE `eye-contact`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `impulse-control`
--
ALTER TABLE `impulse-control`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `insight`
--
ALTER TABLE `insight`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `judgement`
--
ALTER TABLE `judgement`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `neurological`
--
ALTER TABLE `neurological`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `perception`
--
ALTER TABLE `perception`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `psychomotor`
--
ALTER TABLE `psychomotor`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `speech`
--
ALTER TABLE `speech`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `thaught-content`
--
ALTER TABLE `thaught-content`
  ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `thaught-process`
--
ALTER TABLE `thaught-process`
  ADD PRIMARY KEY (`uuid`);

