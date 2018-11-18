import React, { Component } from "react"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import axios from "axios"

import { fetchTests } from "../../redux/actions/actions"
import routes from '../../routes/routes'

class Container extends Component{
  state = {
    tests    : [],
    propTests: []
  }

  componentDidMount() {
    axios.get('/api/tests/')
         .then((resp) => resp.data)
         .then((data) => Object.keys(data))
         .then((keys) => this.setState({ tests: keys }))
         .catch((err) => console.error(err))

    this.props.fetchTests()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const tests = Object.keys(nextProps.tests)
    return { tests }
  }

  render() {
    const stateLinks = this.state.tests.map((name, i) => (
      <Link
        key={i}
        to={`/test/${name}`}
      >
        {name}
      </Link>
    ))

    const propLinks = Object.keys(this.props.tests).map((name, i) => (
      <Link key={name + i} to={`/test/${name}`}>{name}</Link>
    ))

    return (
      <div className="container">
        <h1>Upwork tests</h1>
        <Link to='/'>Home</Link>
        <div className="props-links">
          Props Links
          {propLinks}
        </div>
        <div className="tests">
          {routes}
        </div>
      </div>
    )
  }
}


export default withRouter(connect(
  ({ tests }) => ({ tests }),
  { fetchTests }
)(Container))

// export default Container
