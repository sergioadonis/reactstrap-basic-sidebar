import React from 'react'

class Wrapper extends React.Component {

    render() {
        const { siebar, content } = this.props
        return <div className="wrapper">
            {sidebar}
            {content}
        </div>
    }
}