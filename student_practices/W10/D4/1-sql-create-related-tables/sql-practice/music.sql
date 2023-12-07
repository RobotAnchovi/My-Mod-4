-- Enforce FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS musicians_instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS bands;

-- Create bands table
CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);

-- Create musicians table
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);

-- Create instruments table
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

-- Create join table for many-to-many relationship
CREATE TABLE musicians_instruments (
  musician_id INTEGER,
  instrument_id INTEGER,
  FOREIGN KEY (musician_id) REFERENCES musicians(id),
  FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);

-- Test: Displaying the structure of tables
.mode 'box';
SELECT * FROM bands;
SELECT * FROM musicians;
