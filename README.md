# Image Processing API

## 📌 Project Overview

This project is a Node.js + Express + TypeScript API that resizes images and caches the processed results to disk.

It serves two main purposes:

1. Acts as a placeholder image API for frontend prototyping.
2. Resizes and caches images dynamically to reduce frontend load size.

The API processes images using the **Sharp** library and stores resized images in a cache folder for faster subsequent access.

---

# 🚀 Getting Started

## Install Dependencies

```bash
npm install
```

---

## Available Scripts

### ▶ Start Production Server

```bash
npm run build
npm start
```

Runs compiled JavaScript from the `build/` folder.

Server runs at:

```
http://localhost:3001
```

---

### 🔧 Development Mode

```bash
npm run dev

```

Runs the server using nodemon with TypeScript directly from: src/index.ts

---

### 🏗 Build Project

```bash
npm run build
```

Compiles TypeScript into JavaScript (`build/` folder).

---

### Run Tests

```bash
npm run test
```

Runs Jasmine unit tests.

---

### Clean Running Node Processes (Windows)
```bash
npm run clean
```

Kills all running Node.js processes.

---

### Run ESLint

npm run lint

Runs ESLint on all .ts files inside the src/ directory.

Expected result: No linting errors

---

### Run Prettier Formatter

npm run format

Formats all project files using Prettier.

Expected result: No formatting errors

---

# 🌐 API Endpoints

## Base Endpoint

```
GET /
```

Expected Result:

- Status code: 200
- Response: "Image Processing API"

---

## Image Resize Endpoint

```
GET /api/images
```

### Required Query Parameters:

| Parameter | Description                                            |
| --------- | ------------------------------------------------------ |
| filename  | Name of image inside `assets/full` (without extension) |
| width     | Desired image width (positive number)                  |
| height    | Desired image height (positive number)                 |

---

### ✅ Example Working URL

```
http://localhost:3001/api/images?filename=fjord&width=300&height=200
```

Make sure this file exists:

```
assets/full/fjord.jpg
```

---

# Caching Behavior

- First request:

  * Image is resized using Sharp
  * Saved inside:

    ```
    assets/thumb/
    ```

- Subsequent requests:
  - Cached image is served directly from disk
  - Faster response time

Example cached file name:

```
fjord_300_200.jpg
```

---

# ❌ Error Handling

The API handles the following error cases:

| Scenario                  | Status Code |
| ------------------------- | ----------- |
| Missing filename          | 400         |
| Missing width or height   | 400         |
| Non-numeric width/height  | 400         |
| Width or height ≤ 0       | 400         |
| Image file does not exist | 404         |
| Unexpected server error   | 500         |

---

# Testing

Unit tests include:

- Base endpoint test
- Missing parameter validation
- Image processing test

Run tests with:

```bash
npm run test
```

---

# 📁 Project Structure

```
src/
  routes/
  utilities/
  index.ts

assets/
  full/
  thumb/

spec/
```

---

# 🛠 Technologies Used

- Node.js
- Express
- TypeScript
- Sharp
- Jasmine
- Supertest
- ESLint
- Prettier

---

# 📌 Additional Features

- Type-safe request handling
- Clean project architecture
- Disk-based image caching
- Full error validation
- Scalable folder structure for enterprise-level extension

---

# 👨‍💻 Notes for Reviewer

* Please ensure at least one image (e.g., `fjord.jpg`) exists inside `assets/full/`.
* Cached images will automatically be generated in `assets/thumb/`.
* No database is used — all file operations are disk-based.
* Run npm run lint and npm run format to ensure code follows standards.

---

## 👩‍💻 Developed By

Nour Ashraf Yaseen  
Full Stack JavaScript Developer (In Progress 🚀)
GitHub: https://github.com/nour-yaseen25

