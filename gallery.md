---
layout: base
title: Gallery
permalink: /showing-pictures/

---

<div class="clearfix gallery-{{ site.data.gallery | size }}-up">
  {% for img in site.data.gallery %}
  <div class="image image-{{ forloop.index }}-of-{{ forloop.length }}">
    <img src="{{ img.filename | prepend: 'personal/' | asset_path}}"
         alt="{{ img.alt }}"
         title="{{ img.title }}"
         datetime="{{ img.date | date_to_xmlschema }}" />
  </div>
  {% endfor %}
</div>

