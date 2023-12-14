/*

CRUD in Sequelize

There are a variety of query methods built into our models
    findAll
        Useful when we want to return multiple records
        Always returns an array
    findOne
        Useful when we want to find just a single record
        If column we are filtering by is not UNIQUE, Sequelize will add LIMIT 1
    findByPk
        Also useful when finding a single record
        Basically a findOne, but shortcuts to searching via Primary Key

    To use these methods, we have to follow a couple steps:
        1. Import the model into the router
        2. Dispatch the method on the model, setting the return to a variable
            Make sure we await the fetch

    Remember that all of the queries we write, get turned into SQL

    By default, Sequelize will do SELECT *
    If we want to select certain columns, we need to add something to our query
        All of our queries can take in an object
        We can add the attributes property to select certain columns
            This property takes in an array of the cols we want

    To add a WHERE clause, we add a "where" property to the query that takes in an nested object has a key of the column and value of what you are looking for

    If we want to add ORDER BY, that also goes in the query obj
        order: [[<col>, <'ASC' || 'DESC'>]]
        Note that the arg for order is a 2D array

    If we want to use LIKE in our query:
        We can use the Op object from Sequelize


POST routes

    Creating records
        build
            (validate)
        save

        create - Does all the other 3

We have to destructure our req body
To use build:
    const <instance> = <model>.build({<data>})
    await <instance>.validate()
    await <instance>.save()

To use create:
    const <instance> = await <model>.create({<data>})


Updating/Deleting in Sequelize

There are multiple ways to Update:
    <model>.update - NOT recommended due to us running into a lot of issues
        This requires a where
    Object property reassignment - Major preference, and the one we will be using
        Must save()
    <instance>.update()
    <instance>.set()
        Must save()

We want to make sure that we are not accidentally updating our properties to undefined.
    This is done by checking the parts of the req.body to make sure they exist before updating


There are multiple ways to Delete:
    <model>.destroy() - NOT recommended for the same reasons as update
    <instance>.destroy()


Relationships in Sequelize

To tell Sequelize that a column is a FK, we need to add a couple properties to that column obj in Migration
    references: {
        model: <table name>,
        key: 'id' (not needed unless the PK is something other than id)
    },
    onDelete: 'CASCADE' || 'SET NULL' (if desired)

Next we have to connect our models, and this is done using Associations

Associations
    One to One
        hasOne - not used much
    One to Many
        belongsTo
        hasMany
    Many to Many
        belongsToMany

    We have to determine which is which and the order does matter
    The model with the FK is the belongsTo
    <model we are in>.<relationship>(models.<name of the model we are connecting to>, {
        foreignKey: <name of the FK column used to connect>
    })

    We can implement onDelete:
        We add some stuff to the hasMany
            onDelete: 'CASCADE',
            hooks: true
    The hooks: true enforces that the deletions occur in the right order. If this is left off, we can still run into FK Constraint Failed errors

    Many to Many:
        <model you are in>.belongsToMany(models.<name of the model on the other side of the join table>, {
            through: models.<name of model for join table>,
            foreignKey: <FK to join to the join table>,
            otherKey: <FK to join from join table to other table>
        })

Implementing these relationships into Express

In our query obj, we need to add an include property that points to the model we want to join.
Since we are referencing another model, we need to make sure and add that model to our import.
        include: <model name>

We can also add multiple models to the join by pointing the include property to an array     
    include: [<model 1>, <model 2>]

We can also point include to an obj or an array of objs
    include: {
        model: <model name>
    }

If we don't want any of the info from our join table, we can add a through property to one of our includes objects
That through property with point to an object with attributes: []
    include: {
        model: <model name>,
        through: {
            attributes: []
        }
    }

*/