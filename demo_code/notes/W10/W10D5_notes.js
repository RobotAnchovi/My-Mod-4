/*

Aggregate Functions
    AVG - Finds the avg value of a column
    COUNT - Counts the number of entries in table
    MIN/MAX - Finds the min/max values of a col
    SUM - Add up all the values in a col
        If all the values are null, returns null
    TOTAL - Add up all the values in a col
        Always return a floating point value
        If all the values are null, returns 0.0

Where are aggregate functions placed?
    Inside of the SELECT statement
These aggregate functions are treated like normal functions, so we invoke them with ()
    SELECT <func>(<col>) FROM <table>;

COUNT is different. We can just pass "*" into the () since it doesn't matter which col we use.
    If you have a column that is nullable, you can pass that col name into the () to get the COUNT of not null values

! When we run an aggregate function, we DO NOT get all the info from that table, only the aggregate data !!
If we put other column names with the aggregate func, it will only return the first instance

We can add a WHERE clause to the functions to filter what data is applied to the aggregate.

We can add GROUP BY to the function to have that aggregate happen on specific groups of data
    GROUP BY <col name>
    This is the only way to return multiple things from an aggregate
        It will only return the first instance for each group

We can add HAVING to a function that has a GROUP BY on
    This acts like a WHERE clause, but for the groups that were created

At this point, we have talked about all of the SQL keywords:
    Keywords in the order that should/could be applied:
    SELECT
    FROM
    JOIN ON
    WHERE
    GROUP BY
    HAVING
    ORDER BY
    LIMIT
    OFFSET


Subqueries
    Kind of like helper functions in SQL
    Can generally be used to replace JOIN ON
    Can also be used to get info across multiple tables if they don't have a relationship

    When writing a subquery, we have to ask ourselves 2 questions:
        What info do we have?
        What info am I looking for?

    The purpose of a subquery is to return some info that the outer query can use

    We can change the SQL operator to handle our subquery returning multiple records
        Using the IN operator is the easiest way to do this
    Subqueries can be used in any SQL context



*/
