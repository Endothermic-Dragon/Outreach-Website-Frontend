import shutil
from flask import render_template, Flask
import os, sys
import json

arg = sys.argv[1] if len(sys.argv) > 1 else ""

if arg == "build-cache":
  print("Deleting stray files...")
  with open("./pages.json") as file:
    pages = [[
        page["chunk"] + ".html", page["chunk"] + ".css", page["chunk"] + ".js"
    ] for page in json.load(file)["html-pages"]]
    pages = [item for row in pages for item in row]
  pages.append("menu.css")
  pages.append("menu.js")
  print(pages)

  for root, dirs, files in os.walk("./dist"):
    for file in files:
      if file not in pages:
        os.remove(f"{root}/{file}".replace("\\", "/"))
    # Only run through top directory
    # Stop before subdirectories like "static"
    break
else:
  # Clean ./flask_build
  shutil.rmtree("./flask_build", ignore_errors=True)

  if arg != "clean":
    print("Compiling HTML...")

    with open("./pages.json") as file:
      pages = json.load(file)

    app = Flask(__name__, template_folder="./src")

    with app.app_context():
      for root, dirs, files in os.walk("./src"):
        for file in files:
          if file == pages["menu-design"]:
            continue
          relPath = f"{root}/{file}".replace("\\", "/")

          file_path_out = "./flask_build" + relPath[len("./src"):]
          folder_path_out = os.path.dirname(file_path_out)
          folder_path_in = os.path.dirname(relPath)

          if relPath.split(".")[-1] in ["html", "jinja-html"]:
            # Get flask compiled HTML
            renderedHTML = render_template(relPath[len("./src") + 1:])

            # Save HTML
            os.makedirs(folder_path_out, exist_ok=True)
            with open(file_path_out, "w+") as compiled_file:
              compiled_file.write(renderedHTML)
          # else:
          #   # Copy over file
          #   os.makedirs(folder_path_out, exist_ok = True)
          #   shutil.copy(relPath, file_path_out)

    shutil.copytree("./src/static", "./dist/static", dirs_exist_ok=True)
