SELECT COUNT(*) FROM cats;

-- SELECT name, MIN(birth_year) AS oldest_birth_year FROM cats;

-- SELECT name, MAX(birth_year) AS youngest_birth_year FROM cats;

SELECT 'Oldest' AS Cat, name, birth_year FROM cats WHERE birth_year = (SELECT MIN(birth_year) FROM cats)
UNION
SELECT 'Youngest' AS Cat, name, birth_year FROM cats WHERE birth_year = (SELECT MAX(birth_year) FROM cats);
