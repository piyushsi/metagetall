const nfetch = require('node-fetch');
const fetch = (url)=> {
   return  nfetch(url)
		.then((res) => {
			return res.text();
		})
		.then((text) => {
			var title = text.includes('<title>')
				? { title: text.split('<title>')[1].split('</title>')[0] }
				: { title: 'N/A' };

			if (text.includes('<meta')) {
				var Data = text
					.split('<meta')
					.filter((value, index) => {
						if (index != 0) {
							return value;
						}
					})
					.map((value) => {
						var val = value.split('>')[0];
						if (val.includes('name=')) {
							var name = val.split('name=')[1].split(`"`)[1];
							var content = val.split('content=')[1].split(`"`)[1];
							var obj = {};
							obj[`${name}`] = content;
							return obj;
						} else if (val.includes('property=')) {
							var property = val.split('property=')[1].split(`"`)[1];
							var content = val.split('content=')[1].split(`"`)[1];
							var obj = {};
							obj[`${property}`] = content;
							return obj;
						} else if (val.includes('content=') && !val.includes('name=') && !val.includes('property=')) {
							var content = val.split('content=')[1].split(`"`)[1];
							var unknown = value.split('=')[0].split(' ')[1];
							var obj = {};
							obj[`${unknown}`] = content;
							return obj;
						} else {
							var unknown = value.split('=')[0].split(' ')[1];
							var value = value.split('=')[1].split(`"`)[1];
							var obj = {};
							obj[`${unknown}`] = value;
							return obj;
						}
					});
				Data.push(title);
				var metaData = Object.assign({}, ...Data);
				return metaData;
			} else {
				return 'meta not found';
			}
		})
  }
  module.exports = {
    fetch
};