-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here
CREATE TABLE tools (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL,
    department TEXT
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    phone_number INTEGER
);

CREATE TABLE purchases (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER,
    tool_id INTEGER,
    quantity INTEGER,
    FOREIGN KEY(customer_id) REFERENCES customers(id),
    FOREIGN KEY(tool_id) REFERENCES tools(id)
);
