---
layout: default
title: PUT
parent: Operations
grand_parent: API Reference
nav_order: 3
---

<!-- vale off -->

## PUT - Update food

<!-- vale on -->

Replace an entire food product record. Requires authentication.

---

## Authentication required

Include `X-API-Key: test-api-key-12345` in request headers.

See [Authentication](../../getting-started/authentication) for details.

---

## `PUT /foods/{id}`

Update all fields of a food product. PUT replaces the entire record.

### Request

```bash
PUT http://localhost:3000/foods/3
```

### Headers

| Header | Value | Required |
|--------|-------|----------|
| `Content-Type` | `application/json` | Yes |
| `X-API-Key` | `test-api-key-12345` | Yes |

### Path parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | integer | Food product ID |

### Request body

```json
{
  "brand": "Meow Mix Pro",
  "name": "Weight Management Formula",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "weight_control",
  "nutritional_profile": {
    "protein": 36,
    "fat": 8,
    "fiber": 6.5
  },
  "rating": 3.5
}
```

### Response codes

| Code | Description |
|------|-------------|
| `200 OK` | Update successful |
| `400 Bad Request` | Invalid data |
| `401 Unauthorized` | Missing/invalid API key |
| `404 Not Found` | ID doesn't exist |

### Success response

```json
{
  "id": 3,
  "brand": "Meow Mix Pro",
  "name": "Weight Management Formula",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "weight_control",
  "nutritional_profile": {
    "protein": 36,
    "fat": 8,
    "fiber": 6.5
  },
  "rating": 3.5
}
```

### Error responses

**401 Unauthorized:**

```json
{
  "error": "Unauthorized",
  "message": "API key is required for this operation"
}
```

**404 Not Found:**

```json
{
  "error": "Not Found",
  "message": "Food product with ID 999 not found"
}
```

### Example

```bash
curl -X PUT http://localhost:3000/foods/3 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{
    "brand": "Meow Mix Pro",
    "name": "Weight Management Formula",
    "type": "dry",
    "age_group": "adult",
    "rating": 3.5
  }'
```

---

<!-- vale Google.Headings = NO -->

## `PUT` vs `PATCH`

<!-- vale Google.Headings = YES -->

| Operation | Description |
|-----------|-------------|
| **`PUT`** | Replaces entire record - all fields required |
| **`PATCH`** | Updates specific fields only |

> **Tip:** Use PATCH for partial updates. See [`PATCH`](PATCH) reference.
