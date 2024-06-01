1. State=condition of any component for eg. textarea component might be empty sometime , sometimes it has letters .
2. Hooks= A method which helps us to use features of classes in function based component this is because developer like us prefer to use function over classes.
3. Hooks has this part ---->   const [count,setCount)=useState("Hello Universe"); 
     Here in above hook the value of count is Hello Universe . count is array variable so that we just can't update or change its value like normal variable. 
But we can update or change its value using setCount() method. i.e. setCount("Hey You"); this implies the value of count is updated to Hey You.

What is inside this mini project and what i do?
---> Project provides mini textarea and 2/3 buttons like UpperCase, LowerCase, No. of letters. we change the text value according to the buttons instruction using state and event. 
Its more simple as we use onClick={ClickFunction) and we define its functionality as well.

Note : Advantages of hooks and this stuff ,  whenever you click Uppercase button page does not reload. Which enhances its capability. IMP*


