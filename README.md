# Beer.

![beer](http://i.imgur.com/EDTZyFL.jpg)

### Setup

1. Create a database using the `createdb` utility:

    createdb auth_beer_list_lab.

1. Run the schema file:

    psql -f db/schema.sql

1. Run the seeds file:

    psql -f db/seed.sql

1. Check that your table was created and populated:

`psql -d auth_beer_list_lab`

`SELECT * FROM beers;`

### Part 1

We're going to add user login.

Open the `express_auth_passport_bcrpt` project we presented this morning.

1. Copy and paste the `services` directory from `express_auth_passport_bcrypt` into this project.

1. Copy and paste the `users.js` controller file from `express_auth_passport_bcrypt` into this project's `controllers` directory.

1. Copy and paste the `user.js` (note it's `user.js` rather than `users.js`!) into this project's `models` directory.

1. Copy and paste the `views/users` directory from `express_auth_passport_bcrypt` into this project's `views` directory.

1. Modify `index.js` to connect the pieces, using `index.js` in `express_auth_passport_bcrypt` as a guide. If successful, you should be able to navigate to `users/new` and create a new user.

### If Something Goes Wrong Or You Find A Bug In The Starter Code

Let me know.
