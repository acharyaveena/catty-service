---
layout: default
title: Before You Start
parent: Getting Started
nav_order: 1
---

## Before you start

Complete these setup steps before using the MeowTrition API tutorials.

**Time required:** approximately 15 minutes

---

## Prerequisites

You need the following to work with the MeowTrition API:

### Required software

- **Git** - Command line version
- **Node.js** - Current or LTS version
- **json-server** - Version 0.17.4 or later
- **Postman Desktop** - For testing API calls

> **Note:** Use Postman Desktop instead of the web version. The web version can't access
> `localhost` endpoints.

### Optional but recommended

- **GitHub Desktop** - Easier repository management
- **Visual Studio Code** - Code editor with REST Client extension

---

## Setup steps

### 1. Clone the repository

```bash
git clone https://github.com/acharyaveena/catty-service.git
cd catty-service
```

### 2. Create a working branch

```bash
git checkout -b my-tutorial-branch
```

> **Tip:** Create a new branch for each tutorial. This prevents errors in one tutorial from
> affecting others.

<!-- vale Google.Headings = NO -->

### 3. Install json-server

<!-- vale Google.Headings = YES -->

```bash
npm install -g json-server@0.17.4
```

### 4. Start the API service

Navigate to the `api` directory and start the server with authentication middleware:

```bash
cd api
json-server -w catty-db-source.json -m auth-middleware.js
```

> **Note:** The `-m auth-middleware.js` flag enables simple authentication. All write
> operations like POST, PUT, DELETE require an API key.

You should see:

```bash
JSON Server started on PORT :3000
```

---

## Test your setup

Verify everything works correctly:

### Make a test request

```bash
curl http://localhost:3000/foods
```

### Expected response

You should see a JSON array of cat food products:

```json
[
  {
    "id": 1,
    "brand": "Whisker Wellness",
    "name": "Premium Chicken & Rice",
    "type": "dry",
    "age_group": "adult",
    //...
  },
  //...
]
```

---

## Troubleshooting

| Problem              | Solution                                               |
|----------------------|--------------------------------------------------------|
| Command not found    | Check software installation and PATH settings          |
| Port already in use  | Stop other services on port 3000 or use a different port |
| File not found       | Make sure you’re in the correct directory              |
| JSON syntax error    | Check for changes in `catty-db-source.json`            |

---

## Next steps

Once your setup is complete and the test request succeeds, you're ready to start the tutorials:

- [Quick Start Guide](quick-start)
- [Finding the right cat food](../tutorials/finding-right-cat-food)
- [Adding a new cat food product](../tutorials/adding-new-food-product)

---

## Need help?

- For setup issues, see [Troubleshooting](#troubleshooting)
- For bugs, [open an issue](https://github.com/acharyaveena/catty-service/issues)
  