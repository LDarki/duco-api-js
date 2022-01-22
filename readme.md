# **NOTICE:** For now, this documentation is useless.

To build your own Duino-Coin apps we've created Duino-Coin API for JavaScript.

### Main Functions

This gets the https://server.duinocoin.com/api.json data as Json

and you can use it wothever you want

Examples:

```js
    // Gets the api.json data
    let serverData = await getServerData();
    console.log(serverData); 
    /*
        Literally the api.json
    */

    // Gets the duco prices
    let allDuco = await getAllDucoPrice();
    console.table(allDuco);  
    /*
        {
            Duco JustSwap price: 0.00021003,
            Duco Node-S price: 0.000021,
            Duco PancakeSwap price: 0.000322114,
            Duco SushiSwap price: 0.000650466,
            Duco price: 0.00072468,
            Duco price BCH: 0.00001301,
            Duco price NANO: 0.00000714,
            Duco price TRX: 0.00005628,
            Duco price XMG: 0.00070314
        }
    */

    // Gets the duco price
    let ducoPrice = await getDucoPrice();
    console.log(ducoPrice);  
    /*
        0.00072468
    */

    // Gets duco Richest Miners [array]
    let richestMiners = await getRichestMiners();
    console.table(richestMiners);  
    /*
    [
        0: "6601663.375126494 DUCO - bscDUCO"
        1: "874332.20759779 DUCO - miningvir"
        2: "533552.6108694915 DUCO - coinexchange"
        3: "533219.1579804028 DUCO - bimbasimba94"
        4: "532488.220632083 DUCO - NodeSBroker"
        5: "397162.15067505674 DUCO - James_themac"
        6: "206860.055855694 DUCO - maticDUCO"
        7: "190583.057104081 DUCO - celoDUCO"
        8: "170241.299416613 DUCO - Bacman"
        9: "150200.0025039652 DUCO - RNGesus"
    ]
    */

    // Gets Kolka Data
    let KolkaData = await getKolkaData();
    console.log(KolkaData); 
    /*
        {
            Banned: 773,
            Jailed: 27
        }
    */
```


### Duco User Class

This gets the https://server.duinocoin.com/users/(username) data as Json

and you can use it wothever you want

Examples:
```js
    // Call the class
    let ducoUser = new DucoUser("LDarki");

    // Get the user Data
    ducoUser.getData().then(data => {
        console.log(data);
    });
    /*
        Literally https://server.duinocoin.com/users/LDarki
    */

    // Get the duco amount of user
    ducoUser.getDucoAmount().then(data => {
        console.log(data);
    });
    /*
        1380.3456634856539
    */

    /*
        Is the user verified?
        returns true or false
    */
    ducoUser.isVerified().then(data => {
        console.log(data);
    });
    /*
        true
    */

    // Get user Miners
    ducoUser.getMiners().then(data => {
        console.table(data);
    });
    /*
        [
            {
                "accepted":219223,
                "algorithm":"DUCO-S1",
                "diff":4,
                "hashrate":227.8,
                "identifier":"None",
                "ki":2,
                "pool":"42-pool",
                "rejected":0,
                "sharetime":1.221,
                "software":"Official AVR Miner 3.0",
                "threadid":"9c9ee0e7",
                "username":"codeoffun",
                "wd":null
            }
        ]
    */

    // Get user Transactions (Returns the last 5 transactions) [array]
    ducoUser.getLastTransactions().then(data => {
        console.table(data);
    });
    /*
        [
            0: {
                amount: 300
                datetime: "15/01/2022 09:05:31"
                hash: "0887e68f1626631885a23d48c0647848a7cae260"
                id: 255280
                memo: "Gift"
                recipient: "Hugo"
                sender: "LDarki"
            }
        ]
    */

    // Get user Transactions [array]
    ducoUser.getTransactions(2).then(data => {
        console.table(data);
    });
    /*
        [
            0: {
                amount: 2
                datetime: "15/01/2022 08:46:09"
                hash: "af2dc746378dfc421ab55eade9b5f090c6676700"
                id: 255240
                memo: "0xEc06e9541b430B0C8CCC93BB61d49C854cA4045B"
                recipient: "bscDUCO"
                sender: "LDarki"
            },
            1: {
                amount: 300
                datetime: "15/01/2022 09:05:31"
                hash: "0887e68f1626631885a23d48c0647848a7cae260"
                id: 255280
                memo: "Gift"
                recipient: "Hugo"
                sender: "LDarki"
            }
        ]
    */
```

### Duco Watcher Class

This calls the getServerData function.

If the data changes, the callback function is called.

Example:
```js
    // On every change this calls the console.log() function
    new ducoWatcher().onChange((data) => {
        console.log(data);
    });
```