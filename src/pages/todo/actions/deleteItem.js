const deleteItem = (targetId) => ({
  type: "todos/deleteItem",
  payload: targetId,
});

export default deleteItem;
