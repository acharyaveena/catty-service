---
layout: default
title: Updating a food product
parent: Tutorials
nav_order: 3
---

## Updating a food product

Learn how to update details of an existing cat food product using the API.  
**Note:** this is a protected endpoint—only admins with a valid API key can perform this action.

**Time required:** 5 minutes

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

```bash
curl -X PATCH http://localhost:3000/foods/12 \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-api-key-12345" \
  -d '{
    "special_diet": "sensitive_stomach",
    "rating": 4.5
  }'
```
<!-- vale Google.Acronyms = YES -->

If your API key is missing or invalid, you receive a `401 Unauthorized` error.

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

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)  
See the complete list and details of food products
- [Find the right cat food](finding-right-cat-food)  
Search for foods by age, diet, and nutritional needs
- [Add a new food product](adding-new-food-product)  
Add a new cat food product - only available to admins
- [Delete a food product](deleting-food-product)  
Remove a product from the database - only available to admins

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  