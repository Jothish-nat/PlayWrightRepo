
function launchBrowser() {
    
    const browserName = "Chrome";

    if (browserName=="Chrome") {

      console.log("Supported browser"); 
        
    } else {
        
        console.log("Unsupported browser");
    }
}
launchBrowser();

function runTests() {

    var testtype = "regression";

    switch (testtype) {
        case "smoke":
            console.log("smoke");
            break;
        case "sanity":
            console.log("sanity");
            break;
        case "regression":
            console.log("regression");    
             break;
        default:
            console.log("smoke1");
            break;
    }
    
}
runTests();