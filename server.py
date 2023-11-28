import os
import shutil
from threading import Thread
from http.server import HTTPServer, SimpleHTTPRequestHandler

class Handler(SimpleHTTPRequestHandler):

  def __init__(self, *args, **kwargs):

    super().__init__(*args, directory="dist", **kwargs)


def my_forever_while():
  global http_server
  http_server.serve_forever()


def take_input():
  running = True
  while running:
    try:
      user_input = input()
    except EOFError:
      user_input = "e"
    if user_input.lower() in ["", "d", "dev", "development"]:
      print("Awaiting development build...")
      command = "npx webpack --mode=development"
    elif user_input.lower() in ["p", "prod", "production"]:
      print("Awaiting production build...")
      command = "npx webpack --mode=production --node-env=production"
      shutil.rmtree("./flask_build", ignore_errors=True)
    elif user_input.lower() in ["h", "help"]:
      print(
          "[no input], d, dev, development\nRun a development build (faster than a production build, but less secure)\n"
      )
      print("p, prod, production\nRun a production build\n")
      print("h, help\nView these usage instructions\n")
      print("e, q, exit, quit\nTerminate this server")
      continue
    elif user_input.lower() in ["e", "exit", "q", "quit"]:
      print("Exiting...")
      http_server.shutdown()
      running = False
      continue
    else:
      print("Unrecognized input. Type 'h' for help.")
      continue

    os.system(command)
    # with subprocess.Popen(command, stdout=subprocess.PIPE, shell=True) as p:
    #   if p.stdout:
    #     for line in p.stdout:
    #       print(line.decode('unicode_escape'), end='')

    print(
        "\n--------------------\nBuild finished.\nPlease hard refresh your page with Ctrl+Shift+R.\n--------------------"
    )


http_server = HTTPServer(("", 80), Handler)

if __name__ == '__main__':
  t1 = Thread(target=my_forever_while)
  t2 = Thread(target=take_input)

  t1.start()
  t2.start()
