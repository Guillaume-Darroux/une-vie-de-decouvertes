import React from 'react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types';

function SearchInput({value, onChange}) {
    return (
        <Input
            value={value}
            onChange={onChange}
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Chercher...'
        />
    )
}

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default React.memo(SearchInput);