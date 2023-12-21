/*

Search Features and Pagination

A couple things to think about when setting up pagination
    Should take in page and size query strings to determine pagination
    When writing our queries, we use a couple properties for pagination
        limit: size
        offset: size * (page - 1)

How do we handle edge cases?
    If page or size are undefined, they should be set to defaults of 1 and 3 respectively
    If page or size < 1, add no pagination and return all results
        This can be done by writing a completely separate query inside a conditional
            This is highly repetitive
        Instead, we can create a pagination object and set the limit and offset properties inside that object
            Then we can spread the pagination object into our query object


Search Parameters

To avoid running into the same DRY issue we were running into with pagination, we can establish a query object and pass that into the query
    We can then check that a query string has been passed in, assigning that value to the queryObj.where

Should take in a title query string and match partial names in the DB

Should take in a minScore query string to filter out bad games

Should take in a genre query string to find all games associated with the provided genre


Security

CORS - Cross-Origin Resource Sharing
    Allows other apps to send requests to our API
    CORS policies are just middleware
    !! Enforced by the browser !!

XSS Attacks - Cross-Site Scripting
    Being able to inject code into someone else's site
    Often used for malicious intent, but not always
        Myspace is a great example

CSRF Attack - Cross-Site Request (Resource) Forgery
    When someone creates their own requests and tricks another user into sending that request
    Pretty common for XSS and CSRF attacks to happen together, but not always



*/