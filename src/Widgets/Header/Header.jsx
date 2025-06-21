import React from 'react'
import LogoImage from "./trophy.png"
import "./header.css"

export default function Header({ page, setPage }) {

    return (
        <header>
            <img src={LogoImage} onClick={() => setPage("main")} alt="" />
            <nav>
                <button
                    className={page == "weather" ? "active" : "nonactive"}
                    onClick={() => setPage("weather")}
                >Погода</button>
                <button
                    onClick={() => setPage("todo")}
                    className={page == "todo" ? "active" : "nonactive"}
                >Список задач</button>
            </nav>
        </header>
    )
}
