# Write a python program that will:
# read all the files and their sizes from a directory
# print a nice little report that tells us the number of files and the total size of the directory

from flask import Flask, request
app = Flask(__name__)

directory1 = {
            1:{'filename':'file1', 'fileLength': 100, 'fileType': "excel"},
            2:{'filename':'file2', 'fileLength': 200, 'fileType': "excel"},
            3:{'filename':'file3', 'fileLength': 300, 'fileType': "excel"},
		 }

directory2 = {
            4:{'filename':'file4', 'fileLength': 400, 'fileType': "excel"},
            5:{'filename':'file5', 'fileLength': 500, 'fileType': "excel"},
            6:{'filename':'file6', 'fileLength': 600, 'fileType': "excel"},
		 }


@app.route("/")
def hello():
    return "Hello World!, Please include in URL /Directory/ Directory#"   

@app.route("/Directory/<myid>")
@app.route("/Directory/<myid>/")
def select_Directory(myid=None):
	print ('Selected Directory is:', int(myid))
	return "Hello Luis Cabana, has selected " + \
			str(directory.get(int(myid),{"Unknown Directory"}))

def List_Files_in_Directory(myid=):
	print('Files in Direcotry:', filelist)
    # create a data object that includes all files inside chosen directory
	return "Hello World! - List FIles v0 - Luis Cabana " + \
			{filelist}))

def calculate_character_Count(myid=):
	print('Character Countere:', Count)
	return "Hello World! - Count Characters v0 - Luis Cabana " + \

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
# investigate object path
#open file
#read line by line
#keep counter
# line loop with len counter per line
# interaction with user via terminal
# dont use flask for 220 and 230