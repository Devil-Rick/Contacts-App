import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Contacts from './pages/view_contact/contacts';
import AddContact from './pages/add_contact/newContact';
import Home from './pages/home/home';

function App() {

  // Creating routes using createBrowser Routes
  const routes = createBrowserRouter([
    {
      path : '/', element : <Navbar />, children : [
        {index : true, element : <Home />},
        {path: 'addContact', element : <AddContact />},
        {path: 'viewContact', element : <Contacts />},
      ]
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;
