import React from "react";

export const Filter = ({ value, onChange, onClear }) => {
    return (
        <>
            <label>Find contacts by name
                <input value={value} onChange={onChange}/> 
            </label>
            <button type="button" onClick={onClear}>Clear</button>
        </>
    )
}