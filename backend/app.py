from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
import bcrypt

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb+srv://ashishsah11110112:CpbkElbRuE4efSNh@userauthcluster.fvhu1.mongodb.net/MindWarsAI"  # Replace with your MongoDB Atlas URI
mongo = PyMongo(app)

@app.route('/signup', methods=['POST'])
def signup():
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    
    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Insert the new user into the database
    mongo.db.users.insert_one({
        'username': username,
        'email': email,
        'password': hashed_password.decode('utf-8')
    })
    return jsonify({"message": "User registered successfully"}), 201

@app.route('/login', methods=['POST'])
def login():
    identifier = request.json['identifier']  # Can be username or email
    password = request.json['password']

    # Find user by username or email
    user = mongo.db.users.find_one({'$or': [{'username': identifier}, {'email': identifier}]})
    
    if user and bcrypt.checkpw(password.encode('utf-8'), user['password'].encode('utf-8')):
        return jsonify({"message": "Login successful"}), 200
    return jsonify({"message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(debug=True)
