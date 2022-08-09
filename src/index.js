
const usePartition = (name, prefix = "store://", dataFolder = "data/") => {
	scene.loadPartition(name);
	return {
		name,
		prefix: prefix + dataFolder + "/",
		get: (filename) => {
			return prefix + dataFolder + name + "/" + filename;
		}
	};
}
module.exports = {
	usePartition
}
