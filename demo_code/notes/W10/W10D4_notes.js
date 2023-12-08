/*

Database Relationships

What are the 3 types of Relationships?
    One to One
    One to Many
    Many to Many
        Note that a Join table can have more than just the 2 foreign keys

When setting up a foreign key (FK) column, the FK goes on the many side of a One to Many relationship

There are a couple ways to establish a FK in a CREATE TABLE command
    1. At the bottom of the CREATE, we can add:
        FOREIGN KEY (<col name>) REFERENCES <other table>(id)
    2. We can combine that on the column info:
        <col name> INTEGER REFERENCES <other table>(id)

What about (chain) deleting?
    ON DELETE CASCADE
    ON DELETE SET NULL


New Query Keywords
    BETWEEN - inclusive
        WHERE <col> BETWEEN <value 1> AND <value 2>;
    IN - something is true from a group of possibilities
        WHERE <col> IN (<comma separated values>);
    LIKE - search for partial strings
        WHERE <col> LIKE %<partial string>%;
        Wildcard character = %
        Case insensitive in SQLite
    ORDER BY - allows us to go against default ordering behavior
        ORDER BY <col>;
        Default order is ASC, but can add DESC to our command to reverse that
        Can order by multiple factors by adding more cols separated by a comma
    LIMIT - only return a certain number of records
        LIMIT <value>;
    OFFSET - skip a certain number of records
        OFFSET <value>;
        Can only be used in conjunction with LIMIT
        Usually used in Pagination
    DISTINCT - return only distinct (different) values
        SELECT DISTINCT <col> FROM <table>;
    We can also perform math operations to columns in a SELECT
        SELECT <col> + <value> FROM <table>;
        This doesn't actually change anything in the DB
    We can also alias our columns in a SELECT
        SELECT <column> AS <alias> FROM <table>;


Writing queries that join different tables together
    JOIN <table> ON (<table>.id = <other table>.<FK col>)
    The ON keyword is what tells SQL what the association is and how to connect them
    Use dot notation to deal with column name ambiguity

*/