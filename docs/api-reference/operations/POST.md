---
layout: default
title: POST 
parent: Operations
grand_parent: API Reference
nav_order: 2
---

<!-- vale Google.Headings = NO -->

## POST - Add food product

<!-- vale Google.Headings = YES -->

Add a new cat food product to the database.

---

## Authentication required

This operation requires an API key. Include `X-API-Key: test-api-key-12345` in your request headers.

See [Authentication](../../getting-started/authentication) for details.

---

## `Post /foods`

Create a new food product record.

### Request

```bash
POST http://localhost:3000/foods
```

### Headers

| Header | Value | Required |
|--------|-------|----------|
| `Content-Type` | `application/json` | Yes |
| `X-API-Key` | `test-api-key-12345` | Yes |

### Request body

```json
{
  "brand": "Nature's Meow",
  "name": "Ocean Fish Delight",
  "type": "wet",
  "age_group": "adult",
  "special_diet": "grain_free",
  "nutritional_profile": {
    "protein": 44,
    "fat": 17,
    "fiber": 1.2,
    "moisture": 80,
    "calories_per_can": 190
  },
  "ingredients": [
    "salmon",
    "tuna",
    "fish broth",
    "sunflower oil",
    "taurine",
    "vitamin E"
  ],
  "rating": 4.5,
  "recommendations": "Rich in omega-3 fatty acids for healthy skin and coat."
}
```

### Required fields

| Field | Type | Description |
|-------|------|-------------|
| `brand` | string | Brand/manufacturer name |
| `name` | string | Product name |
| `type` | string | Must be: dry, wet, or raw |
| `age_group` | string | Must be: kitten, adult, senior, or all_ages |

### Response status codes

| Code | Description |
|------|-------------|
| `201 Created` | Food product created successfully |
| `400 Bad Request` | Missing required fields or invalid data |
| `401 Unauthorized` | Missing or invalid API key |
| `500 Internal Server Error` | Server error |

### Success response

**Status: `201 Created`**

```json
{
  "id": 12,
  "brand": "Nature's Meow",
  "name": "Ocean Fish Delight",
  "type": "wet",
  "age_group": "adult",
  "special_diet": "grain_free",
  "nutritional_profile": {
    "protein": 44,
    "fat": 17,
    "fiber": 1.2,
    "moisture": 80,
    "calories_per_can": 190
  },
  "ingredients": [
    "salmon",
    "tuna",
    "fish broth",
    "sunflower oil",
    "taurine",
    "vitamin E"
  ],
  "rating": 4.5,
  "recommendations": "Rich in omega-3 fatty acids for healthy skin and coat."
}
```

### Error responses

**Status: `401 Unauthorized`**

```json
{
  "error": "Unauthorized",
  "message": "API key is required for this operation"
}
```

**Status: `400 Bad Request`**

```json
{
  "error": "Bad Request",
  "message": "Missing required field: brand",
  "status": 400
}
```

### Example request

```bash
curl -X POST http://localhost:3000/foods \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{
    "brand": "Nature'\''s Meow",
    "name": "Ocean Fish Delight",
    "type": "wet",
    "age_group": "adult",
    "special_diet": "grain_free",
    "nutritional_profile": {
      "protein": 44,
      "fat": 17,
      "fiber": 1.2,
      "moisture": 80,
      "calories_per_can": 190
    },
    "ingredients": [
      "salmon",
      "tuna",
      "fish broth",
      "sunflower oil",
      "taurine",
      "vitamin E"
    ],
    "rating": 4.5,
    "recommendations": "Rich in omega-3 fatty acids."
  }'
```

---

## Field validation

### `type` values

- `dry`
- `wet`
- `raw`

### `age_group` values

- `kitten`
- `adult`
- `senior`
- `all_ages`

### `special_diet` values

- `grain_free`
- `indoor`
- `limited_ingredient`
- `none`
- `sensitive_stomach`
- `urinary_health`
- `weight_control`

### `rating`

- Must be a number between 0 and 5
- Decimal values allowed

### `nutritional_profile`

- All values must be positive numbers
- Protein, fat, fiber, moisture are percentages
- Calories vary by product type - per cup, per can, per oz
  