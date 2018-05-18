---
layout: post
title:  "Why I'm switching to JavaScript"
date:   2018-05-18 16:45:00 -0500
categories: science, programming
description: Python is usually the language of choice for scientists to do their programming in. I love Python, but I also love JavaScript, and with the rise of cloud computing, we are going to need libraries we can use in front-end development.
---

The first programming language I ever learned was Java. This was back in high school and I've since forgotten most of the syntax. I next became acquainted with Ruby when I joined a lab in college that used Ruby for most of their programming needs. The PI (principal investigator) was a self-taught programmer and he'd latched onto Ruby. He also happened to be the author of the [mspire](https://github.com/princelab/mspire) mass spectrometry library which he wrote in Ruby. Also during this time I took a class which used C++, but I did my best to stay away from it.

My PI left while I still had about a year and a half left, and the lab I switched to was using Python. I made the switch from Ruby to Python and I was generally happy. Python also had a mass spectrometry library and a lot of support for numerical and scientific computing.

After I graduated, I worked for a year and a half at Qualtrics. Part of my time there was spent providing support for some of the custom projects that were built for clients. While the newer projects were using languages like Python and Ruby, the older ones that I spent quite a bit of time maintaining were written in PHP. I've decided I don't like PHP and am going to do my best to stay away. PHP can go hangout with C++.

However, during my time at Qualtrics, I also started using JavaScript. I learned a little bit of Angular and a little bit of React, but I really enjoyed using Node. One of the things I like about Node is how the modules are installed locally only for your specific project unless you specify that they be installed on a global level. I know Python can use virtual environments and whatnot to do the same, but Node keeps everything isolated by default; I find it easier to use. Node modules also seemed to be more focused than the Python libraries I was using. Pyteomics is a great mass spec library, but it comes with a lot of functionality and is not documented super well. Trying to look through such a large code base to figure out how certain things work is certainly time consuming.

JavaScript on the other hand is a blank slate. There are very few existing npm modules geared towards mass spec so I get to write them as modular as I like. I probably will combine all my modules into a larger library akin to Pyteomics or mspire, but I want to make sure each component is available individually and is well documented with test cases.

Now if all I wanted was more modularity, I could just write my own modules in Python. That definitely is an option, but cloud computing is here to stay and I want to make sure there are libraries for mass spec that can be incorporated into web interfaces. Essentially any language can be used on the back-end, but only JavaScript can be used on the front-end. That is why I've created [Omics-JS](https://emptyport.github.io/omics-js/). Omics-JS is a place where you can find mass spec oriented modules and libraries. Most of what's on there is stuff I've written, but there are also a few other libraries that others have written.

My hope is to get more people excited about using JavaScript and to make it more mainstream in the mass spec community.