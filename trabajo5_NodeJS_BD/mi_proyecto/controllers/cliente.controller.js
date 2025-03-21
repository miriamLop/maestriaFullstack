const { Cliente } = require('../models');

exports.obtenerClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
};

exports.crearCliente = async (req, res) => {
    console.log(req.body);
    console.log("Headers recibidos:", req.headers);
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
};

exports.buscarClienteId = async (req, res) => {
    //const cliente=await Cliente.find(req.params.id);

    const { id } = req.params;
    try {
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Objeto no encontrado' });
        }
        res.json(cliente);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });

    }
};

exports.actualizarCliente = async (req, res) => {
    const { id } = req.params;
    try {

        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).json({ mensaje: "Cliente no encontrado" });
        }
        // Actualizar los datos del cliente
        //  cliente=await Cliente.update(req.body);
        const [filasActualizadas] = await Cliente.update({ email: 'nuevo@example.com' }, { where: { id: id } });
        console.log('numero de registros actualizados: ', filasActualizadas);

        const cliente2 = await Cliente.findByPk(id);

        res.json({ mensaje: "Cliente actualizado correctamente", cliente2 });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' });

    }

};
exports.eliminarCliente = async (req, res) => {

};