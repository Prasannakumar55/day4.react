1 . What is UseRef Hook ?
2 . What is Context api ?

3 . Difference between Callback and UseCallback Hook ?

    Callback :

    A Callback function is a function passed into another function 
    as an argument,and it wait until the another function get executed 
    its called as the Callback function. 

    UseCallback :

    The UseCallback hook is used when you have a component in which the 
    child is rerendering again and again without need. Pass an inline callback 
    and an array of dependencies. useCallback will return a memoized version 
    of the callback that only changes  if one of the dependencies has changed.

    4 . What is Props Drilling Concept ?What is State Uplifting ?

    Props Drilling :

    Prop drilling is the process of that data is passing to the main component 
    from between every unwanted component. for Example if the Data needed to be 
    sent from Parent to Child C then it must be passed over from the 
    Child A and Child B but the both child A and B no need the data this 
    is the process of Props Drilling.

    State Uplifting :

    We lift up state to a common ancestor of components that need it, so that 
    they can all share in the state. This allows us to more easily share state 
    among all of these components that need rely upon it.

    5 . Difference between useEffect and useContext ?

    useEffect :

    useEffect iis a  react life cycle it use only one time when where the return 
    statement is done. it carry the two parameters one is "function" and another 
    one is dependencies. it ececuted without calling the useEffect.

    useContext :

    when the Context provides a data or state through the component without having 
    the props. the data can be considered as a global data of React.
    the useContext is used to recived the data from the provides its the useContext

    6 . What are React Life cycles Explain each one with Example ? 

    The three phases are: 
    Mounting, Updating, and Unmounting.

    Mounting : 
    Mounting means putting elements into the DOM and it has 4 methods
        1 . constructor() : 
            The method is called before anything else.state is declared here.
            
        2 . getDerivedStateFromProps() :
            The getDerivedStateFromProps() method is called right before rendering 
            

        3 . render() :
            The render() method is required, and is the method that actually outputs 
            the HTML to the DOM.

        4 . componentDidMount() :
            The componentDidMount() method is called after the component is rendered.

    Updating :
            React has five built-in methods that gets called, in this order, 
            when a component is updated:

        1 . getDerivedStateFromProps() :
            it is called first to get the data which is changing.

        2 . shouldComponentUpdate() :
            by default,its value is true.it always returns a boolean value.

        3 . render() :
            render method is must required.

        4 . getSnapshotBeforeUpdate() :
            to get the previous state and props.if we execute this without 
            componentDidUpdate(),then we will get an error.
            
        5 . componentDidUpdate() :
            this method is called after our component updates.

    Unmounting  :  
        The next phase in the lifecycle is when a component is removed from the DOM, 
        or unmounting as React likes to call it.