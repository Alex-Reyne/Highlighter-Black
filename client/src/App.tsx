import { useState } from 'react';
import './App.scss';
import ContentBox from './components/ContentBox';

function App() {
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      {loading && <div className="spin"></div>}
      <p id="edit" onClick={(e) => setEdit(true)}>
        Edit Links
      </p>
      <ContentBox edit={edit} setEdit={setEdit} loading={loading} setLoading={setLoading} />
    </div>
  );
}

export default App;
