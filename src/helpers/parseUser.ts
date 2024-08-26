import { UserCredential } from 'firebase/auth';

export function parseUser(userCred: UserCredential) {
  const { user } = userCred;
  const parsedUser = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    avatar: user.photoURL,
    jobType: null,
  };
  return parsedUser;
}
