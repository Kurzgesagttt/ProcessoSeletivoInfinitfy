using sap.Aviation as my from '../db/schema';

service AviationService @(path: 'aviation') {
    entity Aeronaves as projection on my.Aeronaves;
    entity Aeroportos as projection on my.Aeroportos;
    entity Companhias as projection on my.Companhias;
    entity Conexoes as projection on my.Conexoes;
    entity HorariosVoo as projection on my.HorariosVoo;
    entity Passageiros as projection on my.Passageiros;
    entity PropriedadesAeronaves as projection on my.PropriedadesAeronaves;
    entity ReservasPassagem as projection on my.ReservasPassagem;
}
