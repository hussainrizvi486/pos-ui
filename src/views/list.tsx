import React, { useMemo } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    Table,
} from '@tanstack/react-table';

interface ListViewProps<TData extends object> {
    data: TData[];
    columns: ColumnDef<TData>[];
}

export const ListView = <TData extends object>({ data, columns }: ListViewProps<TData>) => {
    const memoizedColumns = useMemo(() => columns, [columns]);
    const memoizedData = useMemo(() => data, [data]);

    const table = useReactTable({
        data: memoizedData,
        columns: memoizedColumns,
        getCoreRowModel: getCoreRowModel(),
    });

    console.log(table);
    return (
        <table>
            <thead>
                {/* {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : header()}
              </th>
            ))}
          </tr>
        ))} */}
            </thead>
            <tbody>
                {/* {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{cell.renderCell()}</td>
            ))}
          </tr>
        ))} */}
            </tbody>
        </table>
    );
};
