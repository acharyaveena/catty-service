---
layout: default
title: GET /foods/{id}
parent: API Resources
grand_parent: API Reference
nav_order: 2
---

## `GET /foods/{id}`

Gets details for a specific food product by its ID.

### Path parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | The ID for the food product |

### Example request for specific food

```bash
GET http://localhost:3000/foods/6
```

### Example response for specific food

```json
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
  "recommendations": "High protein, grain-free option for cats with grain sensitivities. 
  Rich in natural moisture."
}
```

### Response status codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Got the food item |
| `404 Not Found` | Food item with the ID doesn't exist |
| `400 Bad Request` | Bad ID format - must be a positive integer |
| `500 Internal Server Error` | Server error while processing the request |
