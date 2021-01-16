/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Page dealing with my research concerning gun violence.
 */
import React from 'react'
import { Container } from 'react-bootstrap';
import Article from './report-templates/Article';
import ArticleWithImage from './report-templates/ArticleWithImage';
import ArticleLargeGraph from './report-templates/ArticleLargeGraph';
import injuriesOverTime from '../img/altair-plots/injuries-over-time.png';
import violenceDist from '../img/altair-plots/violence-dist.png';
import violenceMap from '../img/altair-plots/violence-map.png';
import GunViolenceCauses from './guns/GunViolenceCauses';
import GunViolenceAbout from './guns/GunViolenceAbout';

export default function GunResearchReport() {
  let articles = [
    {
      "title": "Abstract",
      "content": [
        "As part of a class I took on data programming with Python, a partner and " +
        "I did research " +
        "surrounding gun violence in the US. The study covered the period from 2014 " +
        "the the first three months of 2018. Analysis was done with Python to examine " +
        "gun violence over time, the most dangerous places in the US for gun violence, " +
        "and the causes of gun violence. For change over time, gun violence tends to be " +
        "seasonal, decreasing significantly during " +
        "the winter. Also, there was a dip around the beginning of 2018 that warrants " +
        "further research. " +
        "The distribution of gun violence is heavily skewed towards a few counties " +
        "in the US, so that only a few counties are responsible for a vast majority of the " +
        "gun crime in the US, especially Chicago, Detroit, Seattle, LA, and relatively few " +
        "others. This study also examined gun ownership, population, and disposable income " +
        "as possible causes of gun violence, using regression analysis and machine learning " +
        "models to find which of the chosen causes could be best used to predict the amount " +
        "of gun violence in a particular area."
      ]
    },
    {
      "title": "Change Over Time",
      "content": [
        "The graph of gun violence over time reveals that gun violence is very seasonal, " +
        "increasing during the summer tapering off during winter. There is also a generally " +
        "upward trend throughout most of the graph, until late 2017/early 2018, when it seems " +
        "to go back down. The cause is unclear, but warrants further investigation."
      ],
      "images": [
        {
          "url": injuriesOverTime,
          "caption": "Figure 2.1 - Gun Violence in the Period 2014-2018",
          "width": 350
        }
      ]
    },
    {
      "title": "What Does 'Violent' Mean?",
      "content": [
        "When plotting a distribution of the number of incidents in all counties " +
        "in the US, it is immediately clear that it is heavily skewed towards a few counties. " +
        "The plot on the right only contains those counties in which there was one or more " +
        "incidents involving a gun over the entire period of the study, 2014 to the first part " +
        "of 2018. Of the roughly 3200 counties in the US, only about 300 of them had any " +
        "incidents at all - these are shown at right. Of these, it is immediately noticeable " +
        "that there are a tremendous number of very high outliers. It is not visible from this " +
        "chart, but the third quartile of these counties is 38 incidents over the entire " +
        "course of the study. For reference, anything above the third quartile of the " +
        "top 300 counties is roughly 75 counties, or 2.5% of the counties nationally. " +
        "This in turn means that 97.5% of counties nationally have had less than 40 gun-" +
        "related incidents over the entire course of our study, which is slightly more than " +
        "4 years. This also means that 2.5% of the counties in the US are responsible for " +
        "the vast majority of the gun crime in the US. A conservative estimate places the " +
        "top 2.5% of counties in the US responsible for over 95% of the national gun crime.",
        "Some of the highest outliers in the graph to the right include Chicago, Detroit, " +
        "Seattle, LA, and several other areas with extremely high populations."
      ],
      "images": [
        {
          "url": violenceDist,
          "caption": "Figure 3.1 - Distribution of Non-zero Gun Crime Counties",
          "width": 350
        }
      ]
    },
    {
      "title": "Where Does the Most Gun Violence Occur?",
      "before": [
        "The results of the previous section beg the question of where the worst counties " +
        "are. The skewed distribution above makes a centroid map well-suited to this " +
        "task."
      ],
      "images": [
        {
          "url": violenceMap,
          "caption": "Figure 4.1 - Locations and Magnitude of Gun Crime, 2014-2018",
          "width": 800
        }
      ],
      "after": [
        "From this graph, it is again evident that there are relatively few counties which " +
        "account for almost all the crime in the US. The biggest ones include Chicago, LA, " +
        "Detroit, Seattle, and several areas of the east coast. " +
        "The scale on the right shows that a " +
        "small circle on the map still corresponds to 2000 incidents, which is a huge " +
        "amount, based on the distribution above.",
        "Therefore, any county with a visible circle on this map has an unusually high " +
        "amount of gun violence."
      ]
    }
  ]

  return (
    <Container fluid className="report-article">
      <h1 className="text-center">
        Gun Violence Research
      </h1>
      <Article title={articles[0]['title']} content={articles[0]['content']} />
      <ArticleWithImage title={articles[1]['title']} content={articles[1]['content']}
        graph={articles[1]['images'][0]['url']} caption={articles[1]['images'][0]['caption']}
        width={articles[1]['images'][0]['width']} />
      <ArticleWithImage title={articles[2]['title']} content={articles[2]['content']}
        graph={articles[2]['images'][0]['url']} caption={articles[2]['images'][0]['caption']}
        width={articles[2]['images'][0]['width']} />
      <ArticleLargeGraph title={articles[3]['title']} beforeContent={articles[3]['before']} 
        graphUrl={articles[3]['images'][0]['url']} caption={articles[3]['images'][0]['caption']}
        afterContent={articles[3]['after']} width={articles[3]['images'][0]['url']} />
      <GunViolenceCauses />
      <GunViolenceAbout />
    </Container>
  )
}
