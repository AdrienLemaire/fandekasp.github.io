---
layout: post
title:  "Use a .is domain for Github Pages"
date:   2015-07-21 19:00:00
categories: Tech
image: img/isnic/github-pages-cloudflare-isnic.jpg
---

the domain name **.is** is the top-level domain for Iceland, but is also used
abroad by websites wanting to use it for the English work **is**, which makes
for more human-friendly urls.


Registering a new **.is** domain name can be done very easily on the
[ISNIC](https://www.isnic.is/en/) website. The pricing is 30 euros for a year.

<!--more-->

Start by searching for the domain you want to buy:

![isnic search domain name]({{ site.url }}/img/isnic/search-domain-name.png)

If your domain is available, continue, and click on SIGN UP, then finish the
registration. Once your registration is done, you'll have to confirm it by
clicking on a link you'll receive by email.


Once your domain is up, go to [Cloudflare](https://www.cloudflare.com), sign up
if needed, then click on **Add site**

![cloudflare search website]({{ site.url }}/img/isnic/cloudflare-search.jpg)

It will scan your domain, and automatically prefill DNS records for it. You'll
also be asked to replace the upstream nameservers with those given by
Cloudflare.

Go back to the ISNIC website, go to `My page -> Redelegate`, and select the
**Custom** option for domain hosting. Replace the master nameserver and
Nameserver2 with the cloudflare ones:


![isnic cloudflare nameservers]({{ site.url }}/img/isnic/isnic-cloudflare-nameservers.png)


You'll need to wait about 20 minutes for the ISNIC confirmation email to come,
then come Back to Cloudflare and click on **Retest nameservers**.

Remove the default A record for your base domain name, and add instead
a CNAME pointing to your Github Pages.


![cloudflare CNAME Github]({{ site.url }}/img/isnic/cloudflare-cname.png)


You're almost done! Now head over to your **username.github.io** git repository,
add a new file `CNAME` with a single line containing your domain.is, commit and
push it. And you're done! Your domain.is website is ready to serve your Github
Page.`
