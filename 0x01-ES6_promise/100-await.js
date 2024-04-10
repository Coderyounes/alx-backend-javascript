import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let data = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    data = { photo, user };
  } catch (error) {
    data = { photo: null, user: null };
  }

  return data;
}
