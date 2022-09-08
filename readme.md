# Gridpainter

Gruppprojekt för en skoluppgift. En app byggd på realtidskommunikation, där användare kan samlas i olika rum och färglägga ett rutnät ihop, samt chatta med varandra. Det finns fyra färger att välja mellan i ett rum, som är färgen som användaren målar med. Flera användare kan inte ha samma färg.

Det målade rutnätet sparas automatiskt i en mongoDB-databas, så även om samtliga användare i rummet lämnar applikationen, så finns bilden kvar när man öppnar rummet igen.

[Test on Heroku](https://gridpainter-front-v2.herokuapp.com/)

[server-repo](https://github.com/Joelhagg/Gridpainter-back)

## Skapad av

- [Joel Hägg](https://github.com/Joelhagg)
- [Rebecka Larsson](https://github.com/Reebeecka)
- [Louise Rosenqvist](https://github.com/lrosenqv)
- [Gamer Shabandari](https://github.com/GamerShabandari)
- [Johanna Almqvist](https://github.com/johanna-almqvist)
- [John Eliasson](https://github.com/JohnEliasson)
- [Hussein Al-Yasiri](https://github.com/husse00)

## Paket - klient
Frontend är skapad med React.

- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Socket.io Client](https://www.npmjs.com/package/socket.io-client)
- [Axios](https://www.npmjs.com/package/axios)
- [Sass](https://www.npmjs.com/package/sass)

Ladda ner paket
```
npm i
```

Starta app
```
npm start
```



## Paket - server
Backend skapad med Node.js.

- [Express](https://www.npmjs.com/package/express)
- [Cors](https://www.npmjs.com/package/cors)
- [Mongo DB](https://www.npmjs.com/package/mongodb)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Socket.io](https://www.npmjs.com/package/socket.io)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Dotenv](https://www.npmjs.com/package/dotenv)

Ladda ner paket
```
npm i
```

Starta app
```
npm start
```
