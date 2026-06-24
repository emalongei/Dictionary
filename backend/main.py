from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message": "FastAPI is working!"}


@app.get("/words")
def get_words():
    return [
        {
            "id": 1,
            "english": "water",
            "meitei": "ꯏꯁꯤꯡ",
            "romanized": "ising"
        },
        {
            "id": 2,
            "english": "fire",
            "meitei": "ꯃꯩ",
            "romanized": "mei"
        }
    ]