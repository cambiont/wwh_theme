# wwh-recipe

A lightweight Hugo theme for recipe blogs.

## Features

- Home/list layout with latest-recipe hero
- Recipe cards with image, time, date, and tags/categories
- Category/tag sidebar and pagination
- Simple recipe single page
- Client-side search (`/search`) powered by Lunr
- QR share toggle on recipe pages

## Install

For a quick copy/paste setup, use [INSTALL.md](./INSTALL.md).

1. Copy this folder into your Hugo site as `themes/wwh-recipe`.
2. Set your site config:

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

3. Add `content/search/_index.md`:

```toml
---
title = "Search"
---
```

## Front matter for recipes

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
---
```
