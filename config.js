const ENV = process.env.ENV || 'development';

console.log(ENV);

const config = {
	"gatsby": {
		"pathPrefix": ENV === 'production' ? '/nebula/docs'  : "./",
		"siteUrl": "https://oss.navercorp.com/nebula/docs",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://d.pr/f/N9G6BQ+",
		"logoLink": "https://d.pr/f/N9G6BQ",
		"title": "Nebula | Console Appation",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
			"/comparison",
			"/design",
			"/develop",
			"/screens",
		],
		"links": [
			// { "text": "Hasura", "link": "./"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Nebula Documentation",
		"description": "Documentation built with mdx.",
		"ogImage": null,
		"docsLocation": "https://oss.navercorp.com/nebula/docs/tree/master/content",
		"favicon": "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
	},
};

module.exports = config;
