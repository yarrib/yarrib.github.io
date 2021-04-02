
# This site contains projects, samples, and random thoughts...

Surely I would have started this with a proper plan, but that would make far too much sense!

[About](about.md)




{% for item in site.data.toc.yml %}
    <h3>{{ item.title }}</h3>
      <ul>
        {% for entry in item.subfolderitems %}
          <li><a href="{{ entry.url }}">{{ entry.page }}</a></li>
        {% endfor %}
      </ul>
  {% endfor %}
