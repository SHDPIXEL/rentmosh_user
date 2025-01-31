import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);

    return (
        <nav className="text-gray-600 text-sm mt-4">
            <ol className="flex items-center space-x-2 ml-34">
                <li>
                    <Link to="/" className="hover:text-gray-700"></Link>
                </li>
                {paths.map((path, index) => {
                    const routeTo = `/${paths.slice(0, index + 1).join("/")}`;
                    return (
                        <li key={index} className="flex items-center">
                            <ChevronRight className="w-4 h-4 mx-1 text-gray-400" />
                            <Link 
                                to={routeTo} 
                                className="capitalize hover:text-blue-500"
                            >
                                {path.replace(/-/g, " ")}
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
