import React from 'react'

// Применяем подход композиции функций

const withChildFunction = (renderFunc) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {renderFunc}
      </Wrapped>
    )
  }
};

export default withChildFunction;