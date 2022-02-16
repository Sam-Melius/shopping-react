# React Shopping List App with Auth

**Visit the live demo here:** [Live Demo](https://objective-khorana-959a7c.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page (`'/'`), Login and Signup using the login and signup form. On success, redirect to the `/shopping-list` page  (just like in the inventory app)   |        .5 |
| Logout by clicking the logout button    (just like in the inventory app)                                                    |       .5 |
| If a non-logged-in user tries to visit the shopping list page, redirect them to the login page  (just like in the inventory app)     |      .5 |
| On the list page load event, fetch the list itemss from supabase and render them to the page.   |       1 |
| Add a list item to supabase by using the inputs (name and quantity) and button.                        |        1 |
| When a list item is added, refetch and re-render the updated list of shopping items.       |        1 |
| When a user clicks a list item, it becomes bought. Update this state in supabase, clear out the shopping list, and re-fetch and redisplay the updated items.         |        1 |
| When a user clicks delete all shopping list items, delete them. Update this state in supabase and refetch and rerender your todos |        .5 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : contains route for home/auth page and `/shopping-list` and tracks user state |.5|
| `AuthPage({ setUser })` : tracks user form state and allows users to sign up and sign in, storing the user in `App` state with callbacks (just like in the inventory app) |.5|
| `ListItem({ listItem, fetchItems })` : renders bought items differently. If it is not bought, on click of the item, 'buy' the item and refetch all items from supabase to be rerendered |1|
| `ListItemForm({ fetchItems })` : tracks it own form state and allows user to create a new shopping item on submit, refreshing the list from supabase on submit by calling the callback prop state handler. |1|
| `ListPage()` :  tracks `listItems` in state, and fetches them on load by calling a function `fetchItems`, which fetches the items and injects them into state |.5|
| `ListPage()` :  `handleDeleteClick` function is called on delete button click, deleting all todos then refetching and rerendering the now-empty list |.5|

![image](https://user-images.githubusercontent.com/16160135/150246071-38308193-a927-4f89-8979-19f866f4e9d9.png)

![image](https://user-images.githubusercontent.com/16160135/150426272-d9a8b7a8-e4fe-4918-bb77-682e1bdcf515.png)




