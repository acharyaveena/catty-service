---
layout: default
title: Deleting a food product
parent: Tutorials
nav_order: 4
---

## Deleting a food product

Learn how to remove an existing cat food product from the database using the API.  
**Note:** this is a protected endpoint—only admins with a valid API key can perform this action.

**Time required:** 5 minutes

---

## Scenario

You want to delete the food product "Healthy Cat Blend" with ID 12.

---

## Prerequisites

- Complete the [Before you start](../getting-started/before-you-start) guide
- json-server running on `http://localhost:3000`
- Admin API key: `test-api-key-12345`
- Know the product ID to delete - for example, `id: 12`

---

## Step 1: Send a DELETE request as an administrator

Use the DELETE endpoint to remove the food product.  
Only users with a valid API key can perform this action.

```bash
curl -X DELETE http://localhost:3000/foods/12 \
  -H "X-API-Key: test-api-key-12345"
```

If your API key is missing or invalid, you receive a `401 Unauthorized` error.

---

## Step 2: Confirm deletion

List all foods to verify that you have removed the product:

```bash
curl http://localhost:3000/foods
```

Check that "Healthy Cat Blend" with ID 12 no longer appears in the results.

---

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)  
See the complete list and details of food products
- [Find the right cat food](finding-right-cat-food)  
Search for foods by age, diet, and nutritional needs
- [Add a new food product](adding-new-food-product)  
Add a new cat food product - only available to admins
- [Update a food product](updating-food-product)  
Change details of an existing product - only available to admins

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  