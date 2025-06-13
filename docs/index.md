---
---
<!-- seo를 대비하여 하위 페이지로 이동하는 링크들을 넣어줘야 함 -->
<nav aria-label="사이트 네비게이션">
  <ul>
    <li><a href="/" title="home">홈</a></li>
    <li><a href="/career" title="career">경력 사항</a></li>
    <li><a href="/entries" title="posts">포스트</a></li>
  </ul>
</nav>

<nav aria-label="포스트 목록">
  <ul>
    {% for entry in site.entry %}
    <li>
      <a href="{{ entry.url }}" title="{{ entry.title }}">
        {{ entry.title }}
      </a>
      <time datetime="{{ entry.date | date_to_xmlschema }}">
        {{ entry.date | date: "%Y-%m-%d" }}
      </time>
    </li>
    {% endfor %}
  </ul>
</nav>