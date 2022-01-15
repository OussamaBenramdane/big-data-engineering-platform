import { db } from './db.cnx';
import { collection, query, where, getDocs } from 'firebase/firestore';

export const getStudents = async () => {
  let students = [];
  const q = query(collection(db, 'users'));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    students.push(doc.data());
  });

  return students;
};
