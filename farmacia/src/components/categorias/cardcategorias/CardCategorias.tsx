import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriasProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between font-raleway border-4 border-teal-100 border-b-teal-600'>
            <header className='py-2 px-6 bg-linear-to-r/srgb from-teal-500 to-teal-700 text-white text-2xl'>
                {categoria.nome}
            </header>
            <p className='p-8 text-3xl bg-slate-100 h-full'>{categoria.descricao}</p>

            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className='w-full bg-slate-200 hover:bg-teal-700 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
		flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategorias