# Beer.

![beer](http://i.imgur.com/EDTZyFL.jpg)

### Setup

1. Create a database using the `createdb` utility:

    createdb beer_list.

1. Run the schema file:

    psql -d beer_list -f db/schema.sql

1. Run the seeds file:

    psql -d beer_list -f db/seed.sql

1. Check that your table was created and populated:

    psql -d beer_list
    SELECT * FROM beers;

### Part 1

...
