
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sabrysm.github.io/XO-Game-Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/XO-Game-Angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 533, hash: '26363f5174face5eed5adfe184066c0937e321b1ab2af3b8f548bfb473c5434c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1046, hash: '3257c51cddbbad83a786f2b30122ac44a58d3e056d289ace95cbf102a147ccb2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3968, hash: '9dad4d55473215f39b250c72d5b248d76acff5d06be5bbcf154a7cb8068869ac', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
