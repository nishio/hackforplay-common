# common

Common package for building stages in hackforplay

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm latest version](https://img.shields.io/npm/v/@hackforplay/common/latest.svg)](https://www.npmjs.com/package/@hackforplay/common)

# Develop

## Setup and Start Development Server
- `npm install`
- `npm start`
- Development server will start at `http://localhost:8080`

## Verify Development Environment
1. Visit [HackforPlay](https://www.hackforplay.xyz/)
2. Create a new stage (no login required)
3. In the Web IDE, locate the import statement:
   ```javascript
   import 'https://cdn.hackforplay.xyz/common/0.46/register.min.js';
   ```
4. Replace it with the local development server:
   ```javascript
   import 'http://localhost:8080/register.js';
   ```
   Note: Using non-minified version (`register.js`) during development for better debugging
5. Press the Play button to verify:
   - Game UI elements should appear
   - Player character should be visible and controllable
   - Click the game screen when finger icon appears

# Deploy

- `git push origin`
- Then start automatic deploying via [semantic-release](https://github.com/semantic-release/semantic-release)

or manual deploy

- `npx np`
- Then start interactive shell via [np](https://github.com/sindresorhus/np)
