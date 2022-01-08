import React, { useState } from 'react';
// import memesData from '../memesData';

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: ``,
    bottomText: ``,
    randomImage: `http://i.imgflip.com/1bij.jpg`
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
          .then(res => res.json())
          .then(data => setAllMemes(data.data.memes))
  }, []);

  // onMouse function
  const getMemeImage = (e) => {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const memeUrl = allMemes[randomNumber].url;

    setMeme(prevState => {
      const {name, value} = e.target;
      return {
        ...prevState,
        randomImage: memeUrl,
        [name]: value
      }
    });
  };

  function handleChange(event) {
    setMeme(prevState => {
      const {name, value} = event.target;
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <form className="form">
        <input 
          type="text"
          id="topText"
          placeholder="Top text"
          className="form--input"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input 
          type="text"
          id="bottomText"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="random meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;