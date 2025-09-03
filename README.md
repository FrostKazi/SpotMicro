
# Spot Micro — GitHub Pages Site

This repository hosts a blog-style site for my Spot Micro quadruped project.

**Live site (after enabling GitHub Pages):** `https://FrostKazi.github.io/SpotMicro/`

## Add a new post
Create a file in `_posts/` named `YYYY-MM-DD-title.md` with this header:

```yaml
---
layout: post
title: "Your Title"
date: YYYY-MM-DD
categories: updates
---
```

Then add text, images, and YouTube iframes.

## Images
Place images in `assets/images/` and reference them as:

```
![Alt text]({{ site.baseurl }}/assets/images/your-image.png)
```
