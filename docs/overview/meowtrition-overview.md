---
layout: default
title: Overview
nav_order: 2
---
<!-- vale Google.Headings = NO -->

## MeowTrition API Overview

<!-- vale Google.Headings = YES -->

Welcome to the MeowTrition API documentation. This REST API gives you cat food
nutrition data. Use it to make better feeding choices for your cat.

## Overview

The MeowTrition API gives you access to a large cat food database. Each
product has nutrition facts, ingredient lists, and vet tips. Use this API to
search for the best food for your cat's needs, age, and diet.

### Core concepts

- **Food items**: Cat food products with full nutrition facts
- **Nutrition analysis**: Details on protein, fat, fiber, and moisture
- **Ingredient lists**: All ingredients listed in order of amount
- **Product ratings**: Quality scores can range 0-5 based on vet standards
- **Recommendations**: Science-based advice for each product
- **Search filters**: Find food by brand, type, age group, and special diet

### Access and limits

- **Authentication**: Not needed for reading data with GET. You need a bearer
  token to write data with POST, PUT, PATCH, or DELETE.
- **Usage limits**: No rate limits. Use caching for data you access often.
- **Base URL**: `http://localhost:3000`
- **Versioning**: Not versioned yet. Future updates stay compatible when
  possible.

## Audience

- **Pet owners** who want the best nutrition for their cats
- **Vets** who give diet advice to clients
- **App developers** who build apps for cat owners

## Next steps

For setup instructions, tutorials, API reference, and support, visit the
[documentation home](../../index.md).
