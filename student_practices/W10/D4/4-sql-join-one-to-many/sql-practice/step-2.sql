
-- A WHERE clause can filter across any JOINed table, even if it's not in the
-- final output of what is being SELECTed for.
-- Your code here
-- //*====> Step 2 <====
SELECT DISTINCT bands.name
FROM bands
JOIN albums ON bands.id = albums.band_id
WHERE albums.num_sold < 20000;
