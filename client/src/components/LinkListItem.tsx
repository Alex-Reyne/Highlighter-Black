import axios from 'axios';
import { useEffect } from 'react';
import { getLinks, resetLinks } from '../helpers/linksHelpers';

type props = {
  id: number;
  linkName: string;
  safeLink: string;
  edit: boolean;
  setEdit?: any;
  setLinks: any;
};

export default function LinkListItem({ linkName, safeLink, edit, id, setLinks }: props) {
  const deleteLink = () => {
    axios
      .post(`https://highlighter-black.herokuapp.com/api/users/deletelink/${id}`)
      .then((res) => getLinks(setLinks))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log('in links useEffect');
    const timer = setInterval(() => {
      resetLinks(setLinks);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {edit === false && (
        <a href={safeLink} target="_blank">
          <li className="link-chip">{linkName}</li>
        </a>
      )}
      {edit === true && (
        <a onClick={deleteLink} target="_blank">
          <li className="link-chip">{linkName + ' x'}</li>
        </a>
      )}
    </>
  );
}
