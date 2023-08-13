export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["fonts/Montserrat.woff2","icons/favicon-128.webp","icons/favicon-256.webp","icons/favicon-32.webp","icons/favicon-64.webp","manifest.json"]),
	mimeTypes: {".woff2":"font/woff2",".webp":"image/webp",".json":"application/json"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e112db18.js","imports":["_app/immutable/entry/start.e112db18.js","_app/immutable/chunks/index.8d81062b.js","_app/immutable/chunks/singletons.103f6b1a.js","_app/immutable/chunks/index.0ab9a5a7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.23bf9e74.js","imports":["_app/immutable/entry/app.23bf9e74.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.8d81062b.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
