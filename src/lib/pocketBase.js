import PocketBase from 'pocketbase'

const url = process.env.URL_POCKETBASE;
const pb = new PocketBase(url);

const admin = async () =>
  await new PocketBase(url).admins.authWithPassword(
    process.env.SECRET_EMAIL, //cirmerol@libero.it
    process.env.SECRET_PASSWORD //  astroPhoto
  );

const client = async () => {
  // await pb.collection('users').authWithPassword('cirmerol@libero.it', 'cirmerol');
}

export { admin, pb };


// AMMINISTRATORE
// await pb.admins.authWithPassword('cirmerol@libero.it', 'astroPhoto');
// pb.authStore.clear();

//  UTENTE
// const user = async () => {
//   await pb.collection('users').authWithPassword('cirmerol@libero.it', 'cirmerol');
// }
