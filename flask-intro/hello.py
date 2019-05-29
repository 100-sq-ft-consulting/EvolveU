from flask import Flask, request, render_template


app = Flask(__name__)

people = {1:{'fname':'Luis', 'lname':'Cabana','age':50},
		  2:{'fname':'Claudio', 'lname':'Cabana','age':22},
		  3:{'fname':'Isabella', 'lname':'Cabana','age':18}
		 }


@app.route("/")
def hello():
    return "Hello World!, <h1>Luis</h1> here"

@app.route("/admin")
@app.route("/admin/")
@app.route("/admin/<myid>")
@app.route("/admin/<myid>/")
def admin(myid=None):
	return render_template("person.html",
		testval="Some Value So We know it works", 
		person=people.get(int(myid),{'fname':'Who Knows'}))

		

# @app.route("/admin")
# @app.route("/admin/")
# @app.route("/admin/<myid>")
# @app.route("/admin/<myid>/")
# def admin(myid=None):
# 	return render_template("person.html",
# 		testval="Some Value So We know it works", 
# 		person=people.get(int(myid),{'fname':'Who Knows'}))

# @app.route("/admin")
# @app.route("/admin/")
# @app.route("/admin/<myid>")
# @app.route("/admin/<myid>/")
# def admin(myid=None):
# 	print('people:', people)
# 	print ('my id is:', int(myid))
# 	return "Hello World! - admin v4 - Luis Cabana " + \
# 			str(people.get(int(myid),{'fname':'Who Knows'}))

@app.route("/info")
def info():
	print('Args:',request.args)
	return "Hello World! - info - Larry Shumlich " + request.args.get('parm1','default1')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

