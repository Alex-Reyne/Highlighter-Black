import axios from 'axios';

const getLinks = async (set) => {
  try {
    const res = await axios.get(`https://highlighter-black.herokuapp.com/api/users/2/links`);
    set((prev) => [...res.data]);
  } catch (err) {
    console.log(err);
  }
};

const newLink = (set, addForm) => {
  axios
    .post(`https://highlighter-black.herokuapp.com/api/users/newlink`, {
      name: `${addForm.name}`,
      url: `${addForm.url}`,
      user_id: 2,
    })
    .then((res) => {
      getLinks(set);
    })
    .catch((err) => {
      console.log(err);
    });
};

const resetLinks = (set) => {
  console.log('in links reset HELPER FRONTEND');
  const id = 2;
  axios
    .post(`https://highlighter-black.herokuapp.com/api/users/resetLinks/${id}`)
    .then((res) => getLinks(set))
    .catch((err) => console.log(err));
};

export { getLinks, newLink, resetLinks };
