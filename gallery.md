---
layout: base
title: Gallery
permalink: /showing-pictures/

---

<div class="clearfix gallery-{{ site.data.gallery | size }}-up">
  {% for image in site.data.gallery %}
  <div class="image image-{{ forloop.index }}-of-{{ forloop.length }}">
    <img src="{{ site.url }}/images/personal/{{ image.filename }}"
         alt="{{ image.alt }}"
         title="{{ image.title }}"
         datetime="{{ image.date | date_to_xmlschema }}" />
  </div>
  {% endfor %}
</div>

