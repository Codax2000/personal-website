/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Avionics section of the report, containing the text of my avionics
 * project.
 */

import React from 'react'
import { Container } from 'react-bootstrap';
import Article from './report-templates/Article';
import avionics from '../img/avionics.png';
import wiring from '../img/wiring.jpg';
import ArticleWithImage from './report-templates/ArticleWithImage';

export default function AvionicsReport() {
  let articles = [
    {
      "title": "Abstract",
      "content": [
        "The Design, Build, Fly club at the University of Washington is a team " +
        "focused on building competition-level RC aircraft. The team decided to " +
        "implement an experimental avionics package. I was the avionics lead, " +
        "in charge of making sure that the controls of the aircraft worked smoothly " +
        "and that data collection was implemented properly. " +
        "The team used an Arduino to reroute signal inputs for increased efficiency " +
        "and improved handling. In addition, the avionics package could record positional " +
        "data onto an onboard SD card for later analysis."
      ]
    },
    {
      "title": "Methodology",
      "content": [
        "The team decided to use an Arduino Nano as a microcontroller, since it had " +
        "optimal weight while delivering plenty of processing power.",
        "We then developed an asynchronous routine to read signal inputs from the pilot " +
        "and used Arduino's built-in servo library to pass them on to the control surfaces.",
        "This gave us access to the signals being passed by the controller. The initial goal was " +
        "to use this access to develop active stabilization, which would account for high winds " +
        "during competition. However, we switched to implementing differential thrust to " +
        "better suit our pilot's needs.",
        "The project was mounted via a 3D-printed bracket to the empannage section of the plane " +
        "and provided smooth controls during our flight test."
      ],
      "images": [
        {
          "url": avionics,
          "caption": "High-level map of signal processing through Arduino board",
          "width": 450
        }
      ]
    },
    {
      "title": "Issues",
      "content": [
        "There were 2 significant challenges the team overcame. The first was that the standard " +
        "method of reading input signals is synchronous, which means taking " +
        "signals from one input at a time. Comparatively, this takes a tremendous amount of " +
        "processing power and is very inefficient. The second was a power-systems problem, " +
        "resulting in a complete shutdown of the control systems within 30 seconds of " +
        "powering up.",
        "Research into the first challenge indicated that synchronous methods are " +
        "inefficient, so the team instead developed an asynchronous method of reading inputs. " +
        "This involved taking inputs in a way that would read all inputs at once, increasing " +
        "the speed of signal tracking by a factor of at least 30,000.",
        "Analysis of the shutdown revealed that the servos on the plane, once installed, were " +
        "under load, resulting in significantly more power flowing through the Arduino than " +
        "during initial testing. The Arduino would overheat, causing a shutdown. This was " +
        "fixed by installing two power-regulating ESCs, which allowed the servos to " +
        "draw power directly from the battery without first driving it through the Arduino. " +
        "This meant that the servos could still be controlled by the Arduin, but the power " +
        "would only come from the batteries."
      ],
      "images": [
        {
          "url": wiring,
          "caption": "The team wiring the plane with ESCs",
          "width": 300
        }
      ]
    },
    {
      "title": "Results",
      "content": [
        "The package was experimental, and my group was the first to attempt such a task at the " +
        "University of Washington. It was highly successful, and the controls responded smoothly " +
        "during flight.",
        "See the code on my personal GitHub page."
      ]
    }
  ]

  return (
    <Container fluid className="report-article">
      <h1 className="text-center">
        Avionics Package
      </h1>
      <Article title={articles[0]['title']} content={articles[0]['content']} />
      <ArticleWithImage title={articles[1]['title']} content={articles[1]['content']}
        graph={articles[1]['images'][0]['url']} caption={articles[1]['images'][0]['caption']}
        width={articles[1]['images'][0]['width']} />
      <ArticleWithImage title={articles[2]['title']} content={articles[2]['content']}
        graph={articles[2]['images'][0]['url']} caption={articles[2]['images'][0]['caption']}
        width={articles[2]['images'][0]['width']} />
      <Article title={articles[3]['title']} content={articles[3]['content']} />
    </Container>
  )
}
