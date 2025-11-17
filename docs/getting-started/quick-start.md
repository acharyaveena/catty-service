---
layout: default
title: Quick Start
parent: Getting Started
nav_order: 2
---

## Quick start guide

Get up and running with the MeowTrition API in minutes.

---

## Prerequisites

Before you begin, complete the [Before you start](before-you-start) setup guide.

---

## Your first API call

### 1. Verify the server is running

Make sure json-server is running on port 3000 with authentication middleware:

```bash
cd api
json-server -w catty-db-source.json -m auth-middleware.js
```

### 2. Get all foods

Retrieve the complete list of cat food products:

```bash
curl http://localhost:3000/foods
```

**Response:**

```json
[
  {
    "id": 1,
    "brand": "Whisker Wellness",
    "name": "Premium Chicken & Rice",
    "type": "dry",
    "age_group": "adult",
    ...
  }
]
```

### 3. Get a specific food by ID

Retrieve details for a single product:

```bash
curl http://localhost:3000/foods/1
```

**Response:**

```json
{
  "id": 1,
  "brand": "Whisker Wellness",
  "name": "Premium Chicken & Rice",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "none",
  "nutritional_profile": {
    "protein": 32,
    "fat": 12,
    "fiber": 4,
    "moisture": 10,
    "calories_per_cup": 350
  }
}
```

### 4. Filter foods by criteria

Find foods for senior cats:

```bash
curl "http://localhost:3000/foods?age_group=senior"
```

Find grain-free wet food:

```bash
curl "http://localhost:3000/foods?special_diet=grain_free&type=wet"
```

---

## Authenticated requests

Write operations (POST, PUT, DELETE) require authentication. Include the API key
`test-api-key-12345` in the `X-API-Key` header.

### Create a new food

```bash
curl -X POST http://localhost:3000/foods \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{"brand": "Test Brand", "name": "Test Food"}'
```

**Without the API key, you'll get:**

```json
{
  "error": "Unauthorized",
  "message": "API key is required for this operation"
}
```

> **Learn more:** See the [Authentication guide](authentication) for complete details on using
> API keys with POST, PUT, and DELETE operations.

---

## Using postman

If you prefer a GUI, use Postman Desktop:

### 1. Create a new request

- Method: `GET`
- URL: `http://localhost:3000/foods`

### 2. Click send

You'll see the JSON response in the body panel.

### 3. Try different endpoints

- Get all foods: `http://localhost:3000/foods`
- Get food by ID: `http://localhost:3000/foods/1`
- Filter by age: `http://localhost:3000/foods?age_group=kitten`

### 4. Test authenticated requests

For POST/PUT/DELETE operations:

1. Change method to `POST`
2. Set URL to `http://localhost:3000/foods`
3. Go to **Headers** tab
4. Add header: `X-API-Key` with value `test-api-key-12345`
5. Go to **Body** tab, select **raw** and **JSON**
6. Add: `{"brand": "Test", "name": "Test Food"}`
7. Click **Send**

---

## Common query parameters

| Parameter | Example | Description |
|-----------|---------|-------------|
| `brand` | `?brand=Whisker%20Wellness` | Filter by brand name |
| `type` | `?type=wet` | Filter by food type: wet, dry, raw |
| `age_group` | `?age_group=senior` | Filter by age: kitten, adult, senior, all_ages |
| `special_diet` | `?special_diet=grain_free` | Filter by dietary needs |

### Combine filters

```bash
curl "http://localhost:3000/foods?type=wet&age_group=kitten"
```

---

## What's next?

Now that you've made your first API calls, explore these tutorials:

- [Finding the right cat food](../tutorials/finding-food) - Learn to search by nutritional needs
- [Foods for sensitive stomachs](../tutorials/sensitive-stomachs) - Find gentle options for cats
  with digestive issues

Or dive into the complete API documentation:

- [GET /foods](../api-reference/api-resources/get-all-foods) - Full endpoint reference
- [GET /foods/{id}](../api-reference/api-resources/get-food-by-id) - Get specific products

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Connection refused | Ensure json-server is running on port 3000 |
| Empty array returned | Check your filter parameters are valid |
| Command not found | Install curl or use Postman |

---

## Need help?

- **Have questions?** Check the [Before you start](before-you-start) guide
- **Found a bug?** [Open an issue](https://github.com/acharyaveena/catty-service/issues)
  