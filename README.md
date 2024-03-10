## Phonebook

Refactor the code of the
[previous task](https://github.com/Vademandr/goit-react-woolf-hw-04-phonebook)
to add state management using the [Redux Toolkit](https://react-redux.js.org/)
library. Let the Redux state look like this.

```
{
  contacts: [],
  filter: ""
}
```

- Create a store with `configureStore()`
- Use the `createSlice()` function
- Create actions to save and delete a contact, as well as update a filter
- Connect React components with Redux logic using the
  [react-redux](https://react-redux.js.org/) library hooks.
- Use the Redux Persist library to store an array of contacts in local storage
