const cds = require('@sap/cds');
const { Aeronaves, Aeroportos, Companhias, Conexoes, HorariosVoo, Passageiros, PropriedadesAeronaves, ReservasPassagem } = cds.entities('sap.Aviation');

module.exports = (srv) => {

    // Função para validar CPF (apenas verificando 11 dígitos)
    function validarCPF(cpf) {
        // Remover caracteres não numéricos
        cpf = cpf.replace(/[^\d]+/g, '');
        
        // Verificar se o CPF tem 11 dígitos
        if (cpf.length !== 11) {
            console.log("Erro, cpf deve ter 11 digitos");
            throw new Error('CPF deve ter exatamente 11 dígitos.');
            
        }
    }

    // CRUD para Passageiros
    srv.on("READ", 'GetPassageiros', async req => {
        try {
            let filtro = req.data;
            const dados = await SELECT.from(Passageiros).where(filtro);
            return dados;
        } catch (err) {
            console.error("Erro ao ler dados dos Passageiros: " + err);
            throw err;
        }
    });

    srv.on("CREATE", 'InsertPassageiros', async req => {
        try {
            const { cpf, email, telefone } = req.data;

            // Verificar CPF
            validarCPF(cpf);

            // Verificar unicidade de CPF, e-mail e telefone
            const existingPassageiro = await SELECT.one.from(Passageiros).where({ cpf });
            if (existingPassageiro) {
                throw new Error('CPF já cadastrado.');
            }

            const existingEmail = await SELECT.one.from(Passageiros).where({ email });
            if (existingEmail) {
                throw new Error('E-mail já cadastrado.');
            }

            const existingTelefone = await SELECT.one.from(Passageiros).where({ telefone });
            if (existingTelefone) {
                throw new Error('Telefone já cadastrado.');
            }

            const result = await cds.transaction(req).run(
                INSERT.into(Passageiros).entries(req.data)
            );
            return result.length > 0 ? { message: "Passageiro inserido com sucesso" } : { message: "Erro ao inserir passageiro" };
        } catch (err) {
            console.error("Erro ao inserir Passageiro:", err);
            throw err;
        }
    });

    srv.on("UPDATE", 'UpdatePassageiros', async req => {
        try {
            const { cpf, email, telefone } = req.data;

            // Verificar CPF
            validarCPF(cpf);

            // Verificar unicidade de CPF, e-mail e telefone
            const existingPassageiro = await SELECT.one.from(Passageiros).where({ cpf });
            if (existingPassageiro && existingPassageiro.id_passageiro !== req.data.id_passageiro) {
                throw new Error('CPF já cadastrado.');
            }

            const existingEmail = await SELECT.one.from(Passageiros).where({ email });
            if (existingEmail && existingEmail.id_passageiro !== req.data.id_passageiro) {
                throw new Error('E-mail já cadastrado.');
            }

            const existingTelefone = await SELECT.one.from(Passageiros).where({ telefone });
            if (existingTelefone && existingTelefone.id_passageiro !== req.data.id_passageiro) {
                throw new Error('Telefone já cadastrado.');
            }

            const result = await cds.transaction(req).run(
                UPDATE(Passageiros).set(req.data).where({ id_passageiro: req.data.id_passageiro })
            );
            return result > 0 ? { message: "Passageiro atualizado com sucesso" } : { message: "Passageiro não encontrado" };
        } catch (err) {
            console.error("Erro ao atualizar Passageiro:", err);
            throw err;
        }
    });

    srv.on("DELETE", 'DeletePassageiros', async req => {
        try {
            // A requisição contém o identificador (id_passageiro) para a exclusão
            const { id_passageiro } = req.data.id_passageiro;
            
            if (!id_passageiro) {
                throw new Error("ID do passageiro é obrigatório para exclusão");
            }
    
            // Executar a exclusão no banco de dados
            const result = await cds.transaction(req).run(
                DELETE.from(Passageiros).where({ id_passageiro })
            );
            
            if (result > 0) {
                return { message: "Passageiro deletado com sucesso" };
            } else {
                return { message: "Passageiro não encontrado" };
            }
        } catch (err) {
            console.error("Erro ao deletar Passageiro:", err);
            throw err;
        }
    });
    

    // CRUD para Aeronaves
    srv.on("READ", 'GetAeronaves', async req => {
        try {
            let filtro = req.data;
            const dados = await SELECT.from(Aeronaves).where(filtro);
            return dados;
        } catch (err) {
            console.error("Erro ao ler dados das Aeronaves: " + err);
            throw err;
        }
    });

    srv.on("CREATE", 'InsertAeronaves', async req => {
        try {
            const result = await cds.transaction(req).run(
                INSERT.into(Aeronaves).entries(req.data)
            );
            return result.length > 0 ? { message: "Aeronave inserida com sucesso" } : { message: "Erro ao inserir aeronave" };
        } catch (err) {
            console.error("Erro ao inserir Aeronaves:", err);
            throw err;
        }
    });

    srv.on("UPDATE", 'UpdateAeronaves', async req => {
        try {
            const result = await cds.transaction(req).run(
                UPDATE(Aeronaves).set(req.data).where({ id_aeronave: req.data.id_aeronave })
            );
            return result > 0 ? { message: "Aeronave atualizada com sucesso" } : { message: "Aeronave não encontrada" };
        } catch (err) {
            console.error("Erro ao atualizar Aeronave:", err);
            throw err;
        }
    });

    srv.on("DELETE", 'DeleteAeronaves', async req => {
        try {
            const result = await cds.transaction(req).run(
                DELETE.from(Aeronaves).where({ id_aeronave: req.data.id_aeronave })
            );
            return result > 0 ? { message: "Aeronave deletada com sucesso" } : { message: "Aeronave não encontrada" };
        } catch (err) {
            console.error("Erro ao deletar Aeronave:", err);
            throw err;
        }
    });

    // CRUD para Aeroportos
    srv.on("READ", 'GetAeroportos', async req => {
        try {
            let filtro = req.data;
            const dados = await SELECT.from(Aeroportos).where(filtro);
            return dados;
        } catch (err) {
            console.error("Erro ao ler dados dos Aeroportos: " + err);
            throw err;
        }
    });

    srv.on("CREATE", 'InsertAeroportos', async req => {
        try {
            const result = await cds.transaction(req).run(
                INSERT.into(Aeroportos).entries(req.data)
            );
            return result.length > 0 ? { message: "Aeroporto inserido com sucesso" } : { message: "Erro ao inserir aeroporto" };
        } catch (err) {
            console.error("Erro ao inserir Aeroportos:", err);
            throw err;
        }
    });

    srv.on("UPDATE", 'UpdateAeroportos', async req => {
        try {
            const result = await cds.transaction(req).run(
                UPDATE(Aeroportos).set(req.data).where({ id_aeroporto: req.data.id_aeroporto })
            );
            return result > 0 ? { message: "Aeroporto atualizado com sucesso" } : { message: "Aeroporto não encontrado" };
        } catch (err) {
            console.error("Erro ao atualizar Aeroporto:", err);
            throw err;
        }
    });

    srv.on("DELETE", 'DeleteAeroportos', async req => {
        try {
            const result = await cds.transaction(req).run(
                DELETE.from(Aeroportos).where({ id_aeroporto: req.data.id_aeroporto })
            );
            return result > 0 ? { message: "Aeroporto deletado com sucesso" } : { message: "Aeroporto não encontrado" };
        } catch (err) {
            console.error("Erro ao deletar Aeroporto:", err);
            throw err;
        }
    });

    // Continue para as outras entidades conforme necessário...

};
