import React from "react";
import { useFilters, useTable } from "react-table";
import { usersData } from "../data/usersData"; 
import "../styles/styles.css";

const DataTable = () => {

    const data = React.useMemo(() => usersData, []);

    const [filterInput, setFilterInput] = React.useState("");

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("name", value);
        setFilterInput(value);
    }
    

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id"
            },
            {
                Header: "Name",
                accessor: "name"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "Age",
                accessor: "age"
            }
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
    } = useTable(
        { columns, data },
        useFilters
    );

    return (
        <>
        <input 
            className="input-text"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Buscar nombre"}
        />

        <table {...getTableProps()} className="data-table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
};

export default DataTable;