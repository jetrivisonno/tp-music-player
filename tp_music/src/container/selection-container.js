import React, { Component } from 'react'

import SelectionComponent from 'component/selection-component'

class SelectionContainer extends Component {
    render () {
        return (
            <section>
                <ul>
                    <SelectionComponent
                        data={[{ title: 'yo', coverImg: 'yo' }]}
                    />
                </ul>
            </section>
        )
    }
}

export default SelectionContainer
