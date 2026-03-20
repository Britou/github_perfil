import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente foi iniciado');

        return () => {
            console.log('O componente foi finalizado');
        }
    }, [])

    useEffect(() => {
        console.log('O nome mudou');
    }, [nome])

    useEffect(() => {
        console.log('O Estado Mudou');
    }, [materiaA, materiaB, materiaC])
    
    const alteraNome = (evento) => {
       // setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        

        if (media >= 7) {
            return <p>Olá {nome}, vocé foi Aprovado</p>
        } else {
            return <p>Olá {nome}, vocé foi Reprovado</p>
        }
    }

    return (
        <form>
            {[1, 2, 3, 4, 5].map((item => <li key={teste}>{item}</li>))}

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario