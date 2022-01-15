import { db } from './db.cnx';
import {
  collection,
  query,
  where,
  getDocs,
  limit,
  orderBy,
} from 'firebase/firestore';

/**
 * Returns a promis of a list of students
 * @returns [students]
 */

export const getStudents = async () => {
  let students = [];

  const q = query(
    collection(db, 'users'),
    //region !== 'Region' && where('regionOfOrigin', '==', `${region}`),
    //institution !== 'Institution' &&where('institutionoforigin', '==', `${institution}`),
    //studentName !== 'Campuse' && where('studentname', '==', `${institution}`),
    limit(12)
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    students.push(doc.data());
  });

  return students;
};
