function sortList(list, property, direction) {
  const sortProperty = property || 'name';
  const sortDirection = direction || 'asc';

  const orderedList = list.sort((a, b) => {
    if (a[sortProperty] < b[sortProperty]) {
      return -1;
    }

    if (a[sortProperty] > b[sortProperty]) {
      return 1;
    }

    return 0;
  });

  if (sortDirection === 'desc') {
    return orderedList.reverse();
  }

  return orderedList;
}

module.exports = {
  sortList
};
