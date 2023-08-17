
        var cars = [
            {
                brand: "bmw",
                model: "x5",
                year: "2018",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/3587101/2a00000186371facfbe93727d461bd1c4381/cattouchret"
            },
            {
                brand: "mers",
                model: "GLE",
                year: "2018",
                isAuction: false,
                imgUrl:"https://i.gaw.to/vehicles/photos/40/23/402337-2021-mercedes-benz-gle.jpg?1024x640"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            },
            {
                brand: "audi",
                model: "RS6",
                year: "2020",
                isAuction: true,
                imgUrl:"https://avatars.mds.yandex.net/get-verba/1535139/2a0000016e6f6e476eb24bffe8980ddc7534/cattouchret"
            }
        ]

        var app = document.getElementById("app");

        function render(){
            var carsHtml = "";

            for(var i=0; i<cars.length; i++){
                carsHtml+=`
                <div class="card" style="width: 18rem;">
                    <img src="${cars[i].imgUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-title">${cars[i].brand}</h3>
                        <h4 class="card-title">${cars[i].model}</h4>
                        <h5 class="card-title">${cars[i].year}</h5>

                        ${cars[i].isAuction ? `<h5 class='card-title'>isAuction</h5>`: ""}
                    </div>
                </div>
                `
            }


            app.innerHTML = carsHtml;
        }