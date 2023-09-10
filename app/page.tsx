"use client"
import { RouterProvider } from 'react-router-dom';
import  {ROUTES} from './core/constants/routers';

export default function Home() {
  return (
    <RouterProvider router={ROUTES} />
    
  )
}
