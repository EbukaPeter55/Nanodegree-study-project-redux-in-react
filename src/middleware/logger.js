const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action: ', action)
    // note that next here performs the work of dispatch, so it dispatches the action
    const result = next(action)
    console.log('The new state: ', store.getState());
    console.groupEnd()
    return result 
}

export default logger;