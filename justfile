default:
    @just --list

deploy: build
    npx wrangler deploy

serve-locally:
    npx @11ty/eleventy --serve

build:
    npx @11ty/eleventy

