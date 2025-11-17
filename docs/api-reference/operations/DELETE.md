---
layout: default
title: DELETE
parent: Operations
grand_parent: API Reference
nav_order: 5
---
<!-- vale Google.Headings = NO -->

## DELETE - remove food  🔒

<!-- vale Google.Headings = YES -->

Remove a cat food product from the database. This action is final.

---

## Authentication required

This operation needs an API key. Add `X-API-Key: test-api-key-12345` to your request headers.

See [Authentication](../../getting-started/authentication) for details.

---

## `DELETE /foods/{id}`

Delete a food product by ID. This action is final. You can't undo it.

### Request

```bash
DELETE http://localhost:3000/foods/8
```

### Headers

| Header | Value | Required |
|--------|-------|----------|
| `X-API-Key` | `test-api-key-12345` | Yes |

### Path parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | integer | Unique food product ID |

### Response status codes

| Code | Description |
|------|-------------|
| `200 OK` | Food product deleted successfully |
| `401 Unauthorized` | Missing or invalid API key |
| `404 Not Found` | Food ID doesn't exist |
| `500 Internal Server Error` | Server error |

### Success response

**Status: `200 OK`**

json-server returns an empty object on successful deletion:

```json
{}
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

### Example request

```bash
curl -X DELETE http://localhost:3000/foods/8 \
  -H "X-API-Key: test-api-key-12345"
```

---

## Verify deletion

After deleting, verify that you removed the product:

```bash
curl http://localhost:3000/foods/8
```

Expected response: `404 Not Found`

---

## Important notes

- **Deletion is final** - You can't undo it
- **Always check the ID** before you delete
- **Check links** - Make sure the food isn't used elsewhere

> **Warning:** You can't undo this action. The system removes deleted records for good.
