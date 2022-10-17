import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import UserApi from './UserApi';
import TodoApi from './TodoApi';

function App() {

  return (
    
      <BrowserRouter>
        <Routes>

          <Route path="/user" element={<UserApi></UserApi>}>
          
          </Route>
          <Route path="/todo" element={<TodoApi></TodoApi>}>
          
          </Route>
          
        </Routes>
      </BrowserRouter>
   
  )

}

export default App;