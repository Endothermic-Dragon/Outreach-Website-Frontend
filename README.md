
# Setup
- Make sure you have `Python` and `NodeJS` installed.
- Download `Flask` for `Python`
- Install dependencies for `NodeJS` with `npm i`

# Configuring Program
Add new pages under `html-pages` in `pages.json`. Note that it must be a relative url to `./src/`.
- Name the `chunk` what you want your output page to be called
- `html` points to the HTML source file
- Your dynamic assets should be under `bundle` (CSS + JS)
- Your static assets should be under the `static/` folder under `./src/`
  - This is copied over to `./dist/`

# Building Program
- Development build: `npm run build`
- Production build: `npm run build:prod`
- Continuous building and testing
  - Run `server.py`
    - Run a development build (faster than a production build, but less secure)
      - `[no input], d, dev, development`
    - Run a production build
      - `p, prod, production`
    - View usage instructions (same as these).
      - `h, help`
    - Terminate this server
      - `e, q, exit, quit`

# Future
- SWC instead of babel