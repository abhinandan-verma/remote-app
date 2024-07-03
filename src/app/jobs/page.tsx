"use client";

import { Job, columns } from "./column";
import DataTable from './data-table';
import { jobs } from "@/config/table-data";

function getData(): Job[] {
    // Fetch data from your API here.
    return jobs;
}

function TablePage() {
    const data = getData();

    return (
        <div className="container  py-10 bg-em">
            <DataTable columns={columns} data={jobs} onSave={() => {}}/>
        </div>
    )
}

export default TablePage