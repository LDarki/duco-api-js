class ducoWatcher
{
    constructor()
    {
        this.data = {};
        this.callback = () => {};
        this.ducoData = {}

        Object.defineProperty(this, 'ducoData', {
            get: function () { return this.data; },
            set: function (v) {
                this.data = v;
                this.callback(v);
            }
        });

        setInterval(() => {
            getServerData().then(data => { this.ducoData = data });
        }, 10000);
    }

    onChange(callback) {
        this.callback = callback;
    }
}
/*
    
This calls the getServerData function.
If the data changes, the callback function is called.

Example:

new ducoWatcher().onChange((data) => {
    console.log(data);
});

*/