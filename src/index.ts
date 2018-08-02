import * as request from 'request';
import {parse} from 'himalaya'

request('https://abstimmung.dfn.de/foodle/Mathe-Vorkurs-Gruppe-5b2a0#responses', (_error, _response, body) => {
	const regex = /<tr class="">(.*?)<\/tr>/g
	let match = []
	while(match = regex.exec(body)) {
		const row = parse(match[1]);
		const user = row[1];
		if (user.children.length > 1) {
			const mail = user.children[0].attributes.find((a) => a.key === 'title').value;
			const name = user.children[1].children[0].content
			console.log(name, mail)

			const updated = row[4].children[0].content
			console.log(updated)
		}
	}
})