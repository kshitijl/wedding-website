export default function(eleventyConfig) {
    eleventyConfig.setOutputDirectory("public");
    eleventyConfig.addPassthroughCopy("bundle.css");
};
