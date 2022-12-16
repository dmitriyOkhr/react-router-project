const changeItem = (data) => ({
  type: "todos/changeItem",
  payload: { title: data.title, description: data.description, id: data.id },
});

export default changeItem;
