import React, { useRef } from 'react'

const UseRef = () => {
    const data = useRef (null);
    const submitHandler = e => {
        e.preventDefault();
        console.log(data.current.value)
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
      <h3>UseState will re-render when the content is change or update everytime but in UseRef it doesn't re-render the content when the changes are happend and autofocus option, no need to use onchange </h3>
      <h2>Check the submit value in console log</h2>
        <input ref={data} type='text' placeholder='EnterName' /> <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UseRef
