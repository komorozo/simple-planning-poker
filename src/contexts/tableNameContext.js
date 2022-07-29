import React, {useState} from 'react';
const TableNameContext = React.createContext('');

export function TableNameContextProvider ({children}) {
    const [tableName, setTableName] = useState(null)

    return (
        <TableNameContext.Provider value={{ tableName, setTableName }}>
            {children}
        </TableNameContext.Provider>
    ) 
}
 
export default TableNameContext;
