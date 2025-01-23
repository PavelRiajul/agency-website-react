

import { Link } from "react-router"
import errorIcon from "../assets/rocket-icon.png"

const ErrorPage = ({message="Page not found", code= 404}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-5">
        <img src={errorIcon} alt="rocket icon" />
        <h1 className='text-4xl font-bold to-gray-700 space-x-2'>{message} {code}</h1>
        <p className="text-[#21272A] md:w-2/5 w-full mx-auto">Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.</p>
        <Link to={'/'} className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">Go to Home Page</Link>
    </div>
  )
}

export default ErrorPage