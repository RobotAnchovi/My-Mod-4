SELECT c.first_name, c.last_name, c.phone_number
FROM customers c
JOIN purchases p ON c.id = p.customer_id
JOIN tools t ON p.tool_id = t.id
WHERE t.name = 'Pipe Cutter'
ORDER BY p.id DESC
LIMIT 1;
