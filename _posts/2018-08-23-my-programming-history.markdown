---
layout: post
title:  "My Programming History"
date:   2018-08-23 15:35:00 -0500
categories: programming
description: A brief history of my programming experience
---

This post is somewhat similar to [my last post about switching to JavaScript]({% post_url 2018-05-18-why-i'm-switching-to-javascript %}), but it covers my programming history in more general terms.

I originally got into programming so that I could build my own laser light show. So far I've only managed to make a regular light show, but programming has stuck with me and has played a major role in my research and work.

I got into bioinformatics early on in my programming career. I started out in Ruby and then made the switch to Python. As an undergraduate I developed the [ISotope Extractor](https://github.com/JC-Price/DeuteRater/blob/master/DeuteRater_py3.2/ISE_class_v10a.py), or ISE, for [Deuterater](https://www.ncbi.nlm.nih.gov/pubmed/28093409). Deuterater calculates how quickly proteins are created or destroyed using data from mass spectrometers. The problem with mass spectrometry data is that the files are rather large and contain a lot of noise. There were several iterations of ISE, but the one we finally settled on ended up being quite simple. The below video gives a demonstration of how it works. The basic idea is to find a set of peak series and condense them down into a single series of peaks. It's also one of my first attempts at creating a 3d animation, so bear with me.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/k7HyzrPeRA8' frameborder='0' allowfullscreen></iframe></div>

After I graduated with my Bachelor's degree, I worked at Qualtrics for a year and a half. I started out in customer support and worked my way into the role of a support engineer. I took care of bug fixes in existing PHP code, rewrote some custom APIs (also in PHP), and then designed and implemented an API from scratch in Ruby on Rails. By this point I'd forgotten most of my Ruby and this was my first time working with Rails, so I'm by no means an expert with Rails.

Also while at Qualtrics, I started to get into web programming and machine learning. I wrote a couple small utility programs in Python using natural language processing. One program could analyze the contents of an email and determine if it was an automatic out of office response and the other was the beginnings of a chatbot. The out of office filter did not end up being implemented, but there was interest in the chatbot. A patent application was filed for the chatbot and that is currently pending.

Since my time at Qualtrics, I've applied myself more to learning web development. I've completed the *Responsive Web Design* and *Javascript Algorithms and Data Structures* certifications from [freeCodeCamp](https://www.freecodecamp.org/emptyport).

Currently I dedicate a lot of my programming time on creating JavaScript modules for bioinformatics, in particular proteomics. I've released several modules on [npm](https://www.npmjs.com/~emptyport) under an MIT license. They range from simple utility modules for parsing molecular formula to more specialized modules for simulating peptide fragmentation inside a mass spectrometer.

One of my pet projects is [Omics.js](https://emptyport.github.io/omics-js/), a collection of JavaScript modules that are useful to the "omics." Omics.js is my way of compiling a list of good, bioinformatics focused JavaScript modules for the community and to see what is still missing. I am slowly filling in the gaps with my own modules that you can see on my [Github](https://github.com/emptyport) or on [npm](https://www.npmjs.com/~emptyport). In my experience, most scientific programming is done in Python. JavaScript is not the obvious choice for starting a bioinformatics project, but in my experience it is fast, easy to learn, and coupling JavaScript with HTML/CSS can provide for friendlier ways of viewing data. That being said I still do program in Python, but I am migrating to JavaScript.