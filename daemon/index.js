const ruuvi = require('node-ruuvitag');
const axios = require('axios').default;
const {tagID,url} = require('./config');

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
