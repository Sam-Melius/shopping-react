import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();

}

// signs an new user in and puts an auth token in local storage in the browser
export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

// removes the token from local storage and redirects the user home
export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}

export async function createListItem(listItem){
  const response = await client
    .from('shopping_list_items')
    .insert([listItem]);

  return checkError(response);
}


export async function getListItems() {
  const response = await client
    .from('shopping_list_items')
    .select()
    .order('has_been_bought');

  return checkError(response);    
}


export async function buyItem(id) {
  const response = await client
    .from('shopping_list_items')
    .update({ has_been_bought: true })
    .match({ id });
  
  return checkError(response);    
}

export async function deleteAllItems() {
  const response = await client
    .from('shopping_list_items')
    .delete();
  
  return checkError(response);    
}