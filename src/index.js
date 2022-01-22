const baseUrl = "https://server.duinocoin.com/";

async function getServerData() {
    return new Promise((resolve, reject) => {
        try {
            fetch(baseUrl + 'api.json').then(response => response.json()).then(response => {
                resolve(response);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function getAllDucoPrice() {
    return new Promise((resolve, reject) => {
        try {
            getServerData().then(response => {
                let data = {};
                data["Duco JustSwap price"] = response["Duco JustSwap price"];
                data["Duco Node-S price"] = response["Duco Node-S price"];
                data["Duco PancakeSwap price"] = response["Duco PancakeSwap price"];
                data["Duco SushiSwap price"] = response["Duco SushiSwap price"];
                data["Duco price"] = response["Duco price"];
                data["Duco price BCH"] = response["Duco price BCH"];
                data["Duco price NANO"] = response["Duco price NANO"];
                data["Duco price TRX"] = response["Duco price TRX"];
                data["Duco price XMG"] = response["Duco price XMG"];
                resolve(data);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function getDucoPrice() {
    return new Promise((resolve, reject) => {
        try {
            getAllDucoPrice().then(response => {
                resolve(response["Duco price"]);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function getRichestMiners() {
    return new Promise((resolve, reject) => {
        try {
            getServerData().then(response => {
                resolve(response["Top 10 richest miners"]);
            });
        } catch (err) {
            reject(err);
        }
    });
}

async function getKolkaData() {
    return new Promise((resolve, reject) => {
        try {
            getServerData().then(response => {
                resolve(response["Kolka"]);
            });
        } catch (err) {
            reject(err);
        }
    });
}

class DucoUser {
    constructor(username) {
        this.name = username;
    }

    getData() {
        return new Promise((resolve, reject) => {
            try {
                fetch(baseUrl + 'users/' + this.name).then(response => response.json()).then(response => {
                    resolve(response);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    isVerified() {
        return new Promise((resolve, reject) => {
            try {
                this.getData().then(response => {
                    let verify = response["result"].balance.verified;
                    if (verify == "yes") resolve(true);
                    else resolve(false);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    getDucoAmount() {
        return new Promise((resolve, reject) => {
            try {
                this.getData().then(response => {
                    resolve(response["result"].balance.balance);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    getMiners() {
        return new Promise((resolve, reject) => {
            try {
                this.getData().then(response => {
                    resolve(response["result"].miners);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    getTransactions() {
        return new Promise((resolve, reject) => {
            try {
                this.getData().then(response => {
                    resolve(response["result"].transactions);
                });
            } catch (err) {
                reject(err);
            }
        });
    }
}