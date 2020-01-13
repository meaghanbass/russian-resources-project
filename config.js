const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://meaghanbass.io",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
		"logoLink": "https://meaghanbass.io",
		// "title": "Russian & Eastern European Historical Library",
		"title": "HEADER TITLE",
		"githubUrl": "https://github.com/hasura/gatsby-gitbook-boilerplate",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": true,
			"indexName": "pages",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction",
    		"/codeblock"
		],
		"links": [
			{ "text": "meaghanbass.io", "link": "https://meaghanbass.io"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		// "title": "Russian & Eastern European Historical Library",
		"title": "SITEMETADATA TITLE",
		"description": "Documentation built with mdx.",
		"ogImage": null,
		"docsLocation": "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
		"favicon": "http://government.ru/static/img/favicon.ico"
	},
};

module.exports = config;