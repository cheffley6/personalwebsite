+++
type = "itemized"
author = "Cy Heffley"
date = "2017-06-22"
title = "Course Critique"
description = "GPA database for helping GT students plan schedules"
featured = ""
featuredpath = ""
featuredalt = ""
categories = ["SGA"]
linktitle = ""
link = "#"
+++

## About
Originally an annually-published book that dates back to at least the 1970's, [Course Critique](https://critique.gatech.edu) is a static web application owned by Georgia Tech's Student Government Association. Critique allows users to view historical course grade distributions across all instructors and courses offered at Georgia Tech.

I served in Georgia Tech's SGA as team owner for Critique's development team from 2018 until 2020, where I spent a year as SGA's Vice President of IT, a role that involved a few policy-driven responsibilities in addition to overseeing maintenance and development for projects such as Critique.

During my time in SGA, I oversaw a complete migration of the application from plain HTML, JavaScript and PHP to a faster React-based frontend and a public API that allows any student organization at GT to integrate course GPA data into other applications, such as the [GT Scheduler](https://gt-scheduler.org).

I also initiated syllabus integration within Critique, a new feature in which users can submit and view relevant syllabi for their courses and instructors listed on Critique. This required addressing security concerns and IP compliance issues with Georgia Tech's legal department in addition to the task of designing and implementing a pipeline in order to receive and validate syllabi submissions and request consent from instructors for syllabi distribution. This was done using Qualtrics' API and Python's SMTP library.

With over 5,000 unique monthly visitors, Course Critique has been my favorite project of my undergrad at GT. It continues to serve thousands of students each month in navigating through their academic careers.
