const Packages = require('./packages.model');

const AddProduct = async (req, res) => {
    try {
        const pkg = new Packages(req.body);
        await pkg.save();
        return res.status(200).send({
            status: '200',
            message: 'Package created successfully',
            data: pkg,
        });
    } catch (error) {
        return res.status(500).send({
            status: '500',
            message: 'Server Error',
        });
    }
};

const GetAllProducts = async (req, res) => {
    try {
        // const { listingType } = req.query;
        const pkg = await Packages.find().sort({ price: -1 });
        //   await pkg.save();
        return res.status(200).send({
            status: '200',
            message: 'Package found successfully',
            data: pkg,
        });
    } catch (error) {
        return res.status(500).send({
            status: '500',
            message: 'Server Error',
        });
    }
};

const PackagesContoller = {
    AddProduct,
    GetAllProducts,
};
module.exports = { PackagesContoller };

