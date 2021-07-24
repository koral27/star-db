import React from 'react';

import Spinner from '../spinner';
import ErrorCatcher from '../error-catcher';
import ErrorIndicator from '../error-indicator';

/**
 * Компонент-обертка над встраиваемым компонентом (View)
 */

const withData = (View) => {
  
  return class extends React.Component {

    state = {
      data: null,
      loading: true,
      error: false
    }

    componentDidUpdate(prevProps) {
      if(this.props.getData !== prevProps.getData) {
        this.update();
      }
    }
  
    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false
      })
      this.props.getData().then(
        (data) => {
          this.setState({ 
            data,
            loading: false
          })
        }
      )
      .catch(() => {
        this.setState({
          error: true,
          loading: false
        })
      })
    }

    render (){

      const { data, loading, error } = this.state;

      if(loading) return <Spinner />
      if(error) return <ErrorIndicator />

      return (
        <ErrorCatcher>
          <View {...this.props} data={data}/>
        </ErrorCatcher>
      )
    }
  }
}

export default withData;