import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold text-violet-800 mb-6">Ooops!</h1>
            <p className="text-xl font-bold">404 PAGE NOT FOUND</p>       
            <Link to='/'><button className="btn btn-secondary btn-sm mt-2">GO BACK</button></Link>
        </div>
    );
};

export default ErrorPage;