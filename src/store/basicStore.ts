import { mountStoreDevtool } from 'simple-zustand-devtools'
import { useStudentStore } from './studentStore';

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Students', useStudentStore);
  }