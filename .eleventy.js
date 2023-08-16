module.exports = function(eleventyConfig){
    // Note: images, local fonts, icons, etc all have to have be be pass through copied
    eleventyConfig.addPassthroughCopy("src/assets/css");
    eleventyConfig.addPassthroughCopy("src/assets/images");
    return {
    dir: {
        input: "src",
        data: "_data",
        includes: "_includes",
        layouts: "_layouts"
    }
    };
}
