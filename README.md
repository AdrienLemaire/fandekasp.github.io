# How to

## Requirements

For image optimization:

* jpegtram
* gifsicle
* pngcrush


## Installation & Usage

    bundle install
    bundle exec jekyll serve -w --config _config.yml,_config-dev.yml


## Deployment

    rake publish


## Development

* Work on branch `source`
* use deployment command to update master on upstream (github doesn't support
  jekyll-assets by default, so we have to pre-generate the blog for it)


# Jekyll Incorporated
Modern Jekyll based blog. Great for companies, products or anything. See live at [blog.sendtoinc.com](http://blog.sendtoinc.com)

## authors

[Karri Saarinen](http://twitter.com/karrisaarinen) and
[Jori Lallo](http://twitter.com/jorilallo)
built it for [sendtoinc.com](https://sendtoinc.com).

Heavy changes were done from that point, to extend the website, improve performances, etc.


## Copyright and license

Copyright 2013 Kippt Inc. under [The MIT License ](LICENSE)
