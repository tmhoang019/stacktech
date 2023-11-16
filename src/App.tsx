import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {routes} from './routes'
import { MainLayout } from './layout';


const App:React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {
            Array.isArray(routes) && routes.length > 0 &&
            routes.map((route, index) => {
              let Page = route.component
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<MainLayout><Page></Page></MainLayout>}
                >
                </Route>
              )
            })
          }
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
