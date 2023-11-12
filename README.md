# Run Local Server
`cd dist`
`py -m http.server 80`

# Setup
Download `Flask` for `Python` and `pnpm` for `NodeJS`. Run `pnpm i`.

# Configuring Program
Add stuff under `html-pages` in `pages/pages.html`. Note that it must be a relative url to `./src/`. The only reason it's in a seperate folder is so that it shows up on top and can be found easily.
- Name the `chunk` what you want your page to be called
- `html` points to the HTML source file
- Your dynamic assets should be under `bundle`
- Your static assets should be under the `static/` folder under `./src/`

# Building Program
## ~~Development Build~~
~~`npm run build`~~
^ Need to fix

## Production Build
`npm run build:prod`

## Deploy and Relaunch Server
`npm run test`