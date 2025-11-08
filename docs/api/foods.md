# Foods resource

The `foods` resource is the core of the MeowTrition API. It allows you to
access a comprehensive database of cat food products.

---

## `GET /foods`

Retrieves a list of all cat food products. You can filter the results using query parameters.

### Query parameters

| Parameter | Type | Description | Example |
|---|---|---|---|
| `brand` | string | Filter by brand name | `GET /foods?brand=Purrfect%20Choice` |
| `type` | string | Filter by food type | `GET /foods?type=wet` |
| `age_group` | string | Filter by age group | `GET /foods?age_group=senior` |
| `special_diet` | string | Filter by special diet. | `GET /foods?special_diet=grain_free` |

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

---

## `GET /foods/{id}`

Retrieves detailed information for a specific food product by its unique ID.

### Path parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | integer | The unique identifier for the food product. |

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
