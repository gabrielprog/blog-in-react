import react from 'react'

import Logo from '../../assets/image/logo.svg'

import './style.css'

export default function Articles(props) {
    return (
        <>
            <div className="feed__card">

                <div className="card__image">
                </div>

                <div className="card__content">
                    <div className="content">
                        <span 
                        className="content__categorie">{props.categorie}</span>

                        <h2 className="content__title">{props.title}</h2>

                        <span className="content__descript">{props.children}</span>
                    </div>

                    <div className="content__autor">
                        <img src={props.avatar || Logo} alt="Autor" />
                        
                        <div className="autor__information">
                            <span>{props.author}</span>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}