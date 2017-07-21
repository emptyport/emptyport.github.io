---
layout: post
title:  "Using Linux at UT Southwestern"
date:   2017-07-20 17:10:00 -0500
categories: linux
description: How to setup Linux and apt to be able to install software through the UT Southwestern proxy
---
I recently made a complete switch to Linux. I'd been dual booting Windows 10 and Ubuntu before, but I decided to start fresh before I started my PhD program. I am now running solely [elementary OS](https://elementary.io/) (no more Windows) and I have to say I am quite pleased so far.

However, there was a small hiccup with my transition to 100% Linux and that has to do with my school's wifi. Since I am a student, I have to sign in to their wifi with my student credentials and use a proxy server if I want to connect outside of UT Southwestern's intranet. I followed their instructions for Android (so I could get the proxy host and port) and I had no problem connecting to outside websites. Unfortunately, if I wanted to install anything with apt-get or the app center, my laptop couldn't connect to the software repositories. I wouldn't say installing new programs is something I do routinely, but since this is a fresh install I have been installing quite a few applications lately.

For a few days I just put up with it and waited until I got home to install new software, but I got sick of waiting until I got home so I decided to just go ahead and figure out how to make apt work with the proxy. After a little googling I discovered a simple solution.

To solve my connection issue, I created the following file ```/etc/apt/apt.conf``` and added the following lines to it:
```
Acquire::http::proxy "http://user:pass@{{server}}:{{port}}";
Acquire::https::proxy "http://user:pass@{{server}}:{{port}}";
```
The {{server}} and {{port}} have been replaced by my school's proxy servers host and port. Since my school username and password are required as part of connecting to the wifi, I did not have to place those in the file; the lines really do read "user:pass" before the @ symbol. If I had needed to put my actual username and password here for it to work, I'm not sure that I would have done it since this file is just stored as plain text.

Hopefully this simple solution will be useful to anyone using Linux in a Windows and macOS world.


