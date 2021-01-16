import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import income from '../../img/altair-plots/vs-income.png';
import population from '../../img/altair-plots/vs-population.png';
import licensees from '../../img/altair-plots/vs-licensees.png';

export default function GunViolenceCauses() {
    let regressionWidth = 350;
    let mlResults = [
        {
            "input": "Population",
            "mse": "644,171"
        },
        {
            "input": "Disposable Income",
            "mse": "3,361,734"
        },
        {
            "input": "Licensee Count",
            "mse": "1,184,572"
        },
        {
            "input": "Population, Disposable Income",
            "mse": "591,809"
        },
        {
            "input": "Population, Licensee Count",
            "mse": "559,237"
        },
        {
            "input": "Disposable Income, Licensee Count",
            "mse": "915,882"
        },
        {
            "input": "All Three",
            "mse": "588,160"
        }
    ]

  return (
    <Container fluid className="report-article">
      <Container>
        <h2>
          What Causes Gun Violence?
        </h2>
        <p className='text-left'>
            Three possible causes of gun violence were identified: population, income,
            and gun ownership. The number of gun retailers, or 'licensees', in a 
            particular state was used as a proxy for gun ownership, and disposable
            income was used as a proxy for average income. This data is at a state level,
            so the results of this section are excellent
            indicators of good topics for further research.
        </p>
        <p className='text-left'>
            Each possible cause of gun violence was plotted against the number of 
            gun-related incidents in the lower 48 states and the District of Columbia,
            with a regression line. The Pearson r-value was also calculated to
            measure the strength of each regression.
        </p>
        <Container>
            <Row>
                <Col>
                    <img src={population} alt='gun violence vs. population'
                        width={regressionWidth} />
                    <figcaption className="text-muted mb-4">
                        Fig 4.1 - Gun Violence vs. State Population, r = 0.905
                    </figcaption>
                </Col>
                <Col>
                    <img src={income} alt='gun violence vs. income'
                        width={regressionWidth} />
                    <figcaption className="text-muted mb-4">
                        Fig 4.2 - Gun Violence vs. Average Disposable Income, r = -0.073
                    </figcaption>
                </Col>
                <Col>
                    <img src={licensees} alt='gun violence vs. licensees'
                        width={regressionWidth} />
                    <figcaption className="text-muted mb-4">
                        Fig 4.3 - Gun Violence vs. Number of Gun Licensees, r = 0.795
                    </figcaption>
                </Col>
            </Row>
        </Container>
        <p className='text-left'>
            The first graph is not a surprise, given the map in the previous section.
            It seems that areas with higher population have higher levels of
            gun violence.
        </p>
        <p className='text-left'>
            The second shows that there is no correlation with disposable income
            and the amount of gun violence, which indicates affluence does not
            discourage gun violence.
        </p>
        <p className='text-left'>
            The third graph indicates a moderate correlation between the number of gun
            licensees and the amount of gun violence. However, these are not adjusted
            for population, so there may be a confounding variable.
        </p>
        <Container>
            <Row>
                <Col className='pl-0'>
                    <p className='text-left'>
                        Machine learning was then used to analyze whether any particular
                        cause would allow accurate predictions of gun violence in a
                        state. Models were trained on combinations of causes, and
                        the mean squared error of their predictions was calculated on
                        testing data that had not been used to train the models.
                    </p>
                    <p className='text-left'>
                        The results, in the table at right, show the results of the
                        machine learning. The most important and evident conclusion made
                        from this data is that none of these are very good predictors of
                        gun violence. However, there is some evidence of which causes
                        are better or worse than each other at predicting gun violence.
                    </p>
                    <p className='text-left'>
                        Of the seven combinations of possible causes of gun violence, the
                        four that contained population were far more accurate than the three
                        that did not. Furthermore, the difference between population only
                        and population with gun licensees does not appear to be significant,
                        meaning gun ownership does not appear to be a good predictor of
                        gun violence. This indicates that the correlation above is indeed
                        because of the lurking variable of population, rather than
                        indicating causality.
                    </p>
                </Col>
                <Col>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>
                                    Input(s)
                                </th>
                                <th>
                                    Mean Squared Error
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {mlResults.map((d, i) => <tr key={i}>
                                <td className='text-left'>
                                    {d['input']}
                                </td>
                                <td>
                                    {d['mse']}
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>
                    <figcaption className="text-muted mb-4">
                        Table 4.4 - Machine Learning Features with Mean Squared Error
                    </figcaption>
                </Col>
            </Row>
        </Container>
      </Container>
    </Container>
  )
}
