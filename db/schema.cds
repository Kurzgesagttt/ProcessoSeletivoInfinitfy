namespace sap.Aviation;

entity Aeronaves {
    key id_aeronave: UUID;
    marca: String;
    ds_modelo: String;
    nr_serie: String;
    cd_categoria: String;
    cd_tipo: String;
    nm_fabricante: String;
    cd_cls: String;
    nr_pmd: Decimal(18, 2);
    cd_tipo_icao: String;
    nr_assentos_executivo: Integer;
    nr_assentos_economico: Integer;
    nr_assentos_max: Integer;
    nr_ano_fabricacao: Integer;
    tp_motor: String;
    qt_motor: Integer;
    tp_pouso: String;
}

entity Aeroportos {
    key id_aeroporto: UUID;
    icao: String;
    nome: String;
    cidade: String;
    estado: String;
    pais: String;
}

entity Companhias {
    key id_companhia: UUID;
    icao: String;
    razao_social: String;
    iata: String;
    representante_legal: String;
    pais_sede: String;
    cnpj: String;
    endereco: String;
    cidade: String;
    uf: String;
    cep: String;
    telefone: String;
    email: String;
    decisao_operacional: String;
    atividades_areas: String;
    data_decisao_operacao: Date;
    validade_operacional: Date;
}

entity Conexoes {
    key id_conexao: UUID;
    id_aeroporto_origem: UUID;
    id_aeroporto_destino: UUID;

    aeroporto_origem: Association to Aeroportos on aeroporto_origem.id_aeroporto = id_aeroporto_origem;
    aeroporto_destino: Association to Aeroportos on aeroporto_destino.id_aeroporto = id_aeroporto_destino;
}

entity HorariosVoo {
    key id_horario_voo: UUID;
    id_companhia: UUID; // Associação manual ao UUID de Companhias
    id_conexao: UUID;   // Associação manual ao UUID de Conexoes
    id_aeronave: UUID;  // Associação manual ao UUID de Aeronaves
    nr_assentos_executivo: Integer; // Pode ser null
    nr_assentos_economico: Integer;
    capacidade_total: Integer;
    data: String; // Data como texto no formato DD/MM/YYYY
    partida_prevista: String; // Data e hora como texto no formato DD/MM/YYYY HH:mm
    chegada_prevista: String; // Data e hora como texto no formato DD/MM/YYYY HH:mm
    partida_real: String; // Pode ser null, formato DD/MM/YYYY HH:mm
    chegada_real: String; // Pode ser null, formato DD/MM/YYYY HH:mm
    situacao_voo: String(30);
    situacao_partida: String(30);
    situacao_chegada: String(30);
}

entity Passageiros {
    key id_passageiro: UUID;
    cpf: String;
    nome: String;
    email: String;
    telefone: String;
    data_de_nascimento: Date;
    endereco: String;
}

entity PropriedadesAeronaves {
    key id_propriedade_aeronave: UUID;
    id_companhia: UUID;
    id_aeronave: UUID;
    proprietario: String(255);
    sg_uf: String(2);
    cpf_cnpj: String(20);
    nm_operador: String(255);
    nr_cert_matricula: String(50);
    dt_validade_cva: String(50);
    dt_validade_ca: String(50);
    dt_canc: String(50);
    cd_interdicao: String(1);
    ds_gravame: String(255);
    dt_matricula: String(50);
}

entity ReservasPassagem {
    key id_reserva: UUID;
    id_passageiro: UUID;
    id_horario_voo: UUID;
    assento: String;
    classe: String;
    status: String;
    data_reserva: Date;
    preco: Decimal(18, 2);
}