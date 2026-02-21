# Catty-service: Meowtrition API documentation

[![GitHub Pages](https://img.shields.io/badge/docs-live-brightgreen)](https://acharyaveena.github.io/catty-service/)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3.3-red)](https://jekyllrb.com/)

> REST API documentation for MeowTrition, a cat food nutrition database.  
> Part of the University of Washington's API Documentation Certificate program.

**📚 [View Live Documentation](https://acharyaveena.github.io/catty-service/)**

---

## About

MeowTrition API provides cat food data with nutritional profiles and dietary recommendations  
for veterinarians, shelter volunteers, developers, and nutritionists.

**Key Features:**

- User-focused tutorials with practical scenarios
- Multi-platform code examples (cURL, Postman)
- Comprehensive API reference
- Local testing with JSON Server

---

## Technologies

- **Jekyll** - Static site generator
- **Just the Docs** - Documentation theme
- **Vale** - Style linting
- **GitHub Pages** - Hosting
- **JSON Server** - Mock API

---

## Quick start

**Prerequisites:** ruby 2.7+, Node.js, Git

```bash
# Clone repository
git clone https://github.com/acharyaveena/catty-service.git
cd catty-service

# Install dependencies
bundle install
npm install -g json-server

# Run documentation site
bundle exec jekyll serve
# Visit: http://localhost:4000

# Run mock API
json-server --watch db.json --port 3000
# API: http://localhost:3000
```

---

## Project structure

```
catty-service/
├── docs/                # Documentation source
│   ├── getting-started/
│   ├── tutorials/
│   └── api-reference/
├── db.json             # Sample API data
├── _config.yml         # Jekyll config
└── .vale.ini          # Linting rules
```

---

## Sample data (db.json)

Contains sample cat food entries for local testing:

```json
{
  "foods": [
    {
      "id": 1,
      "brand": "Whiskers Premium",
      "name": "Adult Cat Food",
      "nutritional_profile": {
        "protein_percentage": 32,
        "fat_percentage": 15,
        "calories_per_cup": 350
      },
      "ingredients": ["chicken", "peas"],
      "rating": 4.5
    }
  ]
}
```

---

## Testing the API

```bash
# Get all foods
curl http://localhost:3000/foods

# Get by ID
curl http://localhost:3000/foods/1

# Filter by age group
curl http://localhost:3000/foods?age_group=adult
```

---

## Documentation sections

1. **Getting Started** - Setup, authentication, best practices
2. **Tutorials** - Step-by-step guides with code examples
3. **API Reference** - Complete endpoint documentation

---

## Style linting

```bash
# Install Vale
brew install vale  # macOS
choco install vale # Windows

# Run linting
vale docs/
```

---

## Portfolio

This project demonstrates:

- User-focused technical writing
- Multi-platform code examples
- Scenario-based tutorials
- Professional documentation tooling
- Collaboration and peer review

<!-- vale off -->
**Program:** University of Washington API Documentation Certificate
<!-- vale on -->

---

## Author

**Veena Acharya**  
GitHub: [@acharyaveena](https://github.com/acharyaveena)

---

## License

MIT License - See [LICENSE](LICENSE) file for details.
