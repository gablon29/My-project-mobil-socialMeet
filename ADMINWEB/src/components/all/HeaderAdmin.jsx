const HeaderAdmin = () => {
    return (
        <header className="w-full bg-transparent p-5 flex justify-end">
            <div className="bg-naranja rounded-full w-16 h-16 mr-4">

            </div>
            <div className="bg-naranja flex rounded-lg p-2 w-64 h-16">
                <div className="bg-black rounded-full w-12 h-12 mr-4">
                    <img src="" alt="" />
                </div>
                <div>
                    <p className="text-white font-semibold text-base">Nombre de Usuario</p>
                    <p className="text-black text-xs">Cargo en la empresa</p>
                </div>
            </div>
        </header>
    );
}
 
export default HeaderAdmin;