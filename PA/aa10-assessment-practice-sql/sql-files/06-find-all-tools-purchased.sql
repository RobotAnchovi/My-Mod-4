-- Your code here
SELECT t.name, p.quantity
FROM purchases p
JOIN tools t ON p.tool_id = t.id
ORDER BY t.name, p.quantity;
