import {FC, useState} from 'react';
import './TableItem.scss';

interface ITableItem {
    value: number | string | undefined;
    onChange?: () => void;    
    isNew?: boolean;
}

const TableItem: FC<ITableItem> = ({
    value,
    onChange,
    isNew
}) => {
    const [editMode, setEditMode] = useState(isNew || false);
    
    return(
        <>
        {editMode 
            ? <input className='form-control table-item-input-sm'/>
            : <div className='table-item-text' onClick={() => {setEditMode(true)}}>{value}</div>
        }
        </>
    )

}

export default TableItem;