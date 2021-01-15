# My Personal Website

This repo is an online version of my resume and
an exposition of various projects I've done. This includes engineering,
research, and software development. This is also hosted on GitHub pages, under
[this link](http://codax2000.github.io/personal-website).

## About

This is the frontend only, built with React, D3, and Bootstrap. Part of it
uses an API that I wrote for fetching earthquake data, which is written in
Spring Boot and hosted on Microsoft Azure. The API is part of a separate repo
for ease of deployment, and is at [this link](https://github.com/Codax2000/usgs-earthquake-feed).

## Deployment

All that is necessary to deploy this site is to run `npm run deploy` in the
command line, and the website files will be deployed to the `gh-pages` branch
of this repo. After this, changes should always be pushed to the `master` branch
to save the updates.

## Projects

Here is a short list of the projects that I've worked on - this is only
a supplement to what is on the website, which is based on results.

### Avionics

This was a project I did with a partner in Arduino, which uses a condensed
version of C++.

### Gun Violence Research

I did this project with a partner in Python, in an introductory class in
data programming. It was done initially with Seaborn and Pandas,
although I went through after the class was over and redid it in Altair, which
looks much nicer on the web, as it is vector-based.

### EarthquakeWatch

This was a project where I wanted to learn Maven, Spring Boot, React.js, and
D3.js. Getting D3.js to work with React was incredibly difficult to
troubleshoot, as it doesn't seem to be a common approach. I finally found a
talk on Youtube that explained how to use hooks well enough with D3 to let me
make the visualization that I wanted to.

### UW CADathon

This was a project that I did with a partner for fun, competing for a week in
a 3D modeling competition. We used SolidWorks, since we were both familiar with
it and it was easy to access via remote desktop at UW. The victory was
incredibly satisfying, since we beat graduate students and mechanical engineering
students, even though we were freshmen and I was more of an electrical person.
