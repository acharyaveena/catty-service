---
layout: default
title: GET
parent: Operations
grand_parent: API Reference
nav_order: 1
---
<!-- vale Google.Headings = NO -->

## GET - Read operations

<!-- vale Google.Headings = YES -->

Retrieve cat food data from the MeowTrition API. GET requests don't require authentication.

---

## `GET /foods`

Retrieve all cat food products with optional filtering.

### Request format

```bash
GET http://localhost:3000/foods
```

### Query parameters

| Parameter | Type | Example | Description |
|-----------|------|---------|-------------|
| `brand` | string | `?brand=Whisker%20Wellness` | Filter by brand name |
| `type` | string | `?type=wet` | Filter by type: dry, wet, raw |
| `age_group` | string | `?age_group=senior` | Filter by age: kitten, adult, senior, all_ages |
| `special_diet` | string | `?special_diet=grain_free` | Filter by diet type |

### Response status codes

| Code | Description |
|------|-------------|
| `200 OK` | Successfully retrieved foods |
| `400 Bad Request` | Invalid query parameter |
| `500 Internal Server Error` | Server error |

### `GET /foods` success response

**Status: `200 OK`**

```json
[
  {
    "id": 1,
    "brand": "Whisker Wellness",
    "name": "Premium Chicken & Rice",
    "type": "dry",
    "age_group": "adult",
    "special_diet": "none",
    "nutritional_profile": {
      "protein": 32,
      "fat": 15,
      "fiber": 3.5,
      "moisture": 10,
      "calories_per_cup": 385
    },
    "ingredients": [
      "chicken",
      "brown rice",
      "chicken meal",
      "rice bran",
      "chicken fat",
      "fish oil",
      "taurine"
    ],
    "rating": 3.2,
    "recommendations": "Excellent protein content for active adult cats..."
  }
]
```

### Example requests

Get all foods:

```bash
curl http://localhost:3000/foods
```

Filter by age group:

```bash
curl "http://localhost:3000/foods?age_group=senior"
```

Filter by criteria:

```bash
curl "http://localhost:3000/foods?type=wet&special_diet=grain_free"
```

---

## `GET /foods/{id}`

Retrieve a specific food product by ID.

### `GET /foods/{id}` request format

```bash
GET http://localhost:3000/foods/6
```

### Path parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | integer | Unique food product identifier |

### `GET /foods/{id}` response status codes

| Code | Description |
|------|-------------|
| `200 OK` | Successfully retrieved food |
| `404 Not Found` | Food ID doesn't exist |
| `500 Internal Server Error` | Server error |

### Success response

**Status: `200 OK`**

```json
{
  "id": 6,
  "brand": "Purrfect Choice",
  "name": "Grain-Free Turkey",
  "type": "wet",
  "age_group": "adult",
  "special_diet": "grain_free",
  "nutritional_profile": {
    "protein": 42,
    "fat": 18,
    "fiber": 1,
    "moisture": 82,
    "calories_per_can": 195
  },
  "ingredients": [
    "turkey",
    "turkey liver",
    "turkey broth",
    "peas",
    "carrots",
    "fish oil",
    "taurine"
  ],
  "rating": 4.7,
  "recommendations": "High protein, grain-free option for cats with grain sensitivities."
}
```

### Error response

**Status: `404 Not Found`**

```json
{
  "error": "Not Found",
  "message": "Food product with ID 999 not found",
  "status": 404
}
```

### Example request

```bash
curl http://localhost:3000/foods/6
```
