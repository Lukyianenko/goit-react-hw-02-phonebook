
export const Filter = ({ value, onChange }) => (
        <label>
            Find contacts by name
            <input type="text" name='filtr' value={value} onChange={onChange} />
        </label>
    )
