import profile from '../images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
             <h1 className="font-bold text-5xl">Knowledge Cafe</h1>
             <img src={profile}alt="" />
        </header>
    );
};

export default Header;