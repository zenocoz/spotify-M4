import React from "react"
import {DataSource} from "../data_source"

const ApiFetchSubscriber = (Subscriber, selectData) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props),
      }
    }

    componentDidMount() {
      // ... that takes care of the subscription...
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      })
    }

    render() {
      return <Subscriber data={this.state.data} {...this.props} />
    }
  }
}

export {ApiFetchSubscriber}
