let mix = require("laravel-mix");
const MixGlob = require("laravel-mix-glob");

const mixGlob = new MixGlob({ mix });
mix.setPublicPath("dist");

mixGlob
  .sass("src/scss/**/*.scss", "dist/css", null, { base: "src/scss" })
  .ts("src/ts/*.ts", "dist/js", null, { base: "src/ts" });

mix
  .ts("src/ts/ui/popup.ts", "dist/js")
  .vue()
  .ts("src/ts/ui/options.ts", "dist/js")
  .vue()
  .copy("src/static", "dist")
  .options({
    processCssUrls: false,
  });
