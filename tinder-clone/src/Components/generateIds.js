const generateId = (id1, id2) => {
  if (id1 + id2) {
    return id1 + id2;
  } else {
    id2 + id1;
  }
};

export default generateId;
