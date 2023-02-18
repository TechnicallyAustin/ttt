const header = (() => {
    const create = () => {
            const newHeader = document.body.appendChild(document.createElement("header"))
            newHeader.setAttribute("class", "header bg-primary container-fluid")
            this.head = newHeader
            return this.head
        };
    const nav = () => {
        console.log(this.head)
        const navbar = this.head.appendChild(document.createElement("nav"))
        navbar.setAttribute("class", "nav")
        this.nav = navbar
        return this.nav
    };
    const title = () => {
        const navTitle = this.nav.appendChild(document.createElement("h1"))
        navTitle.setAttribute("class", "title");
        navTitle.textContent = "Tic Tac Toe"
    };
    return {create, nav, title}
})(); // creates the header element. creates a nav element. creates a page title.

const main = (() => {
    const create = () => {
        const newMain = document.body.appendChild(document.createElement("main"))
        newMain.setAttribute("class", "main bg-dark w-100 d-flex")
        this.main = newMain
        return this.main
    };
    const aside = () => {
        const newAside = this.main.appendChild(document.createElement("aside"))
        newAside.setAttribute("class", "aside bg-warning d-flex flex-column justify-content-around align-self-start align-items-center col-3 h-50 ")
        this.aside = newAside
        return this.aside
    };
    const start = () => {
        const button = this.aside.appendChild(document.createElement("button"))
        button.setAttribute("class", "start-button w-50 h-25")
        button.setAttribute("id", "Start-button")
        button.setAttribute("value", "Start")
        button.textContent = "Start"

        const name = this.aside.appendChild(document.createElement("div"));
        name.setAttribute("class", "name-form w-75 h-25")
    };
    const section = () => {
        const game = this.main.appendChild(document.createElement("section"))
        game.setAttribute("class", "game bg-secondary col-9")
    };

    return {create, aside, start, section}
})(); // creates a main element. creates a section element, creates an aside element. creates a start button.
const footer = (() => {
    const create = () => {
        const newFooter = document.body.appendChild(document.createElement("footer"));
        newFooter.setAttribute(
          "class",
          "footer bg-primary container-fluid"
        );
        this.footer = newFooter
    };

    const info = () => {
        const info = this.footer.appendChild(document.createElement("p"));
        info.setAttribute("class", "footer-info")
        info.textContent = "Tecnically Austin"
    };

    return {create, info}
})(); // creates the footer. creates footer text

// creates header elements
header.create()
header.nav()
header.title()

// creates main elements
main.create()
main.aside()
main.start()
main.section()

// creates footer elements
footer.create()
footer.info()