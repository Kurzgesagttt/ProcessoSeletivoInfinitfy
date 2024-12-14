** Repositorio referente ao processo seletivo da Inifinitify.**
Candidato: Lucas Moreno Rodrigues.

# Serviço SAP CAP - Gerenciamento de Passageiros

Este repositório contém um serviço SAP Cloud Application Programming (CAP) para gerenciamento de passageiros. O serviço permite operações de **CRUD** para entidades como Passageiros, Aeronaves, Aeroportos, etc. Este README descreve como testar as funcionalidades de inserção e atualização de passageiros.

## Funcionalidades

- **Inserir Passageiro** (`CREATE`): Adiciona um novo passageiro à base de dados.
- **Atualizar Passageiro** (`UPDATE`): Atualiza as informações de um passageiro existente.
- **Deletar Passageiro** (`DELETE`): Remove um passageiro da base de dados.
- **Consultar Passageiros** (`READ`): Busca informações de passageiros com base em filtros.


```bash
git clone https://github.com/seu_usuario/seu_repositorio.git

teste Post:
{
    "cpf": "12345678901",
    "nome": "João Silva",
    "email": "joao.silva@example.com",
    "telefone": "11987654321",
    "data_de_nascimento": "1990-01-01",
    "endereco": "Rua Exemplo, 123"
}

teste put:
{
    "id_passageiro": 1,
    "cpf": "12345678901",
    "nome": "João Silva Atualizado",
    "email": "joao.silva.atualizado@example.com",
    "telefone": "11987654321",
    "data_de_nascimento": "1990-01-01",
    "endereco": "Rua Exemplo, 456"
}

teste delete:
{
    "id_passageiro": "122b3c4f-5e6f-7g8h-9i0j-1d3l3d4n56p"
}