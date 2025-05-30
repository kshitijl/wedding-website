# How to make and preview changes

Edit `index.md` or `bundle.css`. In another terminal windown, run `npx
@11ty/eleventy --serve`, which will watch for changes and run a webserver
locally that you can use to preview changes.

Images should go in the `public/` directory. Everything in that directory is
deployed to production.

# How it's deployed

Just static assets on a Cloudflare Worker. There is an automatic deployment
pipeline: you push to github, and Cloudflare runs the build step (`npx
@11ty/eleventy`) and deploys (`npx wrangler deploy`).

To build and/or deploy manually, run those commands yourself in the terminal
(but deployment probably won't work unless you're KL, because you don't have the
Cloudflare authorization).
