# Trad-X Starter (Fixed)

This is the **fixed** starter for Trad-X (Expo + FastAPI).  
- Removed `updates.url` and `extra.eas` from `app/app.json` to avoid OTA errors in Expo Go.
- Everything else is identical to the original starter.

## Quickstart
### App
```
cd trad-x/app
npm install
npx expo start -c
```

### API
```
cd trad-x/api
python -m venv .venv
# Windows:
.venv\Scripts\activate
# macOS/Linux:
# source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Open http://127.0.0.1:8000/status for API check.