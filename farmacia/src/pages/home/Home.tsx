function Home() {
    return (
        <>
            <div className="bg-teal-100 flex justify-center font-raleway text-shadow-lg">
                <div className='container grid grid-cols-2 text-teal-600'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            RemédiAqui
                        </h2>
                        <p className='text-xl'>
                            O clique que cura!
                        </p>
                        <div className="flex justify-center ">
                            <img
                                src="https://ik.imagekit.io/zddqh4rhi/ilustracao-plana-do-dia-do-medico-nacional-com-medico-e-caixa-de-primeiros-socorros.png?updatedAt=1754405822422"
                                alt="Imagem Página Home"
                                className='w-2/3'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home