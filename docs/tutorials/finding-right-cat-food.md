---
layout: default
title: Finding the right cat food
parent: Tutorials
nav_order: 1
---

## Finding the right cat food

Learn how to search for cat food products based on your cat's age, dietary needs, and preferences.

**Time required:** approximately 10 minutes

---

## Who is this for?

Cat owners, shelter volunteers, veterinarians, and developers who want to find the best food  
for cats based on specific needs.

---

## Scenario

You need to find high-protein, grain-free wet food for your adult cat, Whiskers.

---

## Prerequisites

- Complete the [Before you start](../getting-started/before-you-start) guide
- json-server running on `http://localhost:3000`

---

## Step 1: Find all wet foods

**cURL:**  
  Use this command-line tool to list all wet food products.

  ```bash
  curl "http://localhost:3000/foods?type=wet"
  ```

**Postman:**  
  Create a GET request to `http://localhost:3000/foods?type=wet` and click Send.

**Expected response:** returns all wet food products.

---

## Step 2: Filter by age group

**cURL:**  
  List wet foods for adult cats.

  ```bash
  curl "http://localhost:3000/foods?type=wet&age_group=adult"
  ```

**Postman:**  
  Set the URL to `http://localhost:3000/foods?type=wet&age_group=adult` and click Send.

**Expected response:** returns wet foods suitable for adult cats.

---

## Step 3: Add dietary requirements

**cURL:**  
  Filter for grain-free options.

  ```bash
  curl "http://localhost:3000/foods?type=wet&age_group=adult&special_diet=grain_free"
  ```

**Postman:**  
  Set the URL to  
  `http://localhost:3000/foods?type=wet&age_group=adult&special_diet=grain_free`  
  and click Send.

**Expected response:**

```json
[
  {
    "id": 6,
    "brand": "Purrfect Choice",
    "name": "Grain-Free Turkey",
    "type": "wet",
    "age_group": "adult",
    "special_diet": "grain_free",
    "nutritional_profile": {
      "protein": 42,
      "fat": 18,
      "fiber": 1,
      "moisture": 82,
      "calories_per_can": 195
    },
    "ingredients": [
      "turkey",
      "turkey liver",
      "turkey broth",
      "peas",
      "carrots",
      "fish oil",
      "taurine"
    ],
    "rating": 4.7,
    "recommendations": "High protein, grain-free option for cats with grain sensitivities."
  }
]
```

## Step 4: Get detailed information

**cURL:**  
  Get complete details for this product.

  ```bash
  curl http://localhost:3000/foods/6
  ```

**Postman:**  
  Create a GET request to `http://localhost:3000/foods/6` and click Send.

**Expected response:** returns the full record with ratings and recommendations.

---

## Quick reference

### Filter by age

| Age | Query |
|-----|-------|
| Kitten | `?age_group=kitten` |
| Adult | `?age_group=adult` |
| Senior | `?age_group=senior` |

### Filter by diet

| Need | Query |
|------|-------|
| Grain-free | `?special_diet=grain_free` |
| Weight control | `?special_diet=weight_control` |
| Sensitive stomach | `?special_diet=sensitive_stomach` |

### Combine filters

```bash
curl "http://localhost:3000/foods?age_group=senior&special_diet=weight_control"
```

---

## What to look for

**Good nutritional profile:**

- Protein: 30%+ for adults
- First ingredient: Real meat
- Contains: Taurine, an essential nutrient for healthy digestion

---

## Troubleshooting

- **401 Unauthorized:** Check your API key if required.
- **400 Bad Request:** Check your query parameters.
- **Connection errors:** Make sure json-server is running and the URL is correct.

---

## Next steps

- [View all cat food products](../api-reference/api-resources/get-all-foods)
- [Add a new food product](adding-new-food-product)
- [Update a food product](updating-food-product)
- [Delete a food product](deleting-food-product)

---

## Need help?

- [Quick start guide](../getting-started/quick-start)
  