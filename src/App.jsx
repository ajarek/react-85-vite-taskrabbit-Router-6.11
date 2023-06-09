import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Professionals from './pages/Professionals/Professionals'
import Error from './pages/Error/Error'
import ProfessionalsEdit from './pages/ProfessionalsEdit/ProfessionalsEdit'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: 'fachowcy',
        element: <Professionals />,
        errorElement: <Error />,
      },
      {
        path: 'contact',
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: 'fachowcy-edycja',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            // action: noteAction,
            element: <ProfessionalsEdit />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
])
function App() {
  const [filter, setFilter] = useState('')
  return (
    <div className='App'>
      <AppContext.Provider value={{ filter, setFilter }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
