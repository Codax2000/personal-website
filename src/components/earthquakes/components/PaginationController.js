/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Pagination for the table that shows queried earthquakes.
 */
import React from 'react'
import { Pagination, Container } from 'react-bootstrap'

export default function PaginationController({ selectedPage, setPage, numPages }) {
    return (
        <Container fluid className="d-flex justify-content-center">
            <Pagination>
                { getPaginationItems(selectedPage, setPage, numPages) }
            </Pagination>
        </Container>
            
    )

    function getPaginationItems(selectedPage, setPage, numPages) {
        if (numPages <= 5) {
            return getPaginationRow(0, numPages, false, false, setPage, selectedPage, numPages);
        } else if (selectedPage <= 2) {
            return getPaginationRow(0, 4, false, true, setPage, selectedPage, numPages);
        } else if (selectedPage >= numPages - 3) {
            return getPaginationRow(numPages - 4, numPages, true, false, setPage, selectedPage, numPages);
        } else {
            return getPaginationRow(selectedPage - 1, selectedPage + 2, true, true,
                setPage, selectedPage, numPages);
        }
    }

    function getPaginationRow(startOfPageRange, endOfPageRange,
                              hasBeginningEllipsis, hasEndEllipsis, setPage,
                              selectedPage, numPages) {
        let paginationArray = [];
        paginationArray.push(<Pagination.First onClick={() => setPage(0)} />);
        paginationArray.push(<Pagination.Prev onClick={ () => {
            if (selectedPage > 0) {
                setPage(selectedPage - 1);
            }
        }} />);
        if (hasBeginningEllipsis) {
            paginationArray.push(<Pagination.Ellipsis className="ellipsis" disabled />);
        }
        for (let i = startOfPageRange; i < endOfPageRange; i++) {
            if (i === selectedPage) {
                paginationArray.push(<Pagination.Item active activeLabel={false} onClick={() => {
                    setPage(i)
                }}>{i + 1}</Pagination.Item>);
            } else {
                paginationArray.push(<Pagination.Item onClick={() => {
                    setPage(i)
                }}>{i + 1}</Pagination.Item>);
            }
        }
        if (hasEndEllipsis) {
            paginationArray.push(<Pagination.Ellipsis className="ellipsis" disabled />);
        }
        paginationArray.push(<Pagination.Next onClick={() => {
            if (selectedPage !== numPages - 1) {
                setPage(selectedPage + 1);
            }
        }} />);
        paginationArray.push(<Pagination.Last onClick={() => setPage(numPages - 1)} />);
        return paginationArray;
    }
}
