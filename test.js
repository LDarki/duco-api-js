(async () => {

    console.log("Server Tests");

    /*let serverData = await getServerData();
    console.log(serverData); 

    let allDuco = await getAllDucoPrice();
    console.log(allDuco);  

    let ducoPrice = await getDucoPrice();
    console.log(ducoPrice);  

    let richestMiners = await getRichestMiners();
    console.table(richestMiners);  

    let KolkaData = await getKolkaData();
    console.log(KolkaData); 
    */
    console.log("User tests");

    let ducoUser = new DucoUser("LDarki");

    ducoUser.getData().then(data => {
        console.log(data);
    });

    ducoUser.getDucoAmount().then(data => {
        console.log(data);
    });

    ducoUser.isVerified().then(data => {
        console.log(data);
    });

    ducoUser.getMiners().then(data => {
        console.log(data);
    });

    ducoUser.getTransactions().then(data => {
        console.log(data);
    });
    
})();