import react from "react"
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const Petinformation = ({pet, owner}) => {
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const textareaRef = useRef(null);

    const handleTextChange = (event) => {
        setMessage(event.target.value);
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

    useEffect(() => {
        adjustTextareaHeight();
      }, [message]);

      /* Aqui va la logica de cuando presiona el boton de enviar mensaje */
      const onSubmit = (e) => {
        e.preventDefault()
        
      }

    return(
        <div className="bg-naranja w-screen h-full flex flex-col items-center">
            <img src="/whopawsWhite.png" alt="Whopaws" width="231" height="56" className="mt-10"/>
            <section className="items-center flex flex-col mt-10">
                <img src={pet.profilePic} alt="Foto perfil mascota" className="rounded-full w-28 h-28 mb-5" width="120" height="120"/>
                <p className="text-center text-[20px] font-semibold text-white mb-5">¡Hola! Me llamo <br />{pet.name}</p>
                <ul className="w-screen sm:w-96 px-5">
                    <li className="mb-5">
                        <h3 className="font-semibold text-2xl text-white">Localidad</h3>
                        <p>{owner.country} {owner.province}</p>
                    </li>
                    <li className="mb-5">
                        <h3 className="font-semibold text-2xl text-white">Edad</h3>
                        <p>{pet.age.years > 1 ? `${pet.age.years} años`: `${pet.age.years} año`}{" y " + pet.age.months > 2 ? `${pet.age.months} meses` : `${pet.age.months} mes` ? pet.age.months === 0 : null}</p>
                    </li>
                    <li className="mb-5">
                        <h3 className="font-semibold text-2xl text-white">Sexo</h3>
                        <p>{pet.sex}</p>
                    </li>
                    <li className="mb-5">
                        <h3 className="font-semibold text-2xl text-white">Clínica Veterinaria</h3>
                        <p>{pet.chip.veterinaria}</p>
                    </li>
                    <li className="mb-5">
                        <h3 className="font-semibold text-2xl text-white">Observaciones</h3>
                        <p className="leading-8">{pet.chip.information}</p>
                    </li>
                </ul>
            </section>
            <section className="mb-5 flex flex-col items-center">
                <h3 className="font-bold text-2xl text-white mb-5">Contacta con mis dueños</h3>
                <div className="flex bg-white rounded-full p-2 w-56 h-9 cursor-pointer justify-around shadow-md shadow-black">
                    <img src="/phone.png" alt="" className="w-6 h-6 mx-2" />
                    <span className="font-semibold text-sm mr-4">Llamar por teléfono</span>
                </div>
            </section>
            <section className="my-10 w-screen flex justify-center">
                <form onSubmit={(e)=>onSubmit(e)} className="flex flex-col items-center w-11/12 sm:w-80">
                    <h3 className="font-bold text-2xl text-white mb-5">O envíales un mensaje</h3>
                    <label htmlFor="phone" className="text-white font-semibold text-base text-left w-full relative left-5">Tu teléfono de contacto</label>
                    <input 
                        type="tel" 
                        className="outline-none rounded-full w-72 h-8 p-2 mb-5" 
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                    />
                    <label htmlFor="message" className="text-white font-semibold text-base text-left w-full relative left-5">¿Dónde me has encontrado?</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className="resize-none outline-none rounded-xl p-2 w-72"
                        ref={textareaRef}
                        value={message}
                        onChange={handleTextChange}
                        ></textarea>
                        <button type="submit" className="bg-white p-2 rounded-full w-36 text-sm font-semibold mt-5 shadow-md shadow-black">Enviar mensaje</button>
                </form>
            </section>
            <footer className="flex w-screen justify-center items-center h-20 text-white text-sm">
                <p>Powered by Whopaws.com</p>
            </footer>
        </div>
    )
}