# My Personal Website

This repo is an online version of my resume and
an exposition of various projects I've done. This includes engineering,
research, and software development. This is also hosted on GitHub pages, under
[this link](http://codax2000.github.io/personal-website).

## About

This is the frontend only, built with React, Vite, D3, and Bootstrap. It is my playground
for pushing myself to build and learn new ideas and web design concepts. It was
initially deployed to Microsoft Azure and backed by a Spring Boot API, but that
became difficult to manage and extremely slow, and Github Pages was a good alternative.

## Deployment

The site is hosted on GitHub Pages from the `gh-pages` branch:
[codax2000.github.io/personal-website](http://codax2000.github.io/personal-website).

Pushing to `main`, including merging a pull request, runs the
[Build and deploy workflow](.github/workflows/deploy.yml). That workflow
installs dependencies, builds the site, and publishes the `dist/` folder to
`gh-pages`. You can rerun it from the Actions tab with **Run workflow**.
Pull requests build the site and do not deploy it, so merging to `main` is
what publishes.

`npm run deploy` still works as a local fallback. It builds the site and
pushes `dist/` to `gh-pages` from your machine.

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
