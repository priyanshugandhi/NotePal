const axios = require('axios')
//
// // SIGN UP
//
// axios({
//   method: 'post',
//   url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCCKQvjW__DJNAiWpm7ZNQvJd14uQSG57A',
//   data: {
//     email: 'test@email.com',
//     password: 'test123',
//     returnSecureToken: true
//   },
//   headers : {'Content-Type' : 'application/json'}
// })
//   .then((token) => {
//     console.log(token.data);
//   }).catch((err) => {
//     console.log(err.response.data.error);
//   });
//
// // SIGN IN
//
// const authenticate = () => {
//   axios({
//   method: 'post',
//   url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCCKQvjW__DJNAiWpm7ZNQvJd14uQSG57A',
//   data: {
//     email: 'test@email.com',
//     password: 'test123',
//     returnSecureToken: true
//   },
//   headers : {'Content-Type' : 'application/json'}
// })
//   .then((token) => {
//     console.log(token.data);
//   }).catch((err) => {
//     console.log(err.response.data.error);
//   });
// };
//
// const addNote = async () => {
//   token = await authenticate()
//   return token
// };
//
// // ADD NOTE
//
// const authenticate = () => {
//   return axios({
//     method: 'post',
//     url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCCKQvjW__DJNAiWpm7ZNQvJd14uQSG57A',
//     data: {
//       email: 'test@email.com',
//       password: 'test123',
//       returnSecureToken: true
//     },
//     headers : {'Content-Type' : 'application/json'}
//   })
// };
//
// const addNote = async () => {
//   token = await authenticate()
//   return token.data
// };
//
// addNote()
//   .then((token) => {
//     const userId = token.localId;
    // axios({
    //   method: 'post',
    //   url: `https://notepal-216511.firebaseio.com/notes.json?auth=${token.idToken}`,
    //   data: {
    //     image: 'test.jpg',
    //     text: 'My nane is Arjun',
    //     userId,
    //   }
    // })
    //   .then((note) => {
    //     console.log(note.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
//   })
//   .catch((err) => {
//     console.log(err)
//   });
//
// CREATE GROUP
// axios({
//   method: 'post',
//   url: `https://notepal-216511.firebaseio.com/groups.json`,
//   data: {
//     name: 'Elementary Algorithm Design and Data Abstraction',
//     description: 'This course examines elementary data structures and algorithms using the functional and imperative paradigms of computation, and discusses issues surrounding the effective use of programming languages in "real-world" environments.',
//     notes: {
//       '-LMVR6VrTuTel5F5z_s7': true
//     },
//     code: 'CS136'
//   }
// })

//ADD NOTES TO GROUP
// axios({
//   method: 'post',
//   url: `https://notepal-216511.firebaseio.com/groups.json`,
//   data: {
//     name: 'Electricity and Magnetism',
//     description: 'Electrostatics; electric field, flux, Gauss\'s Law, potential and potential energy. Capacitors; Dielectric, capacitance, electric energy storage, charging/discharging. Resistors; charge flow, current, resistance, Kirchhoff\'s voltage and current laws. Magnetostatic; magnetic force, magnetic fields, Ampere\'s Law. Inductors; magnetic flux, inductance, magnetic materials, magnetic energy storage. Time-Varying Fields; Faraday\'s Law, mutual inductance, simple motors and generators. [Offered: W, S]',
//     notes: {
//       '-LMVR6VrTuTel5F5z_s7': true
//     },
//     code: 'ECE106'
//   }
// })

//ADD NOTES TO GROUP
axios({
  method: 'patch',
  url: `https://notepal-216511.firebaseio.com/groups/-LMWEsFTmc9wWbHbPO-f.json`,
  data: {
    notes: {
      '-LMXDOY7kJMuRvx5vhVN': true
    }
  }
})
  .then((group) => {
    console.log(group.data);
  })
  .catch((err) => {
    console.log(err);
  });

// GET COURSES
// axios({
//   method: 'get',
//   url: `https://notepal-216511.firebaseio.com/groups.json`,
// })
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
