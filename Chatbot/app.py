from flask import Flask, render_template, request, jsonify
from chatbot import chatbot_response

app = Flask(__name__)

@app.route("/chatbot")
def chatbot_page():
    return render_template("index.html")

@app.route("/api/chatbot", methods=["POST"])
def chat():
    user_input = request.json.get("message", "")
    response = chatbot_response(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)