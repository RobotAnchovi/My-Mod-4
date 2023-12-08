
-- Inserting Tools Data
INSERT INTO tools (name, price, department) VALUES
('Snow shovel', 16.50, 'Home & Garden'),
('Work light', 29.99, 'Electrical'),
('Wheelbarrow', 89.99, 'Home & Garden'),
('Pipe Wrench', 18.99, 'Plumbing'),
('Pipe Cutter', 36.36, 'Plumbing'),
('Rake', 15.45, 'Home & Garden'),
('Women''s Gloves', 8.39, 'Home & Garden'),
('Men''s Gloves', 8.39, 'Home & Garden');

-- Inserting Customers Data
INSERT INTO customers (first_name, last_name, phone_number) VALUES
('John', 'Smith', 1111111111),
('Jane', 'Doe', 2222222222);


INSERT INTO purchases (customer_id, tool_id, quantity) VALUES
(1, 2, 1),  -- Work light
(1, 5, 2);  -- Pipe Cutter


INSERT INTO purchases (customer_id, tool_id, quantity) VALUES
(2, 1, 3),  -- Snow shovel
(2, 2, 1),  -- Work light
(2, 7, 1),  -- Women's Gloves
(2, 4, 1),  -- Pipe Wrench
(2, 5, 1);  -- Pipe Cutter


INSERT INTO purchases (customer_id, tool_id, quantity) VALUES
(1, 3, 3),  -- Wheelbarrow
(1, 8, 2);  -- Men's Gloves
