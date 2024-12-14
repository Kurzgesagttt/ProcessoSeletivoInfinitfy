using sap.Aviation as my from '../../db/schema';

annotate my.Aeronaves with @UI : { 
    SelectionFields  : [
        marca,
        ds_modelo,
        nr_serie
    ],
    LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : marca,
            Label : 'Marca'
        },
        {
            $Type : 'UI.DataField',
            Value : ds_modelo,
            Label : 'Modelo'
        },
        {
            $Type : 'UI.DataField',
            Value : nr_serie,
            Label : 'Número de Série'
        },
        {
            $Type : 'UI.DataField',
            Value : cd_categoria,
            Label : 'Categoria'
        }
    ],
    HeaderInfo  : {
        $Type : 'UI.HeaderInfoType',
        TypeName : 'Aeronave',
        TypeNamePlural : 'Aeronaves',
        Title : {Value: marca }
    }
};

annotate my.Aeroportos with @UI : { 
    SelectionFields  : [
        icao,
        nome,
        cidade
    ],
    LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : icao,
            Label : 'ICAO'
        },
        {
            $Type : 'UI.DataField',
            Value : nome,
            Label : 'Nome'
        },
        {
            $Type : 'UI.DataField',
            Value : cidade,
            Label : 'Cidade'
        },
        {
            $Type : 'UI.DataField',
            Value : estado,
            Label : 'Estado'
        }
    ],
    HeaderInfo  : {
        $Type : 'UI.HeaderInfoType',
        TypeName : 'Aeroporto',
        TypeNamePlural : 'Aeroportos',
        Title : {Value: nome }
    }
};

annotate my.Companhias with @UI : { 
    SelectionFields  : [
        razao_social,
        icao,
        iata
    ],
    LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : razao_social,
            Label : 'Razão Social'
        },
        {
            $Type : 'UI.DataField',
            Value : icao,
            Label : 'ICAO'
        },
        {
            $Type : 'UI.DataField',
            Value : iata,
            Label : 'IATA'
        },
        {
            $Type : 'UI.DataField',
            Value : cnpj,
            Label : 'CNPJ'
        }
    ],
    HeaderInfo  : {
        $Type : 'UI.HeaderInfoType',
        TypeName : 'Companhia',
        TypeNamePlural : 'Companhias',
        Title : {Value: razao_social }
    }
};

