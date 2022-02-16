import axios from 'axios';
import { useEffect, useState } from 'react';
import LinkListItem from './LinkListItem';
import { getLinks, newLink } from '../helpers/linksHelpers';

interface props {
  links: any;
  setLinks: any;
  edit: boolean;
  setEdit: any;
}
interface link {
  id: number;
  name: string;
  url: string;
  user_id: number;
}

export default function LinkList({ links, setLinks, edit, setEdit }: props) {
  const [error, setError] = useState(false);

  useEffect(() => {
    getLinks(setLinks);
  }, []);

  const linkList = () => {
    setError(false);

    if (links.length < 16) {
      return links.map((link: link) => {
        const { name, url, id } = link;
        const linkName = name;
        let safeLink = ``;
        url.includes('http') ? (safeLink = `${url}`) : (safeLink = `https://${url}`);

        return (
          <LinkListItem
            key={id}
            id={id}
            linkName={linkName}
            safeLink={safeLink}
            edit={edit}
            setEdit={setEdit}
            setLinks={setLinks}
          />
        );
      });
    }

    setError(true);
  };

  return (
    <ul className="link-list">
      {error && <p id="error">Maximum 16 Links.</p>}
      {linkList}
    </ul>
  );
}
