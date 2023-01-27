import { Link } from "react-router-dom"

const CharactesByHero = ({ alter_ego, characters }) => {
    if (alter_ego === characters) return (<></>)

    return <p>{characters}</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) => {


    const heroImageUrl = `/assets/heroes/${id}.jpg`


    // const charactesByHero = (<p>{characters}</p>)
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">


                <div className="row no-gutters" >
                    <div className="col-4">
                        <img
                            className="card-img"
                            src={heroImageUrl}
                            alt={superhero}
                        />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            <CharactesByHero alter_ego={alter_ego} characters={characters} />
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>

                            <Link
                                className="text-decoration-none alert-info"
                                to={`/hero/${id}`}
                            >
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
