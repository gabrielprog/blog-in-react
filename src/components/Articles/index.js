import react from 'react'

import './style.css'

import Logo from '../../assets/image/logo.svg'

export default function Articles() {
    return (
        <>
            <h1>Articles</h1>

            <div className="feed">
                <div className="feed__card">

                    <div className="card__image">
                    </div>

                    <div className="card__content">
                        <div className="content">
                            <span className="content__categorie">Tecnologia</span>

                            <h2 className="content__title">Titulo aqui de exemplo</h2>

                            <span className="content__descript">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit alias esse inventore perspiciatis dolorem modi! Labore doloribus odio at eaque reiciendis, aliquam aliquid adipisci voluptatum, enim accusantium, non ipsum!</span>
                        </div>

                        <div className="content__autor">
                            <img src={Logo} alt="Autor" />
                            
                            <div className="autor__information">
                                <span>Nome de fulano</span>
                            </div>
                            
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}