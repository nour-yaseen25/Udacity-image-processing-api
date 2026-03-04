"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import readline module for getting input from console
// Find more here: https://nodejs.org/api/readline.html#readline_readline
const readline_1 = __importDefault(require("readline"));
// define question/output interface
const rl = readline_1.default.createInterface({
    // readable stream
    input: process.stdin,
    // writeable stream
    output: process.stdout
});
// Create questions for STDIN Input from console.
const menuQ = () => {
    return new Promise((resolve, reject) => {
        // (readable, writeable from readline interface)
        rl.question('Your choice: ', (answer) => {
            resolve(answer);
        });
    });
};
const milkQ = () => {
    return new Promise((resolve, reject) => {
        rl.question('How many cups of milk to add? ', (answer) => {
            resolve(answer);
        });
    });
};
const espressoQ = () => {
    return new Promise((resolve, reject) => {
        rl.question('How many shots of espresso to add? ', (answer) => {
            resolve(answer);
        });
    });
};
const peppermintQ = () => {
    return new Promise((resolve, reject) => {
        rl.question('How many shots of peppermint to add? ', (answer) => {
            resolve(answer);
        });
    });
};
// Create parent class Mocha
class Mocha {
    constructor() {
        this.milk = 1;
        this.shot = 1;
        this.chocolateType = 'dark';
    }
    // list the ingredients of the mocha
    prepare() {
        console.log('Your', this.chocolateType, ' Chocolate Mocha Ingredients:');
        console.log(this.chocolateType, ' chocolate');
        console.log('Cups of milk: ', this.milk);
        console.log('Cups of espresso: ', this.shot, '\n\n');
    }
}
// inherits from Mocha
class WhiteChocolateMocha extends Mocha {
    constructor() {
        super(...arguments);
        this.chocolateType = 'White';
    }
}
// inherits from Mocha
class DarkChocolateMocha extends Mocha {
    constructor() {
        super(...arguments);
        this.chocolateType = 'Dark';
    }
}
// inherits from Mocha
class PeppermintMocha extends Mocha {
    constructor() {
        // include super to pull in parent constructor
        super();
        this.peppermintSyrup = 1;
    }
    // Overrides Mocha prepare with additional statements
    prepare() {
        console.log('Your Peppermint Mocha Ingredients:');
        console.log('Dark chocolate');
        console.log('Cups of milk: ', this.milk);
        console.log('Cups of espresso: ', this.shot);
        console.log('Pumps of peppermint: ', this.peppermintSyrup, '\n\n');
    }
}
// display menu and return selected menu item
const showMenu = async () => {
    console.log('Select Mocha from menu: \n', '1: Create White Chocolate Mocha \n', '2: Create Dark Chocolate Mocha \n', '3: Create Peppermint Mocha\n', '0: Exit\n');
    const qMenu = await menuQ();
    return qMenu;
};
// User questions
const userOptions = async (mochaObject) => {
    const milkPicked = await milkQ();
    const milkChoice = parseInt(milkPicked);
    const espPicked = await espressoQ();
    const espChoice = parseInt(espPicked);
    // If peppermint mocha
    if (mochaObject instanceof PeppermintMocha) {
        const pepPicked = await peppermintQ();
        const pepChoice = parseInt(pepPicked);
        mochaObject.peppermintSyrup = pepChoice;
    }
    mochaObject.milk = milkChoice;
    mochaObject.shot = espChoice;
    mochaObject.prepare();
};
const main = () => {
    let menuChoice = 0;
    const buildMocha = async () => {
        do {
            const optionPicked = (await showMenu());
            menuChoice = parseInt(optionPicked);
            switch (menuChoice) {
                case 0: {
                    break;
                }
                case 1: {
                    const whiteMocha = new WhiteChocolateMocha();
                    await userOptions(whiteMocha);
                    break;
                }
                case 2: {
                    const darkMocha = new DarkChocolateMocha();
                    await userOptions(darkMocha);
                    break;
                }
                case 3: {
                    const peppermintMocha = new PeppermintMocha();
                    await userOptions(peppermintMocha);
                    break;
                }
                default: {
                    console.log('Option invalid, please choose from menu.');
                    break;
                }
            }
        } while (menuChoice != 0);
        // end readline process
        rl.close();
    };
    buildMocha();
};
main();
//# sourceMappingURL=main.js.map