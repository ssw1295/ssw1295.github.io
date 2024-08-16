---
layout: json
permalink: /entities.json
---
[
{% for item in site.entry %}
  {
    "url": "{{ item.url }}"
  }{% if forloop.last == false %},{% endif %}
{% endfor %}
]