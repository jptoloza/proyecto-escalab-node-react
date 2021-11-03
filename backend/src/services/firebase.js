const admin = require('firebase-admin');

const serviceAccount = require('../config/ firebaseServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'escalab-node-react.appspot.com'
});


module.exports = admin.storage().bucket();
