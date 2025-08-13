import image from "../assets/image.png"
const Header = () => {
    return <header className="max-w-screen-xl w-full px-4 mx-auto">
        <img className="w-48 sm:w-60 md:w-72 lg:w-80 block mx-auto my-2" src={image} alt="piggybankandcalculator" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center uppercase font-bold my-4 
bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 
bg-clip-text text-transparent tracking-wide drop-shadow-md">
            Investment Calculator
        </h1>

    </header>
}
export default Header;