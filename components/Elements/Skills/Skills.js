import { useEffect, useState } from "react"
import Ability from "./SkillsOptions/Ability"
import Technologies from "./SkillsOptions/Technologies"




export default function Skills(){
    const[tabCurrent, setTabCurrent] = useState("habilidade")


    const handleNextSkill = (skillCurrent) =>{
        setTabCurrent(skillCurrent)
    }

   useEffect(() =>{
       const handleTeste = (skill) =>{
           setTabCurrent(skill)
       }
   }, [])
    

    return(
        <section className="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="skills__title">Conhecimentos</h1>
                        <p className="skills__subtitle">Abaixo estão minhas habilidades como programador front-end, e com quais tecnologias trabalho.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 mt-80">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="skills__btn-box">
                                        <button onClick={() => setTabCurrent("habilidade")}  className={tabCurrent === "habilidade" ? "actived" : undefined}>Habilidades</button>
                                        <button onClick={() => setTabCurrent("tecnologias")} className={tabCurrent === "tecnologias" ? "actived" : undefined}>Tecnologias</button>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    {tabCurrent === "habilidade" && <Ability/> }
                                    {tabCurrent === "tecnologias" &&  <Technologies/> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}