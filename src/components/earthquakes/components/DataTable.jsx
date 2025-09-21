/**
 * Alex Knowlton
 * 9/15/2020
 * 
 * Shows the given data in a table, styled with bootstrap
 */
import React from 'react'
import { Table } from 'react-bootstrap'

export default function DataTable({ data, page, numPages, itemsPerPage }) {
    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Magnitude</th>
                    <th>Latitude</th>
                    <th>Longitude</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                { getDataSlice(data, page, numPages, itemsPerPage) }
            </tbody>
        </Table>
    )

    function getDataSlice(data, page, numPages) {
        let selectedData;
        if (page === numPages - 1) {
            selectedData = data.slice(page * itemsPerPage);
        } else {
            selectedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
        }
        return selectedData.map((d, i) => getTableRowForData(d, i));
    }

    function getTableRowForData(row, index) {
        return <tr key={index}>
            <td>{row['id']}</td>
            <td>{row['magnitude']}</td>
            <td>{row['latitude']}</td>
            <td>{row['longitude']}</td>
            <td>{new Date(row['time']).toLocaleTimeString() + " " + new Date(row['time']).toLocaleDateString()}</td>
        </tr>
    }
}
