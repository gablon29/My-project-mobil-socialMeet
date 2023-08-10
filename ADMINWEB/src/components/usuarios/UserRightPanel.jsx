import react from "react"

export const UserRightPanel = ({userProfile}) => {
    const formattedDate = new Date(userProfile[0].created_at).toLocaleDateString();

    return(
        <>
                    <div className="w-10/12 h-full rounded-lg bg-naranja flex justify-center items-center flex-col">
                        <div className="w-full flex justify-center items-center flex-col mb-10">
                            <div className="w-16 h-16 bg-black rounded-full">
                                <img src={userProfile[0].profilePic} alt="fotouser" className="w-full h-full rounded-full"/>
                            </div>
                            <p>{userProfile[0].firstName + " " + userProfile[0].lastName }</p>
                            <p>id: {userProfile[0].id}</p>
                            <p>Estado: Activo o Baneado</p>
                        </div>
                        <ul className="list-none relative -left-7 mb-5">
                            <li className="font-semibold text-white">Email: {userProfile[0].email}</li>
                            <li className="font-semibold text-white">Télefono: {userProfile[0].phone}</li>
                            <li className="font-semibold text-white">País: {userProfile[0].country}</li>
                            <li className="font-semibold text-white">Provincia: {userProfile[0].province}</li>
                            <li className="font-semibold text-white">Localidad: {userProfile[0].zipcode}</li>
                            <li className="font-semibold text-white">Fecha de Registro: {formattedDate}</li>
                        </ul>
                        <div className="flex flex-col w-full justify-center items-center">
                            <button className="bg-black text-white m-2 rounded-3xl w-8/12 h-8 text-base font-semibold">Bannear Usuario</button>
                            <button className="bg-white rounded-3xl m-2 w-8/12 h-8 text-base font-semibold">Activar Usuario</button>
                        </div>
                    </div>
        </>
    )
}