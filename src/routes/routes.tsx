import { Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Home'

const AppRouter = () => (
  <Routes>
    <Route index element={<HomePage />} />
  </Routes>
)

export { AppRouter }
