+++
type = "itemized"
author = "Cy Heffley"
date = "2017-06-22"
title = "Video Subtitle Bot [Inactive]"
description = "Generating captions for Twitter users"
featured = ""
featuredpath = ""
featuredalt = ""
categories = [""]
linktitle = ""
link = "#"
+++

## About

This bot is no longer active due to another Twitter caption bot already being available: [HeadlinerClip Caption.](https://twitter.com/headlinerclip)

When mentioned in reply to a video of up to 140 seconds long on Twitter, this bot would reply with an automatically-captioned copy of the video. Captioning was done with GCP Speech-to-Text, and our server was built using tweepy.

We additionally included a data integrity measure: every 10 minutes, all original video tweets were checked to ensure that they were still publicly accessible. To prevent replication of private data, captioned video tweets that were generated in reply to private or deleted tweets were automatically deleted. Tweets were stored by ID using MongoDB.

This project was completed in January 2021 during an intern hackathon at [UKG](https://www.ukg.com/).

You can check out our source code [here.](https://github.com/cheffley6/twitter-subtitle-bot)

## Contributors
- [drbalar](https://github.com/drbalar)


