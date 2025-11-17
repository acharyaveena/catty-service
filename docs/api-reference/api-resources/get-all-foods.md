---
layout: default
title: GET /foods
parent: API Resources
grand_parent: API Reference
nav_order: 1
---

## `GET /foods`

Retrieves a list of all cat food products. You can filter the results using query parameters.

### Query parameters

| Parameter | Type | Description | Example |
|---|---|---|---|
| `brand` | string | Filter by brand name | `GET /foods?brand=Purrfect%20Choice` |
| `type` | string | Filter by food type | `GET /foods?type=wet` |
| `age_group` | string | Filter by age group | `GET /foods?age_group=senior` |
| `special_diet` | string | Filter by special diet | `GET /foods?special_diet=grain_free` |

### Example request

```bash
GET http://localhost:3000/foods?age_group=senior&type=wet
```

### Example response

```json
[
  {
    "id": 5,
    "brand": "Feline First",
    "name": "Senior Health Pate",
    "type": "wet",
    "age_group": "senior",
    "special_diet": "none",
    "nutritional_profile": {
      "protein": 38,
      "fat": 15,
      "fiber": 2,
      "moisture": 82,
      "calories_per_can": 180
    },
    "ingredients": [
      "chicken",
      "chicken broth",
      "liver",
      "sweet potatoes",
      "cranberries",
      "fish oil",
      "taurine"
    ],
    "rating": 4.2,
    "recommendations": "Formulated for senior cats with lower activity levels. 
    High moisture content is excellent for hydration."
  }
]
```

### Response status codes

| Status Code | Description |
|-------------|-------------|
| `200 OK` | Successfully retrieved the list of foods |
| `400 Bad Request` | Invalid query parameter value |
| `500 Internal Server Error` | Server error occurred while processing the request |
