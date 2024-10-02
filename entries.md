---
layout: json
permalink: /entries.json
---
[
{% for item in site.entry %}
  {
    "url": "{{ item.url }}",
    "createdDt": "{{ item.date }}"
  }{% if forloop.last == false %},{% endif %}
{% endfor %}
]