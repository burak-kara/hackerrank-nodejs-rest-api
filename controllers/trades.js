const Trade = require("../models/trades");

const getAll = async (req, res, next) => {
	const trades = await Trade.findAll();
	res.status(200).json(trades);
}

const getOne = async (req, res, next) => {
	const trade = await Trade.findByPk(req.params.id);
	if (trade) {
		res.status(200).json(trade);
	} else {
		res.status(404).send("ID not found");
	}
}

const addOne = async (req, res, next) => {
	const newTrade = await Trade.create(req.body);
	res.status(201).json(newTrade);
}

const notAllowed = (req, res, next) => {
	res.status(405).send("Method Not Allowed");
}

module.exports = {addOne, getAll,getOne, notAllowed};
