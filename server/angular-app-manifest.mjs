
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sabrysm.github.io/XO-Game-Angular/frontend',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/XO-Game-Angular/frontend"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 541, hash: '618a53df149ddf9e7ccadf879824cda671bf6348dc1d23e86c09caae355fbf7e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1054, hash: 'c70582104e1ff171adf57801e39d95221494f8b41c3d98ab90d33abd66e211fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3976, hash: 'cbb403d298dc86836dd955998d387eccdd1ccf61a430871ad9f29a82d0d39b9d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
