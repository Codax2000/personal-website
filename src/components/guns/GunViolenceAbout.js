import React from "react";
import { Container } from "react-bootstrap";

export default function GunViolenceAbout() {
  return (
    <Container fluid className="report-article">
      <Container>
        <h2>About This Project</h2>
        <p className="text-left">
          This project was originally done in Winter 2020, in CSE 163, Data
          Programming with Python. Data was organized into county using
          geospatial analysis with Geopandas. The plots were originally done
          with Matplotlib and Seaborn, but I have since gone back and redone
          them with Altair, which provides a cleaner look. The machine learning
          was done with scikit-learn, using the DecisionTreeRegressor model. I
          did this project originally with a partner named Cody Murphy, but I
          rewrote this project for the web alone.
        </p>
        <p className="text-left">
          Databases used in this project:
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Gun Violence Data - &nbsp;
          <a href="https://github.com/jamesqo/gun-violence-data">
            James Quo on GitHub
          </a>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;US Shapefile Data - &nbsp;
          <a href="https://www.census.gov/geographies/mapping­files/time­series/geo/cartoboundary­file.html">
            US Census Shapefile
          </a>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Personal Income - &nbsp;
          <a href="https://apps.bea.gov/regional/downloadzip.cfm">
            Annual Personal Income by State
          </a>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Gun Licensees - &nbsp;
          <a href="https://www.kaggle.com/doj/federal­firearm­licensees/version/3">
            Kaggle
          </a>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;State Populations - &nbsp;
          <a href="https://www.census.gov/data/datasets/time­series/demo/popest/2010s­statetotal.html">
            US Census
          </a>
        </p>
        <p className="text-left">
          The original code for this project is not currently on my GitHub, but
          it will be soon. In the meantime, feel free to contact me for more
          information about this project.
        </p>
      </Container>
    </Container>
  );
}
