import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {
    const [ numeroAnterior, setNumeroAnterior ] = useState('0');
    const [ numero, setNumero ] = useState('12');
    const ultimaOperacion = useRef<Operadores>()
    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }
    const armarNumero = (numeroTexto:string) => {

        if(numero.includes('.') && numeroTexto === '.' ) { return; }
        if(numero.startsWith('0') || numero.startsWith('-0')) {
            //Punto decimal
            if(numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                //Evaluar si es un cero y tiene un punto
            } else if(numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                //Evaluar si es diferente a cero y no tiene punto
            } else if(numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
                //Evitar 000.0
            } else if(numeroTexto === '0' && !numero.includes('.')) {
                setNumero( numero );
            } else {
                setNumero(numero + numeroTexto);
            }
            
        } else {
            setNumero( numero + numeroTexto);
        }

    }
    const positivoNegativo = () => {
        if( numero.includes('-')) {
             setNumero( numero.replace('-','') );
        } else {
            setNumero('-'+numero); 
        }
    }
    const btnDelete = () => {
        if ( numero.length === 1 || numero.length === 2 && numero.startsWith('-')) {
            setNumero('0')
        } else {
            setNumero(numero.slice(0,-1))
            
        }
    }
    const cambiarNumAnterior = () => {
        if(numero === '0') { return; }
        if(numeroAnterior !== '0') {
            calcular()
            return;
        }
        if(numero.endsWith('.')) {
            setNumeroAnterior( numero.slice(0,-1));
        }else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }
    const btnDividir = () => {
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.dividir
    }
    const btnMultiplicar = () => {
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }
    const btnRestar = () => {
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.restar
    }
    const btnSumar = () => {
        cambiarNumAnterior()
        ultimaOperacion.current = Operadores.sumar
    }
    const calcular = () => {
        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);
        if(num2 === 0) { return; }
        switch ( ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${ num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${ num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${ num1 * num2}`);
                break;
            case Operadores.dividir:
                if(num1 === 0) { return }
                setNumero(`${ num2 / num1}`);
                break;
        }
            setNumeroAnterior('0')
    }
    
    return {
        numero,
        numeroAnterior,
        btnDelete,
        btnDividir,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        calcular,
        limpiar,
        positivoNegativo,
        armarNumero,
    }
};
