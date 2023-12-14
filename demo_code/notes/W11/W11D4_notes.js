/*

Association Methods

    Getter Method
        After querying a table, we automatically get a method to get a related table's info
        Getter method will either be plural or singular based on the relationship
        Basically exists to enable lazy loading
    Create Method
        After querying a table, we can create a record for a related table
        We don't need to add the value for the FK
    Add Method
        In a Many to Many relationship, allows us to add a record to the join table


Aggregate Functions
    Our recommendation is to stick to basic, class-level aggregate functions and JS
    WE WANT TO LAZY LOAD OUR AGGREGATE DATA!!

    Min/Max
        await <model>.<func>(<col>)
    Count
        await <model>.count()
        Can also be achieved by finding the length of the return from <model>.findAll()
    Sum
        await <model>.sum(<col>)
    Avg can be calculated by writing simple JS combining these methods
    We can also take in an obj to specify a WHERE clause

We can use <instance>.toJSON() method to turns the result from a query into a JSON object instead of a promise
    This allows us to lazy load our aggregate data and then add it to the return from a data query
    This is useful for your project!!!










*/