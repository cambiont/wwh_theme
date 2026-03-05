# Install Checklist (Fresh Hugo Site)

## 1. Copy Theme Folder

Copy this theme into your new site:

```bash
cp -R /path/to/wwh-recipe /path/to/new-site/themes/wwh-recipe
```

## 2. Update `hugo.toml`

Add/merge:

```toml
theme = "wwh-recipe"

[pagination]
pagerSize = 7

[taxonomies]
category = "categories"
tag = "tags"

[params]
recipeThemeTagline = "Simple recipe journal"
```

## 3. Add Search Section Content

Create:

`content/search/_index.md`

```toml
---
title = "Search"
---
```

## 4. Add Recipe Content

Put recipes in:

`content/recipes/*.md`

Front matter example:

```toml
---
title = "My Recipe"
description = "Short description"
summary = "Optional summary"
date = 2026-03-05T12:00:00Z
time = "30m"
featured_image = "/food_images/example.jpg"
tags = ["Dinner"]
# or: categories = ["Dinner"]
draft = false
---
```

## 5. Add Images

Put images in:

`static/food_images/`

Then reference with:

`featured_image = "/food_images/your-file.jpg"`

## 6. Run and Verify

```bash
hugo serve
```

Check:

- `/` shows hero + recipe list + categories/tags sidebar
- `/recipes/<slug>/` shows recipe, image, QR toggle
- `/search/` works and returns results

## 7. Optional: Use Archetype

To create new recipe content with defaults:

```bash
hugo new recipes/my-new-recipe.md
```

(Uses `themes/wwh-recipe/archetypes/default.md` automatically.)
