import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 125 },
  { field: 'date', headerName: 'Date', width: 150 },
  {
    field: 'Name',
    headerName: 'Last, first name',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'first_name') || ''} ,
       ${params.getValue(params.id, 'last_name') || ''}`,
  },
  {
    field: 'Location',
    headerName: 'Location',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'city') || ''} ,
       ${params.getValue(params.id, 'state') || ''}`,
  },
  {
    field: 'Payment',
    headerName: 'Payment',
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, 'company') || ''}
       •••• ${params.getValue(params.id, 'card') || ''}`,
  },
  { field: 'cost', headerName: 'Cost', width: 180 },
];

const OrderTable = (data: any) => {
  return (
    <>
      <div style={{ height: 400, width: '100%', paddingBottom: '25px' }}>
        <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
      </div>
    </>
  )
};

export default OrderTable;
