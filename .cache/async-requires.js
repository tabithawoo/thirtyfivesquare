// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-news-index-js": () => import("./../../../src/pages/news/index.js" /* webpackChunkName: "component---src-pages-news-index-js" */),
  "component---src-pages-news-strapi-post-slug-js": () => import("./../../../src/pages/news/{StrapiPost.slug}.js" /* webpackChunkName: "component---src-pages-news-strapi-post-slug-js" */),
  "component---src-pages-work-js": () => import("./../../../src/pages/work.js" /* webpackChunkName: "component---src-pages-work-js" */)
}

