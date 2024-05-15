# Book-Record-Management

Server >> Storing certain book data
       >> User Register
       >> Subscriber


This is a book record management API Server/Backend for the library system or management of records or manuals or books

Fine System:
User: 06/03/2024 - 06/06/2024
If user submits book at the library LATE, 07/06/2024 => just by 1 day, user must pay 50 Rands. If late by 3 days, => 50 * 3 = 150 Rands.

## Subscription Types
3 months subscription (Basic)
6 months subscription (Standard)
12 months subscription (Premium)


If the subscription type is standard && if the sunscription date is 06/03/2024
=> then subscription is valid until 06/09/2024

within subscription date >> if we miss the renewal >> The fine will be R50 per day 
subscription date is also been missed >> and also missed the renewal >> Pay R100 + R50 per day

>> book 1
>> basic subscription type
>> 06/03/2024  - subscription date
>> 07/03/2024 - borrowed a book from library
>> book 1 renewal date is on 21/03/2023
>> 23/03/2024 => we need to pay a fine of R50 * 2 = R100, because payment was missed by 2 days

>> book 2
>> basic subscription type
>> 06/03/2024  - subscription date
>> 07/03/2024 - borrowed a book from library
>> book 2 renewal date is on 21/03/2023
>> 23/06/2024 => we need to pay a fine of R100 + 50

missed by renewal date >> pay R50
missed by subscription date >> pay R100
missed by renewal && subscription date >> pay R150








# Routes and Endpoints

## /users
POST: Create a new user
GET: Get all the users

## /users/{id}
GET: Get a user by id
PUT: Update a user by their id
DELETE: Delete a user by id (check if he/she still has an issued book) && (is there any fine to be paid)

## /user/subscription-details/{id}
GET: Get user subscription details
       >> Date of Subscription
       >> Valid until
       >> Is there any fine

## /books
GET: Get all the books
POST: Create/Add a new book

## /books/{id}
GET: Get a book by id
PUT: Update a book by id

## /books/issued
GET: Get all issued books. (These are books which are currently unavailable)

## /books/issued/withFine
GET: get all issued books with their fine




## npm init
## npm i nodemon --save-dev
## npm run dev



...each
     ## "name": "Jane",
     ## "surname": "Doe",
      "email": "user@email.com",
      "subscriptionType": "Premium",
      "subscriptionDate": "01/01/2022"


...data
   "data": {
       ## "name": "sidney"
       ## "surname": "ramphalile"
   }

name: sidney
surname: ramphalile
email: user@email.com
subscriptionType: "Premium"
