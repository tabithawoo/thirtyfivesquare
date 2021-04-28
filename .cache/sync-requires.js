
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\tabit\\OneDrive\\Documents\\ThirtyFiveSquare Website\\thirtyfivesquare\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\tabit\\OneDrive\\Documents\\ThirtyFiveSquare Website\\thirtyfivesquare\\src\\pages\\index.js")),
  "component---src-pages-news-index-js": preferDefault(require("C:\\Users\\tabit\\OneDrive\\Documents\\ThirtyFiveSquare Website\\thirtyfivesquare\\src\\pages\\news\\index.js")),
  "component---src-pages-news-strapi-post-slug-js": preferDefault(require("C:\\Users\\tabit\\OneDrive\\Documents\\ThirtyFiveSquare Website\\thirtyfivesquare\\src\\pages\\news\\{StrapiPost.slug}.js")),
  "component---src-pages-work-js": preferDefault(require("C:\\Users\\tabit\\OneDrive\\Documents\\ThirtyFiveSquare Website\\thirtyfivesquare\\src\\pages\\work.js"))
}

