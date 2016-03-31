# Open Questions

These are questions that bear research to better understand React.

1. Is it canonical/acceptable to update an object in state and then "unnecessarily" call setState to set the object to the same object, to garner the rerender?

2. What is the purpose of constructor(props) and super(props)?

3. What is the difference between setting this.state in constructor, and using setInitialState()?

4. If we fail to call setState after modifying an object in state, it will not render right away, but it does sometimes eventually rerender. Find an example of this and check that it makes sense when it does rerender.

5. Confirm the different reasons for the component declaration types (functional and class).

6. Confirm child components rerender when their props update (not their own state).

7. Find the canonical way to get/set the state of HTML elements (such as input text boxes, select menus) within a component. Should we use component-level state, or can we just use document.getElementById etc.?

8. Convince yourself why the drop-down menu for ratings does not update when the currentPhoto changes.

9. Find the canonical determination of where state should be placed.