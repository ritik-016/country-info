import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Sorry! Page not found</h1>
            <NavLink to="/">
                <button>Go Back</button>
            </NavLink>
        </div>
    )
}