import { createBrowserRouter } from "react-router-dom";



const router = createBrowserRouter ([
    {
        path:"/",
        element: <Layout1 />,
        children:[
            {
                path:"/",
                element: <Home />
            }
        ]
    },
    {
        path:"/tracker",
        element: <Layout2 />,
        children:[
            {
                path:"/tracker",
                element: <Page1 />
            },
            {
                path:"/tracker/2/",
                element: <Page2 />
            }
           
        ]
    }
])

export default router;