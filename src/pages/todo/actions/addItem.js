const addItem = (data) => ({
  type: "todos/addItem",
  payload: { title: data.title, description: data.description },
});

export default addItem;
