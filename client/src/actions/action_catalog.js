const dataArray = [
  {
    id: 'cat1',
    name: 'Deep Learning',
  },
  {
    id: 'cat2',
    name: 'Algorithm',
  },
  {
    id: 'cat3',
    name: 'Database',
  },
  {
    id: 'cat4',
    name: 'Network',
  },
  {
    id: 'cat5',
    name: 'Data Science',
  },
  {
    id: 'cat6',
    name: 'Math',
  },
];

export const LIST_CATALOG = 'list_catalog';

export function listCatalog() {
  return {
    type: LIST_CATALOG,
    payload: dataArray,
  };
};
