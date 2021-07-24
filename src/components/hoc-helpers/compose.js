const compose = (...functions) => (Component) => {
  return functions.reduceRight((prev, f) => f(prev), Component)
}

export default compose;