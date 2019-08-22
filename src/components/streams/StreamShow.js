import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStream } from '../../actions';

export class StreamShow extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    if (!this.props.stream) {
      return (
        <div className="ui active inline loader"></div>
      )
    }

    const { title, description } = this.props.stream

    return (
      <div>
        <h1>{title}</h1>
        <h>{description}</h>5
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}


export default connect(mapStateToProps, { fetchStream })(StreamShow)
