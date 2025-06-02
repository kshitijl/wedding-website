export default function(eleventyConfig) {
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("script.js");
    eleventyConfig.addPassthroughCopy("_includes");

    return {
        dir: {
          includes: "_includes"
        }
      }
};
