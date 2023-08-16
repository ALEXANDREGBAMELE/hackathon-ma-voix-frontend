export default function Header() {
    return (
      <div class="header">
        <header>
                <div class="img_logo">
                    <img src="./05.png" alt="logo"/>
                </div>


                    <form action="#" class="search_bar">
                        <input type="search" placeholder="Recherche" class="input_search"></input>
                    </form>
                    

                    

                <nav class="icons">
                        <a href="#">yacou</a>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </nav>

        </header>
        <div class="header_2">
            <div class="title">
                <h3>Rubriques</h3>
            </div>
            <nav class="links">
                <a href="index.html" class="all">Accueil</a>
                <a href="Pages/candidat.html" class="all">Candidats</a>
                <a href="#" class="all">Votes</a>
                <a href="#" class="all">Resultats</a>
            </nav>
            <div id="menu_bar" class="fa fa-bars" aria-hidden="true"></div>
        </div>
    </div>
)
}
