// Table: https://github.com/light9639/React-Table-TypeScript.git

import { Section } from "../components/Section"
import kobbq_stats from "../../public/kobbq_stats.json"
import * as React from "react"
import { useTable } from "react-table"

export const Dataset = () => {
    const data = React.useMemo(() => kobbq_stats, []);
    const columns = React.useMemo(
        () => [
        {
            Header: "Category",
            accessor: "category",
        },
        {
            Header: "# of Templates",
            accessor: "num_templates",
        },
        {
            Header: "# of Samples",
            accessor: "num_samples",
        }
        ],
        []
    );
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return <Section title="KoBBQ Construction: Cultural Adaptation of BBQ">
        <p className="mb-4">
        We propose a framework for developing culturally adaptive datasets and present KoBBQ that reflects the situations and social biases in South Korea.
        The dataset curation process consists of the following steps: 
        (1) categorization of BBQ templates, 
        (2) cultural-sensitive translation, 
        (3) demographic category construction, 
        (4) creation of new templates, and 
        (5) a large-scale survey on social bias.
        </p>
        <img alt="phases figure" className="w-full my-8" src={require('../../public/images/framework.png')}/>

        <div>
          <div className="text-2xl font-light text-[#4592ec] mb-4">Statistics</div>
          <div className="tcontainer">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row: { getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: any[]; }) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </Section>
}