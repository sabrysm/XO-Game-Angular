
export default {
  basePath: 'https://sabrysm.github.io/XO-Game-Angular/frontend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
