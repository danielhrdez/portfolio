import { minify } from "html-minifier";
const options = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  decodeEntities: true,
  html5: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};
const handle = async ({ event, resolve }) => {
  return await resolve(event, {
    transformPageChunk: ({ html }) => minify(html, options)
  });
};
export {
  handle
};