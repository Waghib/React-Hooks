import React from 'react'

function ParentComponent() {

  return (
    <div>ParentComponent</div>
  )
}

export default ParentComponent


// yt link : https://www.youtube.com/watch?v=IL82CzlaCys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=71
// useCallBack Hook
// useCallBack Hook is used to memoize a function so that it is not re-rendered every time the component re-renders. It is used to optimize the performance of the application. It is similar to useMemo Hook, but it is used to memoize functions instead of values.
// it is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
