
export default {
  basePath: 'https://sabrysm.github.io/XO-Game-Angular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
