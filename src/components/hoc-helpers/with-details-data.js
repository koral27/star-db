import React from 'react';

import Spinner from '../spinner';
import ErrorCatcher from '../error-catcher';

const withDetailsData = (View) => {
  return class extends React.Component {

    state = {
      item: null,
      image: null
    }
  
    componentDidMount() {
      this.updateItem()
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId ||
        this.props.getData !== prevProps.getData ||
        this.props.getImageUrl !== prevProps.getImageUrl) {
        this.updateItem()
      }
    }

    updateItem() {
      const { itemId, getImageUrl, getData } = this.props;
      if (!itemId) return;
  
      getData(itemId)
        .then((item) => {
          this.setState({ item, image: getImageUrl(item) })
        })
    }

    render (){

      const { item, image } = this.state;

      if(!item) return <Spinner />

      return (
        <ErrorCatcher>
          <View {...this.props} item={item} image={image}/>
        </ErrorCatcher>
      )
    }
  }
}

export default withDetailsData;