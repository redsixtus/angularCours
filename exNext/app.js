let favoriteCityId='rome';
    console.log(favoriteCityId);

    favoriteCityId='paris';

    console.log(favoriteCityId);

    const citiesId=['paris','nyc','rome','rio-de-janeiro'];

    console.log(citiesId);

    const citiesI = ['paris','nyc','rome','rio-de-janeiro','tokyo'];
    console.log(citiesI);



    function getWeather(cityId){
        let city = cityId;
        let temperature = 20;
        return { city , temperature}
    }
    console.log(getWeather('paris'));

    const weather=getWeather(favoriteCityId);

    console.log(weather);


    const {city: city}=weather;
    const {temperature: temperature }=weather;
    console.log(city);
    console.log(temperature);

    const cont=[parisId,nycId,...otherCityId]=citiesId;
    console.log(parisId);
    console.log(nycId);
    console.log(cont.length);
   
    class Trip {
        constructor(id,name,imageUrl,price) {

            this._id = id;
            this._name = name;
            this._imageUrl = imageUrl;
            this._price = price;
        }
        toString() {
            return this._id + ' ' + this._name+ ' ' +this._imageUrl+ ' ' +this._price;}

        static defaultTrip(){
            return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg')
        }


        get id() {
            return this._id;
        }

        set id(value) {
            this._id = value;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get imageUrl() {
            return this._imageUrl;
        }

        set imageUrl(value) {
            this._imageUrl = value;
        }

        get price() {
            return this._price;
        }

        set price(value) {
            this._price = value;
        }

    }
    let parisTrip= new Trip('paris','Paris','img/paris.jpg',100);
        console.log(parisTrip.toString());
        console.log(parisTrip.name);
    let defaultTrip =  Trip.defaultTrip();
        console.log(defaultTrip);

    class FreeTrip extends Trip{

        constructor(id,name,imageUrl,price) {
            super(id,name ,imageUrl , 0);


        }
        toString() {
            return "Free" +" "+ super.toString();}

    }
    const freetrip = new FreeTrip("nantes","Nantes","img/nantes.jpg")
    console.log(freetrip.toString())

