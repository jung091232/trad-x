import os
from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Trad-X API", version="0.1.0")

@app.get("/status")
def read_status():
    return {"ok": True, "algo": "Trad-X", "version": "0.1.0"}

@app.get("/config")
def read_config():
    return {"grid": True, "ema_rsi": True, "atr": True}

@app.get("/referral/code")
def referral_code():
    return {"code": "TRADX-XXXXXX"}

@app.get("/referral/stats")
def referral_stats():
    return {"members": 0, "downline_usdt": 0, "total_commission": 0}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=int(os.getenv("PORT", 8000)), reload=True)