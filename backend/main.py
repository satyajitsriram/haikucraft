from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()
client = OpenAI()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Input(BaseModel):
    text: str

@app.post("/haiku")
async def haiku(input: Input):
    try:
        res = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": (
  "You are a poetic assistant who composes haikus with a strict 5-7-5 syllable pattern. "
  "Always use the seasonal reference and cutting word provided by the user. "
  "Only output the haiku in three lines with no title or extra text."
)},
                {"role": "user", "content": f"Write a haiku about: {input.text}"}
            ]
        )
        return {"haiku": res.choices[0].message.content.strip()}
    except Exception as e:
        return {"haiku": f"❌ Error: {str(e)}"}