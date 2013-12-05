enlarge-image
=============

Simple script displays larger version of an image when a thumbnail clicked

## Background

Today I was handed a requirement to **dispaly** an **enlarged** an **image**
**when** a **thumbnail** is **clicked**.

I ***audaciously*** proclaimed I could ***build*** the solution <br />
in the time it would take a fellow developer to ***find***
a suitable 3rd party module.

After a bit of googling my esteemed colleague found:

>[Lokesh Dhakar's](http://lokeshdhakar.com) **Lightbox2**: 
http://lokeshdhakar.com/projects/lightbox2/

Review of the **GitHub** https://github.com/lokesh/lightbox2 page indicates <br />
Lightbox2 is **325 lines** of **JS** and (244+529) **773 lines** of **CSS**!
***Why*** so much...?

I knew there was a better way, so I built it.
And while it ended up taking me a bit longer than I predicted,
I feel I've build something ***far easier*** 
to ***understand*** *and* ***maintain***.

My **CSS** is *only* **24 lines** and **JS** is **9 lines**.
It works in all browsers and scales perfectly from 
**Mobile Phone** to **Retina Display**.

Try it for yourself: http://nelsonic.s3.amazonaws.com/enlarge-image/index.html

## Assumptions Made:

My only assumption is that the image thumbnail will have a prefix of "**thumb_**"
If your images have a different prefix or suffix you will need to customise
the enlarge.js file to suit your needs.

Other than that it should be pretty easy/quick to use this script/css anywhere.

Let me know your thoughts! :-)