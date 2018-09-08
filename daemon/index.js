const ruuvi = require('node-ruuvitag');
const axios = require('axios').default;

// const tagID = 'e7a2fc3fd175';
const tagID = process.argv[2];
const url = process.argv[3] || 'http://localhost:8080';

axios.post(`${url}/ruuvitag/${tagID}`, {

})

ruuvi.on('found', (tag)=>{
  if (tag.id != tagID) {
    return;
  }
  tag.on('updated', (data)=>{
    console.log(data);
    axios.post(`${url}/ruuvitag/${tagID}`, data).catch(console.error);
  });
});
