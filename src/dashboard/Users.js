import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

function Users() {
    const columns = [
        {
            name: "Userid",
            selector: row => row.userid,
            sortable: true,
        },
        {
            name: "Username",
            selector: row => row.username,
        },
        {
            name: "Status",
            selector: row => row.status,
        },
        {
            name: "Registration",
            selector: row => row.registration,
        }
    ];

    const initialData = [
        {
            userid: 1,
            username: "shraddha",
            status: "active",
            registration: "2001-2-2"
        },
        {
            userid: 2,
            username: "john",
            status: "inactive",
            registration: "2021-1-15"
        },
        // Add more data as needed
    ];

    const [records, setRecords] = useState(initialData);

    // Handle filtering of records
    function handleFilter(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = initialData.filter(row => 
            row.username.toLowerCase().includes(searchTerm)
        );
        setRecords(filteredData);
    }

    return (
        <div className='pt-24'>
            <div className='text-end h-10'>
                <input 
                    type='text' 
                    placeholder="Filter by username..." 
                    onChange={handleFilter} 
                />
            </div>
            <br />
            {/* Wrapper div for table scroll */}
            <div style={{ overflowX: 'auto' }}>
                <DataTable
                    columns={columns}
                    data={records}
                    selectableRows
                    fixedHeader
                    pagination
                />
            </div>
        </div>
    );
}

export default Users;
