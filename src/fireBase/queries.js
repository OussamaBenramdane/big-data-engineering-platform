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

  const q = query(collection(db, 'users'), limit(12));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    students.push(doc.data());
  });

  return students;
};

/**
 * Get Students by campus
 */

export const getStudentsByCampus = async () => {
  let studetnsByCampus = [];

  const q = query(collection(db, 'users'), orderBy('Campus'));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    studetnsByCampus.push(doc.data());
  });

  return studetnsByCampus;
};
