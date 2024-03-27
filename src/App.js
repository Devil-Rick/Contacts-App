import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Contacts from './pages/view_contact/contactPage';
import AddContact from './pages/add_contact/newContact';
import Home from './pages/home/home';
import { store } from './Redux/store/store';
import { Provider} from 'react-redux';


function App() {
  // Creating routes using createBrowser Routes

  const routes = createBrowserRouter([
    {
      path: '/', element: <Navbar />, children: [
        { index: true, element: <Home /> },
        { path: 'addContact', element: <AddContact /> },
        { path: 'viewContact', element: <Contacts /> },
      ]
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
