---
layout: default
title: PATCH
parent: Operations
grand_parent: API Reference
nav_order: 4
---
<!-- vale off -->

## PATCH - Partial update  🔒

<!-- vale on -->

Update specific fields of a food product without replacing the entire record.

---

## Authentication required

This operation requires an API key. Include `X-API-Key: test-api-key-12345` in your request headers.

See [Authentication](../../getting-started/authentication) for details.

---

## `PATCH /foods/{id}`

Update only the specified fields. All other fields remain unchanged.

### Request

```bash
PATCH http://localhost:3000/foods/7
```

### Headers

| Header | Value | Required |
|--------|-------|----------|
| `Content-Type` | `application/json` | Yes |
| `X-API-Key` | `test-api-key-12345` | Yes |

### Path parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | integer | Unique food product identifier |

### Request body

Include only fields you want to update:

```json
{
  "rating": 3.8,
  "recommendations": "Controlled mineral levels help maintain urinary tract health.
  Best used with wet food for optimal hydration."
}
```

### Response status codes

| Code | Description |
|------|-------------|
| `200 OK` | Food product updated successfully |
| `400 Bad Request` | Invalid data format |
| `401 Unauthorized` | Missing or invalid API key |
| `404 Not Found` | Food ID doesn't exist |
| `500 Internal Server Error` | Server error |

### Success response

**Status: `200 OK`**

The response includes the complete updated record:

```json
{
  "id": 7,
  "brand": "Meow Mix Pro",
  "name": "Urinary Health Formula",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "urinary_health",
  "nutritional_profile": {
    "protein": 33,
    "fat": 13,
    "fiber": 3,
    "moisture": 10,
    "calories_per_cup": 370
  },
  "ingredients": [
    "chicken",
    "brown rice",
    "cranberry",
    "chicken meal",
    "fish oil",
    "controlled minerals",
    "taurine"
  ],
  "rating": 3.8,
  "recommendations": "Controlled mineral levels help maintain urinary tract health.
  Best used with wet food for optimal hydration."
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

**Status: `404 Not Found`**

```json
{
  "error": "Not Found",
  "message": "Food product with ID 999 not found",
  "status": 404
}
```

### Example requests

Update rating only:

```bash
curl -X PATCH http://localhost:3000/foods/7 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{"rating": 3.8}'
```

Update fields:

```bash
curl -X PATCH http://localhost:3000/foods/7 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{
    "rating": 3.8,
    "recommendations": "Updated recommendation text."
  }'
```

---

<!-- vale Google.Headings = NO -->

## `PUT` vs `PATCH`

<!-- vale Google.Headings = YES -->

| Operation | Description | Fields required |
|-----------|-------------|-----------------|
| **`PATCH`** | Updates specific fields only | Only fields you want to change |
| **`PUT`** | Replaces entire record | All fields required |

> **Tip:** Use `PATCH` when you only need to change a few fields. It's more efficient and
> safer than `PUT`.
