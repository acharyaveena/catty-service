---
layout: default
title: Adding a new food product
parent: Tutorials
nav_order: 2
---

## Adding a new food product

Learn how to add a new cat food product to the database using the API.  
**Note:** this is a protected endpoint—only admins with a valid API key can add new products.

**Time required:** 5 minutes

---

## Scenario

You want to add a new dry food for adult cats called 'Healthy Cat Blend'.

---

## Prerequisites

- Complete the [Before you start](../getting-started/before-you-start) guide
- json-server running on `http://localhost:3000`
- Admin API key: `test-api-key-12345`

---

## Step 1: Prepare your data

Create a JSON object for the new food product:

```json
{
  "brand": "Healthy Cat",
  "name": "Healthy Cat Blend",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "weight_control",
  "nutritional_profile": {
    "protein": 34,
    "fat": 10,
    "fiber": 5
  },
  "rating": 4.2
}
```

---

## Step 2: Send a POST request as an administrator

Use the POST endpoint to add your food product.  
Only users with a valid
 API key can perform this action.

```bash
curl -X POST http://localhost:3000/foods \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{
    "brand": "Healthy Cat",
    "name": "Healthy Cat Blend",
    "type": "dry",
    "age_group": "adult",
    "special_diet": "weight_control",
    "nutritional_profile": {
      "protein": 34,
      "fat": 10,
      "fiber": 5
    },
    "rating": 4.2
  }'
```

If your API key is missing or invalid, you receive a `401 Unauthorized` error.

---

## Step 3: Check the response

A successful request returns the new product with its assigned ID:

```json
{
  "id": 12,
  "brand": "Healthy Cat",
  "name": "Healthy Cat Blend",
  "type": "dry",
  "age_group": "adult",
  "special_diet": "weight_control",
  "nutritional_profile": {
    "protein": 34,
    "fat": 10,
    "fiber": 5
  },
  "rating": 4.2
}
```

---

## Step 4: Verify the addition

List all foods to confirm you have added your new product:

```bash
curl http://localhost:3000/foods
```

Look for "Healthy Cat Blend" in the results.

---

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)  
See the complete list and details of food products
- [Find the right cat food](finding-right-cat-food)  
Search for foods by age, diet, and nutritional needs
- [Update a food product](updating-food-product)  
Change details of an existing product - only available to admins
- [Delete a food product](deleting-food-product)  
Remove a product from the database - only available to admins

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  