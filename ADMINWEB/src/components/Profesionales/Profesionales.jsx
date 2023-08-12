import React, { useEffect, useState } from "react";;
import { useDispatch, useSelector } from "react-redux";
import HeaderAdmin from "../all/HeaderAdmin";
import { FilterAndSearch } from "../all/FilterAndSearch";
import { useFilterProfesional } from "../../customHooks/useProfesionales";
import Link from "next/link";
import { getAllProfessions } from "../../../utils/metodos/userMetodos";
import { authSetError, authSetLoading, authSetUser } from "@/redux/reducer/reducerAuth";
import { setProfessions } from "@/redux/reducer/reducerProfesionales";

const Profesionales = () => {
    const { professions } = useSelector((state) => state.reducerProfesionales);
    // const { searchTerm, setSearchTerm, handleSearch, filteredProfesionales } =
    // useFilterProfesional(professions);

    // const dispatch = useDispatch()

    // useEffect(() => {
        
    //     getAllProfessions({
    //         loading: (v) => dispatch(authSetLoading(v)),
    //         error: (msg) => dispatch(authSetError(msg)),
    //         success: async (res) => dispatch(setProfessions(res))
            
    //     })
    // }, [])
    console.log('RATA INMUNDA')


    return (
        <div className="grid col-start-1 col-end-2 row-start-1 row-end-3 grid-cols-[256px_1fr] grid-rows-[35vh_65vh] bg-white">
            <div className="grid col-start-1 col-end-3 row-start-1 row-end-2">
                <HeaderAdmin />
                {/* <FilterAndSearch
                    handleSearch={handleSearch}
                    searchTerm={searchTerm}
                    placeholder={"Buscar usuarios, id, teléfono, email..."}
                    active={true}
                    bannear={true}
                    del={true}
                /> */}
            </div>

            <div className="grid row-start-2 row-end-3 col-start-1 col-end-3 grid-rows-[60px_1fr] bg-white overflow-x-auto z-10">
                <div className="bg-white text-black z-10 border-b-[1px] border-gray-500 grid col-start-1 col-end-2 row-start-1 row-end-2 sticky top-0 grid-cols-[50px_1fr_1fr_1fr_1fr_1fr]">
                    <input className="relative left-3 w-4 h-4" type="checkbox" />
                    <span className="block w-full text-center text-xl font-semibold">
                        Profesión
                    </span>

                </div>

                <div className="bg-white text-white grid col-start-1 col-end-2 row-start-2 row-end-3 ">
                    {professions?.map((profesionales) => {
                        // console.log('AAAAAA', profesionales)
                        return (
                            <div
                                key={profesionales.id}
                                className="text-black bg-white flex justify-evenly items-center py-1 my-1"
                            >
                                <input className="relative left-3" type="checkbox" />
                                <span className="w-full text-center">{profesionales.name}</span>
                                <span className="w-full text-center">{profesionales.province}</span>
                                <span className="w-full text-center">{profesionales.city}</span>
                                <span className="w-full text-center">{profesionales.address}</span>
                                <span className="w-full text-center">{profesionales.phone}</span>
                                <span className="w-full text-center">
                                    <Link href={`/profesionales/${profesionales.id}`} passHref>

                                        Ver Profesión

                                    </Link>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

};

export default Profesionales;