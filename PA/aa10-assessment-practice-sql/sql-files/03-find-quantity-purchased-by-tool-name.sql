-- Your code here
SELECT t.name, t.price, p.quantity
FROM purchases p
JOIN tools t ON p.tool_id = t.id
WHERE t.name LIKE 'Pipe%'
ORDER BY t.name, p.quantity;
