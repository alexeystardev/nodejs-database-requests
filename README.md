*README*

<b>Allowed Router JUST for admin but not allowed for users like 'user' or 'moderator'</b>

link:  http://localhost:3000/api/user/admin   <b> //  METHOD=GET </b>

link:  http://localhost:3000/api/user/admin/showUsers   <b> //   METHOD=GET </b>

***************************************************************************

<b>For registration New User:</b>

link: http://localhost:3000/api/user/registration   <b> //  METHOD=POST </b>

    ---- Required params!----

    name:
    email:
    password:
    biz: true

    ----EXEMPLE =>
  
    {  
    "name": "Alexey",
    "email": "alexey@gmail.com",
    "password": "11223456",
    "biz": true
    }

***************************************************************************

<b>For user Autentification:
To generate TOKEN </b>

link: http://localhost:3000/api/auth   <b> //  METHOD=POST </b>

    ---- Required params!----

    email:
    password:

    ---- EXEMPLE =>

    {   
    "email": "alexey@gmail.com",
    "password": "11223456"
    }

***************************************************************************

<b>Get User Info</b>

link: http://localhost:3000/api/user/dashboard   <b> //  METHOD=GET </b>

****************************************************************************

<b>Delete User by Admin</b>

link: http://localhost:3000/api/user/admin/delete/{ID}    <b> // METHOD=DELETE </b>

****************************************************************************

<b>FOR TEST</b>

*********************************************

    ADMIN =>

    {
    "email": "alexey@gmail.com",
    "password": "11223456"
    }


<b>TOKEN => 

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJiZDRiNDg5OGQ5YTNmYjg2ZDc2YzMiLCJiaXoiOnRydWUsImlhdCI6MTYxMzQ4OTM3OH0.clYFND4InAwrPjhHMbtdqeJe9CHKb7O19OfHgF4a2yI </b>

*********************************************

    USER =>

    {   
    "email": "marina@gmail.com",
    "password": "11223456"
    }

<b>TOKEN =>

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDJiYzhkNWQ1YTY3MzFjODQ5MmYxMjQiLCJiaXoiOnRydWUsImlhdCI6MTYxMzUwMDY3MH0.jNCNpj_v4u7ZboZlpRJzCI7gB3iqa66uhYd-6p7NhRQ</b>

********************************************

<b>All passwords is: </b>

     password = 11223456

****************************************************

<b>USER_DATA for insert......</b>

    {
    "_id" : ObjectId("602bd4b4898d9a3fb86d76c3"),
    "role" : "admin",
    "name" : "Alexey",
    "email" : "alexey@gmail.com",
    "password" : "$2b$10$tDCscVXyZIPinj88Yj7wW.d5JM2R0gwcX.0xELeeBO0d1QgFKxa8C",
    "biz" : true,
    "createdAt" : ISODate("2021-02-16T14:20:36.444Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bd4a9898d9a3fb86d76c2"),
    "role" : "moderator",
    "name" : "Avital",
    "email" : "avital@gmail.com",
    "password" : "$2b$10$FS19ujBhoCvluRTqWgNstu0j/O0OU.djSOJCpggAoBheYZ7fRTr1q",
    "biz" : true,
    "createdAt" : ISODate("2021-02-16T14:20:25.804Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bc8d5d5a6731c8492f123"),
    "role" : "user",
    "name" : "Shmulik",
    "email" : "shmulik@gmail.com",
    "password" : "$2b$10$Nj0mQjhso/C/8ZFV8y6wK.RqC2TORM0ey6xREzOItTN5SCWCTkTXu",
    "biz" : true,
    "createdAt" : ISODate("2021-02-12T13:29:57.087Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bc8d5d5a6731c8492f124"),
    "role" : "user",
    "name" : "Marina",
    "email" : "marina@gmail.com",
    "password" : "$2b$10$Nj0mQjhso/C/8ZFV8y6wK.RqC2TORM0ey6xREzOItTN5SCWCTkTXu",
    "biz" : true,
    "createdAt" : ISODate("2021-02-12T13:22:57.087Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bd488898d9a3fb86d76be"),
    "role" : "user",
    "name" : "Mustafa",
    "email" : "mustafa@gmail.com",
    "password" : "$2b$10$GwzktYpWynRVJ5pSoJm.PuoM2RPW21m46KcCMnoHaBBAi6PgG9nfO",
    "biz" : true,
    "createdAt" : ISODate("2021-02-16T14:19:52.504Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bd48e898d9a3fb86d76bf"),
    "role" : "user",
    "name" : "Vasily",
    "email" : "vasily@gmail.com",
    "password" : "$2b$10$91RqMYDnPN0vuovzT/OrSemDWJzUT6j8aiJBzfBQrrBTKR7z6cWM.",
    "biz" : true,
    "createdAt" : ISODate("2021-02-16T14:19:58.286Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bd493898d9a3fb86d76c0"),
    "role" : "user",
    "name" : "Nikolay",
    "email" : "nikolay@gmail.com",
    "password" : "$2b$10$zyhFjNqBOlZUri71IOsSB.043Uj7uGZOxjClwGzS5VKvFbKc7kKXW",
    "biz" : true,
    "createdAt" : ISODate("2021-02-16T14:20:03.056Z"),
    "__v" : 0
    }

    {
    "_id" : ObjectId("602bd4a3898d9a3fb86d76c1"),
    "role" : "user",
    "name" : "Evgeny",
    "email" : "evgeny@gmail.com",
    "password" : "$2b$10$tXS9ps.T1W3IFer2sfqRTO2/gW1v3epgSDETcpsjMd8d61Wwa7WyC",
    "biz" : true,
    "createdAt" : ISODate("2021-02-16T14:20:19.071Z"),
    "__v" : 0
    }

************************************************************************

*README*
