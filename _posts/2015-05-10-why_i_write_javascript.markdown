---
layout: post
title:  "Why I write Javascript"
date:   2015-05-10 14:00:00
categories: mediator feature

image: /assets/article_images/2014-11-30-mediator_features/night-track.JPG
---
#Introduction

The first time I see javascript code was more than 5 years ago, I was a student and I was in an exercise when I have to handle a click on a button and latter perform a validation for check if the string was a valid email. In that times I wrote a lot of Java code, and I was feeling very important with my inheritance, interfaces, privatizing stuff, etc.

But all this have been changed when I finish my studies and I discovered the first webs apps; at the beginning I can't understand how developers making this sites, all I know about web technologies was static markup, some ugly styles and saving data though forms, so when I was using this apps and feeling their smoothness and usability I was crazy (the big win for me was discover AJAX and don't perform a full page reload for each interaction with the server).

I motivated myself to learn as much as I can about that language. Many things beats me in the first days, things like prototypal inheritance, the use of functions for everything, the non typed variables and an others [WTF’s] (http://wtfjs.com/).
     
Later I was submerged in the `jQuery spaghetti` world, performing `$.ajax` against my own PHP apis (if I can call that Api), storing a lot of data in the DOM, **for me the DOM was like a key value DB**, inserting and removing a lot of dynamic string templates and css classes for achieve a `reactive UI` (in the end I was haven't any app model either app status). They was a funny time, I was shipping fast and unmaintainable stuff.

#Server side
Node.js for me was like a panacea, one language for rule them all!!

But I was ending doing similar bad practices like making direct sql queries without ORM, storing `ALL THE THINGS in the database`, and ending with files of hundreds of lines without any kind of order.

In that time I know about the existence of other languages like Phyton or Ruby, I listened from developers that this frameworks where awesome and as a developer I'll love that, but in my interior I was still think something like **C’mon guys Node.js rocks**, you only have to learn one language and you can write an entire app, also you can reuse the same library in both sides, client and server, WOW!"

#A bit of order
With the time I started focusing a lot on how improve my code structure. First I started with the `AMD approach`, using Require.js for define modules and manage dependencies, latter I migrated to `CommonJS` because their syntax attract me a lot and I was used to it before with Node, but I ended using `ES6 modules`.

So, in that moment I started to be confortable with the frontend ecosystem. I had some experience with Grunt, which increased my productivity 100%, I started creating and requiring some Bower components... So I decided to pick some of the existing frameworks...

#A world of frameworks
It was easy, I chose Backbone for their learning curve, with the time I moved to Angular for their community hippe, later I discovered **Ember**, which I fall in love and currently and doing some React stuff. So, It turned out to be more difficult :P

#So, Why the F*CK I write Javascript!!

*You don’t have choice.*

I try to be clear on that; If you want to write web applications, you really should know Javascript, no matter of which framework or pre-compiler are you using; you should have a strong knowledge of `what it’s happening under the hood.

Said that, **I like Javascript**; I really enjoy writing Javascript applications. Why? due their **flexibility**, **dynamism**, **readability**, **loose typing**, **expressiveness** and because the **functions are first class citizens**.

#Conclusion
Now I can say that the front-end development it’s respected by other developers, this thing was really hard to achieve due to the beginnings of the language.

So after this journey, I still don’t about the future of the language, but the good thing is that we don’t have to worry about that. Thanks to the JS community that it’s really focused on improve the language and make it better every day, we can just keep calm and enjoy. Don’t worry if you are still getting surprised and confused about the language, me too.

As a Douglas Crockford said: `Try to avoid the bad parts and focus on use the good parts`