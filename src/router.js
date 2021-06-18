import Home from './pages/Home'
import Display from './pages/Display'
let routeTable = {
  '/': Home,
  '/display': Display
}

export default function router(path) {
  console.log(path)
  return routeTable[path] || Home
}
