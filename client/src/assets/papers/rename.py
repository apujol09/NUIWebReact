import os

directory = 'D:/Repos/web2/assets/papers'

[os.rename(os.path.join(directory, f), os.path.join(directory, f).replace(' ', '_').lower()) for f in os.listdir(directory)]