-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);
--*====> Creating bands table <====
CREATE TABLE bands (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

--*====> Modifying musicians table for one-to-many relationship with bands <====
ALTER TABLE musicians ADD COLUMN band_id INTEGER;
ALTER TABLE musicians ADD FOREIGN KEY (band_id) REFERENCES bands(id);

--*====> Creating instruments table <====
CREATE TABLE instruments (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);

--*====> Creating join table for many-to-many relationship between musicians and instruments <====
CREATE TABLE musicians_instruments (
    musician_id INTEGER,
    instrument_id INTEGER,
    FOREIGN KEY (musician_id) REFERENCES musicians(id),
    FOREIGN KEY (instrument_id) REFERENCES instruments(id)
);

.mode 'box';
 SELECT * FROM bands;
 SELECT * FROM musicians;
