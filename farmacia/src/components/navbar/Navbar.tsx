import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-linear-to-r/srgb from-teal-500 to-teal-700
                            text-white font-raleway'>

                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">RemédiAqui</Link>

                    <div className='flex gap-4'>
                        Categorias
                        Cadastrar categoria
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar