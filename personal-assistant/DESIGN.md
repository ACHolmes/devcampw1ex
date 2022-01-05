Here's the task: in the file `DESIGN.md`, write a few paragraphs describing the component structure of your app and how data will transfer between those components. Diagrams are encouraged!

Component hierarhcy:
Display card (div)
    -> add todo section (section or div)
        -> add todo header (h2)
        -> form (form)
            -> text input (input)
            -> submit button (input)
    -> filter section (section or div)
        -> filter header (h2)
        -> filter form (form)
            -> filter text input (input)
            -> filter clear button (input)
    -> todo list (ul)
        -> li
            -> task div (div)
            -> remove button (i tag? Iconion?)
            (-> hover crossthrough functionality) (onclick styling with toggle functionality)

Data storage:
Need a state object to keep track of todos. Todos will be structed as a list of id-string dictionaries, such that correct element can be deleted.
Add form will push an object to this array
Filter form will modify CSS so that objects without the correct substring will be set to display: none
Remove button will delete object from state object
Crossthrough functionality will change text-decoration to strikethrough.

Data flow:
Display card component will need all information so that it can be passed down
    - Add section should need no input.

    - Filter section / div will need all data so it can modify styling (display none) and actually do the filtering.

    - todo list will obviously need all data so it can display the list.