---
layout: default
title: Deleting a food product
parent: Tutorials
nav_order: 4
---

## Deleting a food product

Learn how to remove an existing cat food product from the database using the API.  

**Note:** this is a protected endpoint—only admins with a valid API key can perform this action.

**Time required:** approximately 10 minutes

---

## Who is this for?

Shelter volunteers, vets, nutritionists, and developers who manage or analyze cat food data.

---

## Scenario

You need to delete the food product "Healthy Cat Blend" with ID 12.

---

## Prerequisites

- Complete the [Before you start](../getting-started/before-you-start) guide
- json-server running on `http://localhost:3000`
- Admin API key: `test-api-key-12345`
- Know the product ID to delete - for example, `id: 12`

---

## Step 1: Send a DELETE request as an administrator

**cURL:**  
    Use this command-line tool to send a DELETE request for the product.

    ```bash
    curl -X DELETE http://localhost:3000/foods/12 -H "X-API-Key: test-api-key-12345"
    ```

- **Postman:**
    Use the Postman desktop app to send a DELETE request for the product.

    - Method: DELETE, URL: `http://localhost:3000/foods/12`
    - Header: `X-API-Key: test-api-key-12345`
    - Click Send.

---

## Step 2: Confirm deletion

List all foods to verify that you have removed the product:

**cURL:**  
    ```bash
    curl http://localhost:3000/foods
    ```

<!-- vale off -->
**Postman:**  
    - Method: GET, URL: `http://localhost:3000/foods`
    - Click Send.
<!-- vale on -->

Check that "Healthy Cat Blend" with ID 12 no longer appears in the results.

---

## Troubleshooting

- **401 Unauthorized:** Check your API key.
- **404 Not Found:** Make sure the product ID exists.
- **Connection errors:** Make sure json-server is running and the URL is correct.

---

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)
- [Find the right cat food](finding-right-cat-food)
- [Add a new food product](adding-new-food-product)
- [Update a food product](updating-food-product)

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  