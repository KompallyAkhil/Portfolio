const https = require('https');
https.get('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/leetcode.svg', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});
