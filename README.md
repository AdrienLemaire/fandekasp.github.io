# How to

## Requirements

For image optimization:

* jpegtram
* gifsicle
* pngcrush
* phantomjs (for penthouse, v2 required since v1 has ssl handshake error)


## Installation & Usage

    bundle install
    bundle exec jekyll serve -w --config _config.yml,_config-dev.yml


## Deployment

    bundle exec rake publish


## Development

* Work on branch `source`
* use deployment command to update master on upstream (github doesn't support
  jekyll-assets by default, so we have to pre-generate the blog for it)

### Critical CSS

    $ phantomjs --ignore-ssl-errors=true --ssl-protocol=any node_modules/penthouse/penthouse.js https://adrien.is _site/assets/app.css > _assets/stylesheets/critical.css

### image optimization

    $ svgo path/to/file.svg
    $ bundle exec rake optimizeimages

## authors

[Karri Saarinen](http://twitter.com/karrisaarinen) and
[Jori Lallo](http://twitter.com/jorilallo)
built it for [sendtoinc.com](https://sendtoinc.com).

Heavy changes were done from that point, to extend the website, improve performances, etc.


## Copyright and license

Copyright 2013 Kippt Inc. under [The MIT License ](LICENSE)
