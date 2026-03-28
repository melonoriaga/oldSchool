import { useState, useEffect } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';

const ROOT_EMAIL = 'melonoriaga@gmail.com';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubAdmin, setIsSubAdmin] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u && u.email !== ROOT_EMAIL) {
        const snap = await getDoc(doc(db, 'admins', u.uid));
        setIsSubAdmin(snap.exists());
      } else {
        setIsSubAdmin(false);
      }
      setLoading(false);
    });
  }, []);

  const isRoot = user?.email === ROOT_EMAIL;

  return {
    user,
    loading,
    isRoot,
    isSubAdmin,
    isAdmin: isRoot || isSubAdmin,
  };
}
