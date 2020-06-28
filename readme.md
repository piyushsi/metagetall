# metagetall

A Node.js module to fetch HTML meta tags and custom meta tags from a remote URL.

[![Github stars](https://img.shields.io/github/stars/piyushsi/metagetall.svg?style=social&label=Star)](https://github.com/piyushsi/metagetall)


## Installation

```
npm install metagetall --save
```

## Usage


``` javascript
const metagetall = require('metagetall');
metagetall.fetch('https://wordpress.com').then(res=>{console.log(res);});
```


Response will be an Object containing all the meta tags from the URL. All tags are output in the example above.



## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
