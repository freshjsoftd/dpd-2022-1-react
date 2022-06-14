import React, {useState} from 'react';
import './WatchForm.css';

function WatchForm({onSubmit}) {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');

  function onIputChange(e) {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    }
    if (e.target.name === 'director') {
      setDirector(e.target.value);
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    onSubmit({
      title: title,
      director: director,
      isDone: false,
    });
    setTitle('');
    setDirector('');
  }

  return (
    <form className="watch-form" onSubmit={onFormSubmit}>
      <input type="text" name="title" value={title} onChange={onIputChange} />
      <input
        type="text"
        name="director"
        value={director}
        onChange={onIputChange}
      />
      <button className="add">Add</button>
      {/* <button 
              className="save"
              type='button'
              onClick={this.props.onSave}>Save</button> */}
    </form>
  );
}

export default WatchForm;
