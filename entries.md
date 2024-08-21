---
layout: json
permalink: /entries.json
---
[
{% for item in site.entry %}
  {
    "url": "{{ item.url }}"
  }{% if forloop.last == false %},{% endif %}
{% endfor %}
]