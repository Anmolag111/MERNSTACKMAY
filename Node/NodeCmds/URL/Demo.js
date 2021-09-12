const url=require('url');
const urlPath='https://www.google.com/search?q=mobile&oq=mobile&aqs=chrome..69i57j69i59j35i39j0l5.3183j0j8&sourceid=chrome&ie=UTF-8';
// parse url to js object
var obj = url.parse(urlPath, true);

console.log(url);

//  to see url protocol
console.log(obj.protocol);

//  to see url hostname
console.log(obj.hostname);

//  to see url search string
console.log(obj.protocol);

// to see how many parameters passed
console.log(obj.search);

//  to see url query q
console.log(obj.query.q);
