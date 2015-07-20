---
layout: post
title:  "Launch a blog in 2 minutes with Jekyll"
date:   2015-07-20 15:37:27
categories: blog
author: Adrien Lemaire
image: img/blog.jpg
---

When wanting to open a new blog, the biggest problem today is deciding what blog
engine to use, since there are so many and all are excellent.

My list of requirements was simple: I wanted free and open source, easy to
manage, easy to format, and a modern UX design.

[Github][github] is a web-based Git repository hosting service, which offers
distributed revision control, source code management, free hosting and webpages
publishing. All I need was to create a new repository
[Fandekasp/fandekasp.github.io][fandekasp_github] and fill it with some content to get it
powered on [fandekasp.github.io][fandekasp_pages].

Github recommending [Jekyll][jekyll] for blogging on Github Pages, and Jekyll
allowing to blog using [Markdown syntax][markdown], it looked perfect for me.

I finally needed a good design. Hesitating for a moment between [Flat design][flat]
and [Material design][material], I finally chose [Material Design Lite][mdl]
after finding this very nice integration [gdg-managua/jekyll-mdl][jekyll_mdl].
All was left to do was forking that project, renaming it to serve it on Github
Pages, and changing the example texts with my real informations. And voilà ! A
modern and nice-looking blog powered in minutes !


[github]:               http://github.com
[fandekasp_github]:     https://github.com/Fandekasp/fandekasp.github.io
[fandekasp_pages]:      http://fandekasp.github.io
[jekyll]:               http://jekyllrb.com
[markdown]:             http://daringfireball.net/projects/markdown
[flat]:                 https://en.wikipedia.org/wiki/Flat_design
[material]:             https://www.google.com/design/spec/material-design/introduction.html
[mdl]:                  http://www.getmdl.io
[jekyll_mdl]:           https://github.com/gdg-managua/jekyll-mdl
