
This is the backend server to the goalapp


you can access the frontend repository from => https://github.com/semz-ui/goalsbndfront

It was created using nodejs and expressjs frame work


Used dotenv to keep the secret keys of my App


express-async-handler for handling exceptions inside of my async routes which helps in responding to users answers from the frontend

mongoose to create a model which is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators. whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records.


jsonwebtoken which is used to share security information between the client and the server was used to protect the user goals so no other user Would be able to access another user goal from the server

bcrytpjs to secure the password of the user if mu database was ever hacked