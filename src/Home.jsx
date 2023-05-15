import Menu from "./layout/Menu";



function Home() {
    return (
        <div className="container-fluid">
            <div className="recherche ">
                <Menu />
                <div className="row recherche2"><p> Bienvenue sur la page des Recettes!</p>
                    <p> Vous souhaitez vous faire un bon petit coktail? c'est le bon endroit!</p>

                </div>

            </div>
            <div className="empty"></div>
            <div className=" row coktail align ">

            </div>

        </div>)
}

export default Home