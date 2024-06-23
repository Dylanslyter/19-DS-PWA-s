import { openDB } from 'idb';
const initdb = async () => {
  await openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });
};

// Method to add content to the database
export const putDb = async (content) => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, content }); // Ensure the same id for update
    const result = await request;
    console.log('data saved to the database', result);
  } catch (error) {
    console.error('Error in putDb:', error);
  }
};

// Method to get all content from the database
export const getDb = async () => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('data retrieved from the database', result);
    // Extract content if available, otherwise return an empty string
    return result.length ? result[0].content : '';
  } catch (error) {
    console.error('Error in getDb:', error);
    return '';
  }
};

initdb();



