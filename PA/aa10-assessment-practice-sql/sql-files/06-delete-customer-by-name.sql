-- Your code here
-- First, delete the customer's purchases from the 'purchases' table
DELETE FROM purchases
WHERE customer_id = (SELECT id FROM customers WHERE first_name = 'John' AND last_name = 'Smith');

-- Then, delete the customer from the 'customers' table
DELETE FROM customers
WHERE first_name = 'John' AND last_name = 'Smith';
