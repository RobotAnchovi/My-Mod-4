/*

Scopes
    Ensures we are retrieving data from our DB that we intend to 
    Dries up our code

    Couple ways to add scope:
    In last object in init:
        Default scope to our model
            defaultScope: {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            }
        Scopes property
            Point to an object
            That object has KV pairs with the key being the name of the scope, and the value being the object to be passed to the query
            When applying a non-default scope, we have to adjust the query
                We have to add .scope() to the query
                <model>.scope(<scopes>).<query method>()
            If we add a named scope to the query, the defaultScope will NOT be applied automatically
            If you have conflicting scopes, whichever comes last will overwrite the others.
        We can also add a function scope
            Function scopes return a filter to be applied to the query
            Function scopes get passed in as another object with a key of method and a value of an array:
                {method: [<scope name>, <args>]}


JWT - JSON Web Token
    This is how we handle User Auth
    If we want to log a user in, we create a token. If we want to log a user out, delete that token.

How can we keep data safe as we transport it across the web?
    Encode
        Not very secure. Can easily be decoded.
    Encrypt
        More secure. Can't be decrypted unless they have the password/secret key
        If a bad user gets the secret key, we are in trouble
    Hash
        Cannot be reverse-engineered
        Hashing is deterministic
        There is a problem: There is a possibility that multiple strings could end up hashing to the same value
            This is called a hash collision
        Rainbow Table
            These are tables of exposed emails/usernames as well as common passwords with their hashed version
            Malicious users will use Rainbow Tables to brute force logins
        We can use something called a Salt to avoid the hash collision issue

JWTs
    Consists of 3 parts:
        Header
            Contains the type of token
            Indicator for the algo that was used for the hash
            JWT will automatically set these
        Payload
            The data we are transmitting
            Can add claims - such as an expiration
            ONLY encoded
        Signature
            Hash of the header, payload, and a secret key
            Allows us to validate that our token hasn't been tampered with

        jwt.verify returns the payload if the token is valid
        Can also take in a 3rd arg, which is a callback function


Bcrypt
    A package that we will use to hash stuff such as passwords
    The hash provided consists of algo, cost, salt (22 chars), and hash

    The cost factor tells bcrypt how many times to hash the password
    We don't want to set the cost factor too high
        Around 12-13 is the recommendation



*/