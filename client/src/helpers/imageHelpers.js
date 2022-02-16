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
        .post('https://highlighter-black.herokuapp.com/api/users/1/newimage', {
          id: 1,
          image_url: url,
        })
        .then((res2) => setImage(url));
    })
    .catch((e) => console.log(e));
}

async function getImage(setImage) {
  await axios
    .get('https://highlighter-black.herokuapp.com/api/users/1')
    .then((res) => {
      const { image_url } = res.data;
      setImage(image_url);
    })
    .catch((err) => console.log(err));
}

export { getImage, submitImage };
