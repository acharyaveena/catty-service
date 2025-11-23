---
layout: default
title: Authentication
parent: Getting Started
nav_order: 3
---

## Authentication

Learn how to authenticate your API requests for write operations.

---

## Overview

The MeowTrition API uses **API key authentication** for write operations:

- **POST** - Create new food records
- **PUT** - Update existing food records  
- **DELETE** - Remove food records

Read operations like GET don't require authentication.

---

## API key for testing

Use this test API key for local development:

```text
test-api-key-12345
```

> **Note:** This key is for local testing only. In production, you would receive a unique API key.

---

## How to use the API key

Include your API key in the `X-API-Key` header with every POST, PUT, or DELETE request.

### Example with curl

```bash
curl -X POST http://localhost:3000/foods \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{"brand": "Test Brand", "name": "Test Food"}'
```
<!-- vale off -->

### Example with Postman

<!-- vale on -->

1. Open your request (POST/PUT/DELETE)
2. Go to the **Headers** tab
3. Add a new header:
   - Key: `X-API-Key`
   - Value: `test-api-key-12345`
4. Send your request

---

## Response codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Request successful (PUT/DELETE) |
| `201 Created` | Resource created successfully (POST) |
| `401 Unauthorized` | Missing or invalid API key |

---

## Error responses

### Missing API key

**Status: `401 Unauthorized`**

```json
{
  "error": "Unauthorized",
  "message": "API key is required for this operation"
}
```

### Invalid API key

**Status: `401 Unauthorized`**

```json
{
  "error": "Unauthorized",
  "message": "Invalid API key"
}
```

---

## Next steps

Try these authenticated operations:

- [POST - Create foods](../api-reference/operations/POST)
- [PUT - Update foods](../api-reference/operations/PUT)
- [DELETE - Remove foods](../api-reference/operations/DELETE)
  