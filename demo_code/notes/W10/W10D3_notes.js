/*

Databases!

What is a database?
    Collection of data
        Stored in Tables in Row/Column format
        We can apply individual rules to each column
        An instance in a row is called a record
        Tables have a plural name since they are meant to hold multiple things

What is the tool called that we use to manage and interact with our DB?
    RDBMS - Relational DataBase Management System
What is SQL?
    Structured Querying Language

IF we want to create a DB that will persist
    sqlite3 <db name>.db

To see all the tables in our db, we can run the ".tables" command

With SQL, we MUST end our lines with a ";"
    This is because SQL is going to take our multi-line commands and put it all on one line, so SQL needs to know when we're done

We can create SQL file for us to write SQL commands in. This makes editing commands much easier!

To run a .sql file in our sqlite terminal, we use the .read command

Creating Tables in SQL
    tables and column names are lower case and snake_case
    table names are plural

    SQL does not like trailing commas

CREATE TABLE <table name> (
    <col name> <data type> <attributes>
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    <CONTINUE FILLING IN TABLE>
)

To drop (remove) a table:
    DROP TABLE <table name>;

Inserting Data into a DB
    INSERT INTO <table name> (<list of cols we are adding data to>)
    VALUES
    <comma separated list of seeders>;

    SQL prefers single quotes, but it allows for double quotes. NO back ticks!
    For apostrophes, we use 2 single quotation marks
        i.e. 'Kiki''s Delivery Service'

All queries need at least 2 SQL statements: SELECT and FROM
    SELECT - What columns do we want?
    FROM - What table are we querying?

    WHERE - Allows us to filter or target specific values or sets of values
        We can chain multiple filters using AND/OR


Deleting and Updating data in the DB
    Delete - DELETE FROM <table name> WHERE <condition>;
        Note that if we leave off the WHERE clause, it will delete all of the data on the table
    Updating - UPDATE <table name> SET <col name> = <value> WHERE <condition>;
        Again, the WHERE clause is not required. If we leave it off, it will update EVERY record to have the new value.

*/