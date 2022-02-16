import { useEffect, useState } from 'react';

import '../styles/ContentBox.scss';
import Hello from './Hello';
import LinkList from './LinkList';
import { newLink } from '../helpers/linksHelpers';
import { getImage, submitImage } from '../helpers/imageHelpers';
import LinkForm from './LinkForm';

interface props {
  edit: boolean;
  setEdit: any;
  loading: boolean;
  setLoading: any;
}

export default function ContentBox({ edit, setEdit, loading, setLoading }: props) {
  const [links, setLinks] = useState([] as any);
  const [add, setAdd] = useState(false);
  const [addForm, setAddForm] = useState({} as any);
  const [image, setImage] = useState('');

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      const data = await getImage(setImage);
    };

    getData()
      .then(() => {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(console.error);
  }, []);

  const { REACT_APP_IMGBB } = process.env;

  return (
    <section className="main-content">
      {!loading && (
        <>
          <Hello />
          <div className="center-content">
            <section className="list-box">
              <h1>ケツ &gt;</h1>
              <div className="lists">
                <LinkList links={links} setLinks={setLinks} edit={edit} setEdit={setEdit} />
              </div>
              {add === false && edit === false && (
                <button
                  onClick={(e) => {
                    setAdd(true);
                  }}
                >
                  New Link
                </button>
              )}
              {edit === true && (
                <button
                  onClick={(e) => {
                    setEdit(false);
                  }}
                >
                  Done Editing
                </button>
              )}
              {add === true && (
                <LinkForm
                  addForm={addForm}
                  setAdd={setAdd}
                  newLink={newLink}
                  setLinks={setLinks}
                  setAddForm={setAddForm}
                />
              )}
            </section>
            <section>
              <label htmlFor="file-input">
                <img id="img" src={image} alt="user_image" />
              </label>

              <input
                id="file-input"
                type="file"
                onChange={(e) => submitImage(e, setImage, REACT_APP_IMGBB)}
              />
            </section>
          </div>
          <form id="search" name="form1" action="https://duckduckgo.com/?q=" method="get">
            <input type="text" placeholder="Duck Duck Go Search..." name="q" />
          </form>
        </>
      )}
    </section>
  );
}
