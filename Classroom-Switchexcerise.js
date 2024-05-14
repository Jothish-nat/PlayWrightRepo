function testtype(){

    switch(test) {
    case "smoke":
    console.log("smoke");
    break;
    case "sanity":
    console.log("sanity"); 
    break;
    case "regression":
    console.log("regression")
    break;
    default:
    console.log("No test is defined")
    break;
    }
}  
   let test = "smoke";
   testtype();