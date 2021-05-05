import { useState } from 'react';
import './TableItem.scss';

interface ITableItem {
    value: number | string | undefined;
    onChange?: () => void;
    isNew?: boolean;
}

const TableItem = ({ value, onChange, isNew }: ITableItem) => {
    const [editMode, setEditMode] = useState(isNew || false);

    return (
        <>
            {editMode ? (
                <input className="form-control table-item-input-sm" />
            ) : (
                <div
                    className="table-item-text"
                    role="presentation"
                    onClick={() => {
                        setEditMode(true);
                    }}
                    onBlur={() => {
                        /** */
                    }}
                >
                    {value}
                </div>
            )}
        </>
    );
};

TableItem.defaultProps = {
    onChange: undefined,
    isNew: undefined,
};

export default TableItem;
