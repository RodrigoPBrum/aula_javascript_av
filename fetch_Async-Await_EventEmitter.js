// fetch('/data.json').then(responseStream => {
//     console.log(responseStream);
// });

// fetch('/data.json').then(responseStream => {
//     responseStream.json().then(data => {
//         console.log(data);
//     });
// });

// fetch('http://localhost:8080/data.json', {
//     method: 'post',
//     body: JSON.stringify
// }) //segundo parametro configuração do request, por default é um GET.
//     .then(responseStream => {
//         console.log(responseStream);
//         if (responseStream.status === 200) {
//             return responseStream.json()
//         } else {
//             throw new Error ('Request error');
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Erro: ', err);
//     });

//ES7 - Async / Await
//criar promisses de forma simples

// const simpleFunc = async () => {
//     // throw new Error('Oh no!');
//     return 12345;
// };

// simpleFunc()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });


//Await serve pra esperar uma promisse resolver
// const asyncTimer = () => 
//     new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(12345);
//         }, 1000);
//     });

// const simpleFunc = async () => {
//     const data = await asyncTimer();
//     // console.log(data);
//     const dataJSON = await fetch('data.json').then(resStream => 
//         resStream.json()
//     );

//     return dataJSON;
// };

// simpleFunc()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// const asyncTimer = () => 
//     new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(12345);
//         }, 1000);
//     });

// const simpleFunc = async () => {
//     const data = await Promise.all([asyncTimer(), fetch('data.json').then(resStream => 
//         resStream.json()
//     )])
//     // console.log(data);
//     return dataJSON;
// };

// simpleFunc()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });

//EventEmitter

// const EventEmitter = require('events');

// class Users extends EventEmitter {
//     userLogged(data) {
//         this.emit('User logged', data);
//     }
// }

// const users = new Users();

// users.on('User logged', data => {
//     console.log(data);
// });

// users.userLogged({ user: 'Rodrigo Brum' });

// para consumir apenas uma vez

// const EventEmitter = require('events');

// class Users extends EventEmitter {
//     userLogged(data) {
//         setTimeout(() => {
//         this.emit('User logged', data);
//         }, 2000);
//     }
// }

// const users = new Users();

// users.once('User logged', data => {
//     console.log(data);
// });

// users.userLogged({ user: 'Rodrigo Brum' });
// users.userLogged({ user: 'Jessica Brum' });

//EventTarget - mais limitado mas dá pra trabalhar com eventos no browser

