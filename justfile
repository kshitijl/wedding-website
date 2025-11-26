default:
    @just --list

deploy-from-local: build
    npx wrangler deploy

deploy:
    git push

serve-locally:
    npx @11ty/eleventy --serve

build:
    npx @11ty/eleventy

