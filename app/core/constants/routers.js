import LadingPage from '../../ladingPage';
import LayoutAdmin from "../../pages/LayoutAdmin"
import {
    createBrowserRouter,
} from "react-router-dom";


export const ROUTES = createBrowserRouter([
    {
        path: 'home',
        element: <LadingPage />
    },
    {
        path: '/',
        element: <LayoutAdmin/>,
        children: [
            // {
            //     path: 'manage-product',
            //     index: true,
            //     element: < ManageProduct />
            // },
            // {   s
            //     path: 'todo',
            //     element: <TodoListDemo />
            // }
        ]
    },

])

