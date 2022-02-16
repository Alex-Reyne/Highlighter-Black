import axios from 'axios';

async function submitImage(e, setImage, key) {
  const data = new FormData();
  data.append('image', e.target.files[0]);

  await axios({
    method: 'post',
    url: `https://api.imgbb.com/1/upload?key=${key}`,
    data: data,
  })
    .then(async (res) => {
      const url = res.data.data.url;
      await axios
        .post('https://highlighter-black.herokuapp.com/api/users/2/newimage', {
          id: 2,
          image_url: url,
        })
        .then((res2) => setImage(url));
    })
    .catch((e) => console.log(e));
}

async function getImage(setImage) {
  await axios
    .get('https://highlighter-black.herokuapp.com/api/users/2')
    .then((res) => {
      const { image_url } = res.data;
      setImage(image_url);
    })
    .catch((err) => console.log(err));
}

const resetImage = (setImage) => {
  console.log('in reset IMAGE HELPER FRONTEND');
  const url = `https://i.ibb.co/zmJypD9/stars.gif`;
  axios
    .post('https://highlighter-black.herokuapp.com/api/users/2/newimage', {
      id: 2,
      image_url: url,
    })
    .then((res2) => setImage(url))
    .catch((err) => console.log(err));
};

export { getImage, submitImage, resetImage };
