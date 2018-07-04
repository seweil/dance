import React, { Component } from "react";
import ReactGA from 'react-ga';

class Nearby extends Component {
    render() {
        ReactGA.set({ "page": "nearby"});
        ReactGA.pageview("/Nearby");
        return (
            <div>
                <h2>Coffee</h2>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Monorail+Espresso/@47.6110624,-122.3376742,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab4ed47ba6f:0xfd9057df708636c1!8m2!3d47.6110588!4d-122.3354855">Monorail Espresso</a> (support a small business)</li>
                </ul>
                <h2>Grocery</h2>
                <ul>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Kress+IGA+Supermarket/@47.6108531,-122.334644,17.5z/data=!4m8!1m2!2m1!1sgrocery!3m4!1s0x0:0x75e296de08873831!8m2!3d47.6093959!4d-122.3378223">Kress IGA</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Clay's+Market/@47.6108531,-122.334644,17.5z/data=!3m1!5s0x54906ab507030629:0xff45dd04eb76efb0!4m8!1m2!2m1!1sgrocery!3m4!1s0x0:0xf11d07939d780e2!8m2!3d47.6119731!4d-122.3319248">Clay's Market</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/7-Eleven/@47.6113554,-122.3345299,18z/data=!4m8!1m2!2m1!1sconvenience+store!3m4!1s0x0:0xc6c40bfc645103e0!8m2!3d47.6104289!4d-122.3381821">7-11</a></li>
                </ul>
   <h2>Quick eats</h2>
                <ul>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Potbelly+Sandwich+Shop/@47.6106483,-122.3348493,17.75z/data=!4m8!1m2!2m1!1sfast+food+restaurants!3m4!1s0x0:0xfb0958f456d04cc7!8m2!3d47.6099289!4d-122.336677">Wild Rye Café (Lunch only)</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Specialty's+Cafe+%26+Bakery/@47.6106483,-122.3348493,17.75z/data=!4m8!1m2!2m1!1sfast+food+restaurants!3m4!1s0x0:0x29c6b81bd86b2a6a!8m2!3d47.6099578!4d-122.334664">Specialty's (Order online)</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Taco+Del+Mar/@47.6106483,-122.3348493,17.75z/data=!3m1!5s0x54906ab507030629:0xff45dd04eb76efb0!4m8!1m2!2m1!1sfast+food+restaurants!3m4!1s0x0:0xd4d51498dee5f4d0!8m2!3d47.6113959!4d-122.332295">Taco Del Mar</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Potbelly+Sandwich+Shop/@47.6106483,-122.3348493,17.75z/data=!4m8!1m2!2m1!1sfast+food+restaurants!3m4!1s0x0:0xfb0958f456d04cc7!8m2!3d47.6099289!4d-122.336677">Potbelly Sandwich shop</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Subway/@47.6106483,-122.3348493,17.75z/data=!3m1!5s0x54906ab507030629:0xff45dd04eb76efb0!4m8!1m2!2m1!1sfast+food+restaurants!3m4!1s0x0:0xd7427da6b82bb136!8m2!3d47.6111409!4d-122.3320549">Subway</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Jimmy+John's/@47.6106483,-122.3348493,17.75z/data=!4m8!1m2!2m1!1sfast+food+restaurants!3m4!1s0x0:0x5b95bcc84d67f31!8m2!3d47.6127868!4d-122.3361982">Jimmy John's (if you must)</a></li>
                    <li>Hours may be different on the 4th</li>
                </ul>
                <h2>Restaurants</h2>
                <ul>
                <li><a target="_blank"  rel="noopener noreferrer" href="http://www.pacificplaceseattle.com/dining/">In Pacific Place</a></li>
                <ul>
                    <li>Mexico Cantina Y Cocina  (recommended)</li>
                    <li>Thai Ginger</li>
                    <li>Gordon Biersch Brewery</li>
                    <li>Il Fornaio</li>
                    <li>Din Tai Fung</li>
                </ul>
                    <li><a target="_blank"  rel="noopener noreferrer" href="http://www.ethanstowellrestaurants.com">Cortina (Italian)</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://www.lolaseattle.com/">Lola (Greek)</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="https://palomino.com/menu.php?c=seattle">Palomino</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="http://wallawallafarms.com/">Walla Walla Farms</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="http://taphousegrill.com/">Tap House Grill</a></li>
                    <li><a target="_blank"  rel="noopener noreferrer" href="http://biscuitbitch.com/">Biscuit Bitch</a></li>
                </ul>

                <h2>Drugstores</h2>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Bartell+Drugs+Downtown/@47.610343,-122.3360499,17.25z/data=!4m8!1m2!2m1!1sdrug+store!3m4!1s0x0:0xfc8c956cd903a537!8m2!3d47.6126801!4d-122.3370834">Bartells</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Bartell+Drugs+3rd+and+Union/@47.610343,-122.3360499,17.25z/data=!4m8!1m2!2m1!1sdrug+store!3m4!1s0x0:0x2bdbd9129348d3f7!8m2!3d47.6091541!4d-122.3369439">Bartells</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Walgreens/@47.610343,-122.3360499,17.25z/data=!4m8!1m2!2m1!1sdrug+store!3m4!1s0x0:0xed0b099ab8b541ca!8m2!3d47.6097919!4d-122.3382863">Walgreens</a></li>
                </ul>
                <h2>Liquor</h2>
                <ul>
                    <li>Available at local drugstores and groceries</li>
                </ul>
                <h2>A little farther</h2>
                <li>Walk or <a target="_blank"  rel="noopener noreferrer" href="https://www.soundtransit.org/Schedules/Link-light-rail">LINK</a> to the Capitol Hill station. There is all kinds of food and nightlife on Broadway.</li>
                <li>There are many great restaurants in <a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Belltown,+Seattle,+WA/@47.6144342,-122.3526924,15z/data=!3m1!4b1!4m5!3m4!1s0x5490154c155fe945:0xf7b9bd6cb68b49dc!8m2!3d47.6147023!4d-122.3447964">Belltown</a></li>
                <li>Walk to <a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Pike+Place+Market,+Seattle,+WA/@47.6097236,-122.3443816,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab2c151d6cb:0x60441d5f633e9f1c!8m2!3d47.6101359!4d-122.3420567">Pike Place Market</a></li>
                <li>It's only 7 blocks  (but a lot of stairs) to the waterfront</li>
           
                <h2>Parking</h2>
                Parking is rough in Seattle
                    <ul>
                        <li><a target="_blank"  rel="noopener noreferrer" href="https://www.wscc.com/directions/garages">Washinton State Convention Center</a>,&nbsp; 
                        <a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/WSCC+Main+Garage/@47.6124014,-122.3336407,17z/data=!4m8!1m2!2m1!1sWSCC+parking!3m4!1s0x54906ab5a43400b3:0xdfdfe2b751e49aff!8m2!3d47.6116558!4d-122.3315194">7th and Pike</a>, $28/day</li>
                        <li><a target="_blank"  rel="noopener noreferrer" href="http://www.pacificplaceseattle.com/details/parking/">Pacific Place</a>,&nbsp;
                        <a target="_blank"  rel="noopener noreferrer" href="https://www.google.com/maps/place/Pacific+Place/@47.6128676,-122.3374946,17z/data=!3m1!4b1!4m5!3m4!1s0x54906ab4c5105105:0x583f2a509b32a2a1!8m2!3d47.612864!4d-122.3353059">600 Pine St.</a>, $28/day</li>
                        <li>The WAC garage ($35/day) is right across the street and open 24 hours (if you don't want valet parking)</li>
                    </ul>
            </div>
        );
    }
}
export default Nearby;
