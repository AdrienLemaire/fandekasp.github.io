---
layout: base
title: Gallery
permalink: /showing-pictures/

---

{% comment %}
{% directory path: images/personal exclude:svg private %}
{% if forloop.first %}
<div class="image-gallery-container gallery-{{ forloop.length }}-up">
{% endif %}
  <div class="image image-{{ forloop.index }}-of-{{ forloop.length }}">
    <img src="{{ file.url }}"
         alt="{{ file.name }}"
         datetime="{{ file.date | date_to_xmlschema }}" />
  </div>
{% if forloop.last %}
</div>
{% endif %}
{% enddirectory %}
{% endcomment %}

<div class="clearfix gallery-{{ site.data.gallery | size }}-up">
  {% for image in site.data.gallery %}
  <div class="image image-{{ forloop.index }}-of-{{ forloop.length }}">
    <img src="{{ site.url }}/images/personal/{{ image.filename }}"
         alt="{{ image.alt }}"
         datetime="{{ image.date | date_to_xmlschema }}" />
  </div>
  {% endfor %}
</div>

