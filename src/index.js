
const usePartition = (name, prefix = "store://", dataFolder = "data/") => {
	return {
		prefix: prefix + dataFolder,
		get: (filename) => {
			return prefix + dataFolder + name + "/" + filename;
		}
	};
}
module.exports = {
	usePartition
}
