<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Q85-rWWwO7uUAZgN_8YBm73Ly2HDkfeo

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Create a `.env.local` file with your API keys:

   ```bash
   VITE_GEMINI_API_KEY=your_gemini_api_key

   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

3. Run the app:
   `npm run dev`

> Firebase initialization is optional at runtime. If Firebase env vars are missing, the app keeps rendering and logs a warning instead of crashing.
