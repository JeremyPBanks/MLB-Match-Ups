const file_sys = require('fs');
const probables = require('./mlb_data');
const main = async() => {
	try {	   
		    //Grabs today's date
		    const today = new Date();
		    const game_day = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

		    // Get pitchers
		    probables.mlbpitchers.getPitchers(game_day, (data) => {
		        console.log(JSON.stringify(data));
		    });
		} catch (err) {
		    console.error(`Error in main(): ${err}`);
		}

	};

main();
