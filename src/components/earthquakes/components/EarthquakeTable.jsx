/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Container for the table. Receives the overall data and holds the
 * Table and controller to show what is in the table.
 */
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import DataTable from './DataTable'
import PaginationController from './PaginationController'

export default function EarthquakeTable({ overallData }) {

    const ITEMS_PER_PAGE = 15;
    let [selectedPage, setSelectedPage] = useState(getInitialShownData());
    let numPages = getNumberOfPages(overallData);
    return (
        <Container fluid>
            <DataTable data={ overallData } page={ selectedPage } numPages={ numPages }
                itemsPerPage={ ITEMS_PER_PAGE } />
            <PaginationController selectedPage={ selectedPage } setPage={ setSelectedPage }
                numPages={ numPages } />
        </Container>
    )

    function getInitialShownData() {
        if (overallData.length > 15) {
            return 15;
        }
        return overallData.length;
    }

    function getNumberOfPages(data) {
        let baseNumber = Math.floor(data.length / ITEMS_PER_PAGE);
        if (data.length % ITEMS_PER_PAGE !== 0) {
            baseNumber++;
        }
        return baseNumber;
    }
}
