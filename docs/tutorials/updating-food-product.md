---
layout: default
title: Updating a food product
parent: Tutorials
nav_order: 3
---

## Updating a food product

Learn how to update details of an existing cat food product using the API.  

**Note:** this is a protected endpoint—only admins with a valid API key can perform this action.

**Time required:** approximately 10 minutes

---

## Who is this for?

Shelter volunteers, vets, nutritionists, and developers who manage or analyze cat food data.

---

## Scenario

You want to update the rating and special diet for 'Healthy Cat Blend'.

---

## Prerequisites

- Complete the [Before you start](../getting-started/before-you-start) guide
- json-server running on `http://localhost:3000`
- Admin API key: `test-api-key-12345`
- Know the product ID - for example, `id: 12`

---

## Step 1: Prepare your update data

Create a JSON object with the fields you want to change:

```json
{
  "special_diet": "sensitive_stomach",
  "rating": 4.5
}
```

---
<!-- vale Google.Acronyms = NO -->
## Step 2: Send a PATCH request as an administrator

Use the PATCH endpoint to update your food product.
Only users with a valid API key can perform this action.

**cURL:**  
    Use this command-line tool to send a PATCH request with your update data.

```bash
curl -X PATCH http://localhost:3000/foods/12 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{"special_diet":"sensitive_stomach","rating":4.5}'
```

**Postman:**  
    Use the Postman desktop app to visually create and send a PATCH request
    with your update data to the API.

- Method: PATCH, URL: `http://localhost:3000/foods/12`
- Headers:  
    - `Content-Type: application/json`  
    - `X-API-Key: test-api-key-12345`
- Body: Paste the JSON preceding, select raw.
<!-- vale Google.Acronyms = YES -->

---

## Step 3: Check the response

A successful request returns the updated product:

```json
{
  "id": 12,
  "brand": "Healthy Cat",
  "name": "Healthy Cat Blend",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "sensitive_stomach",
  "nutritional_profile": {
    "protein": 34,
    "fat": 10,
    "fiber": 5
  },
  "rating": 4.5
}
```

---

## Step 4: Verify the update

List all foods to confirm your changes:

```bash
curl http://localhost:3000/foods/12
```

Check that "Healthy Cat Blend" now shows the updated special diet and rating.

---

## Troubleshooting

- **401 Unauthorized:** Check your API key.
- **400 Bad Request:** Check your JSON format.
- **404 Not Found:** Make sure the product ID exists.
- **Connection errors:** Make sure json-server is running and the URL is correct.

---

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)
- [Find the right cat food](finding-right-cat-food)
- [Add a new food product](adding-new-food-product)
- [Delete a food product](deleting-food-product)

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  