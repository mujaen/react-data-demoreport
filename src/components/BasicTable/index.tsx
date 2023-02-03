import React, { useMemo } from 'react'
import { useTable, Column } from 'react-table'

import styled from '@emotion/styled'

interface ColumnData {
  col1: string
  col2: string
}

const Table = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`

const TableHeader = styled.th`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.5rem;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  text-align: left;
  padding: 16px;
  color: rgba(0, 0, 0, 0.87);
`

const TableData = styled.td`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  text-align: left;
  padding: 16px;
  color: rgba(0, 0, 0, 0.87);
  width: 48px;
`

function BasicTable({}) {
  const data = useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
      },
      {
        col1: 'react-table',
        col2: 'rocks',
      },
      {
        col1: 'whatever',
        col2: 'you want',
      },
    ],
    [],
  )

  const columns: Column<ColumnData>[] = useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1',
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
    ],
    [],
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableHeader {...column.getHeaderProps()}>{column.render('Header')}</TableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <TableData {...cell.getCellProps()}>{cell.render('Cell')}</TableData>
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default BasicTable
