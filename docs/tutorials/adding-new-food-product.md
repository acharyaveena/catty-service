---
layout: default
title: Adding a new food product
parent: Tutorials
nav_order: 2
---

## Adding a new food product

Learn how to add a new cat food product to the database using the API.  

**Note:** only admins with a valid API key can add new products.

**Time required:** approximately 10 minutes

---

## Who is this for?

Shelter volunteers, vets, nutritionists, and developers who manage or analyze cat food data.

---

## Scenario

You need to add a new dry food for adult cats called 'Healthy Cat Blend'.

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

- **cURL:**
    Use the cURL command-line tool to send a POST request with your product data to the API.

    ```bash
    curl -X POST http://localhost:3000/foods \
    -H "Content-Type: application/json" \
    -H "X-API-Key: test-api-key-12345" \
    -d '{"brand":"Healthy Cat","name":"Healthy Cat Blend","type":"dry","age_group":"adult","special_diet":"weight_control","nutritional_profile":{"protein":34,"fat":10,"fiber":5},"rating":4.2}'
    ```

- **Postman:**
    Use the Postman desktop app to visually create and send a POST request  
    with your product data to the API.

    - Method: POST, URL: `http://localhost:3000/foods`
    - Headers:  
        - `Content-Type: application/json`  
        - `X-API-Key: test-api-key-12345`
    - Body: Paste the preceding JSON, select raw.
  
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

## Troubleshooting

If you encounter errors, check your API key, JSON formatting, and that the server is running.

- **401 Unauthorized:** Check your API key.
- **400 Bad Request:** Check your JSON format.
- **Connection errors:** Make sure json-server is running and the URL is correct.

---

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)
- [Find the right cat food](finding-right-cat-food)
- [Update a food product](updating-food-product)
- [Delete a food product](deleting-food-product)

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  