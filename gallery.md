---
layout: base
title: Gallery
permalink: /showing-pictures/

---

{% directory path: images/personal exclude: private %}
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

{% comment %}
        <div class="image image-1-of-7"><!-- image here --></div>
    <div class="image image-2-of-7"><!-- image here --></div>
        <div class="image image-3-of-7"><!-- image here --></div>
        <div class="image image-4-of-7"><!-- image here --></div>
        <div class="image image-5-of-7"><!-- image here --></div>
        <div class="image image-6-of-7"><!-- image here --></div>
        <div class="image image-7-of-7"><!-- image here --></div>
{% endcomment %}
