+++
type = "itemized"
author = "Cy Heffley"
date = "2021-12-17"
title = "Long-Form Diarization for Predicting Podcast Speakers"
description = "Identifying points of interest for marketing audio content on the web"
featured = ""
featuredpath = ""
featuredalt = ""
categories = []
linktitle = ""
link = "#"
+++

## About

Speaker diarization is "the process of partitioning an input audio stream into homogeneous segments according to the speaker identity" ([Wikipedia](https://en.wikipedia.org/wiki/Speaker_diarisation)).

Plenty of services exist today for diarizing speakers at a local level: given an audio file, services such as AssemblyAI's Speech-to-Text API, Amazon Transcribe, and Google's Speech-to-Text can provide diarization for the speakers within that audio file.

As a machine learning engineering intern at [SpareMin](https://www.sparemin.com/), I developed and prototyped what we believe to be the first service for diarizing speakers across entire podcast feeds. By using tools for generating local diarizations, we extract audio sequences of each speaker across a podcast episode, generate vector representations of each voice, and store it in a vector database for similarity search when parsing future episodes.

Storing these speaker embeddings allows us to identify which voices appear across any episode of a given podcast feed, which in turn enables us to programmatically identify whether a given voice at any second in an episode belongs to a host, guest, or another voice (such as an ad read or a snippet from another episode or even a separate podcast).

Because SpareMin's primary offering as of 2021, known as [Headliner](https://www.headliner.app/), chiefly helps those in the spoken-word audio industry market their content, there's a lot of value in being able to identify which segments of a podcast include speech from a guest or interaction between a host and guest or even multiple guests.

While we weren't able to deploy the diarization feature before my term ended, I'm very excited to see where this feature will fit into Headliner's recommendation tool for choosing which segments to use for generating shareable videos.


(note to self: share this .md with Neil/Klaus for approval/any changes needed) 
(note to self: ask Neil/Klaus about scale for this when doing the above)
