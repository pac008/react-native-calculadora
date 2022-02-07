import React from 'react';
import { Text, View } from 'react-native';
import { BotonCal } from '../components/BotonCal';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
    const { numero,
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
    } = useCalculadora()
  return (
    <View style={styles.calculadoraContainer}>
        {
            ( numeroAnterior !== '0') && (
                <Text style={ styles.resultadoPequeno }>{numeroAnterior}</Text>
            )
        }
        <Text style={ styles.resultado }
              numberOfLines={1}
              adjustsFontSizeToFit>
            { numero }
        </Text>

        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCal texto="C" color="#9b9b9b" accion={ limpiar }/>
            <BotonCal texto="+/-" color="#9b9b9b" accion={positivoNegativo}/>
            <BotonCal texto="del" color="#9b9b9b" accion={btnDelete}/>
            <BotonCal texto="/" color="#ff9427" accion={btnDividir}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCal texto="7" accion={armarNumero}/>
            <BotonCal texto="8" accion={armarNumero}/>
            <BotonCal texto="9" accion={armarNumero}/>
            <BotonCal texto="X" color="#ff9427" accion={btnMultiplicar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCal texto="4" accion={armarNumero}/>
            <BotonCal texto="5" accion={armarNumero}/>
            <BotonCal texto="6" accion={armarNumero}/>
            <BotonCal texto="-" color="#ff9427" accion={btnRestar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCal texto="1" accion={armarNumero}/>
            <BotonCal texto="2" accion={armarNumero}/>
            <BotonCal texto="3" accion={armarNumero}/>
            <BotonCal texto="+" color="#ff9427" accion={btnSumar}/>
        </View>
        {/* Fila de botones */}
        <View style={styles.fila}>
            <BotonCal texto="0" accion={armarNumero} ancho/>
            <BotonCal texto="." accion={armarNumero}/>
            <BotonCal texto="=" color="#ff9427" accion={calcular} />
        </View>

 {/* 2d2d2d ff9427 */}


    </View>
    );
};
