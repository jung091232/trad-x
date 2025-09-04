# Trad-X Starter (Expo + FastAPI + CI)

Minimal solo-dev template for **Trad-X**:

- **app/**: React Native (Expo)
- **api/**: FastAPI (Render/Railway ready)
- **CI**: GitHub Actions (EAS Android preview build)

---

## 1) Prereqs
- Node 20+, npm
- Python 3.10+
- Expo CLI / EAS CLI
  ```bash
  npm i -g eas-cli
  ```

## 2) App (Expo)
```bash
cd app
npm ci
npx expo start
```

### EAS Build / Update (optional)
```bash
eas login
eas init
# OTA update for preview devices
eas update --branch preview --message "first preview"
# Android build (APK/AAB)
eas build --platform android --profile preview
```

## 3) API (FastAPI)
```bash
cd api
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
API:
- `GET /status`
- `GET /config`
- `GET /referral/code`
- `GET /referral/stats`

## 4) Environment
Create `app/.env` and `api/.env` from the provided `.env.example` files.

## 5) GitHub Actions (APK)
- Add **EXPO_TOKEN** to GitHub → repo → *Settings* → *Secrets and variables* → *Actions* → *New repository secret*.
- Push to `dev` branch to trigger preview build.

## 6) Branching (solo-friendly)
- `main` — stable
- `dev` — work branch → PR → main

## 7) App Icons / Branding
- Place assets in `app/assets/branding/`.
- `app/app.json` controls icon & splash.

---

Happy shipping!