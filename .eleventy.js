import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (config) {
  config.addPassthroughCopy("./src/style.css");
  config.addPassthroughCopy("./src/logo.svg");
  config.addWatchTarget("./src/style.css");

  config.addPlugin(eleventyNavigationPlugin);
}

export const config = {
  templateFormats: ["md", "njk", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "./src",
    includes: "_includes",
    data: "_data",
    output: "_site"
  }
};
