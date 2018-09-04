---
layout: post
title:  "What I want to see in proteomics"
date:   2018-09-04 12:32:00 -0500
categories: science
description: The things I think will take proteomics to the next level
---

I love proteomics. I really do. It's a great field full of fantastic scientists. But there are a few things that I think are holding the field back.

**The hardware is closed off**

If you have a cool idea for something that you think you can get your instrument to do, you either have to pray you actually can come up with some method using the vendor's software, give up, assemble your own instrument, or work in the lab of Matthias Mann. One of the recent papers that created a lot of buzz was about the [boxcar method for collecting data](https://www.nature.com/articles/s41592-018-0003-5). The Mann lab as of this writing still has not released their software that lets you run a boxcar method (reproducibility anyone?). I cobbled together some code that could create the boxcar methods, but my instrument was not reading the files. I was finally able to find out from the Mann lab that the boxcar method requires a custom license file from Thermo. Why do they get the custom license file but no one else does? How many other Mann labs are out there, but not recognized as such, because they don't have this sort of control over their instruments? I think that the instrument vendors should give us scientists more control over the instruments. I think that access to the instrument's API should be standard and included with the purchase of the instrument. If I had complete control over my instrument, I would be more likely to buy from that company in the future. To me it seems like a win-win situation.

**The hardware and software are siloed off from each other**

Here is what I mean by that. Let's say your lab gets a Lumos. You must use Xcalibur to create your instrument method and you must wait for your data to be collected and saved as a file before you can identify your peptides. If you want to use third party software to perform your search, you have to use software from Thermo to decode the raw file and convert it to an open format that the third party software can read. But now let's imagine that the instrument vendors open up their hardware. Then these silos would naturally disappear (so I guess this problem is the same as the first problem I mention). If you could access the spectra as they are being collected through an API, then, instead of collecting your file and then searching it, you could be searching each spectrum as it is collected. As soon as your run finishes, you have your peptide IDs!

**Better file standards**

Every peptide search engine uses a different format. They are getting better at supporting pepXML and mzIdentML, but I don't consider either of those formats to be suitable standards. I looked up the pepXML file specification and all I could find was an xsd file that defines the structure of the XML file. Good to have, but not a friendly way to learn the file structure. I looked up the mzIdentML file specification and I found a 91 page document. THAT IS TOO LONG!!! It looks as though the file format wants to be inclusive of all sorts of identification information, but in doing so it has become too complex. Rather than try to cater to all types of experiments, there should be a file format for peptide IDs, for protein IDs, for imaging data, etc. And while we are on the subject, I don't think XML is a good choice. It does give you control over the structure of the file and you can nest information, but XML is verbose and adds a lot to the size of the file. I think JSON would be a better choice because it is a little less verbose, or alternatively just use a delimited file like a csv file. Everyone works with their ID information in table form anyway, so let's just start with our data in that format.

**Consistency among search engines**

I thought it would be a good idea to create a data type for working with peptide IDs. However, there is a lot of inconsistency in what information the peptide search engines give back to you. One useful piece of information that is often omitted is the retention time. I can go back to the spectrum file and look it up, but rather than have to look through potentially gigabytes of information, why not just include that information with the ID to begin with?

**Wasted computation**

Each time you run a search, you have to generate the theoretical peptides. I've recently learned that some search engines can save the theoretical peptides for use in future searches, but I think there ought to be a universal standard that all search engines can use. This would save quite a bit of time because rather than compute the peptides each time you run a search, all you have to do is pull them from a database and do the spectral matching.

