const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const MongoDB = require('mongodb');

const mongoClient = new MongoDB.MongoClient(
  'mongodb+srv://myAtlasDBUser:Greencolor88@myatlasclusteredu.rfhyctf.mongodb.net/?retryWrites=true&w=majority'
);

const editUser = async (id: any, body: any) => {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    const db = mongoClient.db('usersDB'); // создание бд
    const collection = db.collection('users'); // создание коллекции
    const result = await collection.updateOne(
      { _id: new MongoDB.ObjectId(id) },
      { $set: body }
    );

    // const result = await collection.deleteOne({
    //   _id: new MongoDB.ObjectId(id),
    // });
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
    console.log('Подключение закрыто');
  }
};
const deleteUser = async (id: any) => {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    const db = mongoClient.db('usersDB'); // создание бд
    const collection = db.collection('users'); // создание коллекции
    const result = await collection.deleteOne({
      _id: new MongoDB.ObjectId(id),
    });
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
    console.log('Подключение закрыто');
  }
};
const addUser = async (user: any) => {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    const db = mongoClient.db('usersDB'); // создание бд
    const collection = db.collection('users'); // создание коллекции
    const result = await collection.insertOne(user);
    return result;
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
    console.log('Подключение закрыто');
  }
};
const getUsers = async () => {
  try {
    // Подключаемся к серверу
    await mongoClient.connect();
    const db = mongoClient.db('usersDB'); // подключение бд
    const collection = db.collection('users'); // подключение коллекции
    const users = await collection.find().toArray();
    return users;
  } catch (err) {
    console.log(err);
  } finally {
    // Закрываем подключение при завершении работы или при ошибке
    await mongoClient.close();
    console.log('Подключение закрыто');
  }
};
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/users', async (request: any, response: any) => {
  const users = await getUsers();
  response.send(JSON.stringify({ users }));
});
app.post('/user', async (request: any, response: any) => {
  const { body } = request;
  if (body.name && body.lastName) {
    await addUser(body);
  } else {
    response.status(400).send('Error');
  }
});
app.delete('/user/:id', async (request: any, response: any) => {
  const { id } = request.params;
  await deleteUser(id);
  response.sendStatus(200);
});
app.put('/user/:id', async (request: any, response: any) => {
  const { id, body } = request.params;
  await editUser(id, body);
  response.sendStatus(200);
});
app.listen(3003);

mongoClient.connect().then(() => console.log('qwe'));

