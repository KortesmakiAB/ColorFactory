import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Color from './Color';
import ColorAdd from './ColorAdd';
import Home from './Home';

function App({ colors }) {
  const [colorObjs, setColorObjs] = useState(colors);

  const addColor = colorObj => setColorObjs(c => [...c, colorObj]);
  
  const getColor = colorName => colorObjs.find(c => c.color === colorName);
  
  return (
    <Switch>
      <Route exact path="/colors/add">
        <ColorAdd addColor={addColor} />
      </Route>
      <Route exact path="/colors/:color">
        <Color getColor={getColor} />
      </Route>
      <Route exact path="/colors">
        <Home colors={ colorObjs } />
      </Route>
      <Redirect to="/colors"></Redirect>
    </Switch>
  );
}

App.defaultProps = {
  // colors: ['red', 'green', 'blue']
  colors: [{ color: 'Tomato', hex: '#ff6347'}, { color: 'Aquamarine', hex: '#7FFFD4'}, { color: 'Cyan', hex: '#00FFFF'}, ]
}
export default App;
