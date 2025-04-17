---
layout: page
title: 태그
permalink: /tags/
---

<div class="tag-cloud">
  <h1>태그 클라우드</h1>
  
  {% assign tags = site.tags | sort %}
  {% for tag in tags %}
    {% assign tag_name = tag | first %}
    {% assign posts = tag | last %}
    <a href="{{ site.baseurl }}/tag/{{ tag_name | slugify }}/" class="tag-link" style="font-size: {{ posts.size | times: 2 | plus: 100 }}%">
      {{ tag_name }} <span class="tag-count">({{ posts.size }})</span>
    </a>
  {% endfor %}
</div>

<div class="tag-list">
  <h2>태그별 포스트</h2>
  
  {% for tag in tags %}
    {% assign tag_name = tag | first %}
    {% assign posts = tag | last %}
    <section class="tag-section" id="{{ tag_name | slugify }}">
      <h3>{{ tag_name }}</h3>
      <ul class="post-list">
        {% for post in posts %}
          <li>
            <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div> 